
import './App.css';
import { useState, useEffect } from 'react';
import GitHubCard from './components/GitHubCard';


function App() {
 

const [myName, setMyName] = useState('')
const [imageSrc, setImageSrc] = useState('')

useEffect( ()=>{
  
  fetch('https://api.github.com/users/LuckyShmucky')
  .then(res => res.json())
  .then(data =>{
    setMyName(data.name)
    setImageSrc(data.avatar_url)
  })

 }, [])



  return (
    <div className="App">
      <h2 titlef="name-header">{myName}</h2>
      <GitHubCard imageSrc={imageSrc}/>
    </div>
  );
}

export default App;
