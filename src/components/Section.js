import Title from "./Title";
import Pictures from "./Pictures";

const Section = (props) => {
  return (
    <div className="container">
      <Title name={props.category} />
      <div className="scroller">
        {props.pictures.map((pic) => {
          return <Pictures link={pic} />;
        })}
      </div>
    </div>
  );
};

export default Section;
