import React from 'react'
import { useLocation, useNavigate  } from 'react-router-dom'
import FilmVision from '../../components/Film/FilmVision'
import { useAuth } from '../../services/useAuth'

export default function FilmPage() {
    const { state }= useLocation()
    const {isLoggedIn} = useAuth()
    let navigate = useNavigate()
    if (!isLoggedIn) {
      navigate('/signin')
    }
  return (
    <FilmVision film={state.film}></FilmVision>
  )
}
