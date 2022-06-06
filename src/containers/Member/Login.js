import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login member-form'>
      <div className='form-logo'>
        SMS Study
      </div>
      <div className='form-title'>
        로그인
      </div>
      <form className='login-form'>
        <input placeholder='아이디/이메일'></input>
        <input placeholder='비밀번호'></input>

        <button> 로그인 </button>
      </form>
      <div className='login-absence'>
        <div>
          <input type="checkbox" />로그인 상태 유지
        </div>
        <div>
          <span><Link to='/member/resetpassword'>비밀번호 재설정</Link></span>
          <span><Link to='/member/signup'>회원가입</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Login;