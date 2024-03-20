import { roundedPolygonByCircumRadius } from "curved-polygon";

export default function Frame({
  width,
  height,
  cut,
}: {
  width: number;
  height: number;
  cut: boolean;
}) {
  const gap = 35;

  // const h = height - 2 * gap;
  // const a = (height - h/2 - gap * 2) / 2
  // const p1 = `${width / 2} ${gap}`
  // const p2 = `${width - gap } ${gap + a}`
  // const p3 = `${width - gap} ${height - gap - a}`
  // const p4 = `${width / 2} ${height - gap}`
  // const p5 = `${gap} ${height - gap - a}`
  // const p6 = `${gap} ${gap + a}`

  const circumRadius = (height - 2 * gap) / 2;

  const pathString = roundedPolygonByCircumRadius({
    circumRadius,
    sideCount: 6,
    borderRadius: 35,
    cx: width / 2,
    cy: height / 2,
    rotate: 90,
  });

  const fillOpacity = cut ? 1 : 0;

  return (
    <svg width="101%" viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <mask id="frame">
          <rect width="100%" height="100%" fill="white" />
          <path d={pathString.d} />
        </mask>
      </defs>

      <rect
        id="preview"
        x="0"
        y="0"
        width={width}
        height={height}
        className="fill-slate-100"
        fillOpacity={fillOpacity}
        mask="url(#frame)"
      />
    </svg>
  );
}
