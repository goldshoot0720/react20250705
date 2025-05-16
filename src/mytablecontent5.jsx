export const mytablecontent5 = [
  {
    column1: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    column2: "57. Let's Build a Steps Component",
    column3: "56/505",
  },
  {
    column1: "The Complete JavaScript Course 2025: From Zero to Expert!",
    column2: "1. Course Structure and Projects",
    column3: "0/342",
  },
  {
    column1: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    column2: "1. Course Structure and Projects",
    column3: "0/229",
  },
  {
    column1: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    column2: "1. Welcome to the Most Advanced CSS Course Ever!",
    column3: "0/126",
  },
  {
    column1: "Build Responsive Real-World Websites with HTML and CSS",
    column2: "1. Course Structure and Projects",
    column3: "0/149",
  },
];

mytablecontent5.forEach((row) => {
  // 處理 column4：百分比
  const match = row.column3.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (match) {
    const left = parseInt(match[1], 10);
    const right = parseInt(match[2], 10);
    if (right !== 0) {
      row.column4 = ((left / right) * 100).toFixed(2) + "%";
    }
    // 處理 column5：左減右
    row.column5 = (left - right).toString();
  }
});

mytablecontent5.sort((a, b) => {
  return a.column5 - b.column5;
});
