import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='signup member-form'>
    <div className='form-logo'>
      SMS Study
    </div>
    <div className='form-title'>
      회원가입
    </div>
    <form className='signup-form'>
      <input placeholder='아이디'></input>
      <input placeholder='이메일'></input>
      <input placeholder='비밀번호'></input>
      <input placeholder='비밀번호 확인'></input>
      <input placeholder='이름'></input>
      <input placeholder="(전화번호) 010-xxxx-xxxx"></input>
      <div>
        <input type="checkbox" />새기능, 이벤트 홍보, 알림 수신(선택)
      </div>
      <button> 회원가입 </button>
    </form>
    <div className='signup-absence'>      
        <span>이미 계정이 있으세요<Link to='/member/login'> 로그인</Link></span>
    </div>
  </div>
  )
}

export default Signup;