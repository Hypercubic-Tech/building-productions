import Link from "next/link";

import styles from "../styles/main.module.css";

const Unauthorized = () => {
    //Unauthorized
    return (
        <div className={styles.not_found}>
            <h1>401 - Unauthorized</h1>
            <p>Sorry, you are not authorized to access this page.</p>
            <Link className={styles.button} href={'/'}>Go to main page</Link>
        </div>
    );
};

export default Unauthorized;