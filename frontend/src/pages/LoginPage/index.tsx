import React from 'react'
import AuthTemplate from '../../components/templates/AuthTemplate'
import loginlogo from '../../../public/assets/Images/login.svg'
import Login from '../../components/organisms/LoginPage';

const LoginPage = () => {
  return (
      <AuthTemplate src={loginlogo} RightComponent={<Login />} />
  );
}

export default LoginPage
