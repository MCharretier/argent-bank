import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userProfile } from '../../redux/features/auth/auth.actions'
import styles from './styles.module.css'

function Profile() {
    const { userToken, userInfo } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (userToken) {
            dispatch(userProfile())
        } else {
            navigate('/login')
        }
    }, [userToken, dispatch, navigate])

    return (
        <main className="main bg-dark">
            {userInfo ? (
                <div>
                    <div className={styles.header}>
                        <h1>
                            Welcome back
                            <br />
                            {userInfo.firstName} {userInfo.lastName}!
                        </h1>
                        <button className={styles.editButton}>Edit Name</button>
                    </div>
                    <h2 className="sr-only">Accounts</h2>
                    <section className={styles.account}>
                        <div className={styles.accountContentWrapper}>
                            <h3 className={styles.accountTitle}>
                                Argent Bank Checking (x8349)
                            </h3>
                            <p className={styles.accountAmount}>$2,082.79</p>
                            <p className={styles.accountDescription}>
                                Available Balance
                            </p>
                        </div>
                        <div
                            className={`${styles.accountContentWrapper} ${styles.cta}`}
                        >
                            <button className={styles.transactionButton}>
                                View transactions
                            </button>
                        </div>
                    </section>
                    <section className={styles.account}>
                        <div className={styles.accountContentWrapper}>
                            <h3 className={styles.accountTitle}>
                                Argent Bank Savings (x6712)
                            </h3>
                            <p className={styles.accountAmount}>$10,928.42</p>
                            <p className={styles.accountDescription}>
                                Available Balance
                            </p>
                        </div>
                        <div
                            className={`${styles.accountContentWrapper} ${styles.cta}`}
                        >
                            <button className={styles.transactionButton}>
                                View transactions
                            </button>
                        </div>
                    </section>
                    <section className={styles.account}>
                        <div className={styles.accountContentWrapper}>
                            <h3 className={styles.accountTitle}>
                                Argent Bank Credit Card (x8349)
                            </h3>
                            <p className={styles.accountAmount}>$184.30</p>
                            <p className={styles.accountDescription}>
                                Current Balance
                            </p>
                        </div>
                        <div
                            className={`${styles.accountContentWrapper} ${styles.cta}`}
                        >
                            <button className={styles.transactionButton}>
                                View transactions
                            </button>
                        </div>
                    </section>
                </div>
            ) : null}
        </main>
    )
}

export default Profile
