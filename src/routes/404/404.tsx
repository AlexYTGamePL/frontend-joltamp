//import axios from 'axios';
import { useEffect } from "react";
//import { Link } from 'react-router-dom';

export default function Site404() {
  useEffect(() => {
    import("./404.css");
  }, []);

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="logo.png" alt="JoltAMP logo" />
        </div>
        <h1>404</h1>
        <h2>ALIENS STOLE THE PAGE?</h2>
        <p>
          This is not what you were looking for, right? Maybe a UFO beamed it
          up... Or it's hiding under your bed. Either way, we couldn't find it.
          Here are a few pages that might help you get back on track:
        </p>
        <div className="links">
          <a href="/">Status Page</a> |<a href="#">@JoltAMP</a> |
          <a href="#">Support</a>
        </div>
        <div className="robot">
          <img src="robot.png" alt="Robot image" />
        </div>
      </div>
    </>
  );
}
