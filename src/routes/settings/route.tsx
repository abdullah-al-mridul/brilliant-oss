import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { authStore } from "@/store/authStore";
import { useStore } from "@tanstack/preact-store";
import { useEffect, useState } from "preact/hooks";

export const Route = createFileRoute("/settings" as any)({
  beforeLoad: () => {
    const state = authStore.state;
    if (state.status === "unauthenticated") {
      throw redirect({ to: "/" });
    }
  },
  component: SettingsComponent,
});

function SettingsComponent() {
  const { status, user } = useStore(authStore);
  const navigate = useNavigate();

  // Split name for dummy purpose if available, else static
  const nameParts = user?.name
    ? user.name.split(" ")
    : ["Abdullah Al", "Mridul"];
  const firstName = nameParts[0] || "Abdullah Al";
  const lastName = nameParts.slice(1).join(" ") || "Mridul";

  const [fName, setFName] = useState(firstName);
  const [lName, setLName] = useState(lastName);

  useEffect(() => {
    if (status === "unauthenticated") {
      navigate({ to: "/" });
    }
  }, [status, navigate]);

  return (
    <div className="min-h-screen bg-white pt-16 flex flex-col">
      {/* Main Settings Form logic */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-6 py-12 pb-32">
        <h1 className="text-[22px] font-extrabold text-gray-900 tracking-tight mb-6">
          Personal info
        </h1>

        <div className="space-y-6">
          {/* First Name Input */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[14px] font-bold text-gray-900"
              htmlFor="firstName"
            >
              First name
            </label>
            <input
              id="firstName"
              type="text"
              value={fName}
              onInput={(e) => setFName(e.currentTarget.value)}
              className="w-full h-[46px] px-4 rounded-[10px] border border-gray-200 bg-white text-gray-900 text-[15px] font-medium outline-none transition-colors focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            />
          </div>

          {/* Last Name Input */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[14px] font-bold text-gray-900"
              htmlFor="lastName"
            >
              Last name
            </label>
            <input
              id="lastName"
              type="text"
              value={lName}
              onInput={(e) => setLName(e.currentTarget.value)}
              className="w-full h-[46px] px-4 rounded-[10px] border border-gray-200 bg-white text-gray-900 text-[15px] font-medium outline-none transition-colors focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            />
          </div>

          {/* Update Button */}
          <div className="pt-2">
            <button
              disabled
              className="px-8 py-3.5 rounded-full bg-gray-100 text-gray-400 font-bold text-[15px] tracking-wide cursor-not-allowed w-full md:w-auto hover:bg-gray-100 transition-colors"
            >
              Update personal info
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-200" />

        {/* Email Settings */}
        <h2 className="text-[22px] font-extrabold text-gray-900 tracking-tight mb-6">
          Email address
        </h2>

        <div className="flex flex-col gap-2">
          <div className="relative flex items-center">
            <input
              type="email"
              readOnly
              value={user?.email || "rim89987@gmail.com"}
              className="w-full h-[52px] pl-4 pr-40 rounded-[10px] border border-gray-200 bg-white text-gray-900 text-[15px] font-bold outline-none cursor-default"
            />
            {/* Badges Container */}
            <div className="absolute right-3 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#EcFCF3] text-[#1aa951] text-[10px] font-extrabold tracking-widest uppercase">
                Verified
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#EDEFFE] text-[#5665f8] text-[10px] font-extrabold tracking-widest uppercase">
                Primary
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
