export function formatDateToInput(dateString) {
  const [year, month, day] = dateString.split('/');
  const dateObject = new Date(year, month - 1, day);
  return dateObject.toISOString().split('T')[0];
}

export function formatDateToString(dateString) {
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
}
