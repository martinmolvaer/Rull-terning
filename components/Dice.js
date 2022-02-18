import React from "react";

const Dice = ({ num }) => {
  switch (num) {
    case 1:
      return <img src="https://svgshare.com/i/dcC.svg" />;
      console.log(1);
      break;
    case 2:
      return <img src="https://svgshare.com/i/dbK.svg" />;
      break;
    case 3:
      return <img src="https://svgshare.com/i/dc5.svg" />;
      break;
    case 4:
      return <img src="https://svgshare.com/i/db1.svg" />;
      break;
    case 5:
      return <img src="https://svgshare.com/i/dc6.svg" />;
      break;
    case 6:
      return <img src="https://svgshare.com/i/dam.svg" />;
    default:
      console.log(`default`);
  }

  return <div>{num}</div>;
};

export default Dice;
