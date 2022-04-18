import React,{useEffect,useState} from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Navbar from './components/Navbar';
import {getMatches} from "./api/Api";
import MyCard from './components/MyCard';

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
    .then((data) =>{
       setMatches(data.matches);
       console.log(data.matches);
    })
    .catch(error=>alert("Colud not load matches"));
  },[]);
  return (
    <div className="App">
      <Navbar />
     <h1>ScOre for SUre</h1>
     <Grid container>
       <Grid sm ="3"></Grid>
     <Grid sm = "6">
     {
       matches.map((match)=>(
         <MyCard key={match.unique_id} match={match} />
       ))
     }
     </Grid>
     </Grid>
    </div>
  );
}

export default App;
