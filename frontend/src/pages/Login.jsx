import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from "react-router-dom";
import './css/Login.css';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Login = (props) => {
  const [text, setText] = useState('Loading...');
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${backendUrl}/api/auth/${params.providerName}/callback${location.search}`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })      
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('jwt', res.jwt);
        localStorage.setItem('username', res.user.username);
        setText('You have been successfully logged in. You will be redirected in a few seconds...');
        setTimeout(() => navigate.push('/'), 3000); // Redirect to homepage after 3 sec
      })
      .catch(err => {
        console.log(err);
        setText('An error occurred, please see the developer console.');
      });
  }, [navigate, location.search, params.providerName]);

  return <p>{text}</p>;
}

export default Login;
