import { useState, useEffect } from 'react';  // import useEffect
import Content from './components/Content';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);

    return (
        <div className='page'>
            <Content tasks={tasks} setTasks={setTasks}/>
        </div>
    );
}

// function Box() {
//     return(
//         <div style={{border: '1px solid #000', textAlign: 'center'}}>
//             Contacts
//         </div>
//     )
// }

export default App;
//export default Box;