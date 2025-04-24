import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DiceGame = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [currentDice, setCurrentDice] = useState(1);
  const [isSelectedNum, setIsSelectedNum] = useState<number | undefined>();
  const [showRules, setshowRules] = useState(false);
  const [score, setScore] = useState<number>(0);

  const navigate = useNavigate();
  const handleShowRule = () => {
    setshowRules((prev) => !prev);
  };
  const generateRandomNumber = (min: number, max: number) => {
    // console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (isSelectedNum === undefined) {
      alert("Please select a number first!");
      return;
    }
    // return generateRandomNumber(1, 7)
    const randomNum = generateRandomNumber(1, 7);
    setCurrentDice(randomNum);
  };
  const isSelected = (value: number) => {
    if (isSelectedNum === value) {
      setIsSelectedNum(undefined);
    } else {
      setIsSelectedNum(value);
    }
  };
  useEffect(() => {
    if (isSelectedNum === undefined) return;

    if (currentDice === isSelectedNum) {
      setScore((prev) => prev + isSelectedNum);
    } else {
      setScore((prev) => prev - 2);
    }
  }, [currentDice]);
  const handleReset = () => {
    setScore(0);
  };
  return (
    <section className="max-h-screen h-[100vh] pt-[20px] px-2.5 pb-[20px]">
      <div>
        <button
          className="bg-black absolute left-[30px]  text-white border-1 border-transparent rounded-[5px] p-[10px] px-[18px] min-w-[100px] text-[16px] cursor-pointer duration-400 ease-in
                hover:bg-white hover:text-black hover:border-1 hover:border-black hover:duration-300 
                "
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
      <div className="max-w-[1280px] pt-[40px] m-auto flex flex-wrap gap-[15px] justify-around items-center ">
        <div className="max-w-[200px] flex flex-col gap-[3px] items-center">
          <h2 className="text-[100px] font-[500] leading-[100px]"> {score}</h2>
          <p className="text-[24px] font-[500]">Total Score</p>
        </div>
        <div className="flex flex-col items-end px-2.5">
          <div className="flex gap-[24px]">
            {arrNumber.map((value, i) => (
              <button
                className={` sm:w-[72px] sm:h-[72px] w-[35px] h-[40px] border-1 text-[24px] font-[700] cursor-pointer duration-400 ease-in
                        hover:bg-black hover:text-white hover:border-1 hover:border-black hover:duration-300 
                         ${
                           isSelectedNum === value
                             ? "bg-black text-white border-black"
                             : ""
                         }`}
                key={i}
                onClick={() => isSelected(value)}
              >
                {value}
              </button>
            ))}
          </div>
          <p className="text-[24px] font-[700]">
            {" "}
            {isSelectedNum !== undefined
              ? `Selected Number: ${isSelectedNum}`
              : "Select Number"}
          </p>
        </div>
      </div>
      <div className="flex flex-col max-w-[250px] m-auto gap-[20px]  pt-[45px] ">
        <figure onClick={roleDice}>
          <img src={`/images/dice_${currentDice}.svg`} alt="dice" />
          <figcaption className="text-[24px] font-[500] text-center">
            Click on Dice to roll
          </figcaption>
        </figure>
        <button
          onClick={handleReset}
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
        <div className=" pb-[95px]">
          <div className="max-w-[794px] m-auto bg-[#FBF1F1] p-5 rounded-3xl my-5">
            <h3 className="text-[24px] font-[700]">How to play dice game</h3>
            <ul className="text-[16px] font-[400]">
              <li>Select any number</li>
              <li>Click on dice image</li>
              <li>
                After click on dice if selected number is equal to dice number
                you will get same point as dice{" "}
              </li>
              <li>If you get wrong guess then 2 point will be dedcuted </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default DiceGame;
