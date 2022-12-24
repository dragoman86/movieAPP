import React, { useState } from "react";
import { Typography, Box, Button, Modal } from '@mui/material';
import MovieCard from "./MovieCard";

function MoviesApp({
    moviesData, setMoviesData
}) {
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)


    //open model
    const handleOpen = () => setOpen(true)

    //colde model 
    const handleClose = () => setOpen(false)

    const [film, setFilm] = useState({
        title: "",
        posterURL: "",
        description: "",
        rate: "",
    })

    const addMovies = () => {
        setMoviesData([...moviesData,
        ...film])
    }

    return (
        <div >
            <Button onClick={handleOpen} style={{ color: "purple" }}>Add a movie!</Button>
         
            <div className='MoviesItems'>
                {moviesData.map((item, key) => (
                    <MovieCard
                        item={item}
                        key={key}
                    />
                ))}
            </div>

        </div>
    )
}

export default MoviesApp;