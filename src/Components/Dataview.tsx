
// import theData from "./theData"
import '../Styles/dataview.css'

const Searchbar = () => {
    return(
        <form>
            <input type="text" placeholder="Search...."/>
            <p>
                <input type="checkbox" />
                {" "}
                <span>
                    Only show available ones
                </span>
            </p>
        </form>
    );
    
};

const Datatable = (props: any) => {
    const { data } = props;

    return(
        <div className="databox">

            <div className="DataViewHeader">
                
                <Searchbar />
               Header Bar 
            </div>
            <div>
                <h1>Body Container</h1>
                <div className="CategoryRow">
                    Category Row
                </div>
                <div className="ProductRow">
                    Product Row
                </div>
                <div className="CategoryRow">
                    Category Row 2  
                </div>
                <div className="ProductRow">
                    Product Row 2
                </div>
            </div>
            <div className="datafooter">
                Footer Piece
            </div>
        </div>
        
    );
    
}

const Dataview = () => {
    return(
        <div className="app">
            <Datatable />
        </div>
    );
  };

  export default Dataview
 

