import { useState } from "react";

const DiceGame = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [currentDice, setCurrentDice] = useState(1);
  const [isSelectedNum, setIsSelectedNum] = useState();
  const [showRules, setshowRules] = useState(false);

  const handleShowRule = () => {
    // setshowRules(!setshowRules)
    setshowRules((prev) => !prev);
  };
  const generateRandomNumber = (min: number, max: number) => {
    // console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    // return generateRandomNumber(1, 7)
    const randomNum = generateRandomNumber(1, 7);
    setCurrentDice(randomNum);
  };
  const isSelected = (value) => {
    // if (isSelectedNum === value) {
    setIsSelectedNum(value);
    // }
  };
  return (
    <section className="max-h-screen">
      <div className="max-w-[1280px] m-auto flex justify-around items-center pt-[64px]">
        <div className="max-w-[200px] flex flex-col gap-[3px] items-center">
          <h2 className="text-[100px] font-[500] leading-[100px]">0</h2>
          <p className="text-[24px] font-[500]">Total Score</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex gap-[24px]">
            {arrNumber.map((value, i) => (
              <button
                className=" w-[72px] h-[72px] border-1 text-[24px] font-[700] cursor-pointer duration-400 ease-in
                        hover:bg-black hover:text-white hover:border-1 hover:border-black hover:duration-300 
                        "
                key={i}
                onClick={isSelected(value)}
              >
                {value}
              </button>
            ))}
          </div>
          <p className="text-[24px] font-[700]">Select Number</p>
        </div>
      </div>
      <div className="flex flex-col max-w-[250px] m-auto gap-[20px] ">
        <figure onClick={roleDice}>
          <img src={`/images/dice_${currentDice}.svg`} alt="dice" />
          <figcaption className="text-[24px] font-[500] text-center">
            Click on Dice to roll
          </figcaption>
        </figure>
        <button
          className="bg-white text-black border-1 border-black rounded-[5px] p-[10px] px-[18px] min-w-[220px] text-[16px] cursor-pointer duration-400 ease-in
                hover:bg-black hover:text-white hover:border-1 hover:border-black hover:duration-300 
                "
        >
          Reset Score
        </button>
        <button
          className="bg-black text-white border-1 border-transparent rounded-[5px] p-[10px] px-[18px] min-w-[220px] text-[16px] cursor-pointer duration-400 ease-in
                hover:bg-white hover:text-black hover:border-1 hover:border-black hover:duration-300 
                "
          onClick={handleShowRule}
        >
          {showRules ? "Hide" : "Show"}Rules
        </button>
      </div>
      {showRules && (
        <div className="max-w-[794px] m-auto bg-[#FBF1F1] p-5 rounded-3xl my-5">
          <h3 className="text-[24px] font-[700]">How to play dice game</h3>
          <ul className="text-[16px] font-[400]">
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>
              After click on dice if selected number is equal to dice number you
              will get same point as dice{" "}
            </li>
            <li>If you get wrong guess then 2 point will be dedcuted </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default DiceGame;
