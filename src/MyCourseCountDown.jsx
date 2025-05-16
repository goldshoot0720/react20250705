function MyCourseCountDown({ mytitle, mycourse, myviewed }) {
  // console.log("mycourse", mycourse);

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
  const mycoursenew = mycourse.slice(myviewed);
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
        {mytitle}
      </div>
      <div className="alert alert-secondary" role="alert">
        {mytitle}
      </div>
      <div className="alert alert-success" role="alert">
        總時數: {totalHours}hr {remainingMinutes}min
      </div>
      <div className="alert alert-info" role="alert">
        剩餘時數: {totalHours2}hr {remainingMinutes2}min
      </div>
    </>
  );
}

export default MyCourseCountDown;
