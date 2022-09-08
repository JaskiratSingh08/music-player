import React, { useContext } from 'react'
import {useState, useEffect} from 'react';
import Player from './../components/Player.js';
import { Card } from 'react-bootstrap'
import index from '../index.css'
import Navbar from './../components/Navbar.js';
import Sidebar from './../components/Sidebar.js';
import { MusicContext } from '../context/Musiccontext.js';

function Home() {

    const [songs] = useState([
        {
          title: "Godfather Main Theme",
          artist: "Nina Rota",
          img_src: "./images/song-1.jpg",
          src: "./music/Godfather-main-theme.mp3"
        },
        {
          title: "Red right hand",
          artist: "Nick Caves and the Black seeds",
          img_src: "./images/song-2.jpg",
          src: "./music/Red-right-hand.mp3"
        },
        {
            title:"Lawman",
            artist:"Gilla Band",
            img_src: "./images/song-2.jpg",
            src: "./music/lawman.mp3"
        },
        {
          title: "That's amore",
          artist: "Dean Martin",
          img_src: "./images/song-3.jpg",
          src: "./music/thats-amore.mp3"
        },
        {
          title: "Painkiller",
          artist: "Ruel",
          img_src: "./images/song-4.jpg",
          src: "./music/Painkiller.mp3"
        },
        {
          title: "Na Khangh Mundiya",
          artist: "Surjit Bindrakhia",
          img_src: "./images/song-5.jpg",
          src: "./music/Na-Khangh-Mundiya.mp3"
        },
        {
          title: "Shah Ji",
          artist: "Prem Dhillon",
          img_src: "./images/song-6.jpg",
          src: "./music/Shah-Ji.mp3"
        },
        {
          title: "Remember This",
          artist: "NF",
          img_src: "./images/perception.jpg",
          src: "./music/NF-Remember-This.mp3"
        },
        {
          title: "You're not God",
          artist: "Anna Calvi",
          img_src: "./images/song-2.jpg",
          src: "./music/You-are-not-god.mp3"
        }
      ]);
    
      const {music, setMusic} = useContext(MusicContext);
      const [nextSongIndex, setNextSongIndex] = useState(0);
    
      useEffect(() => {
        setNextSongIndex(() => {
          if (music + 1 > songs.length - 1) {
            return 0;
          } else {
            return music + 1;
          }
        });
      }, [music]);
    

  return (
<div className="border-class">
        <div className="App">
                <Navbar/>
                <Sidebar
                list={songs}
                // currentSongIndex={currentSongIndex} 
                // setCurrentSongIndex={setCurrentSongIndex} 
                nextSongIndex={nextSongIndex}
                />
                <Player 
                //   currentSongIndex={currentSongIndex} 
                //   setCurrentSongIndex={setCurrentSongIndex} 
                  nextSongIndex={nextSongIndex} 
                  songs={songs}
                />
        </div>
        </div>
  )
}

export default Home