import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Dice from "../components/Dice";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [dice, setDice] = useState(null);

  function rollDice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let num = parseInt(Math.floor(Math.random() * (max - min) + min)); //The maximum is exclusive and the minimum is inclusive
    setDice(num);
    document.getElementById("dice").classList.add("rotate-center");
    setTimeout(() => {
      document.getElementById("dice").classList.remove("rotate-center");
    }, 500);
  }

  return (
    <div>
      <div>
        <div id="dice">
          <Dice num={dice} />
        </div>
        <div>
          <button className="button" onClick={() => rollDice(1, 6)}>
            Rull terning
          </button>
        </div>
      </div>
    </div>
  );
}
