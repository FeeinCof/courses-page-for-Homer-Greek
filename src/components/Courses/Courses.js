import './Courses.css';
import timeIcon from '../../assets/images/time_icon.svg';
import pageIcon from '../../assets/images/page_icon.svg';
import lifeTimeIcon from '../../assets/images/lifetime_icon.svg';
import usDollarIcon from '../../assets/images/us_dollar.svg';
import Button from '../Button/Button';
const Courses = () => {
  return (
    <>
      <div className="courses">
        <div className="courses-group-icons">
          <div className="courses-icon indiviual-icon1"></div>
          <div className="courses-icon indiviual-icon2"></div>
          <div className="courses-icon indiviual-icon3"></div>
          <div className="courses-icon indiviual-icon4"></div>
          <div className="courses-icon indiviual-icon5"></div>
          <div className="courses-icon indiviual-icon6"></div>
          <div className="courses-icon indiviual-icon7"></div>
          <div className="courses-icon indiviual-icon8"></div>
          <div className="courses-icon indiviual-icon9"></div>
        </div>
        <br />
        <h3 className="text-orange">
          <span className="t-highlight">Save 75%</span> with the Full Library Access Pass (includes all 9 courses)
        </h3>
        <br />
        <p>
          <span className="t-14 text-gray">
            <span className="icon-title">
              <img src={timeIcon} width="20px" alt="img" />
            </span>
            37 video hrs
          </span>
          &nbsp;&nbsp;&nbsp;
          <span className="t-14 text-gray">
            <span className="icon-title">
              <img src={pageIcon} width="20px" alt="img" />
            </span>
            300+ pages
          </span>
          &nbsp;&nbsp;&nbsp;
          <span className="t-14 text-gray">
            <span className="icon-title">
              <img src={lifeTimeIcon} width="20px" alt="img" />
            </span>
            Lifetime access
          </span>
        </p>
        <p
          className="t-14 text-gray"
          style={{
            marginTop: '8px',
            display: 'flex',
          }}
        >
          <span className="icon-title">
            <img src={usDollarIcon} width="20px" alt="img" />
          </span>
          <span>Tax-deductible expense under the US's continuing education category</span>
        </p>
      </div>
      <div className="courses-footer">
        <div>
          <span className="red-crossed-out normal t-30 text-light">$2391</span>
          &nbsp;
          <span className="t-42 text-light">$579</span>
        </div>
        <div className="countdown">
          <Button dark large w100>
            Buy now
          </Button>
        </div>
      </div>
    </>
  );
};

export default Courses;
