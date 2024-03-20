import Frame from "./Frame";
import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";
import { useState } from "react";

export default function Index() {
  const width = 820;
  const height = 1120;
  const [cut, setCut] = useState(true);
  const cards = [card1, card2, card3];
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const selectPreviousCard = () => {
    if (selectedCardIndex === 0) {
      setSelectedCardIndex(cards.length - 1);
      return;
    }
    setSelectedCardIndex(selectedCardIndex - 1);
  };

  const selectNextCard = () => {
    if (selectedCardIndex === cards.length - 1) {
      setSelectedCardIndex(0);
      return;
    }
    setSelectedCardIndex(selectedCardIndex + 1);
  };

  return (
    <div className="flex justify-center items-center bg-slate-200 h-dvh">
      <div className="flex flex-col justify-center items-center max-w-xl bg-slate-100 p-10 gap-10">
        <div className="relative">
          <img alt="" src={cards[selectedCardIndex]} />
          <div className="absolute top-0 left-0 w-full">
            <Frame width={width} height={height} cut={cut} />
          </div>
        </div>
        <div className="flex justify-between items-center gap-5 w-full">
          <button onClick={() => selectPreviousCard()}>Previous</button>
          <button onClick={() => setCut(!cut)}>
            {cut
              ? "Click to see original image"
              : "Click to see print image after cut"}
          </button>
          <button onClick={() => selectNextCard()}>Next</button>
        </div>
      </div>
    </div>
  );
}
