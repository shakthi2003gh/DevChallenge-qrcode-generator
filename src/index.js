import LandingSection from "./layouts/landingSection";
import BG from "./assets/bg-illustration.svg";
import "./styles/index.scss";

export function navigateToLanding() {
  document.body.innerHTML = "";
  document.body.append(...LandingSection);
}

document.body.style.backgroundImage = `url('${BG}')`;

navigateToLanding();
