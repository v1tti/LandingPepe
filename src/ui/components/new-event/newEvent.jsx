import eventCover from "../../../assets/imgs/onepepe-event.jpeg";

export function NewEvent() {
  return (
    <>
      <h2 className="pl-3">NOVO EVENTO</h2>
      <div className="w-11/12 flex flex-row justify-self-center self-center rounded-xl md:w-4/5">
        <img className="w-1/2 rounded-xl" src={eventCover}></img>
        <div className="flex flex-col w-1/2 pl-4 ">
          <h3>One Pepe</h3>
          <p className="text-justify">
            Embarque na jornada de Pepe D. Luffy e a tripulação dos Pepes de
            palha em busca do tesouro One Pepe!
          </p>
        </div>
      </div>
    </>
  );
}
