"use client";

import Link from 'next/link';

export default function CareersPage() {
  return (
    <>
      <br/><br/><br/>
      <div className="container">
          <div className="py-5">
              <img src="/images/careers.png" alt="Careers" width="200px" />
              <br/><br/>
              <h1>CAREERS</h1>
              <br/>
              <p className="lead">THE BEST WAY TO BUILD YOUR FUTURE IS TO CREATE IT.</p>
              <p style={{float: 'right'}}>-Abrahim lincon</p>
              <br/><br/>
              <h3>WHY JOIN RANDOM HOSPITALS?</h3>
              <br/>
              <p style={{fontFamily: 'verdana'}}>The engaging and inclusive culture has boded well for the thousands of
                  happy
                  employees over the years and will continue to do so for the many others.
                  We always work as a close-knit team that thrives on healthy teamwork and the satisfaction of being
                  there
                  for one another.
                  That’s why, when an employee joins us, it is like our family has a new addition. We have always
                  believed
                  in the power of human potential and consider our employees to be our greatest assets.
                  It is often said that &quot;An organisation is only as good as the people it keeps&quot; and we believe every
                  word
                  of this.
                  A large part of our success is thanks to our highly motivated workforce of 1000 people from diverse
                  personal and professional backgrounds who get together in the medical
                  and non-medical fields to effectively run this large hospital.</p>
          </div>
          <h3> LATEST OPENINGS</h3>
          <br/>
          <div className="classified-container">
              <div className=" wrap2">
                  <div id="example2">
                      <h4 className="h4">Deputy Manager</h4>
                      <p className="classified">NUEROLOGY</p>
                      <Link href="/contact">
                          <button className="btn btn-outline-primary">SUBMIT </button>
                      </Link>
                  </div>
                  <div id="example2">
                      <h4 className="h4">Lab Technician</h4>
                      <p className="classified">Blood Testing Lab</p>
                      <Link href="/contact">
                          <button className="btn btn-outline-primary">SUBMIT </button>
                      </Link>
                  </div>
                  <div id="example2">
                      <h4 className="h4">Chief Doctor </h4>
                      <p className="classified">PHYSCOLOGY</p>
                      <Link href="/contact">
                          <button className="btn btn-outline-primary">SUBMIT </button>
                      </Link>
                  </div>
                  <div id="example2">
                      <h4 className="h4">Assistant Surgeon</h4>
                      <p className="classified">ORTHOPAEDICS</p>
                      <Link href="/contact">
                          <button className="btn btn-outline-primary">SUBMIT </button>
                      </Link>
                  </div>
                  <div id="example2">
                      <h4 className="h4">HOD </h4>
                      <p className="classified">NUEROLOGY</p>
                      <Link href="/contact">
                          <button className="btn btn-outline-primary">SUBMIT </button>
                      </Link>
                  </div>
                  <br/>
              </div>
          </div>
      </div>
      <br/><br/><br/><br/><br/>
    </>
  );
}
