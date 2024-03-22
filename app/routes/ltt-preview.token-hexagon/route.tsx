import Frame from "./Frame";
import token1 from "./token1.png";
import token2 from "./token2.png";
import token3 from "./token3.png";
import { useState } from "react";
import Preview from "../ltt-preview/Preview";

export default function Index() {
  const width = 328;
  const height = 363;
  const [cut, setCut] = useState(true);
  const tokens = [token1, token2, token3];
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(0);

  const selectPreviousToken = () => {
    if (selectedTokenIndex === 0) {
      setSelectedTokenIndex(tokens.length - 1);
      return;
    }
    setSelectedTokenIndex(selectedTokenIndex - 1);
  };

  const selectNextToken = () => {
    if (selectedTokenIndex === tokens.length - 1) {
      setSelectedTokenIndex(0);
      return;
    }
    setSelectedTokenIndex(selectedTokenIndex + 1);
  };

  return (
    <Preview
      selectNextItem={selectNextToken}
      selectPreviousItem={selectPreviousToken}
      setCut={setCut}
      cut={cut}
    >
      <div className="relative">
        <img alt="" src={tokens[selectedTokenIndex]} />
        <div className="absolute top-0 left-0 w-full">
          <Frame width={width} height={height} cut={cut} />
        </div>
      </div>
    </Preview>
  );
}
