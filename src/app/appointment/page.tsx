"use client";

import { useState } from 'react';
import Link from 'next/link';

// Mock Data matching the PHP database structure
const DOCTORS_DATA = [
  { id: 1, fname: "Dileep", lname: "", branch: "NEUROLOGY", otime: "09:00", ctime: "03:00", gender: "m" },
  { id: 2, fname: "Bhaskar", lname: "", branch: "CARDIOLOGY", otime: "10:00", ctime: "04:00", gender: "m" },
  { id: 3, fname: "Kasi", lname: "", branch: "NEPHROLOGY", otime: "11:00", ctime: "05:00", gender: "m" },
  { id: 4, fname: "Hemanth", lname: "", branch: "ORTHOPAEDICS", otime: "12:00", ctime: "06:00", gender: "m" },
  { id: 5, fname: "Lokesh", lname: "", branch: "OBSTETRICS", otime: "13:00", ctime: "07:00", gender: "m" },
  { id: 6, fname: "Naveen", lname: "", branch: "RADIOLOGY", otime: "14:00", ctime: "08:00", gender: "m" },
  { id: 7, fname: "Khana", lname: "", branch: "UROLOGY", otime: "15:00", ctime: "09:00", gender: "m" },
];

export default function AppointmentPage() {
  const [department, setDepartment] = useState("");
  const [search, setSearch] = useState("");
  const [slot, setSlot] = useState("8"); // 8 is "Select an option" in legacy logic

  // Filter Logic matching the legacy PHP conditions
  const filteredDoctors = DOCTORS_DATA.filter(doc => {
    // 1. All empty/default
    if (slot === "8" && department === "" && search === "") return true;

    // 2. Search only
    if (slot === "8" && department === "" && search !== "") {
      return doc.fname.toLowerCase().includes(search.toLowerCase()) || doc.lname.toLowerCase().includes(search.toLowerCase());
    }

    // 3. Department only
    if (slot === "8" && department !== "" && search === "") {
      return doc.branch === department;
    }

    // 4. Time slot only (Simplified matching logic for demo)
    if (slot !== "8" && department === "" && search === "") {
      // In a real app we'd parse the time. For now, we'll just show all because the slot logic matches 'otime' string.
      // The legacy code matched otime='$slot:00'. Let's mimic that.
      const timeString = slot.length === 1 ? `0${slot}:00` : `${slot}:00`;
      // Note: The mock data times are "09:00". The legacy select values are 9, 10, etc.
      // We will skip strict time filtering for this UI demo to ensure results show up, 
      // or implement it if the user wants strict fidelity.
      // Let's implement strict matching to be safe.
      return parseInt(doc.otime.split(':')[0]) === parseInt(slot);
    }
    
    // Combined filters
    const matchDept = department === "" || doc.branch === department;
    const matchSearch = search === "" || (doc.fname.toLowerCase().includes(search.toLowerCase()) || doc.lname.toLowerCase().includes(search.toLowerCase()));
    
    // For slot, we only filter if slot is not 8
    const matchSlot = slot === "8" || parseInt(doc.otime.split(':')[0]) === parseInt(slot);

    return matchDept && matchSearch && matchSlot;
  });

  return (
    <>
      <br/><br/><br/><br/>
      <br/>
      <div style={{textAlign: 'center'}}>
        {/* Department Select */}
        <div className="col-md-4 mb-3" style={{textAlign: "center", display: "inline-block"}}>
            <label>DEPARTMENT</label>
            <br/>
            <select 
                name="department" 
                className="custom-select d-block w-100" 
                id="state"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
            >
                <option value="">Select an option</option>
                <option value="CARDIOLOGY">CARDIOLOGY</option>
                <option value="NEUROLOGY">NEUROLOGY</option>
                <option value="ENT">ENT</option>
                <option value="NEPHROLOGY"> NEPHROLOGY</option>
                <option value="GYNAECOLOGY"> GYNAECOLOGY</option>
                <option value="OBSTETRICS"> OBSTETRICS</option>
                <option value="ORTHOPAEDICS">ORTHOPAEDICS</option>
                <option value="RADIOLOGY"> RADIOLOGY</option>
                <option value="UROLOGY"> UROLOGY</option>
                <option value="DERMATOLOGY">DERMATOLOGY</option>
            </select>
        </div>
        <br/>
        
        {/* Doctor Search */}
        <div className="col-md-4 mb-3" style={{textAlign: "center", display: "inline-block"}}>
            <label>DOCTOR</label>
            <br/>
            <input 
                className="custom-select d-block w-100" 
                type="text" 
                name="search" 
                placeholder="Search" 
                style={{textAlign: "center", display: "inline-block"}}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
        <br/>

        {/* Time Slot Select */}
        <div className="col-md-4 mb-3" style={{textAlign: "center", display: "inline-block"}}>
            <label>TIME SLOT</label>
            <select 
                name="slot" 
                className="custom-select d-block w-100" 
                id="state"
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
            >
                <option value="8">Select an option</option>
                <option value="9">9:00 AM - 10:00 AM</option>
                <option value="10">10:00 AM - 11:00 AM</option>
                <option value="11">11:00 AM - 12:00 PM</option>
                <option value="12">12:00 AM - 1:00PM</option>
                <option value="13">1:00 AM - 2:00 PM</option>
                <option value="14">2:00 AM - 3:00 PM</option>
                <option value="15">3:00 AM - 4:00 PM</option>
                <option value="16">4:00 AM - 5:00 PM</option>
                <option value="17">5:00 AM - 6:00 PM</option>
                <option value="18">6:00 AM - 7:00 PM</option>
                <option value="19">7:00 AM - 8:00 PM</option>
            </select>
        </div>
        <br/>
        {/* Search Button - In React we don't strictly need a submit button for live filtering, but we keep it for visual fidelity */}
        <button className="btn btn-outline-primary" type="button">SEARCH</button>
      </div>

      {/* Results */}
      <div>
        {filteredDoctors.length > 0 ? (
            filteredDoctors.map(doc => (
                <div id="example1" key={doc.id}>
                    <div>
                        <img src="/images/icons/doctor-avatar.png" alt="" width="70px" style={{paddingBottom: "10px"}} />
                    </div>
                    <h4 className="h4">{doc.fname} {doc.lname}</h4>
                    <p className="classified">{doc.branch}</p>
                    <p className="classified1">
                        appointment slot <br/> {doc.otime} - {doc.ctime}
                    </p>
                    <Link href={`/payment?doctor=${doc.fname}`}>
                        <button className="btn btn-outline-primary" name="appointment" value={doc.fname}>BOOK APPOINTMENT</button>
                    </Link>
                </div>
            ))
        ) : (
            <div style={{textAlign: 'center'}}>
                <br/><br/><br/>
                <h2>No Search results found. Try again!</h2>
            </div>
        )}
      </div>
    </>
  );
}
