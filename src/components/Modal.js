import React from 'react';
import '../styles/App.css';

function Modal({state,setstate,title,desc}){
console.log(title,desc);
    return (
        <>
            <button onClick={()=>setstate(!state)}>ShowModal</button>
            {state && <div id="childern">
                <h2>{title}</h2>
                <p>{desc}</p>
                </div>
                }
        </>
    )
}
export default Modal;