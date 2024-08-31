import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/logo.png';
import { useAuth } from '../../services/useAuth';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    logout();
    navigate('/signin');
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to='/'>
          <img src={logo} alt='Shiver logo' className={styles.logo} />
        </Link>
        {isLoggedIn ? (
          <>
            <Link to='/'>
              <h1>Liste</h1>
            </Link>
            <Link to='/create'>
              <h1>Add</h1>
            </Link>
            <Link to='/profile'>
              <h1>Profile</h1>
            </Link>
            <button onClick={handleLogOut}>Disconnect</button>
          </>
        ) : (
          <Link to='/signin'>
            <h1>Sign In</h1>
          </Link>
        )}
      </div>
    </header>
  );
}
