import styles from "./IconsStyle.module.css";

export default function PdfIcon() {
  return (
    <>
      <svg
        class={styles.icon}
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
          d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"
        />
      </svg>
    </>
  );
}
