import React from "react";

function Sparkles() {
  const sparkles = [
    { top: "7%", left: "4%", delay: "0s", size: "6px" },
    { top: "12%", left: "8%", delay: "0.8s", size: "8px" },
    { top: "18%", left: "15%", delay: "1.6s", size: "4px" },
    { top: "27%", left: "6%", delay: "2.4s", size: "5px" },
    { top: "39%", left: "10%", delay: "0.4s", size: "7px" },
    { top: "48%", left: "4%", delay: "1.9s", size: "4px" },
    { top: "61%", left: "13%", delay: "2.8s", size: "6px" },
    { top: "73%", left: "7%", delay: "1.2s", size: "8px" },
    { top: "84%", left: "16%", delay: "0.6s", size: "5px" },
    { top: "93%", left: "5%", delay: "2.1s", size: "4px" },

    { top: "9%", left: "22%", delay: "1.4s", size: "5px" },
    { top: "20%", left: "30%", delay: "0.3s", size: "7px" },
    { top: "34%", left: "25%", delay: "2.5s", size: "4px" },
    { top: "46%", left: "32%", delay: "1.1s", size: "6px" },
    { top: "57%", left: "23%", delay: "2.7s", size: "5px" },
    { top: "69%", left: "35%", delay: "0.7s", size: "8px" },
    { top: "81%", left: "28%", delay: "1.8s", size: "4px" },
    { top: "91%", left: "38%", delay: "2.9s", size: "6px" },

    { top: "6%", left: "42%", delay: "1.7s", size: "4px" },
    { top: "16%", left: "51%", delay: "0.5s", size: "7px" },
    { top: "29%", left: "46%", delay: "2.2s", size: "5px" },
    { top: "41%", left: "54%", delay: "1.3s", size: "8px" },
    { top: "53%", left: "43%", delay: "0.2s", size: "4px" },
    { top: "65%", left: "57%", delay: "2.6s", size: "6px" },
    { top: "77%", left: "47%", delay: "1.5s", size: "5px" },
    { top: "89%", left: "58%", delay: "0.9s", size: "7px" },

    { top: "11%", left: "64%", delay: "2.3s", size: "5px" },
    { top: "23%", left: "73%", delay: "0.6s", size: "8px" },
    { top: "35%", left: "67%", delay: "1.9s", size: "4px" },
    { top: "47%", left: "78%", delay: "2.8s", size: "6px" },
    { top: "59%", left: "70%", delay: "0.4s", size: "5px" },
    { top: "71%", left: "81%", delay: "1.6s", size: "7px" },
    { top: "83%", left: "68%", delay: "2.5s", size: "4px" },
    { top: "94%", left: "76%", delay: "1.1s", size: "6px" },

    { top: "8%", left: "88%", delay: "0.3s", size: "7px" },
    { top: "21%", left: "94%", delay: "1.8s", size: "4px" },
    { top: "33%", left: "86%", delay: "2.7s", size: "6px" },
    { top: "52%", left: "93%", delay: "0.9s", size: "8px" },
    { top: "64%", left: "89%", delay: "2.1s", size: "5px" },
    { top: "78%", left: "95%", delay: "1.4s", size: "4px" },
    { top: "88%", left: "84%", delay: "0.5s", size: "7px" },
    { top: "96%", left: "92%", delay: "2.9s", size: "5px" },
  ];

  return (
    <div className="sparkles" aria-hidden="true">
      {sparkles.map((sparkle, index) => (
        <span
          key={index}
          className="sparkle"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            animationDelay: sparkle.delay,
            width: sparkle.size,
            height: sparkle.size,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}

export default Sparkles;