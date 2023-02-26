import React, { useState } from 'react'

export default function PlTable() {
  const [round, setRound] = useState(1);
  const [currentRound, setCurrentRound] = useState();

  onRoundChange = (num) => {
    setCurrentRound(num);
  };
  
  return (
    <div>PlTable</div>
  )
}