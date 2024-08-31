import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/useAuth";
import styles from './SignIn.module.css';

export default function SignIn() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <Fragment>
            <div className={styles.signInContainer}>
                <form className={styles.create} onSubmit={handleSubmit}>
                    <label>Email:
                        <input
                            type='email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>
                    <label>Password:
                        <input 
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </label>
                    <button className={styles.create__button} type="submit">Submit</button>
                </form>
                <button className={`${styles.create__button} ${styles.green}`} onClick={() => navigate('/signup')}>
                    No account yet?
                </button>
            </div>
        </Fragment>
    );
}
