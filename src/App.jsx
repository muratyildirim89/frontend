import './assets/css/App.css';
import {useState} from "react";
import axios from "axios";

function App() {
    const url="http://localhost:4567/"

    const [count,setCount]=useState(0);
    const [databaseInfo,setDatabaseInfo]=useState(null);
    const [columns,setColumns]=useState([]);
    const [items,setItems]=useState([]);
    const [tables,setTables]=useState([]);

    const getCount=()=>{
        axios.get(url+"count").then(response => {
            setCount(response.data);
        }).catch(error=> console.error("Error: /count => " + error));
    };

    const getDatabaseInfo=()=>{
        axios.get(url + "database-info").then(response =>{
            setDatabaseInfo(response.data);
        }).catch(e=> console.error("Error: /database-info => " + e))
    }

    const getColumns=()=>{
        axios.get(url + "columns").then(response =>{
            setColumns(response.data);
        }).catch(e=> console.error("Error: /columns => " + e))
    }

    const getItems=()=>{
        axios.get(url + "list").then(response =>{
            setItems(response.data);
        }).catch(e=> console.error("Error: /list => " + e))
    }

    const getTables=()=>{
        axios.get(url + "table-name").then(response =>{
            setTables(response.data);
        }).catch(e=> console.error("Error: /table-name => " + e))
    }
    return (
        <div className={"App"}>
            <div className={"container w-50"}>
                <div className={"row"}>
                    <button type="button" className="btn btn-outline-danger" onClick={getTables}>Database Name: {tables}</button>
                </div>
                <div className={"row"}>
                    <div className={"col"}>
                        <button type="button" className="btn btn-outline-success" onClick={getCount}>Database Row Count:</button>
                    </div>
                    <div className={"col"}><span id={"row"}>{count}</span></div>
                </div>
                <div className={"row"}>
                    <div className={"col"}>
                        <button type="button" className="btn btn-outline-dark" onClick={getColumns}>Database Column Name: </button>
                    </div>
                    <div className={"col"}><span id={"column"}>{columns}</span></div>
                </div>
                <div className={"row"}>
                    <button type="button" className="btn btn-outline-info" onClick={getDatabaseInfo}>Database Table Name: {databaseInfo}</button>
                </div>
                <div className={"row"}>
                    <div className={"col"}>
                        <button type="button" className="btn btn-outline-warning" onClick={getItems}>Database items: </button>
                    </div>
                    <div className={"col"}><span id={"item"}>{items}</span></div>
                </div>
                
            </div>
        </div>
    );
}

export default App;