"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function HealthPacksPage() {
  return (
    <>
      <br/><br/><br/><br/>
      <br/>
      <h2 style={{padding: "20px 0"}}>OUR POPULAR PACKS</h2>
      <div className="doctors-container">
          <div className="wrap2" style={{width: "90%", display: "inline-block"}}>
              <div id="example1">
                  <div>
                      <img src="/images/file.png" alt="" width="70px" style={{paddingBottom: "10px"}} />
                  </div>
                  <h4 className="h4">Comprehensive body check up for men</h4>
                  <p className="classified">Category: General body checkup</p>
                  <p className="classified1">Get your entire body checked up
                  </p>
                  <Link href="/test">
                      <button className="btn btn-outline-primary">BUY</button>
                  </Link>
              </div>
              <div id="example1">
                  <div>
                      <img src="/images/file.png" alt="" width="70px" style={{paddingBottom: "10px"}} />
                  </div>
                  <h4 className="h4">Comprehensive body check up for women</h4>
                  <p className="classified">Category: General body checkup</p>
                  <p className="classified1">Get your entire body checked up
                  </p>
                  <Link href="/test">
                      <button className="btn btn-outline-primary">BUY</button>
                  </Link>
              </div>
              <div id="example1">
                  <div>
                      <img src="/images/file.png" alt="" width="70px" style={{paddingBottom: "10px"}} />
                  </div>
                  <h4 className="h4">Comprehensive Fitness check up </h4>
                  <p className="classified">Category: Fitness</p>
                  <p className="classified1">Get to your know your fitness levels
                  </p>
                  <Link href="/test">
                      <button className="btn btn-outline-primary">BUY</button>
                  </Link>
              </div>
              <div id="example1">
                  <div>
                      <img src="/images/file.png" alt="" width="70px" style={{paddingBottom: "10px"}} />
                  </div>
                  <h4 className="h4">Comprehensive body check up for couple</h4>
                  <p className="classified">Category: general body checkup for couples</p>
                  <p className="classified1">Get your entire body checked up
                  </p>
                  <Link href="/test">
                      <button className="btn btn-outline-primary">BUY</button>
                  </Link>
              </div>
              <div id="example1">
                  <div>
                      <img src="/images/file.png" alt="" width="70px" style={{paddingBottom: "10px"}} />
                  </div>
                  <h4 className="h4">Comprehensive blood Composition test</h4>
                  <p className="classified">Category:Blood Test</p>
                  <p className="classified1">Get your complete report and composition
                  </p>
                  <Link href="/test">
                      <button className="btn btn-outline-primary">BUY</button>
                  </Link>
              </div>
          </div>
      </div>
    </>
  );
}
