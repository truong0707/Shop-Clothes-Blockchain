import React, { useState } from 'react';
import "../../src/App.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from '../store/redux/actions/userActions';
// import { useAppDispatch } from '../store/redux/Store';
import { StateStore } from '../App';
// import LoadingButton from '@mui/lab/LoadingButton';
import ErrorMessage from '../components/ErrorMessage';
import BackdropProgressLoading from '../components/BackdropProgressLoading';

interface TypeObjectInput {
  email?: string,
  password?: string,
}
interface ErrorSubmit {
  email?: string,
  password?: string,
}

export default function Login() {
  const [inputs, setInputs] = useState<TypeObjectInput>({});
  const [errors, setErrors] = useState<ErrorSubmit>({});

  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;

    setInputs(state => ({ ...state, [nameInput]: valueInput }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(errors);
    e.preventDefault();

    let errorSubmit: ErrorSubmit = {};
    let check = false;

    // validate user
    if (inputs.email === undefined || inputs.email === '') {
      errorSubmit.email = "Bạn vui lòng nhập email của mình !";
      setErrors(errorSubmit);
      check = false;
    } else {
      setErrors(errorSubmit);
      check = true;
    }

    // validate password
    if (inputs.password === undefined || inputs.password === '') {
      errorSubmit.password = "Bạn vui lòng nhập password của mình !";
      setErrors(errorSubmit);
      check = false;
    } else {
      setErrors(errorSubmit);
      check = true;
    }

    const loginPromise = login(inputs.email, inputs.password);
    if (check) {
      loginPromise(dispatch);
      // dispatch(login(email, password)) => lỗi

    } else {
      alert('đăng nhập thất bại !')
    }
  }

  return (
    <div style={{ paddingTop: "80px" }} className='body_form'>
      <div className="wrap_form">
        <div style={{ color: '#90C43C' }} className="title">ĐĂNG NHẬP</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">User Name</span>
                <input onChange={handleInputChange}
                  name="email"
                  type="text"
                  placeholder="Enter your username"
                  />
              </div>
              {errors.email === '' || errors.email === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', marginBottom: '8px', fontSize: '14px' }}>{errors.email}</p>}

              <div className="input-box">
                <span className="details">Password</span>
                <input
                  name="password"
                  onChange={handleInputChange}
                  type="password"
                  placeholder="Enter your password"
                  />
              </div>
            </div>
            {errors.password === '' || errors.email === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', padding:0, fontSize: '14px' }}>{errors.password}</p>}

            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: "200px", background:'pink', margin: "auto" }} className="gender-details">
              <p>gg</p>
              <p>gitthub</p>
              <p>dsd</p>
            </div>

            <div className="button">
              <input type="submit" value="ĐĂNG NHẬP" />

            </div>
          </form>
        </div>
      </div >
    </div >
  )
}
