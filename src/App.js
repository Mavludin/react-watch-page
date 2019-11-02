import React from "react";
import PlayListCard from "./PlayListCard";

import logo from "./logo.svg";
import classes from "./App.module.css";

import { VideoMetaData, VideoPlayList } from "./VideoData";

function App() {
  const videoMetaData = VideoMetaData;
  const videoPlayList = VideoPlayList;

  const videoPlayListRender = videoPlayList.map(item => {
    return (
      <PlayListCard
        key={item.id}
        thumbnail={item.thumbnail}
        title={item.title}
        alt={item.title}
      />
    );
  });

  return (
    <div className={classes.App}>
      <div className={classes.MainWrapper}>
        <div className={classes.PlayerSection}>
          <div className={classes.VideoBlock}>
            <iframe
              className={classes.VideoPlayer}
              src="https://player.vimeo.com/video/190062231"
              frameBorder="0"
              webkitallowfullscreen=""
              mozallowfullscreen=""
              allowFullScreen=""
            ></iframe>
          </div>

          <div className={classes.DataBlock}>
            <div className={classes.VideoStats}>
              <p className={classes.ViewCount}>{videoMetaData.views} views</p>
              <div>
                <i className="far fa-heart" aria-hidden="true"></i>
                <i className="far fa-comment-alt" aria-hidden="true"></i>
                <i className="far fa-bookmark" aria-hidden="true"></i>
              </div>
            </div>
            <hr />
            <h1 className={classes.VideoTitle}>{videoMetaData.title}</h1>
            <p className={classes.VideoDescription}>
              {videoMetaData.description}
            </p>
          </div>
        </div>
        <div className={classes.PlayList}>{videoPlayListRender}</div>
      </div>
    </div>
  );
}

export default App;
