import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../services/useAuth';
import styles from './ProfilePage.module.css';

export default function ProfilePage() {
  const { isLoggedIn, userData } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      alert('You must be logged in');
      navigate('/signin');
    }
  }, [isLoggedIn, navigate]);

  return (
    <Fragment>
      <div className={styles.profileContainer}>
        <h1>Nom du compte : {userData.name}</h1>
        <h1>Email : {userData.email}</h1>
        <h1>Age : {userData.age}</h1>
      </div>
    </Fragment>
  );
}
