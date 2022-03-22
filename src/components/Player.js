import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import Details from './Details';
import Style from './Style.css';
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import {BsFillArrowLeftCircleFill} from "react-icons/bs";


function Player(props) {

    /*from app.js*/

    

    /* from app.js*/


    const audioEl = useRef(null);

    const progressBar = useRef();
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const animationRef = useRef();


    const [isPlaying, setIsPlaying] = useState(false);
    //if (progressBar.current.max) {
      //  SkipSong();
        
    //}

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioEl.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    });

    
    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }


    useEffect(() => {
        const seconds = Math.floor(audioEl.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    });

    //useEffect(() => {
    //    if (currentTime == duration) {
      //      props.currentSongIndex++;
        //}
    //});

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs/60);
        const returnedMinutes = minutes < 10 ? `0${minutes}`:`${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}`:`${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    const whilePlaying = () => {
        progressBar.current.value = audioEl.current.currentTime;
        changePlayerCurrentTime() ;
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', 
        `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value);
    }



    const changeRange = () => {
        audioEl.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }


    const backTen = () => {
        progressBar.current.value = Number(progressBar.current.value - 10);
        changeRange();
    } 

    const forwardTen = () => {
        progressBar.current.value = Math.floor(Number(progressBar.current.value + 10));
        changeRange();
    } 
 
    

    return (
        <div className="c-player">
            
            <audio  src={props.songs[props.currentSongIndex].src} step='0.05'  ref={audioEl}  ></audio>
            <h4 className='w-100 text-center mt-3'>Playing now</h4>
            <Details song={props.songs[props.currentSongIndex]} />

            <div className= "prgrss-btns">
        
                <button className="forwardbackward" onClick={backTen}> <BsFillArrowLeftCircleFill className="backten" /> 10 </button>

                {/*Current Time */}

                <div className="duration">{calculateTime (currentTime)} </div>

                    {/*Progress bar */}

                    <div> 
                        <input className="progress-bar"  type="range" defaultvalue="0" ref={progressBar} onChange={changeRange} ></input> 
                    </div>

                {/*Duration */}
                <div className = "duration"> 
                    {(duration && !isNaN(duration)) && calculateTime (duration)} 
                </div>

                <button className="forwardbackward" onClick={forwardTen}>  10   <BsFillArrowRightCircleFill className='aheadten' /> </button>

        </div>


            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            
            <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
        </div>
    )
}

export default Player;