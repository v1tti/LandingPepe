import splashArt from "../../../assets/imgs/zoro-pepe.jpeg";
import "./newCharacter.css";

export function NewCharacter() {
  return (
    <>
      <h2 className="pl-3">NOVO PERSONAGEM</h2>
      <div className="pb-5 flex w-11/12 flex-row gap-1 justify-self-center self-center rounded-xl md:w-4/5">
        <div className="w-1/2 pr-4 ">
          <h3>Roronoa Pepe</h3>
          <h4>Pepe Lenda ++</h4>
          <p className="text-justify">
            Desbloqueie agora o pepe caçador de piratas e navegue com ele em
            busca do tesouro mais procurado do mundo.
          </p>
        </div>
        <div className="floating-container">
          <img className="floating-image rounded-xl " src={splashArt}></img>
          <div className="shadow"></div>
        </div>
      </div>
    </>
  );
}
