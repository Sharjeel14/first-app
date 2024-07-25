import React, { useState } from 'react'

export default function TextForm(props) {


  const [text, setText] = useState('');
  // const [showText, setshowText] = useState(false);
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    if (newText.length > 0) {
      props.showAlert('Converted to UpperCase', 'success')
    }
    // setshowText(true);
  }
  const handleLowClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText)
    if (newText.length > 0) {
      props.showAlert('Converted to LowerCase', 'success')
    }
    // setshowText(true);
  }
  const handleOnChangeClick = (event) => {
    setText(event.target.value)

  }
  const handleSentenceClick = () => {
    let lowerCaseText = text.toLocaleLowerCase();

    // Split the text into an array of sentences
    let sentences = lowerCaseText.split('. ');

    // Capitalize the first letter of each sentence
    let newText = sentences.map(sentence => {
      // Remove leading and trailing spaces
      sentence = sentence.trim();
      // Capitalize the first letter
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }).join('. '); // Join the sentences back together with a period and space
    // Update the state with the new text
    setText(newText);
    if (newText.length > 0) {
      props.showAlert('Converted to Sentence', 'success')
    }
  }

  return (
    <>
      <div className='container my-3' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows='8' column='20' value={text} onChange={handleOnChangeClick} placeholder='' style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary m-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleSentenceClick}>Sentence Case</button>
      </div>

      <div className="container my-4" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>Your text Summary</h2>
        <p>{text.trim().length > 0 ? text.trim().split(" ").length : text.trim().split(" ").length - 1} words and {text.trim().length} characters</p>
        <p>{text.trim().length > 0 ? 0.008 * text.trim().split(" ").length : 0} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter Something to preview it here'}</p>
      </div>
    </>
  )
}
