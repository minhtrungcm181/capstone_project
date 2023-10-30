import React from "react"

class MainPage extends React.Component{
    handleClick = () => {
        alert('ok')
    }
    
    render() {
        return(
        <nav class="navbar navbar-expand-sm">
        <div class="top-left-part">
            {/* <b>
                <img src="img/bk_logo1.png" alt="home" style="float:left;width:140px;padding-right: 10px;" >
            </b> */}
              <h1> Hotel Manager </h1>
              <button onClick={ () => this.handleClick()}> Click me !</button>
        </div>
        
    </nav>
        )
    }
} 
export default MainPage