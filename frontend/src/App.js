import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
	const [text, setText] = useState();
	const api = `http://localhost:8000`;
 	useEffect(() => {
		axios.get(`${api}/api/teste`).then(res => {
			const teste = res.data;
			console.log(teste);
			setText(teste);
		});
 	});
	return (
	<div className="App">
	  <header className="App-header">
	    <img src={logo} className="App-logo" alt="logo" />
	    <p>
	      	{text}
	    </p>
	    <a
	      className="App-link"
	      href="https://reactjs.org"
	      target="_blank"
	      rel="noopener noreferrer"
	    >
	      Learn React
	    </a>
	  </header>
	</div>
	);
	}

export default App;
