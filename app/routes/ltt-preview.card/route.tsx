import Frame from "./Frame";
import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";
import { useState } from "react";
import Toolbar from "../ltt-preview/Toolbar";

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
    <>
      <div className="relative">
        <img alt="" src={cards[selectedCardIndex]} />
        <div className="absolute top-0 left-0 w-full">
          <Frame width={width} height={height} cut={cut} />
        </div>
      </div>
      <Toolbar
        selectNextItem={selectNextCard}
        selectPreviousItem={selectPreviousCard}
        setCut={setCut}
        cut={cut}
      />
    </>
  );
}
