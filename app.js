const formats = [
  { day: 'Sunday', title: 'Speaker / Share', note: 'Rotate in your actual format and chairperson script reference.' },
  { day: 'Monday', title: 'Living Clean', note: 'Use this slot for book study, topic, or traditions.' },
  { day: 'Tuesday', title: 'Just for Today', note: 'Ideal for your rotating format calendar feed.' },
  { day: 'Wednesday', title: 'Topic Discussion', note: 'Good place for service announcements and host notes.' },
  { day: 'Thursday', title: 'Step Study', note: 'Link to format sheet or external members folder.' },
  { day: 'Friday', title: 'Open Participation', note: 'Keep public-facing language simple and welcoming.' }
];

const events = [
  {
    title: 'Area event placeholder',
    date: 'June 14',
    body: 'Replace this with your next speaker jam, workshop, or service event.'
  },
  {
    title: 'Business meeting reminder',
    date: 'Last Sunday monthly',
    body: 'Use this panel for internal reminders that are still safe to show publicly.'
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
