import styles from "./SmsPage.module.css";
import SmsCard from "../components/SmsCard/SmsCard";

export default function SmsPage() {
    return (
        <>
            <div id={styles.card_container}>
                <SmsCard />
            </div>
        </>
    );
}
