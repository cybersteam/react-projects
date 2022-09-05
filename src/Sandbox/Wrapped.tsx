// I don't know if any of this works or how:

const myFunction = (props: any) => { 
    return(
        <div>
            <h2>Info</h2>
            <p>Message is: {props.info} </p>
        </div>
    );
};

const secondFunction = (WrappedComponent: any) => {
    return(props: any) => {
        <div>
            <p> Message 2 in other function.</p>
            <WrappedComponent {...props.info}/>
        </div>
    }
}

const Wrapped = secondFunction(myFunction)

export default Wrapped


