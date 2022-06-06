import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './Detail';

const List = ({ match }) => {
  const [category, setCategory] = useState('');
  useEffect(() => {
    console.log(match)
    switch (match.url.replace('/category','')) {
      case "":
        setCategory('전체')
        break;
      case "/programming":
        setCategory('프로그래밍')
        break;
      case "/business":
        setCategory('비즈니스')
        break;
      case "/design":
        setCategory('디자인')
        break;
      default:
        break;
    }
  }, [match])
  return (
    <div className='category-list'>
       {match.isExact && <h1>카테고리 리스트{category}</h1>}
      
      <Route path={`${match.path}/:id`} component={Detail} />
    </div>
  )
}

export default List;