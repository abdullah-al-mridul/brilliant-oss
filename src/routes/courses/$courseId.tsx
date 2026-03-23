import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/courses/$courseId" as any)({
  component: () => <Outlet />,
});
