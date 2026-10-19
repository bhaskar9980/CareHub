"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <br/><br/><br/><br/>
      {/* Carousel */}
      <div id="main-carousel" className="carousel slide" data-ride="carousel" data-interval="3000">
          <ol className="carousel-indicators">
              <li data-target="#main-carousel" data-slide-to="0" className="active"></li>
              <li data-target="#main-carousel" data-slide-to="1"></li>
              <li data-target="#main-carousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
              <div className="carousel-item active">
                  <img src="/images/doc-img.png" className="mx-auto d-block w-50" alt="Doctor"/>
              </div>
              <div className="carousel-item">
                  <img src="/images/childrens.jpg" className="mx-auto d-block w-50" alt="Children"/>
              </div>
              <div className="carousel-item">
                  <img src="/images/doctors_treating.jpg" className="mx-auto d-block w-50" alt="Treatment"/>
              </div>
          </div>
          <a className="carousel-control-prev" href="#main-carousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#main-carousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
          </a>
      </div>

      {/* Buttons Section */}
      <section className="buttons-section">
          <div className="buttons">
              <Link href="/appointment">BOOK AN APPOINTMENT</Link>
              <Link href="/health-packs">BOOK A HEALTH CHECK</Link>
              <Link href="/token-status">TOKEN STATUS</Link>
          </div>
      </section>

      <br/><br/><br/><br/><br/><br/>

      {/* Top Departments */}
      <div className="img-container" style={{backgroundColor: "#588da8", padding: "50px 0"}}>
          <h2 className="top-dept" style={{textAlign: "center", color: "white"}}>OUR TOP DEPARTMENTS</h2>
          <hr/>
          <div>
              <div style={{display: "inline-block"}}>
                  <img className="icons-img" src="/images/icons/cardiology.png" alt="" width="75px"/><br/> 
                  <span style={{color: 'white'}}>CARDIOLOGY</span>
              </div>
              <div style={{display: "inline-block"}}>
                  <img className="icons-img" src="/images/icons/neurology.png" alt="" width="75px"/><br/>
                  <span style={{color: 'white'}}>NEUROLOGY</span>
              </div>
              <div style={{display: "inline-block"}}>
                  <img className="icons-img" src="/images/icons/gynaecology.png" alt="" width="75px"/><br/>
                  <span style={{color: 'white'}}>GYNAECOLOGY</span>
              </div>
              <div style={{display: "inline-block"}}>
                  <img className="icons-img" src="/images/icons/obstetrics.png" alt="" width="75px"/><br/>
                  <span style={{color: 'white'}}>OBSTETRICS</span>
              </div>
              <div style={{display: "inline-block"}}>
                  <img className="icons-img" src="/images/icons/orthopaedics.png" alt="" width="75px"/><br/>
                  <span style={{color: 'white'}}>ORTHOPAEDICS</span>
              </div>
              <div style={{display: "inline-block"}}>
                  <img className="icons-img" src="/images/icons/radiology.png" alt="" width="75px"/><br/>
                  <span style={{color: 'white'}}>RADIOLOGY</span>
              </div>
              <div style={{display: "inline-block"}}>
                  <img className="icons-img" src="/images/icons/urology.png" alt="" width="75px"/><br/>
                  <span style={{color: 'white'}}>UROLOGY</span>
              </div>
          </div>
      </div>

      {/* Why Choose Us */}
      <div className="container-fluid" style={{backgroundColor: "lightblue", padding: "50px 0"}}>
          <h2 className="why-reason" style={{textAlign: "center"}}>WHY CHOOSE RANDOM HOSPITAL</h2>
          <hr/>
          <div className="row m-0" style={{padding: "40px 0"}}>
              <div className="col-md-3 px-5" style={{textAlign: "center"}}>
                  <img src="/images/experience.png" style={{width: "100px", borderRadius: "100%"}} />
                  <h3 style={{padding: "10px"}}>More experience</h3>
                  <p>Every year, more than a million people come to Random Hospital for care. Our highly specialized experts are deeply experienced in treating rare and complex conditions.</p>
              </div>
              <div className="col-md-3 px-5" style={{textAlign: "center"}}>
                  <img src="/images/answer.png" style={{width: "100px", borderRadius: "100%"}} />
                  <h3 style={{padding: "10px"}}>The right answers</h3>
                  <p>Getting effective treatment depends on identifying the right problem. In a recent study, 88 percent of patients who came to Random Hospital for a second opinion received a new or refined diagnosis.</p>
              </div>
              <div className="col-md-3 px-5" style={{textAlign: "center"}}>
                  <img src="/images/seamless.png" style={{width: "100px", borderRadius: "100%"}} />
                  <h3 style={{padding: "10px"}}>Seamless care</h3>
                  <p>At Random Hospital, every aspect of your care is coordinated and teams of experts work together to provide exactly the care you need. What might take months elsewhere can often be done in days here.</p>
              </div>
              <div className="col-md-3 px-5" style={{textAlign: "center"}}>
                  <img src="/images/experience.png" style={{width: "100px", borderRadius: "100%"}} />
                  <h3 style={{padding: "10px"}}>Expertise</h3>
                  <p>Random Hospital experts are some of the best in the world. In the News & World Report rankings of top hospitals, Random Hospital is consistently ranked among the top hospitals in the nation.</p>
              </div>
          </div>
      </div>

      {/* COVID Research */}
      <div className="covid-research" style={{backgroundColor: "#588da8", padding: "50px 0"}}>
          <div style={{textAlign: "center"}}>
              <img src="/images/icons/covid.png" alt="" width="210px" style={{paddingBottom: "25px"}} />
              <br/>
              <h2 className="covid-res" style={{textAlign: "center", color: "white"}}>#COVID RESEARCH</h2>
              <hr/>
          </div>
          <div style={{textAlign: "center", color: 'white'}}>
              <p style={{width: "70%", display: "inline-block"}}>
                  Random Hospital,as an institution has responded aggressively to the government’s call for a rapid response to defeat the coronavirus.In a matter of weeks,we has mobilized its entire operation to take on the virus, while making critical investments in research and participating in leadership roles at the local,state and federal levels.
              </p>
              <br/><br/>
              <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/global-research-on-novel-coronavirus-2019-ncov" target="_blank">
                  <button type="button" className="btn btn-primary" style={{backgroundColor: "#00263B"}}>KNOW MORE</button>
              </a>
          </div>
      </div>

      {/* Testimonials */}
      <div className="testimonial" style={{backgroundColor: "lightblue", padding: "50px 0", textAlign: "center"}}>
          <img src="/images/testimonial.png" alt="" width="150px" style={{paddingBottom: "15px"}} />
          <h2 style={{textAlign: "center"}}>TESTIMONIALS</h2>
          <hr className="hybrid"/>
          <h3 style={{color: "lightslategray", padding: "15px 0 5px"}}>SUREKHA</h3>
          <div className="testimonial-row">
              <img className="smoking-img" src="/images/female.jpg" alt="" style={{width: "30%", paddingTop: "10px"}} />
              <p style={{width: "67%", display: "inline-block", textAlign: "left"}}>My wife Surekha has a habit of smoking tobacco. Few months back, she was diagonalized with throat cancer. We come from a very poor background with only two bangles. We are daily wage workers. Only property left with us is those two bangles. we visited many hospitals and was in a situation of selling those two bangles but there was no use, then we got to know about random hospital, she was appointed and has under gone surgery. And to our miracle those two bangles have become six bangles and she is back on her feet and now she teases me that she is earning more than me.</p>
          </div>
          <h3 style={{color: "lightslategray", padding: "15px 0 5px"}}>BROTHERS</h3>
          <div className="testimonial-row2">
              <img className="heartattack-img" src="/images/male.jpg" alt="" style={{height: "210px"}} />
              <p style={{width: "60%", display: "inline-block", textAlign: "left"}}>Iam from uganda. my brother has diagnosed a cardiac problem.i have visited almost every hospital in uganda. doctors told that they have to put a stent in his heart .but looking at the cost for the surgery i have got a cardiac attack.now after getting to know about random hospital both i and my brother undergone the stent to our hearts.now i reccommend anyone who wants stents at a low cost.</p>
          </div>
      </div>
    </>
  );
}
