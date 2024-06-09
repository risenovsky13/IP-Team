import styles from "./HomePageContent.module.css";

export default function HomePageContent() {
    return (
        <>
            <div className={styles.header_container}>
                <h1 className={styles.header_h1}>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            </div>
            <div className={styles.smaller_text_wrapper}>
                <p className={styles.smaller_text}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae facere.
                </p>
            </div>
        </>
    );
}
