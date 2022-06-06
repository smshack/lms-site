import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Detail from './Detail';
import List from './List';
const QNA = ({ match }) => {
  return (
    <div className='qna'>
        <h1>QNA</h1>
      <Route exact path={match.path} component={List} />
      <Route path={`${match.path}/:id`} component={Detail} />
    </div>
  )
}

export default QNA;