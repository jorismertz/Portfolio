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
      <div className="PortfolioItem">
        <img
          src={this.content.images[0]}
          alt={this.content.name}
          className="bgImg"
        />
        <h1>{this.content.name}</h1>
      </div>
    );
  }
}

const MyWork = () => {
  return (
    <div className="wrapper4">
      <div className="line line_narrow"></div>
      <div className="line line_narrow"></div>
      <h1 className="mywork">My work</h1>
      <div className="work_container">
        {portfolioContent.map((data, key) => (
          <PortfolioItem content={data} key={key} />
        ))}
      </div>
    </div>
  );
};

export default MyWork;
