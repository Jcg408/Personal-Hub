import React, { Component } from 'react';

class PhotoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            url: ""
          }
    }
    
    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const photo = {
            title: this.state.title,
            url: this.state.url
        }
    
        fetch('http://localhost:3001/api/photos', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(photo)
        })
            .then(res => res.json())
            .then(data =>console.log(data))

}
    render() { 
        return ( 
            <div>
                Add Photo 
                <form onSubmit={this.handleSubmit} className="contact">
                <div>
                    <label>Title:</label>
                    <input type="text" onChange={this.handleChange} name ="title" value={this.state.title}/>
                        <br/>
                    <label>Url:</label>
                    <input type="text" onChange={this.handleChange} name ="url" value={this.state.url}/>
                    <br/>
                    <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default PhotoForm;