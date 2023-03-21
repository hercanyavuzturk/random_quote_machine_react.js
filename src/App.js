import React, {useState,useEffect} from 'react';
import axios from "axios";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
 const [quote,setQuote] = useState("");
 const [author,setAuthor] = useState("");

 const getQuote = async () => {
  const response = await axios.get("https://api.quotable.io/random");
  setQuote(response.data.content);
  setAuthor(response.data.author);

 };

 useEffect(()=>{
  getQuote();
 },[]);



 return (
  <div id='quote-box'>
    <p id='text'>"{quote}"</p>
    <p id='author'>- {author}</p>
    <div id='buttons'>
    <a href="https://twitter.com/intent/tweet" id='tweet-quote' target={'_blank'}>
  <FontAwesomeIcon icon={faTwitter} />
     </a>
    <button id='new-quote' onClick={getQuote}>New Quote</button>
   
    

        
    </div>
   
    
  </div>
 );
};

export default App;
