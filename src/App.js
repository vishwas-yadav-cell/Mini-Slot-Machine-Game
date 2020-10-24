import React,{useState} from 'react';
import ValueGiver from './components/valueGiver';

const App = () => {
    const [actVal,setActVal] = useState(<h1>Let's press the button to play{'🙂'}</h1>);

    return (
        <>
            <h1 className="heading_style">{'🎰'} Welcome to{" "}
                <span style={{ fontWeight: 'bold' }}>Slot machine game
            </span>
                {' 🎰'}
            </h1>

            <div className="main_div">
                {actVal}
            </div>

            <button onClick={()=>{setActVal(ValueGiver)}}>Click me to play!</button>
        </>
    );
}

export default App;