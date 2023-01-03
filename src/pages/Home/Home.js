/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useContext, useLayoutEffect, useRef } from 'react';
import { CoursesContext } from '../../ContextProviders/CoursesContext';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Navbar from '~/components/Navbar/Navbar';
import { Button, CourseComponent, CardVideo, FullScreenVideo, Courses } from '~/components';

import groupsLogo from '../../assets/images/group_logos_p@500.png';
import totalCustomerGIf from '../../assets/images/total_customers@gif.gif';
import totalCompGif from '../../assets/images/total_comp@gif.gif';
import courseContentGif from '../../assets/images/course_content@gif.gif';
import giftIcon from '../../assets/images/gift_icon.png';
import branchLogo from '../../assets/images/_branch_logo@1080.png';
import razorPayIcon from '../../assets/images/razorpay@logo.svg';
import expediaLogo from '../../assets/images/expedia.png';
import pingIcon from '../../assets/images/ping.svg';
import arrowrightIcon from '../../assets/images/arrowright.svg';
import increaseIcon from '../../assets/images/increase.svg';
import googleIcon from '../../assets/images/google.png';
import oracleIcon from '../../assets/images/oracle.png';
import amazonIcon from '../../assets/images/amazon.png';
import metaIcon from '../../assets/images/meta.png';
import splunkIcon from '../../assets/images/splunk.png';
import microsoftIcon from '../../assets/images/microsoft.png';

import './Home.css';

const Home = () => {
  const rightBarRef = useRef();
  const courseRef = useRef();
  const body = document.querySelector('body');

  const courses = useContext(CoursesContext);

  const [isFullScrVideoOpen, setFullScrVideoOpen] = useState(false);
  const [propsFullScrVideo, setPropsFullScrVideo] = useState({
    title: 'asdsaf',
    src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
  });

  const toggleFullScrVideo = ({ title, src }) => {
    setFullScrVideoOpen(!isFullScrVideoOpen);
    src
      ? setPropsFullScrVideo({ title, src })
      : setPropsFullScrVideo({
          title: 'asdsaf',
          src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
        });
    !isFullScrVideoOpen ? disableBodyScroll(body) : enableBodyScroll(body);
  };

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
      } else if (disOfCorsToTop >= 0 && disOfCorsToTop < distance) {
        rightBarRef.current.classList.add('fixedBarSt1');
        rightBarRef.current.classList.remove('fixedBarSt2');
      } else if (disOfCorsToTop >= distance) {
        rightBarRef.current.classList.remove('fixedBarSt1');
        rightBarRef.current.classList.add('fixedBarSt2');
      } else {
        rightBarRef.current.classList.remove('fixedBarSt1');
        rightBarRef.current.classList.remove('fixedBarSt2');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {isFullScrVideoOpen && (
        <FullScreenVideo
          src={propsFullScrVideo.src}
          title={propsFullScrVideo.title}
          onClick={() => toggleFullScrVideo({})}
        />
      )}
      <Navbar />
      <div className="container-fuild bg-fluid-1" style={{ marginTop: '78px' }}>
        <div className="container intro-container">
          <div className="container-left">
            <div className="hacking-icon"></div>
            <h1 className="t-50">Hacking the Product Management Inteview</h1>
            <br />
            <span className="t-bg-white">Course last updated: Dec 5, 2022</span>
            <span>
              This course will teach you how to answer ANY interview <br /> question thrown your way
            </span>
            <br />
            <Button dark large>
              Explore the course
            </Button>
          </div>
          <div className="container-right">
            <div className="intro-cardvideo">
              <CardVideo onClick={() => toggleFullScrVideo({})} shadow />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fuild bg-fluid-2">
        <div className="container about-container">
          <div className="container-left order-2">
            <br />
            <h1 className="t-50 text-orange">About the Course</h1>
            <p className="text-dark">
              Overwhelmed by all the different questions you may get asked during the product management interview?
            </p>
            <p className="text-dark">
              Your time is limited and valuable so no <b>there's no fluff content </b>in our course. We filmed PMs from
              various top companies answering the <b>85 interview questions </b>below to show you what{' '}
              <b>10-out-of-10 responses look like. </b>All our <b>HD videos</b> are <b>professionally annotated </b>with
              graphics & notes to aid visual learners and show you exactly what to whiteboard. We explain the nuances of
              being an exceptional interviewee—from adding strategic framing in your answers to the body language you
              should exhibit.
            </p>
            <br />
            <img width={'80%'} alt="img" src={groupsLogo} />
          </div>
          <div className="container-right">
            <div className="about-png"></div>
          </div>
        </div>
        <br />
        <div className="container our-metrics">
          <h2 className="bold">Our Metrics</h2>
          <div>
            <div>
              <img style={{ width: '90%' }} alt="img" src={totalCustomerGIf} />
              <div>
                <span>total customer</span>
                <h4 className="bold text-orange">6,000+</h4>
              </div>
            </div>
            <div>
              <img style={{ width: '95%' }} alt="img" src={courseContentGif} />
              <div>
                <span>of HD video lessons</span>
                <h4 className="bold text-orange">16 hours</h4>
              </div>
            </div>
            <div>
              <img style={{ width: '90%' }} alt="img" src={totalCompGif} />
              <div>
                <span>avg. inscrease in TC</span>
                <h4 className="bold text-orange">38%</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container-fuild bg-gray">
        <div className="container">
          <br />
          <br />
          <h1 className="t-42 text-orange">Explore the Courses</h1>
        </div>
        <br />
        <div className="container courses-container">
          <div className="courses-leftbar" ref={courseRef}>
            {courses.map((a, index) => {
              return <CourseComponent objData={a} key={index} onClick={toggleFullScrVideo} />;
            })}
          </div>
          <div className="course-rightbar">
            <div ref={rightBarRef}>
              <div className="fixed-bar">
                <CardVideo onClick={() => toggleFullScrVideo({})} shadow />
              </div>
              <div className="br-green gift-box">
                <img src={giftIcon} width="48px" height={'46.58px'} alt="img" />
                <span>&nbsp;</span>
                <p className="text-gray t-14">
                  Want to get <strong>free lifetime access</strong> to all 9 Product Alliance courses through your
                  employer? <strong className="bold text-green">Learn&nbsp;more&nbsp;→</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container-fluid">
        <h1 className="t-55 text-dark t-center">Get lifetime access. Enroll now.</h1>
        <br />
        <br />
        <div className="container indiviual">
          <div className="indiviual-left">
            <h4 className="t-bold t-24 t-center">Individual courses</h4>
            <br />
            <div className="indiviual-group-items">
              <div className="indiviual-item">
                <div className="indiviual-item-inner">
                  <div className="indiviual-item-icon indiviual-icon1"></div>
                  <div className="indiviual-item-content">
                    <p>Breaking into Product</p>
                    <span>$489</span>
                  </div>
                </div>
              </div>
              <div
                className="indiviual-item"
                style={{
                  backgroundColor: '#f78406',
                }}
              >
                <div className="indiviual-item-inner">
                  <div className="indiviual-item-icon indiviual-icon2"></div>
                  <div className="indiviual-item-content">
                    <p>Hacking the PM Interview</p>
                    <span>$489</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="indiviual-group-items">
              <div className="indiviual-item" style={{ backgroundColor: '#48108e' }}>
                <div className="indiviual-item-inner">
                  <div className="indiviual-item-icon indiviual-icon3"></div>
                  <div className="indiviual-item-content">
                    <p>Company Deep Dives</p>
                    <span>$489</span>
                  </div>
                </div>
              </div>
              <div className="indiviual-item" style={{ backgroundColor: '#0f9d58' }}>
                <div className="indiviual-item-inner">
                  <div className="indiviual-item-icon indiviual-icon4"></div>
                  <div className="indiviual-item-content">
                    <p>Flagship Google PM Course</p>
                    <span>$489</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="indiviual-group-items">
              <div
                className="indiviual-item"
                style={{
                  backgroundColor: '#0183ff',
                }}
              >
                <div className="indiviual-item-inner">
                  <div className="indiviual-item-icon indiviual-icon5"></div>
                  <div className="indiviual-item-content">
                    <p>Flagship Meta PM Course</p>
                    <span>$489</span>
                  </div>
                </div>
              </div>
              <div
                className="indiviual-item"
                style={{
                  backgroundColor: '#49a1e9',
                }}
              >
                <div className="indiviual-item-inner">
                  <div className="indiviual-item-icon indiviual-icon6"></div>
                  <div className="indiviual-item-content">
                    <p>Flagship Microshop PM course</p>
                    <span>$489</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="indiviual-group-items">
              <div
                className="indiviual-item"
                style={{
                  backgroundColor: '#eba942',
                }}
              >
                <div className="indiviual-item-inner">
                  <div className="indiviual-item-icon indiviual-icon7"></div>
                  <div className="indiviual-item-content">
                    <p>Flagship Amazon PM Course</p>
                    <span>$489</span>
                  </div>
                </div>
              </div>
              <div
                className="indiviual-item"
                style={{
                  backgroundColor: '#000',
                }}
              >
                <div className="indiviual-item-inner">
                  <div className="indiviual-item-icon indiviual-icon8"></div>
                  <div className="indiviual-item-content">
                    <p>Flagship Uber PM Course</p>
                    <span>$489</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="indiviual-group-items">
              <div
                className="indiviual-item"
                style={{
                  backgroundColor: '#b4b4b4',
                }}
              >
                <div className="indiviual-item-inner">
                  <div className="indiviual-item-icon indiviual-icon9"></div>
                  <div className="indiviual-item-content">
                    <p>Flagship Apple PM Course</p>
                    <span>$489</span>
                  </div>
                </div>
              </div>
              <div
                className="indiviual-item"
                style={{
                  background: 'unset',
                  boxShadow: 'unset',
                }}
              ></div>
            </div>
          </div>
          <div className="indiviual-right">
            <h4 className="t-24 t-bold t-center">Get all 9 courses and save more</h4>
            <br />
            <Courses />
            <a href="/" className="razor-pay text-gray t-14">
              Pay in 4 interest-free installments of <b>$122</b> with &nbsp;
              <span>
                <img width="80px" src={razorPayIcon} alt="image" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <h4 className="t-center">Career movements by Product Alliance members</h4>
        <br />
        <div className="container movement-container">
          <div className="movement-grid">
            <div className="movement-section">
              <div className="arrowright">
                <img src={arrowrightIcon} alt="icon"></img>
              </div>
              <div className="content-bottom">
                <img src={increaseIcon} width={10} alt="icon"></img>
                <span>109% Icrease</span>
              </div>
              <img src={expediaLogo} className="gray-scale" loading="lazy" width={92} alt="image" />
              <p className="movement-title">$292k TC</p>
              <p className="movement-details">
                <img src={pingIcon} alt="image" width={10} height={12}></img>
                <span>Seatle, WA</span>
              </p>
            </div>
            <div className="movement-section bg-gray">
              <div className="arrowright">
                <img src={arrowrightIcon} alt="icon"></img>
              </div>
              <div className="content-bottom">
                <img src={increaseIcon} width={10} alt="icon"></img>
                <span>109% Icrease</span>
              </div>
              <img src={googleIcon} loading="lazy" width={76} alt="image" />
              <p className="movement-title text-dark">$590k TC</p>
              <p className="movement-details">
                <img src={pingIcon} alt="image" width={10} height={12}></img>
                <span>Seatle, WA</span>
              </p>
            </div>
          </div>
          {/* ---- */}
          <div className="movement-grid">
            <div className="movement-section">
              <div className="arrowright">
                <img src={arrowrightIcon} alt="icon"></img>
              </div>
              <div className="content-bottom">
                <img src={increaseIcon} width={10} alt="icon"></img>
                <span>109% Icrease</span>
              </div>
              <img src={oracleIcon} className="gray-scale" loading="lazy" width={92} alt="image" />
              <p className="movement-title">$302k TC</p>
              <p className="movement-details">
                <img src={pingIcon} alt="image" width={10} height={12}></img>
                <span>Seatle, WA</span>
              </p>
            </div>
            <div className="movement-section bg-gray">
              <div className="arrowright">
                <img src={arrowrightIcon} alt="icon"></img>
              </div>
              <div className="content-bottom">
                <img src={increaseIcon} width={10} alt="icon"></img>
                <span>109% Icrease</span>
              </div>
              <img
                src={amazonIcon}
                loading="lazy"
                width={76}
                style={{
                  transform: 'translateY(3px)',
                }}
                alt="image"
              />
              <p className="movement-title text-dark">$473k TC</p>
              <p className="movement-details">
                <img src={pingIcon} alt="image" width={10} height={12}></img>
                <span>Seatle, WA</span>
              </p>
            </div>
          </div>
          {/* --- */}
          <div className="movement-grid">
            <div className="movement-section">
              <div className="arrowright">
                <img src={arrowrightIcon} alt="icon"></img>
              </div>
              <div className="content-bottom">
                <img src={increaseIcon} width={10} alt="icon"></img>
                <span>109% Icrease</span>
              </div>
              <img
                src={amazonIcon}
                className="gray-scale"
                loading="lazy"
                width={76}
                alt="image"
                style={{
                  transform: 'translateY(3px)',
                }}
              />
              <p className="movement-title">$292k TC</p>
              <p className="movement-details">
                <img src={pingIcon} alt="image" width={10} height={12}></img>
                <span>Seatle, WA</span>
              </p>
            </div>
            <div className="movement-section bg-gray">
              <div className="arrowright">
                <img src={arrowrightIcon} alt="icon"></img>
              </div>
              <div className="content-bottom">
                <img src={increaseIcon} width={10}></img>
                <span>109% Icrease</span>
              </div>
              <img src={metaIcon} loading="lazy" width={92} alt="image" />
              <p className="movement-title text-dark">$590k TC</p>
              <p className="movement-details">
                <img src={pingIcon} alt="image" width={10} height={12}></img>
                <span>Seatle, WA</span>
              </p>
            </div>
          </div>
          {/* --- */}
          <div className="movement-grid">
            <div className="movement-section">
              <div className="arrowright">
                <img src={arrowrightIcon} alt="icon"></img>
              </div>
              <div className="content-bottom">
                <img src={increaseIcon} width={10}></img>
                <span>109% Icrease</span>
              </div>
              <img src={splunkIcon} className="gray-scale" loading="lazy" width={92} alt="image" />
              <p className="movement-title">$292k TC</p>
              <p className="movement-details">
                <img src={pingIcon} alt="image" width={10} height={12}></img>
                <span>Seatle, WA</span>
              </p>
            </div>
            <div className="movement-section bg-gray">
              <div className="arrowright">
                <img src={arrowrightIcon} alt="icon"></img>
              </div>
              <div className="content-bottom">
                <img src={increaseIcon} width={10}></img>
                <span>109% Icrease</span>
              </div>
              <img src={microsoftIcon} loading="lazy" width={92} alt="image" />
              <p className="movement-title text-dark">$590k TC</p>
              <p className="movement-details">
                <img src={pingIcon} alt="image" width={10} height={12}></img>
                <span>Seatle, WA</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer className="container-fluid">
        <div className="container footer">
          <div>
            <div>
              <img src={branchLogo} width={'156px'} alt="img" />
              <span className="text-black">Made with ❤️</span>
              <span className="text-orange">&nbsp;in India</span>
            </div>
            <p className="text-gray">
              <a className="t-28 text-gray" href="https://www.homergreek.com/">
                homer&greek
              </a>
              <span className="t-14 bold">&nbsp;All Rights Reserved!</span>
            </p>
          </div>
          <div>
            <p className="bold text-orange">
              Unlock a 32-minute video lesson to learn how to answer the hardest PM interview questions for FREE!
            </p>
            <form>
              <input className="form-control shadow" type={'text'} placeholder={'Your email'}></input>
              &nbsp; &nbsp;
              <Button shadow orange large>
                Get video
              </Button>
            </form>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="container">
          <span className="text-gray t-14">Copyright © Homer & Greek 2022.</span>
          <a
            className="text-gray"
            style={{
              float: 'right',
            }}
            href="https://www.homergreek.com/"
          >
            About us
          </a>
        </div>
        <br />
      </footer>
    </>
  );
};

export default Home;
