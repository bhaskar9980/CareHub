"use client";

import { useState } from 'react';

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");

  // Common Fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    specialization: "", // Doctor specific
    consultationFees: "", // Doctor specific
  });

  const handleTypeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userType) {
      setStep(2);
    } else {
      alert('you have to select an option');
    }
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Registered successfully as ${userType}!`);
  };

  return (
    <>
      <br/><br/><br/><br/>

      {step === 1 && (
        <form onSubmit={handleTypeSubmit}>
            <div id="example4">
                <label>Select the User</label>
                <p></p>
                <select 
                    className="custom-select d-block w-100" 
                    name="user" 
                    required
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                >
                    <option value="">Choose...</option>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                    <option value="staff">Staff</option>
                </select>
                <br/>
                <p></p>
                <input className="btn btn-outline-primary" type="submit" value="Proceed" name="typesubmit" />
            </div>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSignupSubmit} style={{maxWidth: '600px', margin: '0 auto', padding: '20px'}}>
            <h3 style={{textAlign: 'center'}}>Sign Up as {userType.charAt(0).toUpperCase() + userType.slice(1)}</h3>
            <br/>
            
            <div className="form-group text-left">
                <label>First Name</label>
                <input className="form-control" type="text" required />
            </div>
            
            <div className="form-group text-left">
                <label>Last Name</label>
                <input className="form-control" type="text" required />
            </div>

            <div className="form-group text-left">
                <label>Email</label>
                <input className="form-control" type="email" required />
            </div>

            <div className="form-group text-left">
                <label>Username</label>
                <input className="form-control" type="text" required />
            </div>

            <div className="form-group text-left">
                <label>Password</label>
                <input className="form-control" type="password" required />
            </div>

            <div className="form-group text-left">
                <label>Confirm Password</label>
                <input className="form-control" type="password" required />
            </div>

             {/* Doctor Specific Fields could go here */}
             {userType === 'doctor' && (
                <div className="form-group text-left">
                    <label>Specialization</label>
                    <select className="form-control">
                        <option>Cardiology</option>
                        <option>Neurology</option>
                        {/* ... other options from PHP ... */}
                    </select>
                </div>
             )}

            <br/>
            <div style={{textAlign: 'center'}}>
                <button className="btn btn-primary" type="submit">Sign Up</button>
                <br/><br/>
                <button type="button" className="btn btn-link" onClick={() => setStep(1)}>Back</button>
            </div>
        </form>
      )}
    </>
  );
}
