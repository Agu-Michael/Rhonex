import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './Resources/css/app.css'
const App = (props)=>{

        return(
            <BrowserRouter>
            
                <Routes {...props}/>
            </BrowserRouter>
        )

}
// 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



