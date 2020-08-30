import React, { useEffect, useState} from 'react';
import { Avatar } from '@material-ui/core';
import "./DashChat.css";
import db from '../../store/firebase';
import { Link } from 'react-router-dom';

function DashChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if (id) {
      db.collection("rooms").doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
        setMessages((snapshot.docs.map((doc) => doc.data())))
      ))
    }
  }, [id])

  useEffect(() => {
    setSeed(Math.floor(Math.random()*3000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName){
      db.collection("rooms").add({
        name: roomName
      })
    }
  }

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="DashChat">
        <Avatar src={"https://avatars.dicebear.com/api/human/${seed}.svg"}/>
        <div className="DashChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="DashChat">
      <h2>Add New Chat</h2>
    </div>
  )
}

export default DashChat;
