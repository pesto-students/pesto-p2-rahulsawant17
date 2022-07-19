import { useState } from "react"
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Tab from "./components/Tab";
import Spin from "./components/Spinner";

function HelloWorld() {
  let start = "https://api.shrtco.de/v2/shorten?url="
  let [shortUrl, setShortUrl] = useState("")
  let [longUrl, setLongUrl] = useState("")
  let [shortUrlList, setShortUrlList] = useState([])
  let [longUrlList, setLongUrlList] = useState([])
  let [st, setSt] = useState(1)
  let [visible, setVisible] = useState("no-error")
  let [error, setError] = useState("")


  function shorten() {
    let lurl = document.getElementsByClassName("longurl")[0].value
    setLongUrl(lurl)
    let url = start + lurl
    async function fe(url) {
      setSt(0)

      let response = await fetch(url)
      let data = await response.json()
      setSt(1)
      if (data.ok) {
        let srl = data.result.short_link
        setShortUrl(srl)
        setLongUrlList((old) => {
          if(!longUrlList.includes(lurl)){
            return [...old, lurl]
          }
          return [...old]
        })
        setShortUrlList((old) => {
          if(!shortUrlList.includes(srl)){
            return [...old, srl]
          }
          return [...old]
        })


      } else {
        setShortUrl('')
        setVisible("error")
        setError(data.error)

      }

    }

    fe(url)

  }
  function copy() {
    navigator.clipboard.writeText(document.getElementsByClassName("shorturl")[0].value);

  }
  function clear() {
    document.getElementById("shorturl").value = '';
    document.getElementById("longurl").value = '';
  }
  return (<>
  <div className="nav"> <div className="home">Home</div><div className="contact" href="/contactus" >Contact Us</div>

  <a className="home" href="/home/" onclick="">Home</a>
  <a className="contact" href="/contact-us/" onclick="">Contact Us</a>
   </div>
    <div className="outer">

      <div className="main">

        <h1 className="hs1">URL Shortner </h1>
        <div className="container">
          Enter a URL to shorten
          <div ><input id="longurl" className="longurl" type="text"></input> <button onClick={shorten}>Shorten</button>
            <button onClick={clear}>Clear</button>    </div>
        </div >

        <div className="short" ><input id="shorturl" className="shorturl" type="text" value={shortUrl} disabled></input>  <button onClick={copy}>Copy</button>     </div>
        {st ? <></> : <Spin />}

      </div>

      <Tab long={longUrlList} short={shortUrlList} />

      <div className={` ${visible}`}>

        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        ><div className="msg" >{error} <div><button onClick={() => { setVisible("no-error") }}>Close</button></div></div>
        </Backdrop>

      </div>
    </div>
  </>

  );
}
export { HelloWorld };
