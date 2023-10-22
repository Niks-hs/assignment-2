import { useState, useEffect } from 'react';  // import useEffect
//import Content from './components/Content';
// import Task from './components/Content';
import './App.css';

function Contact({contact, onDelete, props2}){
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const[info, setInfo] = useState([{type: "", number: ""}]);
    const[type, setType] = useState("");
    const[number, setNumber] = useState("")   

    function onChangeInfoTest(event) {
        const { name, value } = event.target;
        setInfo((prevInfo) => ({
          ...prevInfo,
          [name]: value
        }));
    }

    function AddTest2(event) {
        event.preventDefault();
    
        const newContact = { type: info.type, number: info.number };
    
        // Add the new contact to the state or do whatever you need with it
        //console.log(newContact);
        contact.contacts.push(newContact);
    
        // Clear the form inputs
        setInfo({ type: "", number: "" });
    }

    function onChangeInfo(event){
        const{type, value} = event.target;
        setInfo({...info, [type]: value});
 //       setNewNumber(event.target.value);
    }

    // const[newNumber, setNewNumber] = useState("");
    // function onChangeNumber(event){
    //     setNewNumber(event.target.value);
    // }

    function ChangeTest(){
        setInfo(...info, {[type]: type, [number]: number});
    }

    function TypeAdd(event){
        setType(...type, event.target.value);
    }

    function numberAdd(event){
        event.preventDefault();
        setNumber(...number, event.target.value);
    }

    function AddTest(event){
        ChangeTest();
        event.preventDefault();
        contact.contacts.push(info);
        setInfo({type: "", number: ""});
    }

    
    function onAddInfo(event) {
        event.preventDefault();
        contact[0].push(info);
        //props2(info);
        setInfo({type: "", number: ""});
    }
    // function onAddInfo(event){
    //     event.preventDefault();
    //     props(info);
    //     setInfo({type: "", number: ""});
    //     // props.setPhoneType(phones => [...phones, {id: phones.length+1, type: newType}])
    //     // props.setPhoneNumber(phones => [...phones, {id: phones.length+1, number: newNumber}])
    // }

    return (
        <div>
        <h3 onClick={handleExpand}>{contact.name}
        <button type = "button" onClick={onDelete}>Delete</button>
        </h3>
        {isExpanded && (
            <div style={{
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                }}>
                <form style={{display:'flex', justifyContent: 'space-between'}} onSubmit={AddTest2}>
                    <input type="text" name="type" placeholder="Phone Type" value={info.type} onChange={onChangeInfoTest}/>
                    <input type="text" name="number" placeholder="Phone Number" value={info.number} onChange={onChangeInfoTest}/>
                    <button type = "submit">Add</button>
                </form>
                


                    
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
    // function onClick(){
    //     props.setNewTask(tasks => tasks.filter(task => task.id !== props.id))
    // }

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
                {/* {props.name}           */}
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

function Content() {
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
        setNewTask([...nTask, newTask]);
    }

    function onClickInfo(info2){
        setNewTask["Nikhil"].contacts.push(info2);
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
                        {nTask.map((nTask, index) => (
                            <Contact key={index} contact={nTask} onDelete={handleDelete} props2={onClickInfo}/>
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
//     const [tasks, setTasks] = useState([]);
//     // const [phoneType, setPhoneType] = useState([1]);
//     // const [phoneNumber, setPhoneNumber] = useState([2]);

//     return (
//         <div className='page'>
//             <Content tasks={tasks} setTasks={setTasks}/>
//             {/* <Task newType={phoneType} newNumber={phoneNumber} setPhoneType={setPhoneType} setPhoneNumber={setPhoneNumber}/> */}
//         </div>
//     );
// }

// function Box() {
//     return(
//         <div style={{border: '1px solid #000', textAlign: 'center'}}>
//             Contacts
//         </div>
//     )
// }
}

export default Content;
//export default Box;