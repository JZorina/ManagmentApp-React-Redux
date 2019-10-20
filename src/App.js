import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component{
   componentDidMount() {
        const firebaseConfig = {
            apiKey: 'AIzaSyASyjFbP9NZGKJnnBjWwJWGijtGxFPPplc',
            authDomain: 'managmentapp-16041.firebaseapp.com',
            databaseURL: 'https://managmentapp-16041.firebaseio.com',
            projectId: 'managmentapp-16041',
            storageBucket: 'managmentapp-16041.appspot.com',
            messagingSenderId: '1081490348366',
            appId: '1:1081490348366:web:9c0f69c75705db3c92e61f',
            measurementId: 'G-38YTDS6RKH'
          };
         // firebase.initializeApp(firebaseConfig);
    }

    render(){
        console.log("app");
        const store=createStore(reducers,{},applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <Router/>
            </Provider>
            
        );
    };
}
export default App;