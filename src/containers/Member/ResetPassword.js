import React from 'react'

const ResetPassword = ({history}) => {
  const goBack = () => {
    //이전 페이지로 이동 
    history.goBack();
  };
  const goLogin = () => {
    //해당 주소로 이동
    history.push('/member/login');
  };
  return (
    <div className='resetpassword member-form'>
      <div className='form-logo'>
        SMS Study
      </div>
      <div className='form-title'>
        비밀번호 재설정
      </div>
      <form className='resetpassword-form'>
        <input placeholder='이메일'></input>
      </form>
      <div className='resetpassword-absence'>
        <button onClick={goLogin}>
          로그인으로 돌아가기
        </button>
        <div>
          <span><button>인증메일 전송</button></span>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword;