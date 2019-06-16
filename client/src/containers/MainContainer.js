import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Route } from 'react-router-dom';
import Greet from '../components/Greet'

// import { Container, Header } from 'semantic-ui-react';

class MainContainer extends Component {
   
    render() { 
        return (
            <div>
                <h1>My Personal Hub</h1>
            </div>
          );
   

        //   <div>
        //     <Route exact path='/' render={MainContainer} />
        //     <Route exact path='/contacts' component={Contacts} />
        //     <Route exact path='/contacts/new' component={ContactForm} />
           
        //   </div>
    }
}
 
      
 
export default MainContainer;