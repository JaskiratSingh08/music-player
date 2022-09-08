import React, { useContext } from 'react'
import { MusicContext } from '../context/Musiccontext';
import "./Style.css"

function Sidebar() {

    const {setMusic,songs} = useContext(MusicContext);
    
    // const handleClick=()=>{
    //         props.setCurrentSongIndex = props.list[props.currentSongIndex];
    //     props.currentSongIndex();
    //     };

  return (
    <div className="Sidebar">

        <div className="Queue-list">
            {songs.map((song,i)=>{
                return (

            <span key={i} className="songs-queue" onClick={()=>setMusic(i)}>
                {song.title}
            </span>
                )

            })
            }
        </div>

    </div>
  )
}

export default Sidebar