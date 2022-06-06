import React from 'react'
import {
  Link
} from "react-router-dom";

const Header = () => {
  return (
    <header>
      {/* 헤더 로고/ 검색창/ 로그인-회원가입 버튼 */}
      <div className='header-main'>
        {/* 헤더 로고 */}
        <div className='header-logo'>
          로고로고
          <img className='log-image' href=""></img>
        </div>
        {/* 검색창 */}
        <div className='header-search'>
          검색창
          <input>
          </input>
        </div>
        {/* 로그인- 회원가입 */}
        <div className='hd-member-link'>
          <span><Link to='/member/login'>로그인</Link></span>
          <span><Link to='/member/signup'>회원가입</Link></span>
        </div>

      </div>
      {/* 헤더 로고/ 검색창/ 로그인-회원가입 버튼 */}
      {/* 헤더 네비게이션 */}
      <nav className='header-nav'>
          <div className='nav-con'>
            <Link to="/">Home</Link>
          </div>
          <div className='nav-con'>
            <Link to="/notice">공지사항</Link>
          </div>
          <div className='nav-con'>
            <Link to="/qna">QNA</Link>
          </div>
          <div className='nav-con'>
            <Link to="/category">카테고리</Link>
          </div>
      </nav>
      {/* 헤더 네비게이션 */}
    </header>
  )
}

export default Header;