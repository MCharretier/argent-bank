import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../redux/features/auth/auth.actions'
import { userGetProfile } from '../../redux/features/profile/profile.actions'
import styles from './styles.module.css'

function Login() {
    const { userToken, error } = useSelector((state) => state.auth)
    const { userInfo } = useSelector((state) => state.profile)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember_me: false
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (userInfo) {
            navigate('/profile')
        } else if (userToken) {
            dispatch(userGetProfile())
        }
    }, [userToken, userInfo, dispatch, navigate])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleCheckboxChange = (e) => {
        const { name } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: !formData[name]
        }))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        dispatch(userLogin(formData))
    }

    return (
        <main className="main bg-dark">
            <section className={styles.signInContent}>
                <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
                <h1>Sign In</h1>
                <form onSubmit={handleFormSubmit}>
                    {error ? <p className={styles.error}>{error}</p> : null}
                    <div className={styles.inputWrapper}>
                        <label htmlFor="email">Username</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className={styles.inputRemember}>
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="remember_me"
                            onChange={handleCheckboxChange}
                            checked={formData.remember_me}
                        />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button type="submit" className={styles.signInButton}>
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    )
}

export default Login
