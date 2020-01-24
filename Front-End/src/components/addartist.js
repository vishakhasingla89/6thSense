import React, { Component } from 'react'
import './stylelogin.css'

class AddArtist extends Component {


    // constructor(){
    //     super()
    //     this.state = {
    //         redirectNow:false
    //     }
    //     this.handleSubmit = this.handleSubmit.bind(this)
    // }

    // handleSubmit(){

    // }


    render() {
        
        return (
            <div class="form-container">
                <div class="form-body">
                <form action="http://localhost:3005/tracks/addArtist" enctype="multipart/form-data" method="post">
                    <label for="name" style={{color:"black"}}>Artist Name</label>
                    <input type="text" id="name" name="name" style={{color:"black"}} required/>
                    <br/><br/>

                    <label for="track" style={{color:"black"}}>Image</label>
                    <input type="file" id="image" name="image" style={{color:"black"}} required/>
                    <br/><br/>

                    <input type="submit" value="Upload" style={{color:"black"}} />
                </form>  
            </div>
            </div>
        )
    }
}

export default AddArtist