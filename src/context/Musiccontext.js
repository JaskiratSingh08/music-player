import { createContext, useState } from "react";
 
const MusicContext = createContext();

const MusicProvider = (props) => {
    const [music, setMusic] = useState(0);
    const songs = [
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
      ];
    return <MusicContext.Provider value = {{music, setMusic, songs}}>
        {props.children}
    </MusicContext.Provider>
};


export {MusicContext, MusicProvider};