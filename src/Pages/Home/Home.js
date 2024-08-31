import React, { useEffect, useState, Fragment } from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import FilmDetails from '../../components/Film/FilmDetails';
import FilmCategorie from '../../components/Film/categoriefilm';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useAuth } from '../../services/useAuth';
import styles from './Home.module.css';

export default function HomePage() {
    const { isLoggedIn } = useAuth();
    const [films, setFilms] = useState();
    let navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/signin');
        }
    }, []);

    useEffect(() => {
        const fetchFilms = async () => {
            const response = await fetch('http://localhost:4000/api/films/');
            const json = await response.json();

            if (response.ok) {
                setFilms(json);
            } else {
                navigate('/signin');
            }
        };

        fetchFilms();
    }, [setFilms]);

    return (
        <div className={styles.homePageContainer}>
            {films && films.filter((film) => film.category === 'psychopathe').length > 0 && (
                <div className={styles.filmCategorySection}>
                    <FilmCategorie title = "psychopathe" category = 'psychopathe'/>
                    <Swiper
                        className={styles.swiperContainer}
                        modules={[Navigation, Pagination, Scrollbar]}
                        slidesPerView={5}
                        navigation={{ clickable: true }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        {films.filter((film) => film.category === 'psychopathe').map((filteredFilm, index) => (
                            <SwiperSlide className={styles.swiperSlide} key={index}>
                                <FilmDetails key={filteredFilm._id} film={filteredFilm} category={filteredFilm.category} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
            {films && films.filter((film) => film.category === 'thriller').length > 0 && (
                <div className={styles.filmCategorySection}>
                    <FilmCategorie title = "thriller" category = 'thriller'/>
                    <Swiper
                        className={styles.swiperContainer}
                        modules={[Navigation, Pagination, Scrollbar]}
                        slidesPerView={5}
                        navigation={{ clickable: true }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        {films.filter((film) => film.category === 'thriller').map((filteredFilm, index) => (
                            <SwiperSlide className={styles.swiperSlide} key={index}>
                                <FilmDetails key={filteredFilm._id} film={filteredFilm} category={filteredFilm.category} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
            {films && films.filter((film) => film.category === 'paranormal').length > 0 && (
                <div className={styles.filmCategorySection}>
                    <FilmCategorie title = "paranormal" category = 'paranormal'/>
                    <Swiper
                        className={styles.swiperContainer}
                        modules={[Navigation, Pagination, Scrollbar]}
                        slidesPerView={5}
                        navigation={{ clickable: true }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        {films.filter((film) => film.category === 'paranormal').map((filteredFilm, index) => (
                            <SwiperSlide className={styles.swiperSlide} key={index}>
                                <FilmDetails key={filteredFilm._id} film={filteredFilm} category={filteredFilm.category} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
            {films && films.filter((film) => film.category === 'slasher').length > 0 && (
                <div className={styles.filmCategorySection}>
                    <FilmCategorie title = "slasher" category = 'slasher'/>
                    <Swiper
                        className={styles.swiperContainer}
                        modules={[Navigation, Pagination, Scrollbar]}
                        slidesPerView={5}
                        navigation={{ clickable: true }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        {films.filter((film) => film.category === 'slasher').map((filteredFilm, index) => (
                            <SwiperSlide className={styles.swiperSlide} key={index}>
                                <FilmDetails key={filteredFilm._id} film={filteredFilm} category={filteredFilm.category} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
}
