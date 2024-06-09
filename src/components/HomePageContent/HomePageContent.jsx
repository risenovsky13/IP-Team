import styles from "./HomePageContent.module.css";

export default function HomePageContent() {
    return (
        <>
            <div className={styles.header_wrapper}>
                <h1 className={styles.header_h1}>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            </div>
            <div className={styles.smaller_text_wrapper}>
                <p className={styles.smaller_text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae facere.</p>
            </div>

            <div className={styles.get_started_btn_container}>
                <button className={styles.get_started_btn}>Get Started</button>
            </div>
        </>
    );
}
