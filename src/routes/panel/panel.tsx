//import axios from 'axios';
import { useState, useEffect } from "react";
import ChatPanel from "./components/ChatPanel.tsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { Link } from 'react-router-dom';

export default function Panel() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Loading...");
  useEffect(() => {
    import("./panel.scss");
    import("./panelFunctions.tsx");
    axios
      .get(
        `http://${import.meta.env.VITE_BACKEND_IP}:${
          import.meta.env.VITE_BACKEND_PORT
        }/api/v0/users/getInfo/${localStorage.getItem("userId")}`
      )
      .then((res) => {
        if (res.status == 200) {
          setUsername(res.data.username);
        }
      })
      .catch(() => {
        localStorage.removeItem("jwt");
        localStorage.removeItem("userId");
        navigate("/login");
      });
  }, []);

  return (
    <>
      <div className="servers">
        {ServerComponent({ imgUrl: "/img/JoltAmpIco.png", main: true })}
        {ServerComponent({
          imgUrl: "https://via.placeholder.com/50",
          active: true,
        })}
        {ServerComponent({ imgUrl: "https://via.placeholder.com/50" })}
        {ServerComponent({ imgUrl: "https://via.placeholder.com/50" })}
      </div>

      <div className="sidebar">
        <div className="top-section">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Friend's Name" />
            <button type="submit">
              <i className="bx bx-search"></i>
            </button>
          </form>
        </div>
        <hr />
        <div className="sidebar-options">
          <button>
            <i className="bi bi-person-add"></i> Friends
          </button>
          <button>
            <i className="bi bi-gem"></i> Nitro
          </button>
          <button>
            <i className="bi bi-shop"></i> Shop
          </button>
        </div>
        <hr />
        <div className="friends-list">
          <div className="friend-item">
            <img src="https://via.placeholder.com/40" alt="Friend" />
            <div className="friend-info">
              <span className="nickname">User Nickname</span>
              <span className="description">Description...</span>
            </div>
          </div>
          <div className="friend-item">
            <img src="https://via.placeholder.com/40" alt="Friend" />
            <div className="friend-info">
              <span className="nickname">Very long user nickname</span>
              <span className="description">
                Very long user description what goes out of container
              </span>
            </div>
          </div>
        </div>

        <div className="user-profile">
          <img
            src="https://via.placeholder.com/50"
            alt="Avatar"
            className="user-avatar"
          />
          <div className="user-info">
            <h3>{username}</h3>
          </div>
          <div className="user-status-icons">
            <button>
              <i className="bi bi-mic"></i>
            </button>
            <button>
              <i className="bi bi-headphones"></i>
            </button>
            <button>
              <i className="bi bi-gear"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="main-content">{ChatPanel()}</div>
    </>
  );

  function ServerComponent(params: {
    imgUrl: string;
    main?: boolean;
    active?: boolean;
  }) {
    return (
      <div
        className={`${params.main ? "main-icon" : "server-icon"} ${
          params.active ? "active" : ""
        }`}
      >
        <img src={params.imgUrl} alt="Friends" />
      </div>
    );
  }
}
