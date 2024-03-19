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
  const innerWidth = width - gap * 2;
  const innerHeight = height - gap * 2;
  const fillOpacity = cut ? 1 : 0;

  return (
    <svg width="101%" viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <mask id="frame">
          <rect width="100%" height="100%" fill="white" />
          <rect
            x={gap}
            y={gap}
            width={innerWidth}
            height={innerHeight}
            rx="35"
            fill="black"
          />
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
