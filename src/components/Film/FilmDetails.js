import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styles from './FilmDetails.module.css';

export default function FilmDetails({ film, category }) {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return (
        <Fragment>
            {film.category === category && (
                <div className={styles.filmCarrousel} onClick={() => setOpen(o => !o)}>
                    <img
                        src={film.imageUrl}
                        alt="affiche du film"
                        width={150}
                        height={220}
                        className={styles.filmThumbnail}
                    />
                </div>
            )}
            <Popup 
                open={open} 
                closeOnDocumentClick 
                onClose={closeModal} 
                position="center center" 
                className={styles.popupContainer}>
                
                <div className={styles.filmZoom}>
                    <img 
                        src={film.imageUrl} 
                        alt="affiche du film" 
                        width={"100%"}  
                        height={300} 
                        className={styles.filmImage}
                    />
                    <h2 className={styles.filmTitle}>{film.title}</h2>
                    <div className={styles.filmText}>
                        <div className={styles.zoomDetails}>
                            <p className={styles.filmCategory}>Genre: <br /> {film.category}</p>
                            <p className={styles.filmYear}>Release date: <br /> {film.year}</p>
                            <p>Durée: <br />2h01</p>
                        </div>
                        <p className={styles.filmSynopsis}>{film.synopsis}</p>
                        <div className={styles.filmActor}>
                            <img
                                src="https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png"
                                alt="visage du personnage"
                                width={30}
                                height={30}
                                className={styles.filmActorImage}
                            />
                            <p className={styles.filmActorText}>{film.actor}</p>
                        </div>
                        <p className={styles.filmRealisator} style={{textAlign:"center"}}>Réalisé par: {film.realisator}</p>
                        <Link className={styles.filmLink} to={`/${film._id}`} state={{ film }}>
                            Voir le film
                        </Link>
                    </div>
                </div>
            </Popup>
        </Fragment>
    );
}
