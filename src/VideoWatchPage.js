import React, {Component} from 'react';
import PlayListCard from "./PlayListCard";

import Scroll from "react-scroll";

import { VideoMetaData, VideoPlayListData, VideoMetaDataList } from "./VideoData";
import classes from './VideoWatchPage.module.css';

class VideoWatchPage extends Component {

    state = {
        currentVideoCardPos: 0,
        videoMetaData: VideoMetaData
    };
    
    videoPlayListData = VideoPlayListData;
    
    onVideoCardClick = pos => {
        this.setState({
            videoMetaData: VideoMetaDataList[pos],
            currentVideoCardPos: pos
        });
        
        Scroll.animateScroll.scrollToTop();
    };

    render() {
        const videoPlayListRender = this.videoPlayListData.map((item, pos) => {
            return (
              <PlayListCard
                key={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                alt={item.title}
                onCardClick={this.onVideoCardClick}
                cardPos={pos}
                currentVideo={this.state.currentVideoCardPos}
              />
            );
        });

        return (
            <div className={classes.MainWrapper}>
                <div className={classes.PlayerSection}>
                    <div className={classes.VideoBlock}>
                        <iframe
                            className={classes.VideoPlayer}
                            src={`https://player.vimeo.com/video/${this.state.videoMetaData.vimeoId}`}
                            frameBorder="0"
                            webkitallowfullscreen=""
                            mozallowfullscreen=""
                            allowFullScreen=""
                        ></iframe>
                    </div>
        
                    <div className={classes.DataBlock}>
                        <div className={classes.VideoStats}>
                            <p className={classes.ViewCount}>
                            {this.state.videoMetaData.views} views
                            </p>
                            <div>
                            <i className="far fa-heart" aria-hidden="true"></i>
                            <i className="far fa-comment-alt" aria-hidden="true"></i>
                            <i className="far fa-bookmark" aria-hidden="true"></i>
                            </div>
                        </div>
                        <hr />
                        <h1 className={classes.VideoTitle}>
                            {this.state.videoMetaData.title}
                        </h1>
                        <p className={classes.VideoDescription}>
                            {this.state.videoMetaData.description}
                        </p>
                    </div>
                </div>
                <div className={classes.PlayList}>{videoPlayListRender}</div>
            </div>
        );
    }
}

export default VideoWatchPage;