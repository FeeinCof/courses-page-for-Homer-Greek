import PropTypes from 'prop-types';

import './CardVideo.css';
import Button from '../Button/Button';
import playButtonIcon from '../../assets/images/playButtonCard.svg';
import razorPayIcon from '../../assets/images/razorpay@logo.svg';
import shieldIcon from '../../assets/images/shield_icon.svg';
import timeIcon from '../../assets/images/time_icon.svg';
import pageIcon from '../../assets/images/page_icon.svg';
import lifeTimeIcon from '../../assets/images/lifetime_icon.svg';
import usDollarIcon from '../../assets/images/us_dollar.svg';
import classNames from 'classnames';

function CardVideo({onClick, shadow}) {
    return (
        <>
            <div className={classNames(
                'CardVideo',
                {
                    'shadow': shadow
                }
            )}>
                <div 
                    className='CardHeader'
                    onClick={() => onClick()}
                >
                    <img src='https://i.ytimg.com/vi_webp/C2vU1cF-BEA/maxresdefault.webp'/>
                    <div>
                        <div className='button_play'>
                            <img src={playButtonIcon} />
                        </div>
                        <div className='CardHeader-body'>
                            <span><b>Convert your PM interviews into offer letters </b></span>
                            <span>Step-by-step walkthrougns to give 10/10 answers to any PM interview question that might be thrown your way.</span>
                        </div>
                    </div>
                </div>
                <div className='CardBody'>
                    <div className='CardTitle'>
                        <div>
                            <p>$430</p>
                            <Button dark large>
                                &nbsp;&nbsp; Buy now &nbsp;&nbsp;
                            </Button>
                        </div>
                        <div>
                            <a href='/'>Pay in 4 interest-free installments of <b>$122</b> with &nbsp;
                                <img width='80px' src={razorPayIcon}/>
                            </a>
                        </div>
                    </div>
                    <div className='CardContent'>
                        <div className='CardItem HeadingItem'>
                            <img src={shieldIcon}/>
                            <span>Created by a team of nearly 2 dozen PMs from Google, Meta, Microsoft, and more</span>
                        </div>
                        <div className='CardItem'>
                            <img width={'24px'} src={timeIcon}/>
                            <span>18 hours of video lessons</span>
                        </div>
                        <div className='CardItem'>
                            <img width={'24px'} src={pageIcon}/>
                            <span>62 pages of interview straregy guides</span>
                        </div>
                        <div className='CardItem'>
                            <img width={'24px'} src={lifeTimeIcon}/>
                            <span>Lifetime access</span>
                        </div>
                        <div className='CardItem'>
                            <img width={'24px'} src={usDollarIcon}/>
                            <span>Tax-deductible expense under the US's continuing education category</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Button.propTypes = {
    shadow: PropTypes.bool,
    onClick: PropTypes.func
}

export default CardVideo;