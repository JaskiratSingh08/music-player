import React, {useState, useRef, useEffect, useContext} from 'react'
import Controls from './Controls';
import Details from './Details';
import './Style.css';
import '../index.css';
import {MusicContext, MusicProvider} from './../context/Musiccontext';

function Player(props) {

    /*from app.js*/

    

    /* from app.js*/


    const {music,setMusic} = useContext(MusicContext);
    // console.log(music);
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

    

    // const SkipSong = (forwards = true) => {
    //     if (forwards) {
    //         props.setCurrentSongIndex(() => {
    //             let temp = music;
    //             temp++;

    //             if (temp > props.songs.length - 1) {
    //                 temp = 0;
    //             }

    //             // return temp;
    //             setMusic(temp);
    //         });
    //     } else {
    //         props.setCurrentSongIndex(() => {
    //             let temp = music;
    //             temp--;

    //             if (temp < 0) {
    //                 temp = props.songs.length - 1;
    //             }

    //             // return temp;
    //             setMusic(temp);
    //         });
    //     }
    // }


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


    
 
    

    return (
        <div className="Player">

        <div className="c-player">
            
            <audio  src={props.songs[music].src} step='0.05'  ref={audioEl}  ></audio>
            <h4 className='w-100 text-center mt-3'>Playing now</h4>
            <Details song={props.songs[music]} />

            <div className= "prgrss-btns">
        

                {/*Current Time */}

                    <div className="duration">
                        {calculateTime(currentTime)} 
                    </div>

                    {/*Progress bar */}

                    <div className="p-bar"> 
                        <input className="progress-bar"  type="range" defaultvalue="0" ref={progressBar} onChange={changeRange} ></input> 
                    </div>

                {/*Duration */}
                <div className = "duration"> 
                    {(duration && !isNaN(duration)) && calculateTime (duration)} 
                </div>


            </div>


            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} progressBar={progressBar} changeRange={changeRange} />
            
            <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
        </div>

        </div>
    )
}

export default Player;
