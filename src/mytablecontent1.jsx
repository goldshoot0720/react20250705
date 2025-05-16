export const mytablecontent1 = [
  {
    column1: "Netflix",
    column2: "290",
    column3: "2025-00-00",
  },
  {
    column1: "巴哈姆特動畫瘋",
    column2: "99",
    column3: "2025-00-00",
  },
];

mytablecontent1.sort((a, b) => {
  return b.column2 - a.column2;
});
