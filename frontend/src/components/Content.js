import { useState, useEffect } from 'react';

function Task(props){
    function onClick(){
        props.setTasks(tasks => tasks.filter(task => task.id !== props.id))
    }

    return(
        <table style={{width:'350px', textAlign: 'left', alignItems: 'right', }}>
            <td>{props.name}</td>
            <td style={{marginLeft: 'auto'}}><button type = "button" onClick={onClick}>Delete</button></td>
        </table>
    );
}

function Content(props){
    const[newTask, setNewTask] = useState("");
    
    function onChange(event){
        setNewTask(event.target.value);
    }
    function onClick(){
        props.setTasks(tasks => [...tasks, {id: tasks.length+1, name: newTask}])
    }
    
    return(
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
                            justifyContent: 'space-between', 
                            alignItems: 'left',
                            border: '1px solid #000', padding: '10px'
                            }}>                                
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
        </div>
    );
}

export default Content;