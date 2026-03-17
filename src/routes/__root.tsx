import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { PreactQueryDevtools } from "@tanstack/preact-query-devtools";
import { Header } from "@/sections/Header";
import { FooterSection } from "@/sections/Footer";
import { AuthModal } from "@/ui/AuthModal";
import { DisclaimerModal } from "@/ui/DisclaimerModal";
import { useStore } from "@tanstack/preact-store";
import { uiStore, setAuthModalOpen } from "@/store/uiStore";
import { authStore } from "@/store/authStore";
import { useState, useEffect } from "preact/hooks";
import { client } from "@/lib/appwrite";
import { checkSession } from "@/store/authStore";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { isAuthModalOpen } = useStore(uiStore);
  const { status } = useStore(authStore);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const location = useLocation();
  const isAppPage = location.pathname === "/home";

  useEffect(() => {
    console.log("Root: Initializing Appwrite...");
    // Verify Appwrite connection
    client
      .ping()
      .then(() => console.log("Root: Appwrite Ping Success"))
      .catch((err) => console.error("Root: Appwrite Ping Failed", err));

    // Check for existing session
    console.log("Root: Checking session...");
    checkSession();

    // Check for disclaimer
    const hasSeenDisclaimer = localStorage.getItem("hasSeenDisclaimer");
    if (!hasSeenDisclaimer) {
      setIsDisclaimerOpen(true);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCloseDisclaimer = () => {
    localStorage.setItem("hasSeenDisclaimer", "true");
    setIsDisclaimerOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased relative">
      <Header
        isScrolled={isScrolled}
        onSignInClick={() => setAuthModalOpen(true)}
        isAuthenticated={status === "authenticated"}
      />
      <Outlet />
      {!isAppPage && <FooterSection />}

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={handleCloseDisclaimer}
      />

      <TanStackRouterDevtools />
      <PreactQueryDevtools />
    </div>
  );
}
