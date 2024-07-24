import wideImage from "../../../assets/imgs/main-bg-wide.jpeg";
import "./mainDescription.css";
export function MainDescription() {
  return (
    <div className="blending-corners">
      <div className="main-description-holder">
        <img className="main-description-image" src={wideImage}></img>
      </div>
    </div>
  );
}
