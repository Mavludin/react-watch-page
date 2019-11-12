import React from 'react';
import { VideoPlayListData } from "./VideoData";
import VideoCard from './PlayListCard';
import { directive } from '@babel/types';
import { statement } from '@babel/template';

import axios from 'axios';

import classes from './HomePage.module.css';

class HomePage extends React.Component {

    state = {
        videoList : [],
        showLoader : true
    }
    
    componentDidMount() {
        axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
        .then(response => {
            console.log(response.data);
            this.setState({videoList : response.data, showLoader: false});
        })
        .catch(err => {
            console.log(err);
        })
    }

    render () {

        const videoPlayListData = this.state.videoList;

        const cardGrid = videoPlayListData.map((item,pos) => {
            return (
                <div className={classes.VideoCard}>
                    <VideoCard key={item.id} id={item.id} title={item.title} alt={item.title} thumbnail={item.thumbnail} />
                </div>
            )
        });

        return (
            <div className = {classes.MainContainer}>
                
                {
                    this.state.showLoader ?
                    <h1>Loading...</h1>
                    :
                    cardGrid
                }

            </div>
        )
    }
    

}

export default HomePage;