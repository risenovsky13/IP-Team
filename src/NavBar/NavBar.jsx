import styles from "./NavBar.module.css";
import HomeIcon from "../assets/HomeIcon.jsx";
import MenuIcon from "../assets/MenuIcon.jsx";
import PdfIcon from "../assets/PdfIcon.jsx";
import InfoIcon from "../assets/InfoIcon.jsx";

export default function NavBar() {
  return (
    <>
      <div id={styles.nav_container}>
        <nav>
          <HomeIcon />
          <PdfIcon/>
          <InfoIcon/>
          <MenuIcon/>
        </nav>
      </div>
    </>
  );
}