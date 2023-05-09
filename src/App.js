// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import cellImage from './cell-phone-svgrepo-com.svg'

function App() {
  const [names, setNames] = useState([]);
  const [inputValue, setInputvalue] = useState('');
  return (
   <div className='flex'>
    <div  className='full-width'>
      <input value={inputValue} onChange={(e) =>setInputvalue(e.target.value)} type='name'/>
        <button onClick={() => {setNames([...names, inputValue]); setInputvalue('')}}>add</button>
    </div>
    <div className='mobilewrapper'>
    <img width={500} alt='mobile' src={cellImage} />
    <div className='float'>
      {names.map((name) => (<p>{name}</p>))}
    </div>
    </div>
   </div>
  );
}

export default App;
