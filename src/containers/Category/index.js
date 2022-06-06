import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import List from './List';
const Category = ({ match }) => {
    // useEffect(() => {
    //     console.log(match)

    //   }, [match])
  return (
    <div className='category'>
        <h1>카테고리</h1>
        {match.isExact ? 
        <Route path={`${match.path}`} component={List} />: 
        <Route path={`${match.path}/:id`} component={List} />}
    </div>
  )
}

export default Category;