import styles from './styles.module.css'
import iconChat from '../../assets/images/icon-chat.png'
import iconMoney from '../../assets/images/icon-money.png'
import iconSecurity from '../../assets/images/icon-security.png'

function Home() {
    return (
        <main>
            <div className={styles.hero}>
                <section className={styles.heroContent}>
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className={styles.subtitle}>No fees.</p>
                    <p className={styles.subtitle}>No minimum deposit.</p>
                    <p className={styles.subtitle}>High interest rates.</p>
                    <p className={styles.text}>
                        Open a savings account with Argent Bank today!
                    </p>
                </section>
            </div>
            <section className={styles.features}>
                <h2 className="sr-only">Features</h2>
                <div className={styles.featureItem}>
                    <img
                        src={iconChat}
                        alt="Chat Icon"
                        className={styles.featureIcon}
                    />
                    <h3 className={styles.featureItemTitle}>
                        You are our #1 priority
                    </h3>
                    <p>
                        Need to talk to a representative? You can get in touch
                        through our 24/7 chat or through a phone call in less
                        than 5 minutes.
                    </p>
                </div>
                <div className={styles.featureItem}>
                    <img
                        src={iconMoney}
                        alt="Money Icon"
                        className={styles.featureIcon}
                    />
                    <h3 className={styles.featureItemTitle}>
                        More savings means higher rates
                    </h3>
                    <p>
                        The more you save with us, the higher your interest rate
                        will be!
                    </p>
                </div>
                <div className={styles.featureItem}>
                    <img
                        src={iconSecurity}
                        alt="Security Icon"
                        className={styles.featureIcon}
                    />
                    <h3 className={styles.featureItemTitle}>
                        Security you can trust
                    </h3>
                    <p>
                        We use top of the line encryption to make sure your data
                        and money is always safe.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Home
