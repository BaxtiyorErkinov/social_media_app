import React, { FC, useEffect, useState, useRef } from "react";
import { app } from "../../../firebase/";
import { useAuth } from "../../../hooks/useAuth";
import { collection, onSnapshot, addDoc } from "firebase/firestore";

import MessagesList from "./MessagesList";
import AddMessages from "./AddMessage";

import "./messages.css";

const Messages = () => {
  const { db, user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const bottomListRef = useRef(null)

  const addMessHandler = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        const docRef = await addDoc(collection(db, "messages"), {
          author: user,
          message,
          createdAt: "5mins left",
        });
        bottomListRef.current.scrollIntoView({ behavior: 'smooth' });
      } catch (e) {
        console.log(e);
      }
    }
    setMessage("")
  };

  useEffect(() => {
    const unSub = onSnapshot(collection(db, "messages"), (doc) => {
      const arr = []
      doc.forEach((d) => {
        arr.push(d.data());
      });
      setMessages(arr)
    });
    return unSub;
  }, []);

  return (
    <div className="messages__wrapper">
      <MessagesList messages={messages} user={user} bottomListRef={bottomListRef}/>
      <AddMessages
        addMessHandler={addMessHandler}
        message={message}
        setMessage={setMessage}
      />
    </div>
  );
};

export default Messages;
