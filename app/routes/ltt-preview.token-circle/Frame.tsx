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
  const cx = width / 2;
  const cy = height / 2;
  const r = width / 2 - gap;
  const fillOpacity = cut ? 1 : 0;

  return (
    <svg width="101%" viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <mask id="frame">
          <rect width="100%" height="100%" fill="white" />
          <circle r={r} cx={cx} cy={cy} fill="black" />
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
