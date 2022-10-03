import { portfolioContent } from "./portfolioContent";
import { useEffect, useState, useLayoutEffect } from "react";
import { useInView } from "react-intersection-observer";

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
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const [show, doShow] = useState<boolean>(false);
  useLayoutEffect(() => {
    if (show) return;
    if (inView) doShow(true);
  }, [inView, show]);
  return (
    <section
      ref={ref}
      className="bottom-showcase"
      style={{
        opacity: show ? "1" : "0",
        transform: show ? "translateY(0)" : "translateY(100px)",
        transition: "all 2s cubic-bezier(0.17,0.84,0.44,1)",
      }}
    >
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
