import React, {useState} from 'react'

export default function Textfoam() {
    const [text,settext] = useState('enter text here');
    const convertupperhandler = ()=>{
        console.log("button is clicked");
        let newtext = text.toUpperCase();
        settext(newtext)
    }
    const onchangedhandler = (event)=>{
        console.log("Dummy");
        settext(event.target.value);
    }
    return (
        <div className="container-fluid">
            <h1 heading=""> Enter Text to Convert Lowercase to Upercase</h1>
            <textarea className="form-control" rows="8" value={text} onChange={onchangedhandler}></textarea>
            <button className="btn btn-primary" onClick={convertupperhandler}>Convert to UpperCase</button>
        </div>
    )
}
