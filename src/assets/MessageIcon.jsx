import styles from "./IconsStyle.module.css";

export default function MessageIcon() {
	return (
		<>
			<div id={styles.icon_holder}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="44"
					height="44"
					viewBox="0 0 24 24"
					fill="none"
					stroke="url(#grad1)"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className={styles.icon}
				>
					<defs>
						<linearGradient id="grad1" x2="100%" y2="100%">
							<stop offset="0%" style={{ stopColor: "#0390fc" }} />
							<stop offset="90%" style={{ stopColor: "#ba03fc" }} />
						</linearGradient>
					</defs>

					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M11 3h10v8h-3l-4 2v-2h-3z" />
					<path d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2" />
					<path d="M10 18v.01" />
				</svg>
			</div>
		</>
	);
}
