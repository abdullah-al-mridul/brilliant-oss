import { Store } from "@tanstack/store";
import { account, ID } from "@/lib/appwrite";
import { OAuthProvider, type Models } from "appwrite";

interface AuthState {
  user: Models.User<Models.Preferences> | null;
  status: "loading" | "authenticated" | "unauthenticated";
  error: string | null;
}

export const authStore = new Store<AuthState>({
  user: null,
  status: "loading",
  error: null,
});

export const setUser = (user: Models.User<Models.Preferences> | null) => {
  authStore.setState((state) => ({
    ...state,
    user,
    status: user ? "authenticated" : "unauthenticated",
  }));
};

export const setAuthLoading = (isLoading: boolean) => {
  authStore.setState((state) => ({
    ...state,
    status: isLoading
      ? "loading"
      : state.user
        ? "authenticated"
        : "unauthenticated",
  }));
};

export const setAuthError = (error: string | null) => {
  authStore.setState((state) => ({
    ...state,
    error,
  }));
};

export const checkSession = async () => {
  console.log("Auth: Checking session...");
  setAuthLoading(true);
  try {
    const user = await account.get();
    console.log("Auth: Session found:", user.email);
    setUser(user);
  } catch (err: any) {
    console.group("Auth: Session check failed");
    console.log("Message:", err.message);
    console.log("Code:", err.code);
    console.log("Type:", err.type);
    console.log("Full Error:", err);
    console.groupEnd();
    setUser(null);
  } finally {
    setAuthLoading(false);
  }
};

export const loginWithGoogle = async () => {
  setAuthError(null);
  try {
    await account.createOAuth2Session(
      OAuthProvider.Google,
      window.location.origin + "/home",
      window.location.origin + "/",
    );
  } catch (err: any) {
    setAuthError(err.message || "Failed to login with Google");
  }
};

export const loginWithEmail = async (email: string, pass: string) => {
  setAuthError(null);
  setAuthLoading(true);
  try {
    await account.createEmailPasswordSession(email, pass);
    const user = await account.get();
    setUser(user);
    return { success: true };
  } catch (err: any) {
    setAuthError(err.message || "Email login failed");
    return { success: false, error: err.message };
  } finally {
    setAuthLoading(false);
  }
};

export const signupWithEmail = async (
  email: string,
  pass: string,
  name: string,
) => {
  setAuthError(null);
  setAuthLoading(true);
  try {
    await account.create(ID.unique(), email, pass, name);
    await account.createEmailPasswordSession(email, pass);
    const user = await account.get();
    setUser(user);
    return { success: true };
  } catch (err: any) {
    setAuthError(err.message || "Signup failed");
    return { success: false, error: err.message };
  } finally {
    setAuthLoading(false);
  }
};

export const logout = async () => {
  setAuthError(null);
  try {
    await account.deleteSession("current");
    setUser(null);
  } catch (err: any) {
    setAuthError(err.message || "Logout failed");
  }
};
