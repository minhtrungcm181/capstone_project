import React from "react"
class UploadFilmForm extends React.Component {
    options = {
        method: 'POST',
        headers: {
            Accept: 'application/form-data',
            'content-type': 'multipart/form-data',
        },
        body: this.state
    };
    handleChangeMovieInfo = (event) => {
        this.setState({
            movieTitle: event.target.value,
            movieCurrentEp: event.target.value,
            movieTotalE: event.target.value,
        })
    }
    handleChangeMovieSource = (event) => {
        const filemp4 = event.target.files[0]
        this.setState({
            filemp4: filemp4
        })
    }
    handleChangeMovieJpg = (event) => {
        const filejpg = event.target.files[1]
        this.setState({
            filejpg: filejpg
        })
    }
    handleSubmit = (event) => {
        // fetch('http://localhost:5000/film/upload', this.options)
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        //     .catch(error => console.error(error));
        // console.log(this.options.body)
        console.log(this.state);
    }
    state = {
        movieTitle: "",
        movieCurrentEp: "",
        movieTotalEp: "",
        filemp4:[],
        filejpg:[]
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
                        onChange={(event) => this.handleChangeMovieInfo(event)}
                    />
                    <label for="movie current ep">Movie name:</label>
                    <input type="text"
                        id="movie current ep"
                        name="movieCurrentEp"
                        value={this.movieCurrentEp}
                        onChange={(event) => this.handleChangeMovieInfo(event)}
                    />
                    <label for="movie total ep">Movie name:</label>
                    <input type="text"
                        id="movie total ep"
                        name="movieTotalEp"
                        value={this.movieTotalEp}
                        onChange={(event) => this.handleChangeMovieInfo(event)}
                    />

                    <label for="Source Film">Source Film:</label>
                    <input type="file"
                        id="source film"
                        name="filemp4"
                        value={this.filemp4}
                        onChange={(event) => this.handleChangeMovieSource(event)}
                    />

                    <label for="Source Jpg">Source Jpg:</label>
                    <input type="file"
                        id="source film"
                        name="filejpg"
                        value={this.filejpg}
                        onChange={(event) => this.handleChangeMovieJpg(event)}
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