import { ReactNode } from "react";

export default function Preview({
  selectPreviousItem,
  selectNextItem,
  cut,
  setCut,
  children,
}: {
  selectPreviousItem: () => void;
  selectNextItem: () => void;
  cut: boolean;
  setCut: (cut: boolean) => void;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center items-center min-w-[30rem] max-w-xl bg-slate-100 p-10 gap-5">
      <div className="flex justify-center items-center w-full text-xl">
        {cut ? "After component is cut" : "Before componet is cut"}
      </div>

      {children}

      <div className="flex justify-between items-center gap-5 w-full">
        <button onClick={() => selectPreviousItem()}>Previous</button>
        <button onClick={() => setCut(!cut)}>
          {cut
            ? "Click to see original image"
            : "Click to see print image after cut"}
        </button>
        <button onClick={() => selectNextItem()}>Next</button>
      </div>
    </div>
  );
}
