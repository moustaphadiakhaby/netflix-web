import { data } from "../App";
import Section from "./Section";

const Content = () => {
  return (
    <div className="content">
      {data.map((elem) => {
        return <Section category={elem.category} pictures={elem.images} />;
      })}
    </div>
  );
};

export default Content;
