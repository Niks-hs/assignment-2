import { useState, useEffect } from 'react';

function Contact({contact, onDelete}){
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
        <h3 onClick={handleExpand}>{contact.name}</h3>
        {isExpanded && (
            <div>
            {contact.contacts.map((item, index) => (
                <div key={index}>
                <span>{item.type}: </span>
                <span>{item.number}</span>
                <button onClick={() => onDelete(index)}>Delete</button>
                </div>
            ))}
            </div>
        )}
        </div>
    );

    // return(
    //     <table>
    //         <tr>
    //             <td>{props.type}</td>
    //             <td>{props.number}</td>
    //         </tr>
    //     </table>
    // );
}

function Task({props}){
    function onClick(){
        props.setTasks(tasks => tasks.filter(task => task.id !== props.id))
    }

    const[contact, setContact] = useState({name: "", contacts: []});
    function onChangeContact(event){
        const{name, value} = event.target;
        setContact({...contact, [name]: value});
 //       setNewNumber(event.target.value);
    }
    // const[newNumber, setNewNumber] = useState("");
    // function onChangeNumber(event){
    //     setNewNumber(event.target.value);
    // }
    function onClickAdd(event){
        event.preventDefault();
        props(contact);
        setContact({name: "", contacts: []});
        // props.setPhoneType(phones => [...phones, {id: phones.length+1, type: newType}])
        // props.setPhoneNumber(phones => [...phones, {id: phones.length+1, number: newNumber}])
    }

    return(
        <div style={{border:'1px solid #000', padding: '10px'}}>
            <div style={{
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                }}>
            {/* </div><table style={{width:'350px', textAlign: 'left', alignItems: 'right', }}> */}
            <form onSubmit={onClickAdd}>
                <input name="name" value={contact.name} onChange={onChangeContact} placeholder="Contact Name" />
                <button type="submit">Add Contact</button>
            </form>
                {props.name}<button type = "button" onClick={onClick}>Delete</button>          
                {/* <td style={{marginLeft: 'auto'}}></td> */}
                
            </div>
            <hr/>
            {/* <div style={{display:'flex', justifyContent: 'space-between'}}>
                <input type="text" placeholder="Phone Type" onChange={onChangeType}/>
                <input type="text" placeholder="Phone Number" onChange={onChangeNumber}/>
                <button type = "button" onClick = {onClickAdd}>Add</button>
            </div> */}
            {/* <li style={{listStyleType:'none'}}>
                                {props.type.map(
                                    ph => <Phone
                                                setPhone={props.setPhoneType}
                                                id={ph.id}
                                                type={ph.type}
                                            />
                                )}
                        </li> */}
        </div>
    );
}

function Content(){
    const[nTask, setNewTask] = useState([
        {
            name: "Nikhil",
            contacts: [
                {type: "mobile", number: '12345'}
            ]
        }
    ]);
    
    // function onChange(event){
    //     setNewTask(event.target.value);
    // }
    function onClick(newTask){
        setTasks([...nTask, newTask]);
    }

    const handleDelete = (index) => {
        const newContacts = [...nTask];
        newContacts.splice(index, 1);
        setNewTask(newContacts);
     };
    
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
                        <Task props = {onClick} />
                        {/* <p><input type="text" placeholder="Name" onChange={onChange}/></p>
                        <button type = "button" onClick = {onClick}>Create Contact</button>
                        <hr></hr>              */}
                        {nTask.map((contact, index) => (
                            <Contact key={index} contact={contact} onDelete={handleDelete} />
                        ))}
                        {/* <li style={{listStyleType:'none'}}>
                                {props.tasks.map(
                                    task => <Task
                                                setTasks={props.setTasks}
                                                id={task.id}
                                                name={task.name}
                                            />
                                )}
                        </li> */}
                    </div>       
            </div>
        </div>
    );
}

export default Content;