import { Footer, Header } from "../../components";
import { GachaBanner } from "./gachaBanner";
import "./gacha.css";
import { useState } from "react";
import onePepeBannerButton from '../../../assets/imgs/one-pepe-banner-imgs/onepepe-banner-button.jpeg'
import pepeTsukiBannerButton from '../../../assets/imgs/pepe-katsuki-banner-imgs/pepekatsuki-banner-button.jpeg'
export function Gacha() {
  const [bannerToRender, setBannerToRender] = useState('onePepeBanner')

  return (
    <div className="h-dvh flex flex-col justify-between">
      <div className="h-4/6 relative flex flex-col justify-between ">
        <Header></Header>
        <div className="container flex flex-row gap-3 max-w-screen-xl ">
          <div className="flex flex-col w-2/12">
            <button className="pl-1 pt-2" type="button" onClick={()=>{setBannerToRender('onePepeBanner')}}><img src={onePepeBannerButton}></img></button>
            <button className="pl-1 pt-2" type="button" onClick={()=>{setBannerToRender('pepeKatsukiBanner')}}><img src={pepeTsukiBannerButton}></img></button>
          </div>
          <GachaBanner bannerToRender={bannerToRender}></GachaBanner>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
