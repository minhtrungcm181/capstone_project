import axios from "axios";
import React from "react";
import '../styles/UploadFilmForm.scss';
class UploadFilmForm extends React.Component {
    filemp4 = null;
    fileJpg = null;
    formData = new FormData();
    
    handleChangeMovieTitle = (event) => {
        this.setState({
            movieTitle: event.target.value
        })
    }
    handleChangeMovieCurrentEp = (event) => {
        this.setState({
            movieCurrentEp: event.target.value.replace(/\D/, '')
        })
    }
    handleChangeMovieTotalEp = (event) => {
        this.setState({
            movieTotalEp: event.target.value
        })
    }
    // handleChangeMovieSource = (event) => {
    //     const filemp4 = event.target.files[0]
    //     this.setState({
    //         filemp4: filemp4
    //     })
    // }
    // handleChangeMovieJpg = (event) => {
    //     const filejpg = event.target.files[1]
    //     this.setState({
    //         filejpg: filejpg
    //     })
    // }
    handleChangeFileSubmit = (event) => {
        for (const item of event.target.files) {
            if (item.type === "video/mp4") {
                this.filemp4 = item
            }
            else if (item.type === "image/jpeg") {
                this.fileJpg = item
            }

        }
    }
    handleSubmit = (event) => {
        this.formData.append("movieTitle", this.state.movieTitle);
        this.formData.append("movieCurrentEp", this.state.movieCurrentEp);
        this.formData.append("movieTotalEp", this.state.movieTotalEp);
        this.formData.append("movieDescription", this.state.movieDescription);
        this.formData.append("movieYear", this.state.movieYear);
        this.formData.append("movieRating", this.state.movieRating);
        this.formData.append("movieM3U8", this.state.movieM3U8);
        this.formData.append("genre", this.state.genre);
        this.formData.append("filemp4", this.filemp4);
        this.formData.append("fileJpg", this.fileJpg);
        axios({
            method: 'post',
            url: 'http://localhost:5000/film/upload',
            data: this.formData
        })
        .then(res=> {console.log(res)})
        .catch(error => console.log(error));
        console.log(this.formData)

    }
    state = {
        movieTitle: "",
        movieCurrentEp: Number,
        movieTotalEp: Number,
        movieDescription: "",
        movieYear: "",
        movieRating: "",
        movieM3U8: "",
        genre: "hanh dong",
        files: [],
    }

    render() {
        return (
            <>
                <form action="" className="form">
                    <label for="movie name" className="label">Movie name:</label>
                    <input type="text"
                        id="movie title"
                        className="movieTitle"
                        value={this.movieTitle}
                        onChange={(event) => this.handleChangeMovieTitle(event)}
                    />
                    <br></br>
                    <label for="movie current ep" className="label">Movie Current Ep:</label>
                    <input type="number"
                        id="movie current ep"
                        className="movieCurrentEp"
                        value={this.movieCurrentEp}
                        onChange={(event) => this.handleChangeMovieCurrentEp(event)}
                    />
                   
                    <label for="movie total ep" className="label">Movie Total Ep:</label>
                    <input type="number"
                        id="movie total ep"
                        className="movieTotalEp"
                        value={this.movieTotalEp}
                        onChange={(event) => this.handleChangeMovieTotalEp(event)}
                    />
                    <br></br>

                    <label for="Source Film" className="label">Source Film:</label>
                    <input type="file"
                        id="source film"
                        className="filemp4"
                        value={this.files}
                        onClick={(event) => this.handleChangeFileSubmit(event)}
                    />

                    <label for="Source Jpg" className="label">Source Jpg:</label>
                    <input type="file"
                        id="source film"
                        className="filejpg"
                        value={this.files}
                        onClick={(event) => this.handleChangeFileSubmit(event)}
                    />
                    <br></br>
                    <input type="button" value="upload"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </>
        )
    }
}
export default UploadFilmForm