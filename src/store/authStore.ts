import { Store } from "@tanstack/store";
import { account } from "@/lib/appwrite";
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
    status: isLoading ? "loading" : state.user ? "authenticated" : "unauthenticated",
  }));
};

export const setAuthError = (error: string | null) => {
  authStore.setState((state) => ({
    ...state,
    error,
  }));
};

export const checkSession = async () => {
  setAuthLoading(true);
  try {
    const user = await account.get();
    setUser(user);
  } catch (err: any) {
    setUser(null);
  } finally {
    setAuthLoading(false);
  }
};

export const loginWithGoogle = async () => {
  try {
    await account.createOAuth2Session(
      OAuthProvider.Google,
      window.location.origin + "/home",
      window.location.origin + "/"
    );
  } catch (err: any) {
    setAuthError(err.message || "Failed to login with Google");
  }
};

export const logout = async () => {
  try {
    await account.deleteSession("current");
    setUser(null);
  } catch (err: any) {
    setAuthError(err.message || "Failed to logout");
  }
};
