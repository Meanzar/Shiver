import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FilmVision({ film }) {
    const { title, imageUrl, videoUrl, _id } = film
    let navigate = useNavigate()

    const handleClick = async () => {
        await fetch(`http://localhost:4000/api/films/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => navigate('/'))
    }

    return (
        <>
            <h1 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#333' }}>{title}</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <video key={_id} controls poster={imageUrl} style={{ width: '50%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <source src={videoUrl} type='video/mp4' />
                </video>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button 
                    onClick={handleClick} 
                    style={{ 
                        padding: '10px 20px', 
                        backgroundColor: '#d9534f', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '16px'
                    }}
                >
                    Delete the movie
                </button>
            </div>
        </>
    )
}
  