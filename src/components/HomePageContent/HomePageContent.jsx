import styles from "./HomePageContent.module.css";
import CoreFeatures from "../CoreFeatures/CoreFeatures";

export default function HomePageContent() {
    return (
        <>
            <section>
                <div className={styles.header_wrapper}>
                    <h1 className={styles.header_h1}>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                </div>
                <div className={styles.smaller_text_wrapper}>
                    <p className={styles.smaller_text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae facere.</p>
                </div>

                <div className={styles.get_started_btn_container}>
                    <button className={styles.get_started_btn}>Get Started</button>
                </div>
            </section>

            <section>
                <h2 className={styles.core_features_header}>Core Features</h2>
                <div className={styles.core_features_wrapper}>
                    <CoreFeatures />
                    <CoreFeatures />
                    <CoreFeatures />
                </div>
            </section>
        </>
    );
}
