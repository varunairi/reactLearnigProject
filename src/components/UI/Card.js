import "./Card.css";

function Card(props) {
    const classN = "card " + props.className;
  //"children" means anything in opening and closing "Card" tag
  return <div className={classN}>{props.children}</div>;
}

export default Card;
