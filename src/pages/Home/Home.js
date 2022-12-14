import { useState, useContext } from 'react';
import {CoursesContext} from '../../ContextProviders/CoursesContext';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Navbar from '../../components/Navbar/Navbar';
import FullScreenVideo from '../../components/FullScreenVideo/FullScreenVideo';
import Button from '../../components/Button/Button';
import CardVideo from '../../components/CardVideo/CardVideo';
import CourseComponent from '../../components/CourseComponent/CourseComponent';

import './Home.css';

import groupsLogo from '../../assets/images/group_logos_p@500.png';
import totalCustomerGIf from '../../assets/images/total_customers@gif.gif';
import totalCompGif from '../../assets/images/total_comp@gif.gif';
import courseContentGif from '../../assets/images/course_content@gif.gif';

const Home = () => {
    const body = document.querySelector('body');

    const courses = useContext(CoursesContext);
    console.log(courses);

    const [ isFullScrVideoOpen, setFullScrVideoOpen ] = useState(false);
    const [ propsFullScrVideo, setPropsFullScrVideo ] = useState({
        title: 'asdsaf',
        src: 'https://www.youtube.com/embed/nUaSJJT7Ars'
    })

    const toggleFullScrVideo = ({title, src}) => {
        setFullScrVideoOpen(!isFullScrVideoOpen);
        src ? setPropsFullScrVideo({title, src}) : setPropsFullScrVideo({
            title: 'asdsaf',
            src: 'https://www.youtube.com/embed/nUaSJJT7Ars'
        });
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
            <div className="container-fuild bg-fluid-1" style={{marginTop: '78px'}}>
                <div className="container intro-container">
                    <div className="container-left">
                        <div className="hacking-icon"></div>
                        <h1 className="t-50">Hacking the Product Management Inteview</h1>
                        <br/>
                        <span className='t-bg-white'>Course last updated: Dec 5, 2022</span>
                        <span>This course will teach you how to answer ANY interview <br/> question thrown your way</span>
                        <br/>
                        <Button dark large>Explore the course</Button>
                    </div>
                    <div className="container-right">
                        <div className='intro-cardvideo'>
                            <CardVideo
                                onClick={() => toggleFullScrVideo({})}
                                shadow
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fuild bg-fluid-2">
                <div className="container about-container">
                    <div className="container-left order-2">
                        <br />
                        <h1 className='t-50 text-orange'>About the Course</h1>
                        <p className='text-dark'>Overwhelmed by all the different questions you may get asked during the product management interview?</p>
                        <p className='text-dark'>Your time is limited and valuable so no <b>there's no fluff content </b>in our course. We filmed PMs from various top companies answering the <b>85 interview questions </b>below to show you what <b>10-out-of-10 responses look like. </b>All our <b>HD videos</b> are <b>professionally annotated </b>with graphics & notes to aid visual learners and show you exactly what to whiteboard. We explain the nuances of being an exceptional interviewee—from adding strategic framing in your answers to the body language you should exhibit.</p>
                        <br/><img width={'80%'} src={groupsLogo}/>
                    </div>
                    <div className="container-right">
                        <div className='about-png'></div>
                    </div>
                </div>
                <br />
                <div className='container our-metrics'>
                    <h2 className='bold'>Our Metrics</h2>
                    <div>
                        <div>
                            <img 
                                style={
                                    {width: '90%'}
                                } 
                                src={totalCustomerGIf} 
                            />
                            <div>
                                <span>total customer</span>
                                <h4 className='bold text-orange'>6,000+</h4>
                            </div>
                        </div>
                        <div>
                            <img
                                style={
                                    {width: '95%'}
                                } 
                                src={courseContentGif} 
                            />
                            <div>
                                <span>of HD video lessons</span>
                                <h4 className='bold text-orange'>16 hours</h4>
                            </div>
                        </div>
                        <div>
                            <img 
                                style={
                                    {width: '90%'}
                                }
                                src={totalCompGif} 
                            />
                            <div>
                                <span>avg. inscrease in TC</span>
                                <h4 className='bold text-orange'>38%</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className="container-fuild">
                <div className='container'>
                    <h1 className='t-42 text-orange'>Explore the Courses</h1>
                </div>
                <br />
                <div className='container courses-container'>
                    <div className="courses-leftbar">
                        {
                            courses.map((a, index) => {
                                return <CourseComponent objData={a} key={index}/>
                            })
                        }
                    </div>
                    <div className='course-rightbar'>
                        <div className='fixed-bar'>
                            <div className='card-fixed'>
                                <CardVideo
                                    onClick={() => toggleFullScrVideo({})}
                                    shadow
                                />
                            </div>
                            <div>a</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;