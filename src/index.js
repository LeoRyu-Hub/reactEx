import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock'
import CommentList from './chapter_05/CommentList';
import Accomodate from './chapter_07/Accomodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import Mailbox from './chapter_08/Mailbox';
import LandingPage from './chapter_09/LandinPage';
import AttendaneBook from './chapter_10/AttendaceBook';
import SignUp from './chapter_11/SignUp';
import Cal from './chapter_12/Cal';
import Ex01 from './Ex/Ex01';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ex01 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
