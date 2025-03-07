function gir() {
  let nums = document.getElementById('gir').className; 
  if(nums == 'gir_1') {document.getElementById('gir').className='gir_2';}  
  if(nums == 'gir_2') {document.getElementById('gir').className='gir_3';}  
  if(nums == 'gir_3') {document.getElementById('gir').className='gir_1';} 
}  
setInterval(gir, 500);



const gifts = [
  "🏠Вы получили домик!🏠",
  "✈️Вы получили самолет!✈️",
  "🍭Вы получили конфеты!🍭",
  "🚗Вы получили машинку!🚗",
  "🎎Вы получили куклу!🎎",
];

const box = document.getElementById('box');
const resultDiv = document.getElementById('result');

box.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * gifts.length);
  resultDiv.textContent = gifts[randomIndex];
});
