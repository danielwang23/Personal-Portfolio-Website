const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

const lastUpdated = new Date(document.lastModified);
const lastUpdatedFormatted = `${lastUpdated.toLocaleDateString()} ${lastUpdated.toLocaleTimeString()}`;
document.getElementById('last-updated').textContent = lastUpdatedFormatted;