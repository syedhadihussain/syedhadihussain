import { useState, useEffect } from "react";

const TIMER_STORAGE_KEY = "discount_timer_start";
const TIMER_DURATION = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds

export const useDiscountTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    // Get or set the timer start time
    let startTime = localStorage.getItem(TIMER_STORAGE_KEY);
    
    if (!startTime) {
      startTime = Date.now().toString();
      localStorage.setItem(TIMER_STORAGE_KEY, startTime);
    }

    const calculateTimeLeft = () => {
      const start = parseInt(startTime!, 10);
      const endTime = start + TIMER_DURATION;
      const now = Date.now();
      const difference = endTime - now;

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        expired: false,
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const resetTimer = () => {
    localStorage.removeItem(TIMER_STORAGE_KEY);
    const newStartTime = Date.now().toString();
    localStorage.setItem(TIMER_STORAGE_KEY, newStartTime);
  };

  return { ...timeLeft, resetTimer };
};
