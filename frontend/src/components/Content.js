import { useState, useEffect } from 'react';

function Task(props){
    function onClick(){
        props.setTasks(tasks => tasks.filter(task => task.id !== props.id))
    }

    const[newType, setNewType] = useState("");
    function onChangeType(event){
        setNewType(event.target.value);
 //       setNewNumber(event.target.value);
    }
    const[newNumber, setNewNumber] = useState("");
    function onChangeNumber(event){
        setNewNumber(event.target.value);
    }
    function onClickAdd(){
        
    }

    return(
        <div style={{border:'1px solid #000', padding: '10px'}}>
            <div style={{
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                }}>
            {/* </div><table style={{width:'350px', textAlign: 'left', alignItems: 'right', }}> */}
                
                {props.name}<button type = "button" onClick={onClick}>Delete</button>          
                {/* <td style={{marginLeft: 'auto'}}></td> */}
                
            </div>
            <hr/>
            <div style={{display:'flex', justifyContent: 'space-between'}}>
                <input type="text" placeholder="Phone Type" onChange={onChangeType}/>
                <input type="text" placeholder="Phone Number" onChange={onChangeNumber}/>
                <button type = "button" onClick = {onClickAdd}>Add</button>
            </div>
        </div>
    );
}

function Content(props){
    const[newTask, setNewTask] = useState("");
    
    function onChange(event){
        setNewTask(event.target.value);
    }
    function onClick(){
        props.setTasks(tasks => [...tasks, {id: tasks.length+1, name: newTask}]);
    }
    
    return(
        <div style={{textAlign: 'center'}}>     
            <h1>Contactor</h1>
            <div style={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                }}>
                    <div style={{ textAlign: 'center', width: '500px', border: '1px solid #000', padding: '10px'}}>
                        <h2>Contacts</h2>
                        <p><input type="text" placeholder="Name" onChange={onChange}/></p>
                        <button type = "button" onClick = {onClick}>Create Contact</button>
                        <hr></hr>             
                        <li style={{listStyleType:'none'}}>
                                {props.tasks.map(
                                    task => <Task
                                                setTasks={props.setTasks}
                                                id={task.id}
                                                name={task.name}
                                            />
                                )}
                        </li>
                    </div>       
            </div>
        </div>
    );
}

export default Content;