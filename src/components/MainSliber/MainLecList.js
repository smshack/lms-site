import React from 'react'
import {
  Link
} from "react-router-dom";

const MainLecList = () => {
  const cateList =[
    
  ]
  return (
   <main className='main-list-box'>
     강의 리스트
     <div>프론트 엔드</div>
     <div>백엔드</div>
     <div>서버</div>
     <div>프로그래밍 언어 기초</div>
     <div>도커 - 쿠버네티스</div>
   </main>
  )
}

export default MainLecList;