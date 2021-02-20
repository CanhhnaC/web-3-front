import Link from "next/link";
import styles from "src/styles/404.module.css";

export default function Page404() {
  return (
    <div>
      <div className="container mx-auto z-10" style={{ width: "304px" }}>
        <div className={styles.content}>
          <h1>404</h1>
          <span>
            Whoops!
            <br />
            We couldn't find that page.
          </span>
          <Link href="/">
            <button className="bg-white border text-black border-gray-500">
              Home Page
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.page__art}>
        <div className={styles.art}></div>
      </div>
    </div>
  );
}
