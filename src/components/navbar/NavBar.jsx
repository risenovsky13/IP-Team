import styles from "./NavBar.module.css";
import HomeIcon from "../../assets/HomeIcon.jsx";
import MenuIcon from "../../assets/MenuIcon.jsx";
import PdfIcon from "../../assets/PdfIcon.jsx";
import InfoIcon from "../../assets/InfoIcon.jsx";
import MessageIcon from "../../assets/MessageIcon.jsx";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <div id={styles.nav_container}>
                <main>
                    <nav>
                        <NavLink to="/">
                            <HomeIcon />
                        </NavLink>

                        <NavLink to="/sms">
                            <MessageIcon />
                        </NavLink>

                        <NavLink to="/pdf">
                            <PdfIcon />
                        </NavLink>

                        <NavLink to="/info">
                            <InfoIcon />
                        </NavLink>

                        <NavLink to="/menu">
                            <MenuIcon />
                        </NavLink>
                    </nav>
                </main>
            </div>
        </>
    );
}
