import styles from "./SmsPage.module.css";
import SmsCard from "../components/SmsCard/SmsCard";

export default function SmsPage() {
	return (
		<>
			<div id={styles.card_container}>
				<SmsCard city={"BENIDORM"} />
				<SmsCard city={"GDAŃSK I"} />
				<SmsCard city={"GDAŃSK II"} />
				<SmsCard city={"KRAKÓW I"} />
				<SmsCard city={"KRAKÓW II"} />
				<SmsCard city={"KRAKÓW III"} />
				<SmsCard city={"ŁÓDŹ"} />
				<SmsCard city={"POZNAŃ"} />
				<SmsCard city={"SOPOT"} />
				<SmsCard city={"WARSZAWA I"} />
				<SmsCard city={"WARSZAWA II"} />
				<SmsCard city={"WROCŁAW"} />
			</div>
		</>
	);
}
