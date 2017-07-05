import moment from 'moment';

export function renderFormattedTime(milliseconds) {
    const duration = moment.duration({milliseconds});
    return `${duration.seconds()}' ${duration.milliseconds()}''`
}