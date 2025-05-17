import { useState } from "react";
import confetti from "canvas-confetti";

function MyCourseCountDown({ mytitle, myteacher, mycourse, myviewed, mylink }) {
  const [stepViewd, setStepViewd] = useState(Number(myviewed));

  function handlePreviousViewd() {
    if (stepViewd > 1) {
      setStepViewd(stepViewd - 1);
    }
  }
  function handleNextViewd() {
    if (stepViewd < mycourse.length) {
      setStepViewd(stepViewd + 1);
    }
  }

  function ShowConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }

  // 計算總時數
  let totalMinutes = 0;
  mycourse.forEach((item) => {
    if (item) {
      totalMinutes += parseInt(item.hr, 10) * 60 + parseInt(item.min, 10);
    }
  });
  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;

  // 計算剩餘時數
  const mycoursenew = mycourse.slice(stepViewd);
  // console.log("mycoursenew", mycoursenew);
  let totalMinutes2 = 0;
  mycoursenew.forEach((item) => {
    if (item) {
      totalMinutes2 += parseInt(item.hr, 10) * 60 + parseInt(item.min, 10);
    }
  });
  const totalHours2 = Math.floor(totalMinutes2 / 60);
  const remainingMinutes2 = totalMinutes2 % 60;

  return (
    <>
      <div className="alert alert-primary" role="alert">
        <a href={mylink} target="_blank" rel="noopener noreferrer">
          {mytitle}
        </a>
      </div>
      第 {stepViewd} 節/第 {mycourse.length} 節
      {stepViewd === mycourse.length ? "🎉" : ""}
      {stepViewd === mycourse.length ? ShowConfetti() : ""}
      <div className="row mb-3">
        <div className="col-auto">
          <button
            className="btn btn-primary"
            onClick={() => handlePreviousViewd()}
          >
            Previous
          </button>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={() => handleNextViewd()}>
            Next
          </button>
        </div>
      </div>
      <div className="alert alert-light" role="alert">
        {myteacher}
      </div>
      <div className="alert alert-info" role="alert">
        {totalHours2}hr{remainingMinutes2}min(剩餘時數)/{totalHours}hr
        {remainingMinutes}min(總時數)
      </div>
    </>
  );
}

export default MyCourseCountDown;
