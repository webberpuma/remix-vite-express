import { roundedPolygonByCircumRadius } from "curved-polygon";

export default function Index() {
  const path = "m216.1042,78.4l0,49.49112l49.21308,0l0,-49.49112l-49.21308,0z";

  const pathStringC = roundedPolygonByCircumRadius({
    circumRadius: 200,
    sideCount: 6,
    borderRadius: 35,
    cx: 250,
    cy: 250,
    rotate: 90,
  });

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1">
        <div className="bg-slate-200">
          <svg width="300" height="300">
            <path d={path} />
          </svg>
        </div>
      </div>
      <div>
        <div className="bg-slate-400">
          <svg width="800" height="800">
            <path d={pathStringC.d} />
          </svg>
        </div>
      </div>
    </div>
  );
}
