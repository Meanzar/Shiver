import React, { useState } from 'react'
import affiche from '../../assets/placeholder.jpeg'
import styles from './FilmForm.module.css'

export default function FilmForm() {
    const [title, setTitle] = useState('titre')
    const [synopsis, setSynopsis] = useState('synopsis')
    const [imageUrl, setImageUrl] = useState(affiche)
    const [videoUrl, setVideoUrl] = useState('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')
    const [category, setCategory] = useState('')
    const [realisator, setRealisator] = useState('')
    const [casting, setCasting] = useState('')
    const [year, setYear] = useState()
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const film = { title, synopsis, imageUrl, videoUrl, category, realisator, casting, year }

        try {
            const response = await fetch('http://localhost:4000/api/films', {
                method: 'POST',
                body: JSON.stringify(film),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json()

            if (!response.ok) {
                setError(json.error)
            }
            if (response.ok) {
                setTitle('')
                setSynopsis('')
                setImageUrl('')
                setVideoUrl('')
                setCategory('')
                setRealisator('')
                setCasting('')
                setYear('')
                setError(null)
            }
        } catch {
            setError('Error with the validation')
        }
    }

    return (
        <form className={styles.create} onSubmit={handleSubmit}>
            <h3>Add a film</h3>

            <label>Title</label>
            <input 
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title} 
            />

            <label>Synopsis</label>
            <input 
                type='text'
                onChange={(e) => setSynopsis(e.target.value)}
                value={synopsis} 
            />

            <label>Affiche</label>
            <input 
                type='url'
                onChange={(e) => setImageUrl(e.target.value)}
                value={imageUrl} 
            />

            <label>Film</label>
            <input 
                type='url'
                onChange={(e) => setVideoUrl(e.target.value)}
                value={videoUrl} 
            />

            <label>Category</label>
            <select onChange={(e) => setCategory(e.target.value)} value={category}>
                <option value="">Select a category</option>
                <option value="psychopathe">Psychopathe</option>
                <option value="thriller">Thriller</option>
                <option value="slasher">Slasher</option>
                <option value="paranormal">Paranormal</option>
            </select>

            <label>Realisator</label>
            <input 
                type='text'
                onChange={(e) => setRealisator(e.target.value)}
                value={realisator} 
            />

            <label>casting</label>
            <input 
                type='text'
                onChange={(e) => setCasting(e.target.value)}
                value={casting} 
            />

            <label>Year</label>
            <input 
                type='number'
                onChange={(e) => setYear(e.target.value)}
                value={year} 
            />

            <button type='submit' className={styles.create__button}>Add a film</button>
            {error && <div className={styles.error}>{error}</div>}
        </form>
    )
}
