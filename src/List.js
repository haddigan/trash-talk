import content from "./content";
export const List = ({
  type,
  open,
  handleOpen,
  showButton,
  sendMessage,
  children,
}) => {
  return (
    <>
      {open && <Content type={type} sendMessage={sendMessage} />}
      {!open && showButton && (
        <button onClick={() => handleOpen(type)}>{children}</button>
      )}
    </>
  );
};

const Content = ({ type, sendMessage }) => {
  const contentList = content[type];

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
            sendMessage(contentList[0]);
          }}
        >
          {contentList[0]}
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <button
            onClick={() => {
              sendMessage(contentList[1]);
            }}
          >
            {contentList[1]}
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              sendMessage(contentList[2]);
            }}
          >
            {contentList[2]}
          </button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => {
            sendMessage(contentList[3]);
          }}
        >
          {contentList[3]}
        </button>
      </div>
    </div>
  );
};
