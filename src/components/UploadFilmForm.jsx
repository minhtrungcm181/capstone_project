import axios from "axios";
import React from "react"
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
            movieCurrentEp: event.target.value
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
        this.formData.append("filemp4", this.filemp4);
        this.formData.append("fileJpg", this.fileJpg);
        axios({
            method: 'post',
            url: 'http://localhost:5000/film/upload',
            data: this.formData
        }).catch(error => console.log(error));
        console.log(this.formData)

    }
    state = {
        movieTitle: "",
        movieCurrentEp: null,
        movieTotalEp: null,
        files: [],
    }

    render() {
        return (
            <>
                <form action="">
                    <label for="movie name">Movie name:</label>
                    <input type="text"
                        id="movie title"
                        name="movieTitle"
                        value={this.movieTitle}
                        onChange={(event) => this.handleChangeMovieTitle(event)}
                    />
                    <label for="movie current ep">Movie Current Ep:</label>
                    <input type="number"
                        id="movie current ep"
                        name="movieCurrentEp"
                        value={this.movieCurrentEp}
                        onChange={(event) => this.handleChangeMovieCurrentEp(event)}
                    />
                    <label for="movie total ep">Movie Total Ep:</label>
                    <input type="number"
                        id="movie total ep"
                        name="movieTotalEp"
                        value={this.movieTotalEp}
                        onChange={(event) => this.handleChangeMovieTotalEp(event)}
                    />

                    <label for="Source Film">Source Film:</label>
                    <input type="file"
                        id="source film"
                        name="filemp4"
                        value={this.files}
                        onChange={(event) => this.handleChangeFileSubmit(event)}
                    />

                    <label for="Source Jpg">Source Jpg:</label>
                    <input type="file"
                        id="source film"
                        name="filejpg"
                        value={this.files}
                        onChange={(event) => this.handleChangeFileSubmit(event)}
                    />
                    <input type="button" value="upload"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </>
        )
    }
}
export default UploadFilmForm