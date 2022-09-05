

// I don't know if any of this works or how:

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
const secFunc= secondFunction(myFunction)


