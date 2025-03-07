function gir() {
    let nums = document.getElementById('gir').className; 
    if(nums == 'gir_1') {document.getElementById('gir').className='gir_2';}  
    if(nums == 'gir_2') {document.getElementById('gir').className='gir_3';}  
    if(nums == 'gir_3') {document.getElementById('gir').className='gir_1';} 
}  
setInterval(gir, 500);



const gifts = [
    "🎁 Поздравляем! Вы получили сертификат на 1000 рублей!",
    "🎉 Ура! Вы выиграли новую игрушку!",
    "🍭 Поздравляем! Вы получили сладкий подарок!",
    "📚 Выиграли книгу по программированию!",
    "🎈 У вас есть билет на концерт!",
];

const box = document.getElementById('box');
const resultDiv = document.getElementById('result');

box.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * gifts.length);
    resultDiv.textContent = gifts[randomIndex];
});



const countdown = document.getElementById('countdown');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateCountdown(){
    const currentDate = new Date();
    const newYearDate = new Date(currentDate.getFullYear()+1,0,1)
    const timeRemaining = newYearDate - currentDate;
    const days = Math.floor(timeRemaining / (1000*60*60*24));
    const hours =Math.floor((timeRemaining % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((timeRemaining % (1000*60*60))/(1000*60));
    const seconds = Math.floor((timeRemaining % (1000*60))/1000);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);