const formats = [
  { day: 'Monday', title: 'Basic Text', note: 'Regular weekly format.' },
  { day: 'Tuesday', title: 'Spin the Wheel', note: 'Business meetings are held the first Tuesday of every month starting July 7.' },
  { day: 'Wednesday', title: 'Speaker Meeting', note: 'Use this day for speaker-led sharing.' },
  { day: 'Thursday', title: 'Step Study', note: 'Ideal place to link the weekly script or reading structure.' },
  { day: 'Friday', title: 'Living Clean', note: 'Meeting time is 10:00 PM PDT to 11:30 PM PDT.' },
  { day: 'Saturday', title: 'Bring Your Own Literature', note: 'Meeting time is 10:00 PM PDT to 11:30 PM PDT.' },
  { day: 'Sunday', title: 'IP (I.P.A.P.I)', note: 'Meeting time is 9:00 PM PDT to 10:30 PM PDT.' }
];

const events = [
  {
    title: 'Monthly business meeting',
    date: 'First Tuesday monthly',
    body: 'Business meetings are held the first Tuesday of every month, starting July 7.'
  },
  {
    title: 'Weekly virtual meeting schedule',
    date: 'Ongoing',
    body: 'Sunday through Thursday runs from 9:00 PM to 10:30 PM PDT, and Friday through Saturday runs from 10:00 PM to 11:30 PM PDT.'
  }
];

const formatsGrid = document.getElementById('formats-grid');
const eventsGrid = document.getElementById('events-grid');

if (formatsGrid) {
  formats.forEach((item) => {
    const article = document.createElement('article');
    article.className = 'card format-card';
    article.innerHTML = `
      <p class="format-day">${item.day}</p>
      <h4>${item.title}</h4>
      <p>${item.note}</p>
    `;
    formatsGrid.appendChild(article);
  });
}

if (eventsGrid) {
  events.forEach((item) => {
    const article = document.createElement('article');
    article.className = 'card';
    article.innerHTML = `
      <p class="eyebrow">${item.date}</p>
      <h4>${item.title}</h4>
      <p>${item.body}</p>
    `;
    eventsGrid.appendChild(article);
  });
}
