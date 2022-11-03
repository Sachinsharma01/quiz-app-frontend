import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App he d-flex justify-content-center align-items-center">
            <div className="main">
                <Button className="bg-primary">
                    Click me!
                </Button>
            </div>
        </div>
    );
}

export default App;
