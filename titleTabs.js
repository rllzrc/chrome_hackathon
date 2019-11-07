// const contents = document.getElementById('contents');
// contents.parentNode.removeChild(contents);

console.log('wddddup');

// update titleTabs

const titleTab = document.querySelector('title');
const sleepTitles = ['ZzzzZZzz', 'BRUH. BED TIME!', 'MY DUDE. SLEEP!', '@__@', 'NIGHT NIGHT PUNK!', 'KILLING ME SMALLS!'];
let index = 0;
index = Math.random() * sleepTitles.length;
console.log(index);
index = Math.floor(index);
console.log(index);
titleTab.innerHTML = sleepTitles[index];
