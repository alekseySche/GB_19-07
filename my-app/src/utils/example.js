export function getFormattedSchedule(hours) {
    alert('Hello');
    if (hours.length > 3) {
    return `${hours[0]}-${hours[3]}`
    }

    if (hours[hours.length - 1] !== '00:00') {
    return `${hours[0]}-${hours[hours.length - 1]}`;
    }

    return 'All Day';
}