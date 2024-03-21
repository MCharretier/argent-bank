import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    userGetProfile,
    userPutProfile
} from '../../redux/features/profile/profile.actions'
import styles from './styles.module.css'

function Profile() {
    const { userToken } = useSelector((state) => state.auth)
    const { userInfo } = useSelector((state) => state.profile)
    const [isEditingName, setIsEditingName] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: ''
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (userToken) {
            dispatch(userGetProfile())
        } else {
            navigate('/login')
        }
    }, [userToken, dispatch, navigate])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userPutProfile(formData))
        setIsEditingName(!isEditingName)
    }

    return (
        <main className="main bg-dark">
            {userInfo ? (
                <div>
                    {isEditingName ? (
                        <div className={styles.header}>
                            <h1>Welcome back</h1>
                            <form onSubmit={handleSubmit}>
                                <div className={styles.inputsWrapper}>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder={userInfo.firstName}
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder={userInfo.lastName}
                                    />
                                </div>
                                <div className={styles.buttonsWrapper}>
                                    <button
                                        type="submit"
                                        className={styles.editButton}
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        className={styles.editButton}
                                        onClick={() =>
                                            setIsEditingName(!isEditingName)
                                        }
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className={styles.header}>
                            <h1>
                                Welcome back
                                <br />
                                {userInfo.firstName} {userInfo.lastName}!
                            </h1>
                            <button
                                className={styles.editButton}
                                onClick={() => setIsEditingName(!isEditingName)}
                            >
                                Edit Name
                            </button>
                        </div>
                    )}
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
