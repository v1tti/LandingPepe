import {
  onePepeWideEventCharacter,
  onePepePortraitCharacterLeft,
  onePepePortraitCharacterMiddle,
  onePepePortraitCharacterRight,
} from "../../../assets/imgs/one-pepe-banner-imgs";
import {
  pepeKatsukiWideEventCharacter,
  pepeKatsukiPortraitCharacterLeft,
  pepeKatsukiPortraitCharacterMiddle,
  pepeKatsukiPortraitCharacterRight,
} from "../../../assets/imgs/pepe-katsuki-banner-imgs";
import { GachaBannerTemplate } from "./gachaBannerTemplate";

export function GachaBanner({ bannerToRender }) {
  const BANNERS = {
    onePepeBanner: renderOnePepeBanner(),
    pepeKatsukiBanner: renderPepeKatsukiBanner(),
  };

  return BANNERS[bannerToRender] || BANNERS["onePepeBanner"];
}
function renderOnePepeBanner() {
  return (
    <GachaBannerTemplate
      eventName={"One Pepe"}
      bannerToPull={"onePepeBanner"}
      wideEventCharacter={onePepeWideEventCharacter}
      portraitCharacterLeft={onePepePortraitCharacterLeft}
      portraitCharacterMiddle={onePepePortraitCharacterMiddle}
      portraitCharacterRight={onePepePortraitCharacterRight}
    ></GachaBannerTemplate>
  );
}

function renderPepeKatsukiBanner() {
  return (
    <GachaBannerTemplate
      eventName={"PepeKatsuki"}
      bannerToPull={"pepeKatsukiBanner"}
      wideEventCharacter={pepeKatsukiWideEventCharacter}
      portraitCharacterLeft={pepeKatsukiPortraitCharacterLeft}
      portraitCharacterMiddle={pepeKatsukiPortraitCharacterMiddle}
      portraitCharacterRight={pepeKatsukiPortraitCharacterRight}
    ></GachaBannerTemplate>
  );
}
