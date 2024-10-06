export default function MessageInput() {
  return (
    <form className="chat-input" onSubmit={(e) => e.preventDefault()}>
      <button type="button" className="file-button">
        <i className="bx bx-file"></i>
      </button>
      <input type="text" placeholder="Type a message..." />
      <button type="button" className="gif-button">
        <i className="bx bx-gift"></i>
      </button>
      <button type="button" className="emoji-button">
        <i className="bx bx-smile"></i>
      </button>
      <button type="submit">Send</button>
    </form>
  );
}
