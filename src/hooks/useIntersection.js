import { useEffect, useState } from "react";

const useIntersection = (className, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);

    if (elements.length < 1) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.1, ...options }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });
  }, [className, options]);

  return isVisible;
};

export default useIntersection;
