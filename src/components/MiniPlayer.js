import classes from '../styles/MiniPlayer.module.css';
import miniplayerImage from '../assets/images/3.jpg';
import { useRef, useState } from 'react';
import ReactPlayer from "react-player/youtube";
export default function MiniPlayer({id,title}) {

  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;
  function toggleMiniPlayer() {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }
    return (
        <div className={`${classes.miniPlayer} ${classes.floatingBtn}`} onClick={toggleMiniPlayer} ref={buttonRef}>
        <span className={`material-icons-outlined ${classes.open}`}>{" "} play_circle_filled{" "}</span>
        <span className={`material-icons-outlined ${classes.close}`} onClick={toggleMiniPlayer}> {" "}close{" "}  </span>
        {/* <img src={miniplayerImage} alt="all tag" /> */}
        <ReactPlayer  className={classes.player} url={videoUrl}  width="300px" height="168px" playing={status} controls/>
        <p>{title}</p>
      </div>
    )
}