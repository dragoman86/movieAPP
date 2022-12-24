import React, { useState } from "react";
import { movies } from "./Data";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 10,
  p: 4,
};
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function MovieApp() {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [moviesData, setMoviesData] = useState(movies);
  const [search, setSearch] = useState("");
  const [newMovie, setNewMovie] = useState({
    id: "",
    title: "",
    plot: "",
    posterUrl: "",
    year: "1994",
    runtime: "142",
    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    imdbRating: "9.3",
    imdbVotes: "2,341,835",
    imdbId: "tt0111161",
    type: "movie",
    boxOffice: "$28.34M",
    production: "Castle Rock Entertainment",
  });
  // expand card
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // open modal
  const handleOpen = () => setOpen(true);
  // close modal
  const handleClose = () => setOpen(false);
  // add new movie to moviesData
  const addMovie = (newMovie) => {
    setMoviesData([...moviesData, newMovie]);
  };
  // get the value of the input according to the name
  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  // get the value of the input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // filter moviesData by title
  const filteredMovies = moviesData.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });

  // delete movie from moviesData
  const deleteMovie = (id) => {
    setMoviesData(moviesData.filter((movie) => movie.id !== id));
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Movie app ws
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearch}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>

      <div className="d-flex">
        {filteredMovies.map((movie) => {
          return (
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {movie.title[0]}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={movie.title}
                subheader={movie.year}
              />
              <CardMedia
                component="img"
                height="194"
                image={movie.posterUrl}
                alt={`${movie.title} poster`}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {movie.plot}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => deleteMovie(movie.id)}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Details :</Typography>
                  <Typography paragraph>{movie.plot}</Typography>
                  <Typography paragraph>Actors: {movie.actors}</Typography>
                  <Typography paragraph>
                    Genre :{" "}
                    {movie.genres.map((genre) => {
                      return <span>{genre} </span>;
                    })}
                  </Typography>
                  <Typography>Director: {movie.director}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          );
        })}
      </div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new movie
          </Typography>
          <TextField
            id="outlined-basic"
            label="Movie tite"
            variant="outlined"
            placeholder="Movie Title"
            name="title"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Movie plot"
            variant="outlined"
            placeholder="Movie Plot"
            name="plot"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Movie poster"
            variant="outlined"
            placeholder="Movie Poster URL"
            name="posterUrl"
            onChange={handleChange}
          />
          <Button
            onClick={() => {
              addMovie({ ...newMovie, id: Math.random() * 1000 });
            }}
            variant="contained"
          >
            Add
          </Button>
          <Button
            onClick={() => {
              handleClose();
            }}
            variant="contained"
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default MovieApp;
