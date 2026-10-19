"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function DoctorsPage() {
  return (
    <>
      <br/><br/><br/><br/>
      <div className="container">
          <div className="py-5">
              <img src="/images/doctors.png" alt="" width="200px" />
              <br/><br/>
              <h1>DOCTORS</h1>
              <br/>
              <p className="lead" style={{width: "75%", display: "inline-block"}}>WE IN INDIA ONLY PRAY FOR TWO PEOPLE ONE IS GOD
                  AND THE OTHER IS DOCTOR,BUT WE BELIEVE
                  BOTH ARE ONE.</p>
              <br/>
              <h4 style={{textAlign: "left"}}> KNOW US :</h4>
              <br/>
              <p>Our motto <strong>PATIENT FIRST</strong> has been so motivating and the friendly and peaceful
                  atmosphere that we establish has been our key feature to success.We welcome the
                  patients with abright smile that tell them that<strong> WE ARE HERE FOR YOU</strong> have
                  been soothening the mental condition of the patients and that is where our half of the treatment is
                  done, rest is taken care by our professionals.</p>
              <br/><br/><br/><br/>
              <h2>Come Meet Our Experts</h2>
          </div>
      </div>
      <div className="doctors-container">
          <div className="wrap2" style={{width: "90%", display: "inline-block"}}>
              <div id="example1">
                  <div>
                      <img src="/images/icons/doctor-avatar.png" alt="" width="70px" style={{paddingBottom: "10px"}} />
                  </div>
                  <h4 className="h4">Mr.Dileep</h4>
                  <p className="classified">Chairman</p>
                  <p className="classified1">MPhil Clinical Neurology, PGIBAMS (RCI LICENSED) PhD Clinical Neurology (Scholar),Netherlands</p>
                  <Link href="/appointment">
                      <button className="btn btn-outline-primary">BOOK APPOINTMENT</button>
                  </Link>
              </div>
              <div id="example1">
                  <div>
                      <img src="/images/icons/doctor-avatar.png" alt="" width="70px" style={{paddingBottom: "10px"}} />
                  </div>
                  <h4 className="h4">Mr.Bhaskar</h4>
                  <p className="classified">Chairman</p>
                  <p className="classified1">MPhil Clinical Cardiology, PGIBAMS (RCI LICENSED) PhD Clinical Cardiology (Scholar),USA</p>
                  <Link href="/appointment">
                      <button className="btn btn-outline-primary">BOOK APPOINTMENT</button>
                  </Link>
              </div>
              <div id="example1">
                  <div>
                      <img src="/images/icons/doctor-avatar.png" alt="" width="70px" style={{paddingBottom: "10px"}} />
                  </div>
                  <h4 className="h4">Mr.Kasi</h4>
                  <p className="classified">Chairman</p>
                  <p className="classified1">MPhil Clinical Nephrology, PGIBAMS (RCI LICENSED) PhD Clinical Nephrology (Scholar),Canada</p>
                  <Link href="/appointment">
                      <button className="btn btn-outline-primary">BOOK APPOINTMENT</button>
                  </Link>
              </div>
              <div id="example1">
                  <div>
                      <img src="/images/icons/doctor-avatar.png" alt="" width="70px" style={{paddingBottom: "10px"}} />
                  </div>
                  <h4 className="h4">Mr.Hemanth</h4>
                  <p className="classified">Senior Doctor</p>
                  <p className="classified1">MPhil Clinical Orthopaedics, PGIBAMS (RCI LICENSED) PhD Clinical Orthopaedics (Scholar),China</p>
                  <Link href="/appointment">
                      <button className="btn btn-outline-primary">BOOK APPOINTMENT</button>
                  </Link>
              </div>
              <div id="example1">
                  <div>
                      <img src="/images/icons/doctor-avatar.png" alt="" width="70px" style={{paddingBottom: "10px"}} />
                  </div>
                  <h4 className="h4">Mr.Lokesh</h4>
                  <p className="classified">Senior Doctor</p>
                  <p className="classified1">MPhil Clinical Obstetrics, PGIBAMS (RCI LICENSED) PhD Clinical Obstetrics (Scholar),Netherlands</p>
                  <Link href="/appointment">
                      <button className="btn btn-outline-primary">BOOK APPOINTMENT</button>
                  </Link>
              </div>
              <div id="example1">
                  <div>
                      <img src="/images/icons/doctor-avatar.png" alt="" width="70px" style={{paddingBottom: "10px"}} />
                  </div>
                  <h4 className="h4">Mr.Naveen</h4>
                  <p className="classified">Doctor</p>
                  <p className="classified1">MPhil Clinical Radiology, PGIBAMS (RCI LICENSED) PhD Clinical Radiology (Scholar),USA</p>
                  <Link href="/appointment">
                      <button className="btn btn-outline-primary">BOOK APPOINTMENT</button>
                  </Link>
              </div>
              <div id="example1">
                  <div>
                      <img src="/images/icons/doctor-avatar.png" alt="" width="70px" style={{paddingBottom: "10px"}} />
                  </div>
                  <h4 className="h4">Mr.Khana</h4>
                  <p className="classified">Doctor</p>
                  <p className="classified1">MPhil Clinical Urology , PGIBAMS (RCI LICENSED) PhD Clinical Urology (Scholar),Canada</p>
                  <Link href="/appointment">
                      <button className="btn btn-outline-primary">BOOK APPOINTMENT</button>
                  </Link>
              </div>
          </div>
      </div>
      <br/>
      <a href="#">
          <button className="btn btn-secondary">View More</button>
      </a>
      <br/><br/><br/><br/>
    </>
  );
}
