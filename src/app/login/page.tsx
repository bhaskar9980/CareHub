"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleTypeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userType) {
      setStep(2);
    } else {
      alert('you have to select an option');
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    if (username && password) {
      alert('You have been signed in successfully');
      router.push('/');
    } else {
      alert('invalid username or password');
    }
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
                    id="User" 
                    required 
                    name="user"
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
                <input className="btn btn-outline-primary" type="submit" value="Submit" name="typesubmit" />
            </div>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleLoginSubmit}>
            <div id="example1">
                <label>Username</label>
                <input 
                    className="form-control" 
                    type="text" 
                    name="luser"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <p></p>
                <label>Password</label>
                <input 
                    className="form-control" 
                    type="password" 
                    name="lpassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <p></p>
                <input className="btn btn-outline-primary" type="submit" value="Login" name="lsubmit" />
                <br/><br/>
                <button type="button" className="btn btn-link" onClick={() => setStep(1)}>Back</button>
            </div>
        </form>
      )}

      <div style={{textAlign: 'center', marginTop: '20px'}}>
        <Link href="/forgot">Forgot Password</Link>
      </div>
      <br/><br/>
    </>
  );
}
