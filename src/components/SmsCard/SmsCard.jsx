import styles from "./SmsCard.module.css";
import PropTypes from "prop-type";

export default function SmsCard({ city }) {
	return (
		<>
			<div id={styles.card}>
				<h1>{city}</h1>
                
				<form>
					<span id={styles.input_container}>
						<input type="text" id={styles.supervisor} />
						<label htmlFor={styles.supervisor}>KIEROWNIK</label>
					</span>

					<span id={styles.input_container}>
						<input type="number" id={styles.loyal} />
						<label htmlFor={styles.loyal}>LOYAL</label>
					</span>

					<span id={styles.input_container}>
						<input type="number" id={styles.six} />
						<label htmlFor={styles.six}>SIX</label>
					</span>

					{city === "BENIDORM" && (
						<span id={styles.input_container}>
							<input type="number" id={styles.caixa} />
							<label htmlFor={styles.caixa}>CAIXA</label>
						</span>
					)}

					<span id={styles.input_container}>
						<input type="number" id={styles.cards} />
						<label htmlFor={styles.cards}>KARTY</label>
					</span>
				</form>
			</div>
		</>
	);
}

SmsCard.propTypes = {
	city: PropTypes.toString,
};
