import { Component } from "react";
import { portfolioContent, portfolioItem } from "./portfolioContent";

interface Props {
  content: portfolioItem;
  key: number;
}
interface State {}

class PortfolioItem extends Component<Props, State> {
  state: State = {};
  content = this.props.content;
  render() {
    return (
      <div className="item">
        <img
          src={this.content.images[0]}
          alt={this.content.name}
          className="bgImg"
        />
        <section className="hover flex-center">
          <h2 className="white sora">{this.content.name}</h2>
        </section>
      </div>
    );
  }
}

const MyWork = () => {
  return (
    <section>
      <div className="line line_narrow"></div>
      <div className="line line_narrow"></div>
      <h1 className="text-center">My work</h1>
      <div className="flex-center-x">
        <div className="portfolio">
          {portfolioContent.map((data, key) => (
            <PortfolioItem content={data} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
