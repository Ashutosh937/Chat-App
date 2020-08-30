import React, {useEffect, useState} from 'react';
import "./Dashboard.css";
import DashChat from "./DashChat/DashChat";
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from "@material-ui/icons";
import db from '../store/firebase';
import { useStateValue } from '../store/StateProvider';

function Dashboard() {
  const [rooms, setRooms] = useState([]);
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot(snapshot => (
      setRooms(
        snapshot.docs.map(doc =>
          ({
          id: doc.id,
          data: doc.data()
          })
        ))
      ));

      return() => {
        unsubscribe();
      }
  }, []);

  return(
    <div className="dashboard">
      <div className="dashboard__header">
        <Avatar src={user?.photoURL}/>
        <div className="dashboard__header__right">
          <IconButton>
            <DonutLargeIcon/>
          </IconButton>
          <IconButton>
            <ChatIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>

      <div className="dashboard__search">
        <div className="dashboard__searchContainer">
          <SearchOutlined/>
          <input placeholder="Search or start new chat" type="text"/>
        </div>
      </div>

      <div className="dashboard__chats">
        <DashChat addNewChat/>
         {rooms.map((room) => (
          <DashChat key ={room.id} id={room.id} name={room.data.name}/>
        ))}
      </div>
    </div>
  );
}

export default Dashboard
