import { Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex justify-center items-center bg-slate-200 h-dvh">
      <Outlet />
    </div>
  );
}
