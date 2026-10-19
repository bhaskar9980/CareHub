"use client";

export default function ContactPage() {
  return (
    <>
      <br/><br/><br/>
      <div className="contactus-container">
          <section className="contactus">
              <div className="wrap">
                  <div className="contactform">
                      <div className="contactformlt">
                          <div className="con-getintouch">
                              <h1>Get in Touch</h1>
                              <p>You can contact us any way that is convenient for you 24/7 Email or Phone. You can also use aquick contact form below or visit our office personally.</p>
                              <p>We would be happy to answer your questions.</p>
                          </div>
                          <form>
                              <div className="contactCont">
                                  <label>First Name</label>
                                  <input className="firstNme" type="text" />
                              </div>
                              <div className="contactCont">
                                  <label>Last Name</label>
                                  <input className="firstNme" type="text" />
                              </div>
                              <div className="contactCont2">
                                  <label>Phone</label>
                                  <input className="firstNme1" type="text" />
                              </div>
                              <div className="messageArea">
                                  <label>Message</label>
                                  <textarea></textarea>
                              </div>
                              <div className="submitBtn">
                                  <a href="mailto:rhhospitalsoffical@gmail.com">Submit</a>
                              </div>
                          </form>
                      </div>
                      <div className="contactformRt">
                          <div className="addHead">
                              <h3>Address</h3>
                              <div className="title-line"></div>
                              <div className="addCont">
                                  <span><img src="/images/location.png" alt="location" /></span>
                                  <p>Wadakanda OMR,</p>
                                  <p>Kelambakkam Chennai,</p>
                                  <p>Tamil Nadu 603123</p>
                              </div>
                          </div>
                          <div className="addHead">
                              <h3>Phones</h3>
                              <div className="title-line"></div>
                              <div className="addCont">
                                  <span><img src="/images/mobile.png" alt="mobile" /></span>
                                  <p><span style={{paddingLeft: "9px"}}> 9848022338</span></p>
                              </div>
                          </div>
                          <div className="addHead">
                              <h3>E-mail</h3>
                              <div className="title-line"></div>
                              <div className="addCont">
                                  <span><img src="/images/mail.png" alt="mail" /></span>
                                  <p><a className="mail" style={{paddingLeft: "9px"}} href="mailto:rhhospitalsofficial@gmail.com">rhhospitalsofficial@gmail.com</a></p>
                              </div>
                          </div>
                          <div className="addHead">
                              <h3>Get Social</h3>
                              <div className="title-line"></div>
                              <div className="addCont">
                                  <ul>
                                      <li>
                                          <a style={{padding: "0 5px"}} href="#"><i className="fa fa-facebook-f"></i></a>
                                      </li>
                                      <li>
                                          <a style={{padding: "0 5px"}} href=" #"><i className="fa fa-instagram"></i></a>
                                      </li>
                                      <li>
                                          <a style={{padding: "0 5px"}} href=" #"><i className="fa fa-twitter"></i></a>
                                      </li>
                                      <li>
                                          <a style={{padding: "0 5px"}} href=" #"><i className="fa fa-youtube"></i></a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
    </>
  );
}
