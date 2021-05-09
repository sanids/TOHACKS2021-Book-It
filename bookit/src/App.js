import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './BookList';

function App() {

  const [url, setUrl] = useState('');
    /**
     * Get current URL
     */
    /* eslint-disable no-undef */
    useEffect(() => {
      const queryInfo = {active: true, lastFocusedWindow: true};

      chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
          const url = tabs[0].url;
          setUrl(url);
      });
  }, []);

  return (
    <div className="App">
       <BookList link={url}/>
    </div>  
  );
}

export default App;
