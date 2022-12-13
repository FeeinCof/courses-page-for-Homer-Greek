import { useState, useContext } from 'react';
import {CoursesContext} from '../../ContextProviders/CoursesContext';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Navbar from '../../components/Navbar/Navbar';
import FullScreenVideo from '../../components/FullScreenVideo/FullScreenVideo';

import './Home.css';

const Home = () => {
    const body = document.querySelector('body');

    const courses = useContext(CoursesContext);
    
    const [ isFullScrVideoOpen, setFullScrVideoOpen ] = useState(true);
    const [ propsFullScrVideo, setPropsFullScrVideo ] = useState({
        title: 'asdsaf',
        src: 'https://www.youtube.com/embed/nUaSJJT7Ars'
    })

    const toggleFullScrVideo = ({title, src}) => {
        setFullScrVideoOpen(!isFullScrVideoOpen);
        src ? setPropsFullScrVideo({title, src}) : setPropsFullScrVideo({title, src});
        !isFullScrVideoOpen ? disableBodyScroll(body) : enableBodyScroll(body);
    }

    return (
        <>
            {
                isFullScrVideoOpen && (
                    <FullScreenVideo 
                        src={propsFullScrVideo.src}
                        title={propsFullScrVideo.title}
                        onClick={() => toggleFullScrVideo({})}
                    />
                    )
            }
            <Navbar />
            <div className="container-fuild" style={{marginTop: '82px'}}>
                <div className="container">
                    
                </div>
            </div>
        </>
    )
}

export default Home;