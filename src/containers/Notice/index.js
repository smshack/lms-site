import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Detail from './Detail';
import List from './List';
const Notice = ({ match }) => {
  return (
    <div className='notice'>
        <h1>공지사항</h1>
      <Route exact path={match.path} component={List} />
      <Route path={`${match.path}/:id`} component={Detail} />
    </div>
  )
}

export default Notice;