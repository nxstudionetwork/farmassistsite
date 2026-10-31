import { createFileRoute, redirect } from "@tanstack/react-router";

// Preserve the published address while keeping Explore as the only content page.
export const Route = createFileRoute("/blog")({
  beforeLoad: () => {
    throw redirect({ to: "/explore", statusCode: 301 });
  },
});
