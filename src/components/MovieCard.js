import { Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import {
    faThumbsUp as farThumbsUp,
    faThumbsDown as farThumbsDown,
} from "@fortawesome/free-regular-svg-icons";
import Fab from "@material-ui/core/Fab";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import {
    deleteMovie,
    likeMovie,
    dislikeMovie,
    cancelLikeMovie,
    cancelDisLikeMovie,
} from "../redux/actions/moviesActions";

export default function MovieCard(props) {
    
    const convert = (value) => {
        let number = value / 1000;
        return number.toFixed(0) + "k";
    };

    const moviesRed = useSelector((state) => state.moviesRed);
    const { moviesLikes, moviesDisLikes } = moviesRed;

    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(deleteMovie(id));
    };

    const handleLike = (id) => {
        dispatch(likeMovie(id));
    };

    const handleDislike = (id) => {
        dispatch(dislikeMovie(id));
    };

    const handleCancelLike = (id) => {
        dispatch(cancelLikeMovie(id));
    };

    const handleCancelDislike = (id) => {
        dispatch(cancelDisLikeMovie(id));
    };

    return (
        <>
            <Col lg={3} md={4} sm={6} xs={12} className="box">
                <Row>
                    <Image
                        className="gradient"
                        src={"/images/" + props.movie.image}
                        fluid
                    />
                    <div className="movie-item-content">
                        <div className="movie-item-content-top">
                            <div>
                                <Fab
                                    style={{ color: "red" }}
                                    aria-label="delete"
                                    size="small"
                                    onClick={() => {
                                        handleRemove(props.movie.id);
                                    }}
                                >
                                    <DeleteForeverIcon />
                                </Fab>
                            </div>
                        </div>
                        <div className="movie-item-content-buttom">
                            <div className="movie-item-title">
                                <span>{props.movie.title}</span>
                            </div>
                            <div className="item-cat">
                                <span>{props.movie.category}</span>
                            </div>
                            <div className="movie-item-beta">
                                <div className="view-movie">
                                    <div className="blck-bg">
                                        <span>
                                            {moviesLikes.indexOf(props.movie.id) > -1 ? (
                                                <FontAwesomeIcon
                                                    className="icon-like"
                                                    icon={faThumbsUp}
                                                    onClick={() => {
                                                        handleCancelLike(props.movie.id);
                                                    }}
                                                />
                                            ) : (
                                                <FontAwesomeIcon
                                                    className="icon-like"
                                                    icon={farThumbsUp}
                                                    onClick={() => {
                                                        if (moviesDisLikes.indexOf(props.movie.id) > -1) {
                                                            handleCancelLike(props.movie.id);
                                                        }
                                                        handleLike(props.movie.id);
                                                    }}
                                                />
                                            )}
                                            {props.movie.likes >= 1000
                                                ? convert(props.movie.likes)
                                                : props.movie.likes}
                                        </span>
                                        <span>
                                            {moviesDisLikes.indexOf(props.movie.id) > -1 ? (
                                                <FontAwesomeIcon
                                                    className="icon-like"
                                                    icon={faThumbsDown}
                                                    onClick={() => {
                                                        handleCancelDislike(props.movie.id);
                                                    }}
                                                />
                                            ) : (
                                                <FontAwesomeIcon
                                                    className="icon-like"
                                                    icon={farThumbsDown}
                                                    onClick={() => {
                                                        if (moviesLikes.indexOf(props.movie.id) > -1) {
                                                            handleCancelDislike(props.movie.id);
                                                        }
                                                        handleDislike(props.movie.id);
                                                    }}
                                                />
                                            )}
                                            {props.movie.dislikes >= 1000
                                                ? convert(props.movie.dislikes)
                                                : props.movie.dislikes}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Col>
        </>
    );
}
