import styles from "./IconsStyle.module.css";

export default function InfoIcon() {
  return (
    <>
      <svg
        className={styles.icon}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        fill="none"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id="grad1" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#0390fc" }} />
            <stop offset="90%" style={{ stopColor: "#ba03fc" }} />
          </linearGradient>
        </defs>

        <path
          stroke="url(#grad1)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </>
  );
}
