import { useState, useEffect } from 'react';  // import useEffect
import './App.css';

function App() {

    const[newTask, setNewTask] = useState("");
    function onChange(event)
    {
        setNewTask(event.target.value);
    }
    function onClick(){
        
    }

    return (
        <div style={{textAlign: 'center'}}>     
            <h1>Contactor</h1>
            <div style={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                }}>
                    <div style={{ textAlign: 'center', width: '400px', border: '1px solid #000', padding: '10px'}}>
                        <h2>Contacts</h2>
                        <p><input type="text" placeholder="Name" onChange={onChange}/></p>
                        <button type = "button" onClick = {onClick}>Create Contact</button>
                        <hr></hr>
                        <div style={{
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            border: '1px solid #000', padding: '10px'
                        }}>
                            Nikhil
                        </div>
                    </div>
                    
                    
                     
            </div>
        </div>

    );
}

function Box() {
    return(
        <div style={{border: '1px solid #000', textAlign: 'center'}}>
            Contacts
        </div>
    )
}

export default App;
//export default Box;