export const List = ({
  type,
  open,
  handleOpen,
  showButton,
  sendMessage,
  content,
  children,
}) => {
  return (
    <>
      {open && <Content content={content} sendMessage={sendMessage} />}
      {!open && showButton && (
        <button onClick={() => handleOpen(type)}>{children}</button>
      )}
    </>
  );
};

const Content = ({ content, sendMessage }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 0,
        padding: 0,
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => {
            sendMessage(content[0]);
          }}
        >
          {content[0]}
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <button
            onClick={() => {
              sendMessage(content[1]);
            }}
          >
            {content[1]}
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              sendMessage(content[2]);
            }}
          >
            {content[2]}
          </button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => {
            sendMessage(content[3]);
          }}
        >
          {content[3]}
        </button>
      </div>
    </div>
  );
};
