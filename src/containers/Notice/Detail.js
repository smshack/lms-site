import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Detail = ({ match }) => {
  return (
    <div className='notice-detail'>
        <h2>공지사항 상세</h2>
    </div>
  )
}

export default Detail;