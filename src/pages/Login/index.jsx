import { useState } from 'react'
import styles from './styles.module.css'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember_me: false
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData( 
            (prev) => ({
                ...prev, 
                [name]: value
            })
        )
    }

    const handleCheckboxChange = (e) => {
        const { name } = e.target
        setFormData( 
            (prev) => ({
                ...prev, 
                [name]: !formData[name]
            })
        )
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <main className="main bg-dark">
            <section className={styles.signInContent}>
                <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
                <h1>Sign In</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="email">Username</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
                    </div>
                    <div className={styles.inputRemember}>
                        <input type="checkbox" id="rememberMe" name="remember_me" onChange={handleCheckboxChange} checked={formData.remember_me} />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button type="submit" className={styles.signInButton}>Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default Login