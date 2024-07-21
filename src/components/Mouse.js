import React from 'react'
import './Mouse.css';
import { useState, useEffect,useRef } from 'react';

function Mouse({ targetRef }) {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { left, top } = targetRef.current.getBoundingClientRect();
      setCoords({ x: e.clientX - left, y: e.clientY - top });
    };

    const targetElement = targetRef.current;
    if (targetElement) {
      targetElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (targetElement) {
        targetElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [targetRef]);

  useEffect(() => {
    const circles = circlesRef.current;

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
    });

    const animateCircles = () => {
      let { x, y } = coords;

      circles.forEach((circle, index) => {
        circle.style.left = x + 12 + 'px';
        circle.style.top = y + 12 + 'px';

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.2;
        y += (nextCircle.y - y) * 0.2;

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();
  }, [coords]);
  return (
    <div>
  <div className="mouse-trail">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => (circlesRef.current[index] = el)}
        />
      ))}
    </div>
    </div>
  )
}

export default Mouse