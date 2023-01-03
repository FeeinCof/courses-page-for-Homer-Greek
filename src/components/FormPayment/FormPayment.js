/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import classNames from 'classnames';
import { Button } from '~/components';
// import debitIcon1 from '../../assets/images/debiticon@1.svg';
import paypalIcon from '../../assets/images/paypal.svg';
import './FormPayment.css';

const FormPayment = ({ coupon }) => {
  // var validation = {
  //     isEmailAddress:function(str) {
  //         var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //         return pattern.test(str);  // returns a boolean
  //     },
  //     isNotEmpty:function (str) {
  //         var pattern =/\S+/;
  //         return pattern.test(str);  // returns a boolean
  //     },
  //     isNumber:function(str) {
  //         var pattern = /^\d+$/;
  //         return pattern.test(str);  // returns a boolean
  //     },
  //     isSame:function(str1,str2){
  //         return str1 === str2;
  //     }
  // };
  const [isCoupon, setCoupon] = useState('ff8790asdasd'); // demo coupon
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <>
      <div className="FormPayment shadow">
        <div className="panel-heading">
          <h1
            className={classNames('t-30', {
              'line-through': isCoupon,
            })}
          >
            $2,319.00 USD
          </h1>
        </div>
        {isCoupon && (
          <div className="price-breakdown">
            <div>
              <span className="t-14 f-500 text-gray">Subtotal:</span>
              <span className="t-14 normal text-gray">$2,319.00 USD</span>
            </div>
            <div>
              <span className="t-14 f-500 text-orange">Discount:</span>
              <span className="t-14 f-500 text-orange">
                $1,740.00 USD off &nbsp;
                <i
                  className="text-dark close-button bold"
                  onClick={() => {
                    setCoupon(null);
                  }}
                >
                  &times;
                </i>
              </span>
            </div>
            <hr />
            <div>
              <span className="t-14 f-500 text-dark">Due now:</span>
              <span className="t-14 f-500 text-dark">$579.00 USD</span>
            </div>
          </div>
        )}
        <form action="asfasfsa">
          <div className="form-group">
            {!isCoupon && (
              <input
                className="form-control form-control-sm"
                type={'text'}
                name={'email'}
                placeholder={'Coupon'}
                defaultValue=""
              ></input>
            )}
            <input
              className="form-control form-control-sm"
              type={'email'}
              placeholder={'Email address'}
              required
              defaultValue=""
            ></input>
            <br />
            {!paymentMethod && (
              <div className="checks-group">
                <div className="form-check">
                  <input
                    onClick={() => setPaymentMethod('card')}
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    defaultValue="option1"
                  />
                  <label className="form-check-label text-gray" htmlFor="exampleRadios1">
                    Card
                  </label>
                </div>
                <hr />
                <div className="form-check">
                  <input
                    onClick={() => setPaymentMethod('paypal')}
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    defaultValue="option2"
                  />
                  <label className="form-check-label text-gray" htmlFor="exampleRadios2">
                    Paypal
                  </label>
                </div>
              </div>
            )}
            {paymentMethod === 'card' && (
              <div className="debit-input form-control form-control-sm">
                <div className="debit-icon">
                  <svg focusable="true" width={'24px'} viewBox="0 0 32 21">
                    <g fill="#999999">
                      <g>
                        <path d="M26.58 21H2.42A2.4 2.4 0 0 1 0 18.62V4.38A2.4 2.4 0 0 1 2.42 2h24.16A2.4 2.4 0 0 1 29 4.38v14.25A2.4 2.4 0 0 1 26.58 21zM10 7.83c0-.46-.35-.83-.78-.83H3.78c-.43 0-.78.37-.78.83v3.34c0 .46.35.83.78.83h5.44c.43 0 .78-.37.78-.83V7.83zM25 17c.65 0 1-.3 1-1s-.35-1-1-1h-3c-.65 0-1 .3-1 1s.35 1 1 1h3zm-6 0c.65 0 1-.3 1-1s-.35-1-1-1h-3c-.65 0-1 .3-1 1s.35 1 1 1h3zm-6 0c.65 0 1-.3 1-1s-.35-1-1-1h-3c-.65 0-1 .3-1 1s.35 1 1 1h3zm-6 0c.65 0 1-.3 1-1s-.35-1-1-1H4c-.65 0-1 .3-1 1s.35 1 1 1h3z"></path>
                      </g>
                    </g>
                  </svg>
                  {/* <svg focusable="false" viewBox="0 0 32 21" width={'24px'}><g fill="#b94a48"><g><path d="M18.13 2a8.45 8.45 0 0 0-1.57 4H0v3h16.74A8.5 8.5 0 0 0 29 14.5V19c0 .94-1.08 2-2 2H2c-.92 0-2-1.06-2-2V4c0-.94 1.08-2 2-2h16.13zM25 14a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm-2.78-9.9h-.79l-1.93.98v1l1.53-.8V9.9h1.2V4.1zm2.3.8c.57 0 .97.32.97.78 0 .5-.47.85-1.15.85h-.3v.85h.36c.72 0 1.21.36 1.21.88 0 .5-.48.84-1.16.84-.5 0-1-.16-1.52-.47v1c.56.24 1.12.37 1.67.37 1.31 0 2.21-.67 2.21-1.64 0-.68-.42-1.23-1.12-1.45.6-.2.99-.73.99-1.33 0-.94-.83-1.58-2.03-1.58a4 4 0 0 0-1.57.34v.98c.48-.27.97-.42 1.44-.42zm4.32 2.18c.73 0 1.24.43 1.24.99 0 .59-.51 1-1.24 1-.44 0-.9-.14-1.37-.43v1.03c.49.22.99.33 1.48.33.26 0 .5-.04.73-.1.52-.85.82-1.83.82-2.88l-.02-.42a2.3 2.3 0 0 0-1.23-.32c-.18 0-.37.01-.57.04v-1.3h1.44a5.62 5.62 0 0 0-.46-.92h-2.02v3.15c.4-.1.8-.17 1.2-.17z"></path></g></g></svg> */}
                </div>
                <div className="input-field">
                  <span className="number-card-container">
                    <input
                      className="number-card-input"
                      type={'text'}
                      placeholder="Number"
                      name="cardnumber"
                      defaultValue=""
                    />
                  </span>
                  <span className="info-card-container">
                    <input
                      className="date-card-input"
                      type={'text'}
                      placeholder="MM / YY"
                      name="cardexpiry"
                      defaultValue=""
                    />
                    <input className="CVC-input" type="text" placeholder="CVC" name="cardcvc" />
                  </span>
                </div>
              </div>
            )}
            {paymentMethod && (
              <span className="t-12 text-orange change-method-text" onClick={() => setPaymentMethod(null)}>
                change a payment method
              </span>
            )}
            <br />
            <br />
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  defaultValue="option1"
                  required
                />
                <label className="form-check-label t-12 text-gray" htmlFor="inlineCheckbox1">
                  I have read and agree to the terms and conditions of this page as follows:
                </label>
              </div>
              <textarea
                defaultValue="Per our terms of service, all sales are final. We do not offer refunds on our courses, given that a large portion of their value proposition is the over-300 pages of downloadable content they come with in addition to lifetime video access. We are proud of our content, so we feature full-length sample videos on productalliance.com to help you gauge if our materials are right for your needs before you make a purchasing decision."
                className="form-control"
                style={{
                  fontSize: '12px',
                }}
                rows="4"
              />
              <a href="" className={classNames('t-12')}>
                our terms of service
              </a>
            </div>
            <br />
            <div
              style={{
                textAlign: 'center',
              }}
            >
              {(!paymentMethod || paymentMethod === 'card') && (
                <Button large shadow orange>
                  Complete my purchase
                </Button>
              )}
              {paymentMethod === 'paypal' && (
                <>
                  <Button large shadow light type={'button'}>
                    <img src={paypalIcon} alt="img" /> <span className="bold">Checkout</span>
                  </Button>
                  <p className="t-14 bold">The safer, easier way to pay!</p>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormPayment;
