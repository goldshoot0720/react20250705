import { useState } from "react";
import "./App.css";
import MyTable from "./MyTable";
import { mytablecontent1 } from "./mytablecontent1";
import { mytablecontent2 } from "./mytablecontent2";
import { mytablecontent3 } from "./mytablecontent3";
import MyCountDown from "./MyCountDown";
import { mytablecontent5 } from "./mytablecontent5";
import { mytablecontent6 } from "./mytablecontent6";

function App() {
  const [showMytablecontent1, setshowMytablecontent1] = useState(false);
  const [showMytablecontent2, setshowMytablecontent2] = useState(false);
  const [showMytablecontent3, setshowMytablecontent3] = useState(false);
  const [showMytablecontent5, setshowMytablecontent5] = useState(false);
  const [showMytablecontent6, setshowMytablecontent6] = useState(false);

  return (
    <>
      <div className="container">
        <div className="row">
          <MyCountDown
            mycountdowntitle1="紅鸞星動"
            mycountdown1="2025-06-15"
            mycountdowntitle2="考試通知書"
            mycountdown2="2025-06-19"
            mycountdowntitle3="考試延期"
            mycountdown3="2025-07-05"
          />
          <button onClick={() => setshowMytablecontent1(!showMytablecontent1)}>
            {showMytablecontent1 ? "隱藏訂閱資訊" : "顯示訂閱資訊"}
          </button>
          <button onClick={() => setshowMytablecontent2(!showMytablecontent2)}>
            {showMytablecontent2 ? "隱藏銀行資訊" : "顯示銀行資訊"}
          </button>
          <button onClick={() => setshowMytablecontent3(!showMytablecontent3)}>
            {showMytablecontent3 ? "隱藏處方箋資訊" : "顯示處方箋資訊"}
          </button>
          <button onClick={() => setshowMytablecontent5(!showMytablecontent5)}>
            {showMytablecontent5 ? "隱藏學習資訊" : "顯示學習資訊"}
          </button>
          <button onClick={() => setshowMytablecontent6(!showMytablecontent6)}>
            {showMytablecontent6 ? "隱藏團隊成員資訊" : "顯示團隊成員資訊"}
          </button>

          {showMytablecontent1 && (
            <MyTable
              mytableth1="訂閱服務"
              mytableth2="訂閱費用"
              mytableth3="下次扣款日期"
              mytableth4="備註"
              mytablecontent={mytablecontent1}
            />
          )}

          {showMytablecontent2 && (
            <MyTable
              mytableth1="銀行名稱"
              mytableth2="帳戶類型"
              mytableth3="帳戶餘額"
              mytableth4="金融卡類型"
              mytablecontent={mytablecontent2}
            />
          )}

          {showMytablecontent3 && (
            <MyTable
              mytableth1="醫院/醫師"
              mytableth2="處方箋一"
              mytableth3="處方箋二"
              mytableth4="門診"
              mytablecontent={mytablecontent3}
            />
          )}

          {showMytablecontent5 && (
            <MyTable
              mytableth1="學習項目"
              mytableth2="課程內容"
              mytableth3="學習進度"
              mytableth4="%"
              mytableth5="-"
              mytablecontent={mytablecontent5}
              showMytable5={true}
            />
          )}

          {showMytablecontent6 && (
            <MyTable
              mytableth1="姓名"
              mytableth2="職稱"
              mytableth3="機關名稱"
              mytableth4="關係"
              mytableth5="官方網站"
              mytableth6="地圖"
              mytablecontent={mytablecontent6}
              showMytablelink={true}
              showMytablemap={true}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
