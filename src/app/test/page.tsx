"use client";

import Link from 'next/link';

export default function BookingPage() {
  return (
    <>
      <br/><br/><br/><br/>
      <form action="/payment">
          <div id="example5">
              <label>Select Date:</label><br/>
              <input className="form-control" type="date" name="date" required />
              <p></p>
              <label>Select Time:</label><br/>
              <input className="form-control" type="time" name="time" required />
              <p></p>
              <Link href="/payment">
                <button type="button" className="btn btn-outline-primary">Proceed</button>
              </Link>
          </div>
      </form>
    </>
  );
}
