import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/quizlogo.png';

function LandingPage() {
  return (
    <div className="container2">
      <img src={logo} alt="" /><br />
      <p className="text-secondary">Pick any one to continue</p><br />
      <div className="box shadow p-5">
        <div className="d-flex justify-content-evenly mt-3">
          <p className='ms-5 mt-3 me-5 fw-bolder'>REACT</p>
          <Link className='link1' to="/quizoption"><button className="btn btn-success ms-5 mt-2">
            Start Quiz
          </button></Link>
        </div>
        <div className="d-flex justify-content-around mt-3">
          <p className='ms-5 mt-3 me-5 fw-bolder'>OOPS</p>
          <Link className='link1' to="/oops"><button className="btn btn-success sbt2 mt-2">Start Quiz</button></Link>
        </div>
        <div className="d-flex justify-content-around mt-3 mb-3">
          <p className='ms-5 mt-3  fw-bolder'>JavaScript</p>
          <Link className='link1' to="/js"><button className="btn btn-success sbt mt-2">Start Quiz</button></Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
