import styles from "./CoreFeatures.module.css";

export default function CoreFeatures() {
    return (
        <>
            <div className={styles.core_features_container}>
                <div className={styles.core_feature_logo}></div>
                <div className={styles.description_wrapper}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat illum hic ex quisquam dignissimos eos animi iure voluptatem culpa atque.</p>
                </div>
            </div>
        </>
    );
}
