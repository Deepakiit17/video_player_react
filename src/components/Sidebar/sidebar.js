import React, { useEffect } from "react";
import "./Sidebar.css";
// import { motion } from "framer-motion";
import {
  TocRounded,
  DashboardRounded,
  BarChartRounded,
  AttachMoneyRounded,
  AssignmentTurnedInRounded,
  AccountCircleRounded,
  SettingsRemoteRounded,
  ColorLensRounded,
} from "@material-ui/icons";
import Item from "./item/Item";
import { useState, useRef } from "react";
import Player from "../Player";

function Sidebar() {
  const [open, setOpen] = useState(true);

  const videoPlayer = useRef();

  const [users, setUser] = useState([]);
  
    const [videourl, setVideoUrl] = useState();
  
  useEffect(() => {
    fetch("http://localhost:3333/videos")
    .then(res=>res.json())
    .then(res=> setUser(res))
        
    
      
    
  }, []);

  console.log(users);

  const play = () => {
    videoPlayer.current.play();
  };

  // for collpsing sidebar
  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "15rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "3rem",
      transition: {
        delay: 0.4,
      },
    },
  };

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "4rem",
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "2rem",
      width: "3rem",
    },
  };

  
 

  return (
    <div className="App">
      <div
        data-Open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        {/* sidebar div */}
        <div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* lines_icon */}
          <div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3.5px)",
              WebkitBackdropFilter: "blur(3.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            onClick={handleToggle}
            className="lines_icon"
          >
            <TocRounded />
          </div>
          {/* profile */}
          <div
            layout
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            className="profile"
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(5.5px)",
              WebkitBackdropFilter: "blur(5.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              cursor: "pointer",
            }}
          >
            {/* <img
              src="https://ae01.alicdn.com/kf/H5be6a0fa5f584a8a8420da2a7d4bc809r/RBRARE-Polaroid-Men-s-Goggle-Driving-Sunglasses-Men-Classic-Low-Profile-Sun-Glasses-For-Men-High.jpg"
              alt="profile_img"
            /> */}
          </div>
          {/* groups */}
          <div className="groups">
            {/* group 1 */}
            <div className="group" onClick={play}>
              <h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
              >
                ANALYTICS
              </h3>
              <Item icon={<DashboardRounded />} name="Dashboard" />
              <Item icon={<BarChartRounded />} name="Performance" />
            </div>
          </div>
          {/* group 2 */}
          <div className="group">
            <h3 animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}>
              Content
            </h3>
            <Item icon={<AttachMoneyRounded />} name="Sales" />
            <Item icon={<AssignmentTurnedInRounded />} name="Checklist" />{" "}
            <Item icon={<AccountCircleRounded />} name="Customers" />
          </div>
          {/* group 3 */}
          <div className="group">
            <h3 animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}>
              CUSTOMIZATION
            </h3>
            <Item icon={<SettingsRemoteRounded />} name="Segments" />
            <Item icon={<ColorLensRounded />} name="Themems" />
          </div>
        </div>
      </div>

      <div className="body_container">
        <h1>Get API Call </h1>
        <table border="1">
          <tbody>
            <tr>
              <td>Chapter 1</td>
              <td>Topic</td>
              <td>Name</td>
              <td>Url</td>
            </tr>
            {users.map((item, i) => (
              <tr key={i}>
                <td>{item.chapter}</td>
                <td>{item.Topic}</td>
                <td>{item.Name}</td>
                <td>
                  {item.url}
                  <td>
                    <button onClick={()=>setVideoUrl(item.url)}>play</button>
                  </td>
                </td>
              </tr>
            )
            )}
          </tbody>
        </table>
        <Player url = {videourl}/>
        {/* <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr /> */}
      </div>
    </div>
  );
}
export default Sidebar;
