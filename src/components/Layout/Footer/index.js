import React from 'react'
import {
  Link
} from "react-router-dom";


const Footer = () => {
  return (
    <footer className='footer'>
      {/* 도움말 링크 */}
      <div className='footer-top'>
        <span>도움이 필요하신가요</span>
        <span>강의자 도움말</span>
        <span>수강자 도움말</span>
        <span>강의자 되기</span>
      </div>
      {/* 도움말 링크 */}
      {/* 풋터 내용 - 로고 / 내용/ 관련 링크 리스트 */}
      <div className='footer-main'>
        <div className='footer-logo'>풋터 로고<img></img></div>
        <div className='footer-con'>풋터 내용 상호 주소 사업자등록번호 번호</div>
        <div className='footer-me-link'>
            <div><a href='https://github.com/smshack' target='_blank'>깃</a></div>
            <div><a href='https://northern-breath-ec3.notion.site/01ad859d32384a36a9fa34035180149c?v=239d09c3c09e44ac9ba4173e9a5df1a7' target='_blank'>노션</a></div>
            <div><a href='https://hub.docker.com/search?q=smshack' target='_blank'>도커허브</a></div>           
        </div>
      </div>
      {/* 풋터 내용 - 로고 / 내용/ 관련 링크 리스트 */}
      {/* 풋터 아래 */}
      <div className='footer-bottom'>
        <div className='copy-right'>
          SMS study inc.All Rights Reserved.
        </div>
        <div className='privacy-role'>
            <div><Link to='/member/term'>이용약관</Link></div>
            <div><Link to='/member/privacy'>개인정보처리방침</Link></div>
        </div>
      </div>

    </footer>
  )
}

export default Footer;