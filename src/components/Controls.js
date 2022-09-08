import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'
import { MusicContext } from '../context/Musiccontext';

import {BsFillArrowRightCircleFill} from "react-icons/bs";
import {BsFillArrowLeftCircleFill} from "react-icons/bs";


function Controls(props) {

    const {music,setMusic, songs} = useContext(MusicContext);

    const SkipSong = (forwards) => {
        let temp = music;

        if(forwards){
            temp++;

            if (temp > songs.length - 1) {
                   temp = 0;
               }
        }else{
            temp--;

             if (temp < 0) {
                 temp = songs.length - 1;
             }
             
        }
        console.log(temp);
        setMusic(temp);

    }

    const backTen = () => {
        props.progressBar.current.value = Number(props.progressBar.current.value - 10);
        props.changeRange();
    } 

    const forwardTen = () => {
        props.progressBar.current.value =Number(props.progressBar.current.value + 10);
        props.changeRange();
    } 

    return (

        <div className="c-player--controls">

            <button className="forwardbackward" onClick={backTen}>
                 <BsFillArrowLeftCircleFill className="backten" />
                  10 
            </button>


            <button className="skip-btn" onClick={() => SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button className="skip-btn" onClick={() => SkipSong(true)}>
                <FontAwesomeIcon icon={faForward} />
            </button>
            
            <button className="forwardbackward" onClick={forwardTen}>
                  10   
                  <BsFillArrowRightCircleFill className='aheadten' />
             </button>

        </div>
    )
}

export default Controls;
