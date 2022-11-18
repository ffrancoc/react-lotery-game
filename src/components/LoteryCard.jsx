import "./LoteryCard.css";

function LoteryCard({ card, width }) {
  const styleName = (width) => {
    return width === "32px" ? "lotery-card-32" : "lotery-card-48";
  };

  return (
    <div className={card.selected ? styleName(width) : null}>
      <img src={card.img} alt="Picture" width={width} />
    </div>
  );
}

export default LoteryCard;
