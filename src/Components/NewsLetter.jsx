import React from 'react'
import {IoMdSend} from "react-icons/io"
import "./NewsLetter.css"

const NewsLetter = () => {
  return (
  <div className="news-container">
    <h1 className='news-title'>NewsLetter</h1>
    <div className="news-desc">Get timely upadates of new products Subscribe our news letter.</div>
     <div className="input-container">
        <input type="text" placeholder='Your Email.....' />
       <button>
        <IoMdSend size={"25px"}/>
       </button>
     </div>
  </div>
  )
}

export default NewsLetter