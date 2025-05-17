export const mytablecontent2 = [
  {
    column1: "合作金庫",
    column2: "活存",
    column3: "",
    column4: "",
  },
  {
    column1: "合作金庫",
    column2: "定存",
    column3: "",
    column4: "",
  },
  {
    column1: "台北富邦",
    column2: "活存",
    column3: "",
    column4: "",
  },
  {
    column1: "台北富邦",
    column2: "定存",
    column3: "",
    column4: "",
  },
  {
    column1: "國泰世華",
    column2: "活存",
    column3: "",
    column4: "",
  },
  {
    column1: "國泰世華",
    column2: "定存",
    column3: "",
    column4: "",
  },
  {
    column1: "兆豐銀行",
    column2: "活存",
    column3: "",
    column4: "",
  },
  {
    column1: "兆豐銀行",
    column2: "定存",
    column3: "",
    column4: "",
  },
  {
    column1: "王道銀行",
    column2: "活存",
    column3: "",
    column4: "",
  },
  {
    column1: "王道銀行",
    column2: "定存",
    column3: "",
    column4: "",
  },
  {
    column1: "新光銀行",
    column2: "活存",
    column3: "",
    column4: "",
  },
  {
    column1: "新光銀行",
    column2: "定存",
    column3: "",
    column4: "",
  },
  {
    column1: "中華郵政",
    column2: "活存",
    column3: "",
    column4: "",
  },
  {
    column1: "中華郵政",
    column2: "定存",
    column3: "",
    column4: "",
  },
  {
    column1: "玉山銀行",
    column2: "活存",
    column3: "",
    column4: "",
  },
  {
    column1: "玉山銀行",
    column2: "定存",
    column3: "",
    column4: "",
  },
  {
    column1: "台新銀行",
    column2: "活存",
    column3: "2995",
    column4: "",
  },
  {
    column1: "台新銀行",
    column2: "定存",
    column3: "",
    column4: "",
  },
  {
    column1: "中國信託",
    column2: "活存",
    column3: "",
    column4: "",
  },
  {
    column1: "中國信託",
    column2: "定存",
    column3: "",
    column4: "",
  },
  {
    column1: "鋒兄銀行",
    column2: "活存",
    column3: "",
    column4: "",
  },
  {
    column1: "鋒兄銀行",
    column2: "定存",
    column3: "",
    column4: "",
  },
  {
    column1: "鋒兄銀行",
    column2: "定存利息",
    column3: "",
    column4: "1.715%",
  },
];

// 計算非鋒兄銀行的「活存」總額
const totalActiveDeposit = mytablecontent2
  .filter(
    (item) =>
      item.column2 === "活存" &&
      item.column1 !== "鋒兄銀行" &&
      item.column3 !== ""
  )
  .reduce((sum, item) => sum + Number(item.column3), 0);

// 計算非鋒兄銀行的「定存」總額
const totalTimeDeposit = mytablecontent2
  .filter(
    (item) =>
      item.column2 === "定存" &&
      item.column1 !== "鋒兄銀行" &&
      item.column3 !== ""
  )
  .reduce((sum, item) => sum + Number(item.column3), 0);

// 定存利息率
const interestRate = 0.01715;
const totalInterest = Math.round(totalTimeDeposit * interestRate); // 四捨五入取整數

// 更新鋒兄銀行的資料
mytablecontent2.forEach((item) => {
  if (item.column1 === "鋒兄銀行") {
    if (item.column2 === "活存") {
      item.column3 = totalActiveDeposit.toString();
    }
    if (item.column2 === "定存") {
      item.column3 = totalTimeDeposit.toString();
    }
    if (item.column2 === "定存利息") {
      item.column3 = totalInterest.toString();
    }
  }
});

mytablecontent2.sort((a, b) => {
  return b.column3 - a.column3;
});
