import styles from "./IconsStyle.module.css";

export default function HomeIcon() {
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
            <stop offset="0%"  style={{stopColor: "#0390fc"}}/>
            <stop offset="90%"  style={{stopColor: "#ba03fc"}}/>
          </linearGradient>
        </defs>
        
        <path
          stroke="url(#grad1)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
        />
      </svg>
    </>
  );
}
