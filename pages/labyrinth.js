import  styles  from "../styles/labyrinth.module.scss"
import  Head from 'next/head'

function Labyrinth() {
    return <div className={styles.wrapper}>
        <Head>
            <title>Labyrinth</title>
        </Head>
        <div className={styles.intro}>
        <h2>Labyrinth by artsykiky</h2>
        <p>Reach the end from the beginning.</p>
        <p>Click on the numbers as you pass them.</p>
    </div>

        <ul className={styles.area}>
            <li className={styles.first}></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <input id="second" type="checkbox" />
            <li className={styles.level2}></li>
            <li className={styles.level2}></li>
            <li className={styles.level2}></li>
            <li className={styles.level2}></li>
            <li className={styles.level2}></li>
            <input id="third" type="checkbox" />
            <li className={styles.level3}></li>
            <li className={styles.level3}></li>
            <li className={styles.level3}></li>
            <li className={styles.level3}></li>
            <li className={styles.level3}></li>
            <input id="fourth" type="checkbox" />
            <li className={styles.level4}></li>
            <li className={styles.level4}></li>
            <li className={styles.level4}></li>
            <li className={styles.level4}></li>
            <li className={styles.level4}></li>
            <li className={styles.level4}></li>

            <li className={styles.empty}></li>
            <li className={styles.error}>
                <h1>The greatest failure in life is to stop trying.</h1>
            </li>
            <li className={styles.exit}>
                <h1>Winning doesn´t always mean being first. Winning means you´re doing better than you´ve ever done before.</h1>
            </li>
        </ul>
        <p>Winners:</p></div>
}

export default Labyrinth