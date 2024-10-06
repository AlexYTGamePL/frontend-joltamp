//import axios from 'axios';

//import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WelcomeSite() {
  useEffect(() => {
    import("./welcome.css");
  }, []);

  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">JoltAMP</div>
          <div className="nav-buttons">
            <a href="/login" className="btn-nav">
              Login
            </a>
            <a href="/register" className="btn-nav">
              Register
            </a>
          </div>
        </div>
      </header>

      <div className="container">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can join communities, groups of friends, or people from
          around the world. JoltAMP makes conversations and meetings easy, fast,
          and always available when you need them. Just chat and have fun,
          wherever you are!
        </p>

        <div className="buttons">
          <a href="#" className="btn">
            Download for Windows
          </a>
          <a href="#" className="btn btn-primary">
            Open JoltAMP in your browser
          </a>
        </div>

        <img
          src="illustration.png"
          alt="JoltAMP illustration"
          className="illustration"
        />

        <div className="footer">
          <a href="#">Download</a>
          <a href="#">Premium</a>
          <a href="#">Community</a>
          <a href="#">Support</a>
          <a href="#">Blog</a>
        </div>
      </div>
    </>
  );
}
