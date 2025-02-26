'use client';

import { useState, useEffect } from 'react';

export default function DynamicAge({ birthDate }) {
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    const calculateAge = (dateOfBirth) => {
      const today = new Date();
      let years = today.getFullYear() - dateOfBirth.getFullYear();
      let months = today.getMonth() - dateOfBirth.getMonth();
      let days = today.getDate() - dateOfBirth.getDate();

      // Adjust for negative months/days
      if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
      }

      // Handle negative days by checking previous month
      if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        days += new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, 0).getDate();
        months--;
      }

      // Ensure months stay positive
      if (months < 0) {
        months += 12;
      }

      return { years, months, days };
    };

    // Update age immediately and set interval for updates
    const updateAge = () => setAge(calculateAge(new Date(birthDate)));
    updateAge();
    
    // Update every second for real-time changes
    const interval = setInterval(updateAge, 1000);
    
    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <>
      {age.years > 0 && <span>{age.years} years </span>}
      {age.months > 0 && <span>{age.months} months </span>}
      <span>{age.days} days</span>
    </>
  );
}