export default function Toobar({
  selectPreviousItem,
  selectNextItem,
  cut,
  setCut,
}: {
  selectPreviousItem: () => void;
  selectNextItem: () => void;
  cut: boolean;
  setCut: (cut: boolean) => void;
}) {
  return (
    <div className="flex justify-between items-center gap-5 w-full">
      <button onClick={() => selectPreviousItem()}>Previous</button>
      <button onClick={() => setCut(!cut)}>
        {cut
          ? "Click to see original image"
          : "Click to see print image after cut"}
      </button>
      <button onClick={() => selectNextItem()}>Next</button>
    </div>
  );
}
