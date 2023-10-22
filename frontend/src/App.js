import { useState, useEffect } from 'react';  // import useEffect
import './App.css';

function Contact({contact, onDelete}){
    const [isExpanded, setIsExpanded] = useState(false);

    function handleExpand(){
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

    return (
        <div style={{border: '1px solid #000',
        borderRadius: '5px', padding: '4px'}}>
            <div>
                    <li style={{listStyleType:'none', display: 'flex', 
                        justifyContent: 'space-between',}} onClick={handleExpand}>
                        {contact.name}
                    <button style={{
                        backgroundColor: 'red', 
                        color: 'white',
                        border: 'none',
                        padding: '5px 5px',
                        borderRadius: '5px', opacity: 0.7}}
                    type = "button" onClick={onDelete}>Delete</button></li>
            </div>
            <div>
                        <hr />
            </div>
                        
            {isExpanded && (
                <div>
                    <li style={{listStyleType:'none', padding: '5px'}}>
                        <form style={{display:'flex', justifyContent: 'space-between'}} onSubmit={AddTest2}>
                            <input type="text" name="type" placeholder="Phone Type" value={info.type} onChange={onChangeInfoTest}/>
                            <input type="text" name="number" placeholder="Phone Number" value={info.number} onChange={onChangeInfoTest}/>
                            <button type = "submit">Add</button>
                        </form> 
                    </li>
                    <li style={{listStyleType:'none', padding: '5px', border: '1px solid' }}>
                        <form style={{display:'flex', justifyContent: 'space-between'}} >
                            <li>Type</li>
                            <li>Number</li>
                            <li>Action</li>
                        </form> 
                    </li>           

                    {contact.contacts.map((item, index) => (
                            <li style={{listStyleType:'none', padding: '5px', border: '1px solid'}}>
                                <form key = {index} style={{display:'flex', justifyContent: 'space-between'}}>
                                    <li>{item.type}</li>
                                    <li>{item.number}</li>
                                    <li><button style={{
                                        backgroundColor: 'red', 
                                        color: 'white',
                                        border: 'none',
                                        padding: '5px 5px',
                                        borderRadius: '5px', opacity: 0.7}}
                                        onClick={onDelete}>Delete</button></li>
                                </form>
                            </li>
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
        <div style={{padding: '10px'}}>
            <div >
            <form onSubmit={onClickAdd} >
                <p>
                    <input name="name" value={contact.name} 
                    onChange={onChangeContact} placeholder="Name" />
                </p>
                <button type="submit" style={{
                    backgroundColor: 'green', 
                    color: 'white',
                    border: 'none',
                    padding: '5px 5px',
                    borderRadius: '5px'}}>
                    Create Contact</button>
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
                    <div style={{ 
                        textAlign: 'center', 
                        width: '500px', 
                        border: '1px solid #000',
                        borderRadius: '5px',
                        padding: '5px'}}>
                        <h2>Contacts</h2>
                        <Task props = {onClick} />

                        {nTask.map((nTask, index) => (
                            <Contact key={index} contact={nTask} onDelete={handleDelete} />
                        ))}
                    </div>                          
            </div>
            <li style={{opacity: 0.7, padding: '10px', fontSize: '12.5px'}}>
                Click a contact to view associated phone numbers</li>
            <li style={{opacity: 0.7, padding: '10px', fontSize: '12.5px'}}>
                Show Stats</li>
        </div>
    );
}

export default Content;