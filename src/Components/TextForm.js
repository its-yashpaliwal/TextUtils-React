import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        
        setText(event.target.value);
    }
    const [text, setText] = useState('');



    return (
        <>
        <div className='container'>
            <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control " style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LoweCase</button>
        </div>
        <div className="container my-5">
            <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Your text summary</h2>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.split(" ").length} words, {text.length} characters</p>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.split(" ").length*0.008} Minutes read</p>
        </div>
        
        
        </>
    
  )
}
