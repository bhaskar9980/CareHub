"use client";

import { useState } from 'react';

export default function TokenStatusPage() {
  // Mock data to simulate the PHP logic
  const [userType, setUserType] = useState('patient'); // 'patient' or 'doctor'
  const [tokenData] = useState({
    timeSlot: "09:00 - 01:00",
    runningToken: 12,
    yourToken: 15,
    totalTokens: 20
  });

  return (
    <div style={{textAlign: "center"}}>
      <br/><br/><br/><br/><br/>
      
      {/* Dev toggle for demonstration */}
      <div style={{position: 'absolute', top: '100px', right: '10px', opacity: 0.5}}>
        <button className="btn btn-sm btn-light" onClick={() => setUserType(userType === 'patient' ? 'doctor' : 'patient')}>
             Toggle View ({userType})
        </button>
      </div>

      <h2>Time Slot: {tokenData.timeSlot}</h2>
      <h2>Running Token : {tokenData.runningToken}</h2>

      {userType === 'patient' ? (
        <h2>Your Token : {tokenData.yourToken}</h2>
      ) : (
        <>
            <h2>{tokenData.totalTokens}</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <button type="submit" className="btn btn-primary">next patient</button>
            </form>
        </>
      )}
    </div>
  );
}
