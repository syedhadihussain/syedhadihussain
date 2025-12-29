import { useCallback, useEffect, useState } from "react";

const TIMER_STORAGE_KEY = "discount_timer_start";
const TIMER_DURATION = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds

type DiscountTimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

const computeTimeLeft = (startMs: number): DiscountTimeLeft => {
  const endTime = startMs + TIMER_DURATION;
  const now = Date.now();
  const difference = endTime - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    expired: false,
  };
};

const ensureStartTimeMs = (): number => {
  let startTime = localStorage.getItem(TIMER_STORAGE_KEY);
  if (!startTime) {
    startTime = Date.now().toString();
    localStorage.setItem(TIMER_STORAGE_KEY, startTime);
  }
  return parseInt(startTime, 10);
};

export const useDiscountTimer = () => {
  const [timeLeft, setTimeLeft] = useState<DiscountTimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const startMs = ensureStartTimeMs();
      return computeTimeLeft(startMs);
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const resetTimer = useCallback(() => {
    const newStartTime = Date.now();
    localStorage.setItem(TIMER_STORAGE_KEY, newStartTime.toString());
    setTimeLeft(computeTimeLeft(newStartTime));
  }, []);

  return { ...timeLeft, resetTimer };
};
