import Script from '@gumgum/react-script-tag';
import "../Styles/game.css"


//let _onMyScriptLoad = () => {/* ... */};
//let _onMyScriptError = () => {/* ... */};

const LoadPhaser = () => {
    return(
        <div>
            <Script src="//cdn.jsdelivr.net/npm/phaser@3.11.0/dist/phaser.js" />
        </div>
    )
    
}

const ImportJsScript = () => {
    
    
    return(
        <div className="phasergame">
            <LoadPhaser />
            <Script 
            type="text/javascript" 
            src="/src/JsGames/index.js"
            
            />
           
        </div>

    )
    
}

const CreateGame = () => {
    
    
    return(
        <div>
            <ImportJsScript />
        </div>
    )
    
}


export default CreateGame
