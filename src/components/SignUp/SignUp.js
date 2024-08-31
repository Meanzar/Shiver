import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/useAuth";
import styles from './SignUp.module.css';

export default function SignUp() {
    const { isLoggedIn } = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   
    const [age, setAge] = useState('');
    let navigate = useNavigate();

    if (isLoggedIn) {
        navigate('/');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { name, email, password, age };

        try {
            const response = await fetch('http://localhost:4000/api/users/signup', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                alert('Account already exists');
            }

            if (response.ok) {
                navigate('/signin');
            }
        } catch (error) {
            console.log('Error with the inscription');
        }
    };

    return (
        <Fragment>
            <div className={styles.signUpContainer}>
                <form className={styles.create} onSubmit={handleSubmit}>
                    <label>Name:
                        <input 
                            type="text" 
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </label>
                    <label>Email *:
                        <input
                            type='email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>
                    <label>Password *:
                        <input 
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </label>
                    <label>Age:
                        <input
                            type="number"
                            onChange={(e) => setAge(e.target.value)}
                            value={age}
                        />
                    </label>
                    <button className={styles.create__button} type="submit">Submit</button>
                    <button className={`${styles.create__button} ${styles.green}`} onClick={() => navigate('/signin')}>
                    Already have an account ?
                </button>
                </form>
            </div>
        </Fragment>
    );
}
