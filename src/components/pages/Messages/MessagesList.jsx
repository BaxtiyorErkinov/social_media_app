import React from "react";

const MessagesList = ({ messages, user, bottomListRef }) => {
  return (
    <div className="messages__container">
      {messages &&
        messages.map((mess, index) => (
          <div
            className={`messages__item ${
              mess.author.id === user.id ? "current-user" : ""
            }`}
            key={index}
          >
            <div className="messages__item__user">
              {mess.author.id === user.id ? (
                <>
                  <p>{mess?.author?.name}</p>
                  <img src={mess?.author?.avatar} alt="" />
                </>
              ) : (
                <>
                  {" "}
                  <img src={mess?.author?.avatar} alt="" />
                  <p>{mess?.author?.name}</p>
                </>
              )}
            </div>
            <div className="messages__item__message">{mess.message}</div>
          </div>
        ))}
      <div ref={bottomListRef} />
    </div>
  );
};

export default MessagesList;
