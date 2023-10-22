import { useState, useEffect } from 'react';  // import useEffect
import './App.css';

function Contact({contact, onDelete, onDeleteInfo}){
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const[info, setInfo] = useState([{type: "", number: ""}]);

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
        contact.contacts.push(newContact);
        setInfo({ type: "", number: "" });
    }

    const handleDeleteInfo = (index) => {
        const infoDel = [...info];
        infoDel.splice(index, 1);
        setInfo(infoDel);
    };

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
                <button onClick={onDelete}>Delete</button>
                </div>
            ))}
            </div>
        )}
        </div>
    );
}

function Task({props}){
    
    const[contact, setContact] = useState({name: "", contacts: []});
    function onChangeContact(event){
        const{name, value} = event.target;
        setContact({...contact, [name]: value});
    }
    
    function onClickAdd(event){
        event.preventDefault();
        props(contact);
        setContact({name: "", contacts: []});
    }

    return(
        <div style={{border:'1px solid #000', padding: '10px'}}>
            <div style={{
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                }}>
            <form onSubmit={onClickAdd}>
                <input name="name" value={contact.name} onChange={onChangeContact} placeholder="Contact Name" />
                <button type="submit">Add Contact</button>
            </form>
                
            </div>
            <hr/>
        </div>
    );
}

function Content() {
    const[nTask, setNewTask] = useState([])
    //     {
    //         name: "Nikhil",
    //         contacts: [
    //             {type: "mobile", number: '12345'}
    //         ]
    //     }
    // ]);
    
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

    const handleDeleteInfo = (index) => {
        const newContacts = [...nTask];
        newContacts.contacts.splice(index, 1);
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

                        {nTask.map((nTask, index) => (
                            <Contact key={index} contact={nTask} onDelete={handleDelete} 
                            onDeleteInfo={handleDeleteInfo} props2={onClickInfo}/>
                        ))}
                    </div>       
            </div>
        </div>
    );
}

export default Content;