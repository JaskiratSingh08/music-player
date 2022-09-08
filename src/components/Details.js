import React, { useContext } from 'react'
import { MusicContext } from '../context/Musiccontext';
import '../index.css'

function Details() {

    const {music, songs} = useContext(MusicContext);
    return (
        <div className="c-player--details">
            <div className="details-img">
                <img src={songs[music].img_src} alt={songs[music].title} />
            </div>
            <h3 className="details-title">{songs[music].title}</h3>
            <h4 className="details-artist">{songs[music].artist}</h4>
        </div>
    )
}

export default Details;
