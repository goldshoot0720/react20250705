import { useState } from "react";
import "./App.css";
import MyTable from "./MyTable";
import MyDateCountDown from "./MyDateCountDown";
import MyWeather from "./MyWeather";
import MyCourseCountDown from "./MyCourseCountDown";
import { mytablecontent1 } from "./mytablecontent1";
import { mytablecontent2 } from "./mytablecontent2";
import { mytablecontent3 } from "./mytablecontent3";
import { mytablecontent5 } from "./mytablecontent5";
import { mytablecontent6 } from "./mytablecontent6";
import { mytablecontent7 } from "./mytablecontent7";
import { mytablecontent8 } from "./mytablecontent8";
import { mytablecontent9 } from "./mytablecontent9";
import { mycourse1 } from "./mycourse1";
import { mycourse2 } from "./mycourse2";
import { mycourse3 } from "./mycourse3";
import { mycourse5 } from "./mycourse5";
import { mycourse6 } from "./mycourse6";
import ReactLogo from "./assets/react.svg";

function App() {
  const [step, setStep] = useState(1);

  const messages = [
    "訂閱資訊",
    "銀行資訊",
    "處方箋資訊",
    "學習資訊",
    "團隊成員資訊",
    "軟體資訊",
    "中壢區一週天氣",
    "書單",
    "雲端空間",
  ];

  // 回傳當前是否該顯示指定的內容（index 為 1~9）
  const isContentVisible = (index) => step === index;

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < messages.length) setStep(step + 1);
  }
  return (
    <>
      <div className="container">
        <MyDateCountDown
          mycountdowntitle1="紅鸞星動"
          mycountdown1="2025-06-15"
          mycountdowntitle2="考試通知書"
          mycountdown2="2025-06-19"
          mycountdowntitle3="考試延期"
          mycountdown3="2025-07-05"
        />
        <div className="row">
          <div className="steps">
            {Array.from({ length: step }).map((_, index) => (
              <img key={index} src={ReactLogo} alt="React logo" />
            ))}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={
                  step === idx + 1
                    ? { background: "#7950F2", color: "#FFF" }
                    : {}
                }
              >
                {idx + 1}:{msg}
              </div>
            ))}
          </div>
          <div className="buttons">
            <button
              style={{ background: "#7950F2", color: "#FFF" }}
              onClick={() => handlePrevious()}
            >
              Previous
            </button>
            <button
              style={{ background: "#7950F2", color: "#FFF" }}
              onClick={() => handleNext()}
            >
              Next
            </button>
          </div>
          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>
          {isContentVisible(1) && (
            <MyTable
              mytableth1="訂閱服務"
              mytableth2="訂閱費用"
              mytableth3="下次扣款日期"
              mytableth4="備註"
              mytablecontent={mytablecontent1}
            />
          )}
          {isContentVisible(2) && (
            <MyTable
              mytableth1="銀行名稱"
              mytableth2="帳戶類型"
              mytableth3="帳戶餘額"
              mytableth4="金融卡類型"
              mytablecontent={mytablecontent2}
              showMytable4={true}
            />
          )}
          {isContentVisible(3) && (
            <MyTable
              mytableth1="醫院/醫師"
              mytableth2="處方箋一"
              mytableth3="處方箋二"
              mytableth4="門診"
              mytableth5="官方網站"
              mytablecontent={mytablecontent3}
              showMytablelink={true}
            />
          )}
          {isContentVisible(4) && (
            <>
              <MyCourseCountDown
                mytitle="The Ultimate React Course 2025: React, Next.js, Redux & More"
                myteacher="Jonas Schmedtmann"
                mylink="https://www.udemy.com/course/the-ultimate-react-course"
                mycourse={mycourse1}
                myviewed="7"
              />
              <MyCourseCountDown
                mytitle="The Complete JavaScript Course 2025: From Zero to Expert!"
                myteacher="Jonas Schmedtmann"
                mylink="https://www.udemy.com/course/the-complete-javascript-course/"
                mycourse={mycourse2}
                myviewed="0"
              />
              <MyCourseCountDown
                mytitle="Node.js, Express, MongoDB & More: The Complete Bootcamp"
                myteacher="Jonas Schmedtmann"
                mylink="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
                mycourse={mycourse3}
                myviewed="0"
              />
              <MyCourseCountDown
                mytitle="Advanced CSS and Sass: Flexbox, Grid, Animations and More!"
                myteacher="Jonas Schmedtmann"
                mylink="https://www.udemy.com/course/advanced-css-and-sass/"
                mycourse={mycourse5}
                myviewed="0"
              />
              <MyCourseCountDown
                mytitle="Build Responsive Real-World Websites with HTML and CSS"
                myteacher="Jonas Schmedtmann"
                mylink="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3"
                mycourse={mycourse6}
                myviewed="0"
              />
              <MyTable
                mytableth1="學習項目"
                mytableth2="課程內容"
                mytableth3="學習進度"
                mytableth4="%"
                mytableth5="-"
                mytablecontent={mytablecontent5}
                showMytable4={true}
                showMytable5={true}
              />
            </>
          )}
          {isContentVisible(5) && (
            <MyTable
              mytableth1="姓名"
              mytableth2="職稱"
              mytableth3="機關名稱"
              mytableth4="關係"
              mytableth5="官方網站"
              mytableth6="地圖"
              mytablecontent={mytablecontent6}
              showMytable4={true}
              showMytablelink={true}
              showMytablemap={true}
            />
          )}
          {isContentVisible(6) && (
            <MyTable
              mytableth1="軟體名稱"
              mytableth2="購買金額"
              mytableth3="作業系統"
              mytableth4="備註"
              mytableth5="官方網站"
              mytablecontent={mytablecontent7}
              showMytable4={true}
              showMytablelink={true}
            />
          )}
          {isContentVisible(7) && <MyWeather />}
          {isContentVisible(8) && (
            <MyTable
              mytableth1="書名"
              mytableth2="價格"
              mytableth3="平台"
              mytableth4="備註"
              mytableth5="官方網站"
              mytablecontent={mytablecontent8}
              showMytablelink={true}
            />
          )}
          {isContentVisible(9) && (
            <MyTable
              mytableth1="雲端平台"
              mytableth2="容量"
              mytableth3="帳號"
              mytableth4="備註"
              mytableth5="官方網站"
              mytablecontent={mytablecontent9}
              showMytablelink={true}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
