import MessageInput from "./MessageInput";

export default function ChatPanel() {
  return (
    <div className="chat-section">
      <div className="chat-header">
        <h3>Chat with John Pork</h3>
        <div className="chat-header-icons">
          <button className="header-icon">
            <i className="bx bx-phone"></i>
          </button>
          <button className="header-icon">
            <i className="bx bx-video"></i>
          </button>
        </div>
      </div>
      <hr />
      <div className="chat-window">
        <div className="chat-message">
          <img
            src="https://via.placeholder.com/40"
            alt="Avatar"
            className="message-avatar"
          />
          <strong>joltAMP</strong>
          <p>Hi there!</p>
        </div>
        <div className="chat-message">
          <img
            src="https://via.placeholder.com/40"
            alt="Avatar"
            className="message-avatar"
          />
          <strong>John Pork:</strong>
          <p>Hey!</p>
        </div>
      </div>
      {MessageInput()}
    </div>
  );
}
