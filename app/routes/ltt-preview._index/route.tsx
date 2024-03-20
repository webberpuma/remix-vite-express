import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex flex-col gap-2">
      <Link to="/ltt-preview/card">Card</Link>
      <Link to="/ltt-preview/token-circle">Circle token</Link>
      <Link to="/ltt-preview/token-hexagon">Hexagon token</Link>
    </div>
  );
}
