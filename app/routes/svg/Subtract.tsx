export default function Index() {
  return (
    <div className="flex gap-1">
      <div className="bg-slate-200">
        <svg width="200" height="200">
          <defs>
            <mask id="hole">
              <rect width="100%" height="100%" fill="white" />
              <circle r="50" cx="100" cy="100" fill="black" />
            </mask>
          </defs>

          <circle
            id="donut"
            r="100"
            cx="100"
            cy="100"
            fill="red"
            mask="url(#hole)"
          />
        </svg>
      </div>

      <div className="bg-slate-200">
        <svg width="200" height="200">
          <defs>
            <mask id="frame">
              <rect width="100%" height="100%" fill="#333" />
              <rect x="20" y="20" width="160" height="160" fill="white" />
            </mask>
          </defs>

          <rect
            id="preview"
            x="0"
            y="0"
            width="200"
            height="200"
            fill="red"
            mask="url(#frame)"
          />
        </svg>
      </div>
    </div>
  );
}
