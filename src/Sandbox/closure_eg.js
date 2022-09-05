import React from 'react'
import ReactDOM from 'react-dom/client'
//import React ,{Component} from 'react'

const outerFunction = (callback) => {
    setTimeout(() => {
        callback({
            title: 'hello there!'
        })
    }, 2000);
    setTimeout(() => {
        callback({
            title: 'very very'
        })
    }, 4000);
    
}

outerFunction((callbk) => {
   console.log(callbk.title)

});

//outerFunction( "extra")

const myFunction = (props) => { 
    return(
        <div>
            <h2>Info</h2>
            <p>Message is: {props.info} </p>
        </div>
    );
};

const secondFunction = (WrappedComponent) => {
    return(props) => {
        <div>
            <p> Message 2 in other function.</p>
            <WrappedComponent {...props}/>
        </div>
    }
}
const secFunc= secondFunction(Info)


