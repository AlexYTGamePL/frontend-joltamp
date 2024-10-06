//import axios from 'axios';
import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';

export default function Panel() {
    useEffect(() => {
        import('./panel.scss');
        import('./components.tsx');
        import('./panelFunctions.tsx');
        
    }, []);


    return (
        <>
            <div className="servers">
                <div className="main-icon">
                    <img src="/img/JoltAmpIco.png" alt="Friends" />
                </div>
                <div className="server-icon active">
                    <img src="https://via.placeholder.com/50" alt="Server 1" />
                </div>
                <div className="server-icon">
                    <img src="https://via.placeholder.com/50" alt="Server 2" />
                </div>
                <div className="server-icon">
                    <img src="https://via.placeholder.com/50" alt="Server 3" />
                </div>
            </div>

            <div className="sidebar">
                <div className="top-section">
                    <form>
                        <input type="text" placeholder="Friend's Name" required />
                        <button type="submit"><i className='bx bx-search'></i></button>
                    </form>
                    
                </div>
                <hr />
                <div className="sidebar-options">
                    <button><i className="bi bi-person-add"></i> friends</button>
                    <button><i className="bi bi-gem"></i> nitro</button>
                    <button><i className="bi bi-shop"></i> shop</button>
                </div>
                <hr />
                <div className="friends-list">
                    <div className="friend-item">
                        <img src="https://via.placeholder.com/40" alt="Friend" />
                        <div className="friend-info">
                            <span className='nickname'>User Nickname</span>
                            <span className='description'>Description...</span>
                        </div>
                    </div>
                    <div className="friend-item">
                        <img src="https://via.placeholder.com/40" alt="Friend" />
                        <div className="friend-info">
                            <span className='nickname'>Very long user nickname</span>
                            <span className='description'>Very long user description what goes out of container</span>
                        </div>
                    </div>
                    
                </div>

                <div className="user-profile">
                    <img src="https://via.placeholder.com/50" alt="Avatar" className="user-avatar" />
                    <div className="user-info">
                        <h3>joltAMP</h3>
                    </div>
                    <div className="user-status-icons">
                        <button><i className='bi bi-mic'></i></button>
                        <button><i className='bi bi-headphones'></i></button>
                        <button><i className='bi bi-gear'></i></button>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="chat-section">
                    <div className="chat-header">
                        <h3>Chat with John Pork</h3>
                        <div className="chat-header-icons">
                            <button className="header-icon"><i className='bx bx-phone'></i></button>
                            <button className="header-icon"><i className='bx bx-video'></i></button>
                        </div>
                    </div>
                    <hr />
                    <div className="chat-window">
                        <div className="chat-message">
                            <img src="https://via.placeholder.com/40" alt="Avatar" className="message-avatar" />
                            <strong>joltAMP</strong>
                            <p>Hi there!</p>
                        </div>
                        <div className="chat-message">
                            <img src="https://via.placeholder.com/40" alt="Avatar" className="message-avatar" />
                            <strong>John Pork:</strong>
                            <p>Hey!</p>
                        </div>
                    </div>
                    <form className="chat-input">
                        <button type="button" className="file-button"><i className='bx bx-file'></i></button>
                        <input type="text" placeholder="Type a message..." required />
                        <button type="button" className="gif-button"><i className='bx bx-gift'></i></button>
                        <button type="button" className="emoji-button"><i className='bx bx-smile'></i></button>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </>
    );
}