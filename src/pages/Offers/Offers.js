import './Offers.css';
import fullLibImage from '../../assets/images/full_library_access_pass_75_579.png';
import careerMovements from '../../assets/images/career_movements-_bundle_1_.png';
import FormPayment from '../../components/FormPayment/FormPayment';
const Offers = () => {

    return (
        <>
            <div className='container-fluid' style={{
                backgroundColor: "#fbfbfb"
            }}>
                <div className='container offers-container'>
                    <div className='offers-container-left'>
                        <img src={fullLibImage} width={'100%'} className='shadow'/>
                        <br/>
                        <br/>
                        <h2 className="text-dark">Product Alliance Full Library Access Pass (Includes All 9 Courses)</h2>
                        <br/>
                        <br/>
                        <img src={careerMovements} width={'100%'}/>
                        <p className='t-14 text-dark'>Ready to land your dream product management job, from Director of Product all the way down to APM? The Full Library Access Pass gets you <b>unlimited, lifetime access to every single resource </b>in Product Alliance's library, plus free updates forever. <b>Pay once and you're done — no monthly fees, no subscription BS.</b></p>
                        <br/>
                        <span className='t-14 text-dark'>This bundle includes <b>all</b> 9 of our premium courses:</span>
                        <br/>
                        <ul className='text-dark t-14'>
                            <li>🔍 The Flagship Google PM Interview Course</li>
                            <li>♾ The Flagship Meta PM Interview Course</li>
                            <li>📦 The Flagship Amazon PM Interview Course</li>
                            <li>🖇 The Flagship Microsoft PM Interview Course</li>
                            <li>🍎 The Flagship Apple PM Interview Course</li>
                            <li>🚕 The Flagship Uber PM Interview Course</li>
                            <li>🤿 Company-Specific Deep Dives</li>
                            <li>🧱 Breaking into Product Management</li>
                            <li>🚀 Hacking the PM Interview</li>
                        </ul>
                        <br/>
                        <span className='text-orange t-14 bold'>And within those, you'll get:</span>
                        <br/>
                        <ul className='text-dark t-14'>
                            <li>🍿 60+ sample interview answers from expert PMs, with voiceover commentary from our panel of calibrated interviewers</li>
                            <li>🧩 Step-by-step interview tactics guides for mastering the 17 types of PM interview questions, taught by a Google PM</li>
                            <li>🔮 1300+ interview questions asked in the last month at 28 companies (from FAANG to Stripe, Coinbase, Twitter, Tesla, and more)</li>
                            <li>📚 30+ exclusive strategy videos breaking down the 10-year product roadmaps of Google, Meta, Amazon, Microsoft, Apple, Uber, and more</li>
                            <li>🎭 Our famous "breaking the script" series for standing out at senior+ PM interviews, taught by a Director of Product</li>
                            <li>⏳ 37+ hours of unique video content across the 9 courses</li>
                            <li>💫 Lifetime access to everything in our entire library, plus free updates for life. No monthly fees, no annual fees — this material is yours forever.</li>
                        </ul>
                        <br/>
                        <div className=''>
                            
                        </div>
                    </div>
                    <div className='offers-container-right'>
                        <FormPayment />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offers;