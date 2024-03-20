import { Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex justify-center items-center bg-slate-200 h-dvh">
      <div className="flex flex-col justify-center items-center min-w-[30rem] max-w-xl bg-slate-100 p-10 gap-10">
        <Outlet />
      </div>
    </div>
  );
}
