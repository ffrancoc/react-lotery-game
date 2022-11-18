import { useContext } from "react";
import { LoteryContext } from "../provider/LoteryProvider";
import "./CartonPlayer.css";
import LoteryCard from "./LoteryCard";

function CartonPlayer({ player }) {
  const { loteryCards } = useContext(LoteryContext);

  const init = () => {
    const images = [];
    player.carton[0].cards.map((id, i) => {
      loteryCards.map((c) => {
        if (c.id === id) {
          images.push(<LoteryCard key={i} card={c} width="48px" />);
        }
      });
    });
    return images;
  };

  const winnerPill = <h1 className="winner-pill">Ganador</h1>;

  return (
    <div className="carton-player">
      <h2>&#8317; {player.name} &#8318;</h2>
      <div className="cards">{init().map((ci) => ci)}</div>
      <h2>Cartas restantes {player.carton[0].count}</h2>
      {player.carton[0].count === 0 ? winnerPill : null}
    </div>
  );
}

export default CartonPlayer;
