import styles from './styles.module.css'

function Profile() {

    return (
        <main className="main bg-dark">
            <div className={styles.header}>
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className={styles.editButton}>Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className={styles.account}>
                <div className={styles.accountContentWrapper}>
                    <h3 className={styles.accountTitle}>Argent Bank Checking (x8349)</h3>
                    <p className={styles.accountAmount}>$2,082.79</p>
                    <p className={styles.accountDescription}>Available Balance</p>
                </div>
                <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
                    <button className={styles.transactionButton}>View transactions</button>
                </div>
            </section>
            <section className={styles.account}>
                <div className={styles.accountContentWrapper}>
                    <h3 className={styles.accountTitle}>Argent Bank Savings (x6712)</h3>
                    <p className={styles.accountAmount}>$10,928.42</p>
                    <p className={styles.accountDescription}>Available Balance</p>
                </div>
                <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
                    <button className={styles.transactionButton}>View transactions</button>
                </div>
            </section>
            <section className={styles.account}>
                <div className={styles.accountContentWrapper}>
                    <h3 className={styles.accountTitle}>Argent Bank Credit Card (x8349)</h3>
                    <p className={styles.accountAmount}>$184.30</p>
                    <p className={styles.accountDescription}>Current Balance</p>
                </div>
                <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
                    <button className={styles.transactionButton}>View transactions</button>
                </div>
            </section>
        </main>
    )
}

export default Profile