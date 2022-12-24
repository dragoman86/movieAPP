
import { Box, Modal } from '@mui/material';

function AddMovieModal({ film, setFilm, handleClose, addMovies }) {

    return (

        <Modal
            open={open}
            onClose={handleClose}

        >
            <Box>
                <Button onClick={handleClose}>close modal</Button>
                <button onClick={addMovies}>Add a movie!</button>
                <input type="text" value={film.title} onChange={e => setFilm({ ...film, title: e.target.value })} />
                <input type="text" value={film.poster} onChange={e => setFilm({ ...film, posterURL: e.target.value })} />
                <input type="text" value={film.description} onChange={e => setFilm({ ...film, description: e.target.value })} />
                <input type="text" value={film.rate} onChange={e => setFilm({ ...film, rate: e.target.value })} />
            </Box>
        </Modal>
    )
}
export default AddMovieModal