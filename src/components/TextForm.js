import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleReversetextClick = ()=>{
    let newtext = reverseString(text);
    setText(newtext);
  }

  const handleCopytextClick = () =>{
    console.log("I am Copy");
    let text = document.getElementById('myBox');
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpacetextClick = () =>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  }

  const handleCleartextClick= () =>{
    let newtext = '';
    setText(newtext);
  }

  const reverseString = (str)=>{
    let newString = "";
    for(let i = str.length -1;i>=0;i--){
      newString += str[i];
    }
    return newString;
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //text = "new text"; //Wrong way to change the state
  //   setText("new text"); //Correct way to change the state
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleReversetextClick}>
          Reverse Text
        </button>
        <button className="btn btn-primary m-2" onClick={handleCopytextClick}>
          Copy Text
        </button>
        <button className="btn btn-primary m-2" onClick={handleExtraSpacetextClick}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary m-2" onClick={handleCleartextClick}>
          Clear Text
        </button>
        
      </div>
      <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
