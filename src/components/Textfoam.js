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
    const onchangedclear = ()=>{
        let newtext = "";
        settext(newtext);
    }
    const onchangedcopy = ()=>{
        text.select();
        
        navigator.clipboard.writeText(text.value);
    }
    return (
        <div className="container-fluid">
            <h1 heading=""> Enter Text to Convert Lowercase to Upercase</h1>
            <div className="mb-3">
            <textarea className="form-control " rows="8" value={text} onChange={onchangedhandler}></textarea>
           <div className="conatainer mx-3">
           <button className="btn btn-primary mx-3" onClick={convertupperhandler}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={convertupperhandler}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-3" onClick={onchangedclear}>clear text</button>
            <button className="btn btn-primary mx-3" onClick={onchangedcopy}>copy Text</button>
           </div>
         </div>
                     <div className="conatiner my-3">
                     <h2>Your Text Summary</h2>
                     <p>{text.split(" ").length} words and {text.length} Characters</p>
            </div>
        </div>
    )
}
