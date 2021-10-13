let nav = 0;
let click = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const calendar = document.querySelector('.calendar');

function load(){
    const data = new Date();

    const day = data.getDate();
    const month = data.getMonth();
    const year = data.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMounth = new Date(year, month+1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    const paddingDays = weekDays.indexOf(dateString.split(', ')[0]);
    console.log(paddingDays);

    for(let i = 1; i < paddingDays + daysInMounth; i++){
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');
        if(i > paddingDays) {
            daySquare.innerText = i - paddingDays;
            daySquare.addEventListener('click', () => {
                console.log('click');
            })
        } else {
            daySquare.classList.add('padding');
        }
        calendar.appendChild(daySquare);
    }
}
load();