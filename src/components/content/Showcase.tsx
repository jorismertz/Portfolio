import { portfolioContent } from "./portfolioContent";
import { useEffect, useState } from "react";

interface Props {
  currentShowcase: number;
}

const Showcase = ({ currentShowcase }: Props) => {
  const [left, setLeft] = useState(portfolioContent.length - 1);
  const [right, setRight] = useState(1);
  const contentAmount = portfolioContent.length - 1;
  useEffect(() => {
    if (currentShowcase === 0) {
      setLeft(contentAmount);
      setRight(currentShowcase + 1);
    } else if (currentShowcase === contentAmount) {
      setRight(0);
      setLeft(contentAmount - 1);
    } else {
      setLeft(currentShowcase - 1);
      setRight(currentShowcase + 1);
    }
  }, [currentShowcase, contentAmount]);
  return (
    <section className="bottom-showcase">
      <div className="item">
        <img src={portfolioContent[left].images[0]} alt="" />
      </div>
      <div className="round-logo">
        <img src="./Logo.png" alt="" />
      </div>
      <div className="item">
        <img src={portfolioContent[right].images[0]} alt="" />
      </div>
    </section>
  );
};

export default Showcase;
