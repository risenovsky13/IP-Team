import style from "./NavBar.module.css";

export default function NavBar() {
    return (
        <>
            <div className={style.navbar_container}>
                <span id={style.logo}><p>I-Piczki</p></span>
                <span className={style.links_container}>
                    <a href="#" className={style.links}>
                        Home
                    </a>

                    <a href="#" className={style.links}>
                        Features
                    </a>

                    <a href="#" className={style.links}>
                        Send SMS
                    </a>

                    <a href="#" className={style.links}>
                        Generate PDF
                    </a>

                    <a href="#" className={style.links}>
                        About
                    </a>
                </span>
                <button className={style.sign_in_button}>Sign Up</button>
            </div>


            
        </>
    );
}
