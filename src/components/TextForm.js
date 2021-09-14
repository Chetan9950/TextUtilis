import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    
    const handlelowClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
    const handleOnChange = (event)=>{
        // console.log("onChange");
        setText(event.target.value)
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copy to cilpborad","success");
    } 
    const handleClear = () => {
        setText("");
        props.showAlert("Clear All text ","success");
    } 
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove the extra sapace in yours text","success");
    }
    const [text, setText] = useState('Enter text here')

    return (
        <>
        <div className = "container" style={{color:props.mode==='light'?'black':'white'}}>
            <h2 >{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'gray', color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upprecase</button>
            <button className="btn btn-primary  mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary  mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary  mx-2" onClick={handleClear}>Clear text</button>
            <button className="btn btn-primary  mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h2 >Your text summary</h2>
            <p >{text.split(" ").length} words and {text.length} characters</p>
            <p >{0.008 * text.split(" ").length} Minutes read</p>
            <h2 >Perview</h2>
            <p >{text.length>0?text:'Enter something in the textbox above to preview it have'}</p>
        </div>
        </>
    )
}
