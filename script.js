let obj = {
  a0: { aa: [3, 9], bb: 2, cc: { aaa: 4, bbb: -5 } },
  a1: { aa: [0, 8], bb: -7, cc: { aaa: 8, bbb: 7 } },
  a2: { aa: [9, -4], bb: 1, cc: { aaa: -1, bbb: 8 } },
  a3: { aa: [8, -1], bb: 7, cc: { aaa: 3, bbb: 0 } },
  a4: { aa: [-4, -2], bb: -2, cc: { aaa: 8, bbb: 9 } },
};

let table = document.getElementById('table');

for (item in obj) {
  table.innerHTML += `<div class="row"><div class="column">[${obj[item].aa}]</div><div class="column">${obj[item].bb}</div><div class="column">{aaa: ${obj[item].cc.aaa}, bbb: ${obj[item].cc.bbb}}</div></div>`;
}

let cells = document.querySelectorAll('.column');

cells.forEach((cell) =>
  cell.addEventListener('click', () => {
    chooseContent(cell.innerText, 'result');
    cells.forEach((cell) => cell.classList.remove('active'));
    cell.classList.add('active');
  })
);

addMaxMin();

function chooseContent(content, blockID) {
  let block = document.getElementById(blockID);
  block.innerText = content;
}

function addMaxMin() {
  let max = -1000000;
  let min = 1000000;
  let divMax = document.getElementById('max');
  let divMin = document.getElementById('min');
  for (item in obj) {
    for (content in obj[item]) {
      if (typeof obj[item][content] == 'object') {
        for (ind in obj[item][content]) {
          if (obj[item][content][ind] > max) max = obj[item][content][ind];
          if (obj[item][content][ind] < min) min = obj[item][content][ind];
        }
      }
      if (obj[item][content] > max) max = obj[item][content];
      if (obj[item][content] < min) min = obj[item][content];
    }
  }
  divMax.innerText = max;
  divMin.innerText = min;
}

// for (item in obj) {
//   for (content in obj[item]) {
//     if (typeof obj[item][content] == 'object') {
//       for (ind in obj[item][content]) {
//         if (obj[item][content][ind] > max) max = obj[item][content][ind];
//         if (obj[item][content][ind] < min) min = obj[item][content][ind];
//       }
//     }
//     if (obj[item][content] > max) max = obj[item][content];
//     if (obj[item][content] < min) min = obj[item][content];
//   }
// }
