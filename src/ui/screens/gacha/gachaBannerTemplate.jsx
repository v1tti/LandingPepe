import { useState, useEffect } from "react";
import { BANNERS } from "../../../constants/banner-characters";
import { useGlobalUser } from "../../../context/use-gacha-records";
import { GachaRecords } from "./gachaRecords";
import "./gachaRecords.css";

function rarityBasedOnOdds(odds) {
  if (odds === 1) return "PepeLendaPlusPlus";
  else if (odds > 1 && odds < 11) return "PepeRaroPlusPlus";
  return "PepeRaro";
}

function formatDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero indexed
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function PullOnBanner({ bannerToPull, numberOfPulls, onComplete }) {
  const [records, setRecords] = useGlobalUser();
  const SELECTED_BANNER = BANNERS[bannerToPull];
  const pullsResult = [];

  useEffect(() => {
    for (let i = 0; i < numberOfPulls; i++) {
      const ODDS = Math.floor(Math.random() * 100);
      const rarity = rarityBasedOnOdds(ODDS);
      const pullTime = formatDateTime();

      const pullResult = SELECTED_BANNER.find((pepe) => pepe.rarity === rarity);
      if (pullResult) {
        pullsResult.push({
          ...pullResult,
          pullTime,
        });
      }
    }

    setRecords([...records, ...pullsResult]);
    onComplete();
  }, [numberOfPulls, SELECTED_BANNER, records, setRecords, onComplete]);

  return null;
}

export function GachaBannerTemplate({
  eventName,
  bannerToPull,
  portraitCharacterLeft,
  portraitCharacterMiddle,
  portraitCharacterRight,
  wideEventCharacter,
}) {
  const [isPulling, setIsPulling] = useState(false);
  const [records] = useGlobalUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pullCount, setPullCount] = useState(1);
  const GACHA_BUTTON_COLOR = "bg-lime-400";
  const EVENT_DESCRIPTION =
    "A cada 10 Pepe Tickets você desbloqueia um pepe de qualidade pelo menos Pepe Raro Plus";

  const handlePull = (count) => {
    setPullCount(count);
    setIsPulling(true);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div key={eventName} className="relative w-10/12 slide-down">
        <div className="absolute pt-1 w-4/12 h-3/4 top-1/4 bg-lime-100 rounded-tr-3xl">
          <div className="h-1/2">
            <h2 className="tag bg-lime-500 w-fit absolute pl-5 pr-1 rounded-tr-3xl rounded-br-3xl">
              Evento
            </h2>
            <h1 className="pl-1.5 pt-6 border-l-4 border-lime-600">
              {eventName}
            </h1>
            <h3 className="h-1/2 z-10 relative pl-1.5 overflow-y-scroll gacha-description-scroll">
              {EVENT_DESCRIPTION}
            </h3>
          </div>
          <div className="h-1/2 flex flex-row justify-around">
            <img
              className="w-3/12 pb-2 rounded-3xl"
              src={portraitCharacterLeft}
              alt="Character Left"
            />
            <img
              className="w-3/12 pb-2 rounded-3xl"
              src={portraitCharacterMiddle}
              alt="Character Middle"
            />
            <img
              className="w-3/12 pb-2 rounded-3xl"
              src={portraitCharacterRight}
              alt="Character Right"
            />
          </div>
        </div>
        <div className="gacha-wide-image-holder w-10/12">
          <img
            className="w-12/12 aspect-video max-h rounded-l-xl"
            src={wideEventCharacter}
            alt="Wide Event Character"
          />
        </div>
        <div className="w-10/12 flex flex-row absolute justify-between bottom-0">
          <div className="left-gacha-banner-button-position">
            <button
              onClick={() => {
                handleOpenModal();
              }}
              className={`${GACHA_BUTTON_COLOR} rounded-3xl px-2`}
            >
              Histórico
            </button>
          </div>
          <div className="right-gacha-banner-button-position">
            <button
              onClick={() => handlePull(1)}
              className={`${GACHA_BUTTON_COLOR} rounded-3xl px-2`}
            >
              Usar 1x
            </button>
            <button
              onClick={() => handlePull(10)}
              className={`${GACHA_BUTTON_COLOR} rounded-3xl px-2`}
            >
              Usar 10x
            </button>
          </div>
        </div>
      </div>
      {isPulling && (
        <PullOnBanner
          bannerToPull={bannerToPull}
          numberOfPulls={pullCount}
          onComplete={() => setIsPulling(false)}
        />
      )}
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40"></div>
          <div className="fixed z-50 flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-lime-200 w-10/12 max-h-[80vh]">
            <div className="bg-black grid w-full">
              <button
                className="text-white justify-self-end mr-2"
                onClick={handleCloseModal}
              >
                X
              </button>
            </div>
            <div className="flex-grow overflow-scroll no-scrollbar">
              <GachaRecords records={records} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
