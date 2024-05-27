import styles from "./IconsStyle.module.css";

export default function MenuIcon() {
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
          strokeWidth="2"
          d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"
        />
      </svg>
    </>
  );
}
