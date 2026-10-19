"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <div style={{backgroundColor: "#2b3645", padding: "25px 0 25px"}}>
        <div className="row m-0">
            <div className="col-1"></div>
            <div className="col-md-3 col-sm-12" style={{textAlign: "left", display: "inline-block"}}>
                <br/><br/><br/>
                <img src="/images/png/001-facebook.png" alt="" width="30px" className="mr-2"/>
                <img src="/images/png/005-instagram.png" alt="" width="30px" className="mr-2"/>
                <img src="/images/png/007-twitter.png" alt="" width="30px" className="mr-2"/>
                <img src="/images/png/002-youtube.png" alt="" width="30px" className="mr-2"/>
            </div>
            <div className="col-5"></div>
            <div className="col-md-3 col-sm-12">
                <p style={{color: "aliceblue", textAlign: "left", fontSize: "14px"}}>
                    <span style={{fontSize: "20px"}}>Random Hospital</span> <br/>
                    Wadakanda,OMR, <br/>
                    Kelambakkam,Chennai 603123 <br/>
                    Phone - 9848022338
                </p>
            </div>
        </div>
        <br/>
        <div className="row m-0">
            <div className="col-md-8 col-sm-12">
                <p style={{color: "aliceblue", textAlign: "left", padding: "30px 0 0 40px"}}>
                    Copyrights &copy; 2020 RANDOM HOSPITAL
                </p>
            </div>
            <div className="col-md-4 col-sm-12">
                <Link className="navbar-brand" href="/">
                    <img src="/images/hc.png" alt="Hospital-Logo" width="16%" className="inline-block"/>
                    <span style={{color: 'white', marginLeft: '10px'}}>Random Hospital</span>
                </Link>
            </div>
        </div>
    </div>
  );
}
