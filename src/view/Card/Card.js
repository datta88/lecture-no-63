import './Card.css';

import { useState ,useEffect } from 'react';

export const Heading = () => {
    useEffect (() => {
        console.log('this is card');
    });
    return(
        <>
            <div className='card-contener'>
                <h1>Say Hello</h1>
            </div>
        </>
    ) 
}
export default function Card({img , title , text}){
    const [conter , setCount]  =useState(0);

    useEffect(() => {
        console.log(`count : ${conter}`);
    },[conter]);


function incre(){
    setCount(conter + 1);
}
function decre(){
    setCount(conter - 1);
}

return(
    <>
    <div className='div-card'>
        <img src={img} alt='React Logo' className='img' />
        <h2>{title}</h2>
        <b>{text}</b><br/><br/>
        <b>Rs .799 /-</b><br/><br/>
       <div className='div-img'> 
       <button onClick={incre} className='button'>+</button>
        <h3>{conter}</h3>
        <button onClick={decre} className='button' >-</button>
       </div>
    </div>
    </>
)
}
