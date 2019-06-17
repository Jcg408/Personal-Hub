import React, { Component } from 'react';
import Greet from './Greet';

class Main extends Component {
   
    render() { 
        return (
            <div>
                <h1>Welcome to Your Hub!</h1>
               <Greet/>
                This will have background image
            </div>
          );
   
    }
}
 
      
 
export default Main;