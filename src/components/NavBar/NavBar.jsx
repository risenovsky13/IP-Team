import style from "./NavBar.module.css";

export default function NavBar() {
    return (
        <>
            <div className={style.navbar_container}>
                <span id={style.logo}>
                    <p id={style.logo_text}>I-Piczki</p>
                </span>
                <span className={style.links_container}>
                    <a href="#" className={style.links} id={style.home_link}>
                        Home
                    </a>

                    <a href="#" className={style.links} id={style.home_features}>
                        Features
                    </a>

                    <a href="#" className={style.links} id={style.home_sms}>
                        Send SMS
                    </a>

                    <a href="#" className={style.links} id={style.home_pdf}>
                        Generate PDF
                    </a>

                    <a href="#" className={style.links} id={style.home_about}>
                        About
                    </a>
                </span>
                <button className={style.sign_in_btn}>Sign Up</button>
            </div>
        </>
    );
}
