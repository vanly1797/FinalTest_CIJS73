import './App.css'
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");
  const [linkShorten, setLinkShorten] = useState();
  const [typeLink, setTypeLink] = useState("shrtco.de");
  const [isLoading, setIsLoading] = useState(false);

  const handleClickShorteningLink = async (link) => {

    try {
      setIsLoading(true);
      await axios.get('https://api.shrtco.de/v2/shorten', {
        params: {
          url: link
        }
      })
        .then((respone) => {
          switch (typeLink) {
            case "9qr.de":
              setLinkShorten(respone.data.result.short_link2)
              break;
            case "shiny.link":
              setLinkShorten(respone.data.result.short_link3)
            default:
              setLinkShorten(respone.data.result.short_link)
              break;
          }
          console.log(respone.data.result);
        })
      setError(null);
      setIsLoading(false);
    }
    catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }

  return (
    <div className="App">
      <div className='box-total'>
        <h1>Link Shortener</h1>
        <div className='box-input'>
          <span>Enter a Link:</span>
          <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} placeholder="example.com" />
          <button type="submit" onClick={() => { handleClickShorteningLink({ link: input }) }}>{'>'}</button>
          {isLoading && <p>Loading ...</p>}
        </div>
        <div className='box-require'>
          <span>Short domain:</span>
          <button type="submit" onClick={() => { setTypeLink("shrtco.de") }} style={typeLink === "shrtco.de" ? { backgroundColor: '#21253F', color: 'white' } : { backgroundColor: '#E1E1E1', color: 'black' }}>{'shrtco.de'}</button>
          <button type="submit" onClick={() => { setTypeLink("9qr.de") }} style={typeLink === "9qr.de" ? { backgroundColor: '#21253F', color: 'white' } : { backgroundColor: '#E1E1E1', color: 'black' }}>{'9qr.de'}</button>
          <button type="submit" onClick={() => { setTypeLink("shiny.link") }} style={typeLink === "shiny.link" ? { backgroundColor: '#21253F', color: 'white' } : { backgroundColor: '#E1E1E1', color: 'black' }}>{'shiny.link'}</button>
        </div>
        {error && (
          <div className='box-error'>Error - Please enter a valid Link</div>
        )}
        <div>
          <p>With this free Link Shortener you can make Links shorter and easier to remember. Just enter a Link into the form and click on the above Button to generate a short Link. When visiting the short-Link, the short-Link will immediately redirect you to the long Link.</p>
        </div>
      </div>
      {linkShorten && (
        <div div className='box-result-link'>
          <span style={{ fontSize: 28 }}>Link generated!</span>
          <h1 style={{ color: '#23D160' }}><b><u>{linkShorten}</u></b></h1>
        </div>
      )}

    </div >
  );
}

export default App;
