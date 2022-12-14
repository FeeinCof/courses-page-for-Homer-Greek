import { useState, useContext, useLayoutEffect, useRef } from 'react';
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
import giftIcon from '../../assets/images/gift_icon.png';
import branchLogo from '../../assets/images/_branch_logo@1080.png';

const Home = () => {
    const rightBarRef = useRef();
    const courseRef = useRef();
    const body = document.querySelector('body');

    const courses = useContext(CoursesContext);

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

    useLayoutEffect(() => {
        const onScroll = () => {
            const getBoundingCourseRef = courseRef.current.getBoundingClientRect();
            let rightBarH = rightBarRef.current.getBoundingClientRect().height;
            let courseH = getBoundingCourseRef.height;
            let distance = courseH - rightBarH;
            let disOfCorsToTop = getBoundingCourseRef.top - 82; // Negative to Positive
            disOfCorsToTop *= -1;
            if (rightBarH >= courseH) {
                rightBarRef.current.classList.remove('fixedBarSt1');
                rightBarRef.current.classList.remove('fixedBarSt2');
            }
            else if (disOfCorsToTop >= 0 && disOfCorsToTop < distance) {
                rightBarRef.current.classList.add('fixedBarSt1')
                rightBarRef.current.classList.remove('fixedBarSt2')
            } 
            else if (disOfCorsToTop >= distance) {
                rightBarRef.current.classList.remove('fixedBarSt1')
                rightBarRef.current.classList.add('fixedBarSt2')
            } 
            else {
                rightBarRef.current.classList.remove('fixedBarSt1')
                rightBarRef.current.classList.remove('fixedBarSt2')
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

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
            <div className="container-fuild bg-gray">
                <div className='container'>
                    <br/>
                    <br/>
                    <h1 className='t-42 text-orange'>Explore the Courses</h1>
                </div>
                <br />
                <div className='container courses-container'>
                    <div className="courses-leftbar" ref={courseRef}>
                        {
                            courses.map((a, index) => {
                                return <CourseComponent objData={a} key={index} onClick={toggleFullScrVideo} />
                            })
                        }
                    </div>
                    <div className='course-rightbar'>
                        <div ref={rightBarRef}>
                            <div className='fixed-bar'>
                                <CardVideo
                                    onClick={() => toggleFullScrVideo({})}
                                    shadow
                                />
                            </div>
                            <div className='br-green gift-box'>
                                <img src={giftIcon} width='48px' height={'46.58px'}/>
                                <span>&nbsp;</span>
                                <p className="text-gray">Want to get <strong>free lifetime access</strong> to all 9 Product Alliance courses through your employer? <strong className="bold text-green">Learn&nbsp;more&nbsp;→</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className='container-fluid'>
                <div className='container footer'>
                    <div>
                        <div>
                            <img src={branchLogo} width={'156px'}/>
                            <span className='text-black'>Made with ❤️</span>
                            <span className='text-orange'>&nbsp;in India</span>
                        </div>
                        <p className='text-gray'>
                            <a className='t-28 text-gray' href='https://www.homergreek.com/'>homer&greek</a>
                            <span className='t-14 bold'>&nbsp;All Rights Reserved!</span>
                        </p>
                    </div>
                    <div>
                        <p className='bold text-orange'>Unlock a 32-minute video lesson to learn how to answer the hardest PM interview questions for FREE!</p>
                        <form>
                            <input className='form-control shadow' type={'text'} placeholder={'Your email'}></input>
                            &nbsp;
                            &nbsp;
                            <Button shadow orange large>Get video</Button>
                        </form>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className='container'>
                    <span className='text-gray t-14'>Copyright © Homer & Greek 2022.</span>
                    <a className='text-gray' style={{
                        float: 'right'
                    }} href='https://www.homergreek.com/'>About us</a>
                </div>
                <br/>
            </div>
        </>
    )
}

export default Home;