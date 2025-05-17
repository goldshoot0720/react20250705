import confetti from "canvas-confetti";
function MyCountDown(props) {
  function ShowConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
  function DateCountDown(props) {
    let today = new Date();
    let myday = new Date(props);
    let diff = Math.floor((myday - today) / 1000 / 3600 / 24);
    return diff;
  }
  return (
    <>
      <div className="alert alert-primary" role="alert">
        距離【{props.mycountdowntitle1}】倒數【
        {DateCountDown(props.mycountdown1)}】天
        {DateCountDown(props.mycountdown1) <= 0 ? ShowConfetti() : ""}
        {DateCountDown(props.mycountdown1) <= 0 ? "🎉" : ""}
      </div>
      <div className="alert alert-secondary" role="alert">
        距離【{props.mycountdowntitle2}】倒數【
        {DateCountDown(props.mycountdown2)}】天
        {DateCountDown(props.mycountdown2) <= 0 ? ShowConfetti() : ""}
        {DateCountDown(props.mycountdown2) <= 0 ? "🎉" : ""}
      </div>
      <div className="alert alert-success" role="alert">
        距離【{props.mycountdowntitle3}】倒數【
        {DateCountDown(props.mycountdown3)}】天
        {DateCountDown(props.mycountdown3) <= 0 ? ShowConfetti() : ""}
        {DateCountDown(props.mycountdown3) <= 0 ? "🎉" : ""}
      </div>
    </>
  );
}

export default MyCountDown;
