
const Closure = (callback: any) => {
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

Closure((callbk: any) => {
    <p>{ callbk.title }</p>
});

export default Closure


