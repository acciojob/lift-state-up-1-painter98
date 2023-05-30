import React from 'react';

function Modal({state,setstate,title,desc}){
console.log(title,desc);
    return (
        <>
            <button onClick={()=>setstate(!state)}>ShowModal</button>
            {state && <div id="childern">
                <h3>{title}</h3>
                <p>{desc}</p>
                </div>
                }
        </>
    )
}
export default Modal;