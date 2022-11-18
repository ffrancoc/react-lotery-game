import { useEffect } from "react";
import { useContext } from "react";
import { Navigate } from "react-router";
import { LoteryContext } from "../provider/LoteryProvider";
import "./GameScreen.css";
import Carta1 from "../assets/cards/carta1.png";
import Carta2 from "../assets/cards/carta2.png";
import Carta3 from "../assets/cards/carta3.png";
import Carta4 from "../assets/cards/carta4.png";
import Carta5 from "../assets/cards/carta5.png";
import Carta6 from "../assets/cards/carta6.png";
import Carta7 from "../assets/cards/carta7.png";
import Carta8 from "../assets/cards/carta8.png";
import Carta9 from "../assets/cards/carta9.png";
import Carta10 from "../assets/cards/carta10.png";
import Carta11 from "../assets/cards/carta11.png";
import Carta12 from "../assets/cards/carta12.png";
import Carta13 from "../assets/cards/carta13.png";
import Carta14 from "../assets/cards/carta14.png";
import Carta15 from "../assets/cards/carta15.png";
import Carta16 from "../assets/cards/carta16.png";
import Carta17 from "../assets/cards/carta17.png";
import Carta18 from "../assets/cards/carta18.png";
import Carta19 from "../assets/cards/carta19.png";
import Carta20 from "../assets/cards/carta20.png";
import Carta21 from "../assets/cards/carta21.png";
import Carta22 from "../assets/cards/carta22.png";
import Carta23 from "../assets/cards/carta23.png";
import Carta24 from "../assets/cards/carta24.png";
import Carta25 from "../assets/cards/carta25.png";
import Carta26 from "../assets/cards/carta26.png";
import Carta27 from "../assets/cards/carta27.png";
import Carta28 from "../assets/cards/carta28.png";
import Carta29 from "../assets/cards/carta29.png";
import Carta30 from "../assets/cards/carta30.png";
import Carta31 from "../assets/cards/carta31.png";
import Carta32 from "../assets/cards/carta32.png";
import Carta33 from "../assets/cards/carta33.png";
import Carta34 from "../assets/cards/carta34.png";
import Carta35 from "../assets/cards/carta35.png";
import Carta36 from "../assets/cards/carta36.png";
import Carta37 from "../assets/cards/carta37.png";
import Carta38 from "../assets/cards/carta38.png";
import Carta39 from "../assets/cards/carta39.png";
import Carta40 from "../assets/cards/carta40.png";
import Carta41 from "../assets/cards/carta41.png";
import Carta42 from "../assets/cards/carta42.png";
import Carta43 from "../assets/cards/carta43.png";
import Carta44 from "../assets/cards/carta44.png";
import Carta45 from "../assets/cards/carta45.png";
import Carta46 from "../assets/cards/carta46.png";
import Carta47 from "../assets/cards/carta47.png";
import Carta48 from "../assets/cards/carta48.png";
import Carta49 from "../assets/cards/carta49.png";
import Carta50 from "../assets/cards/carta50.png";
import Carta51 from "../assets/cards/carta51.png";
import Carta52 from "../assets/cards/carta52.png";
import Carta53 from "../assets/cards/carta53.png";
import Carta54 from "../assets/cards/carta54.png";
import LoteryCard from "./LoteryCard";
import { useState } from "react";
import CartonPlayer from "./CartonPlayer";

function GameScreen() {
  const {
    gameScreen,
    playerA,
    playerB,
    loteryCards,
    setLoteryCards,
    unselectedCards,
    setUnselectedCards,
  } = useContext(LoteryContext);

  const [availableCards, setAvailableCards] = useState(54);
  const [countCards, setCountCards] = useState("Cartas restantes 54/54");
  const [isWinner, setIsWinner] = useState(false);

  if (gameScreen !== 2) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    setLoteryCards([
      { id: 1, img: Carta1, selected: false },
      { id: 2, img: Carta2, selected: false },
      { id: 3, img: Carta3, selected: false },
      { id: 4, img: Carta4, selected: false },
      { id: 5, img: Carta5, selected: false },
      { id: 6, img: Carta6, selected: false },
      { id: 7, img: Carta7, selected: false },
      { id: 8, img: Carta8, selected: false },
      { id: 9, img: Carta9, selected: false },
      { id: 10, img: Carta10, selected: false },
      { id: 11, img: Carta11, selected: false },
      { id: 12, img: Carta12, selected: false },
      { id: 13, img: Carta13, selected: false },
      { id: 14, img: Carta14, selected: false },
      { id: 15, img: Carta15, selected: false },
      { id: 16, img: Carta16, selected: false },
      { id: 17, img: Carta17, selected: false },
      { id: 18, img: Carta18, selected: false },
      { id: 19, img: Carta19, selected: false },
      { id: 20, img: Carta20, selected: false },
      { id: 21, img: Carta21, selected: false },
      { id: 22, img: Carta22, selected: false },
      { id: 23, img: Carta23, selected: false },
      { id: 24, img: Carta24, selected: false },
      { id: 25, img: Carta25, selected: false },
      { id: 26, img: Carta26, selected: false },
      { id: 27, img: Carta27, selected: false },
      { id: 28, img: Carta28, selected: false },
      { id: 29, img: Carta29, selected: false },
      { id: 30, img: Carta30, selected: false },
      { id: 31, img: Carta31, selected: false },
      { id: 32, img: Carta32, selected: false },
      { id: 33, img: Carta33, selected: false },
      { id: 34, img: Carta34, selected: false },
      { id: 35, img: Carta35, selected: false },
      { id: 36, img: Carta36, selected: false },
      { id: 37, img: Carta37, selected: false },
      { id: 38, img: Carta38, selected: false },
      { id: 39, img: Carta39, selected: false },
      { id: 40, img: Carta40, selected: false },
      { id: 41, img: Carta41, selected: false },
      { id: 42, img: Carta42, selected: false },
      { id: 43, img: Carta43, selected: false },
      { id: 44, img: Carta44, selected: false },
      { id: 45, img: Carta45, selected: false },
      { id: 46, img: Carta46, selected: false },
      { id: 47, img: Carta47, selected: false },
      { id: 48, img: Carta48, selected: false },
      { id: 49, img: Carta49, selected: false },
      { id: 50, img: Carta50, selected: false },
      { id: 51, img: Carta51, selected: false },
      { id: 52, img: Carta52, selected: false },
      { id: 53, img: Carta53, selected: false },
      { id: 54, img: Carta54, selected: false },
    ]);

    setUnselectedCards([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
    ]);
  }, []);

  const onGetCard = () => {
    const size = unselectedCards.length;
    if (size >= 1 && size <= 54) {
      const randomCardIndex =
        unselectedCards[Math.floor(Math.random() * unselectedCards.length)];
      setUnselectedCards(unselectedCards.filter((v) => v !== randomCardIndex));

      loteryCards.map((c) => {
        if (randomCardIndex === c.id) {
          c.selected = true;

          // Buscar en player A
          playerA.carton[0].cards.map((id) => {
            if (id === c.id) {
              playerA.carton[0].count = playerA.carton[0].count - 1;
              if (playerA.carton[0].count === 0) {
                setIsWinner(true);
              }
            }
          });

          // Buscar en player A
          playerB.carton[0].cards.map((id) => {
            if (id === c.id) {
              playerB.carton[0].count = playerB.carton[0].count - 1;
              if (playerB.carton[0].count === 0) {
                setIsWinner(true);
              }
            }
          });
        }
      });
      setCountCards(`Cartas restantes ${size - 1}/54`);
      setAvailableCards(size - 1);
    }
  };

  return (
    <div className="game-screen">
      <div className="container">
        <div className="right-view">
          <CartonPlayer player={playerA} />
        </div>
        <div className="center-view">
          <div className="game-controls">
            <button onClick={onGetCard} disabled={isWinner}>
              Cantar Carta
            </button>
            <h3>{countCards}</h3>
          </div>
          <div className="lotery-cards">
            {loteryCards.map((c, i) => (
              <LoteryCard key={i} card={c} width="32px" />
            ))}
          </div>
        </div>
        <div className="left-view">
          <CartonPlayer player={playerB} />
        </div>
      </div>
    </div>
  );
}

export default GameScreen;

// {/* <div className="lotery-player">
//           <h2>Player B &#8317;{playerA.name}&#8318;</h2>
//           <CartonPlayer player={playerA} />
//         </div> */}
//         <div className="center-view">
//           <div className="game-screen-controls">
//             <button
//               onClick={onGetCard}
//               disabled={availableCards > 0 ? false : true}
//             >
//               Sacar Carta
//             </button>
//             <h1>{countCards}</h1>
//           </div>
//           <div className="lotery-cards">
//             {loteryCards.map((c, i) => (
//               <LoteryCard key={i} card={c} width="32px" />
//             ))}
//           </div>
//         </div>
//         {/* <div className="lotery-player">
//           <h2>Player B &#8317;{playerB.name}&#8318;</h2>
//           <hr />
//         </div> */}
//       </div>
