import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const List = ({ match }) => {
  return (
    <div className='qna-list'>
        <h2>QNA 리스트</h2>
    </div>
  )
}

export default List;