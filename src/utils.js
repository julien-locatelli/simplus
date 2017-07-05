import moment from 'moment';

function formatMilliSecond(millisecond) {

    console.log(millisecond);

    if(millisecond < 10)
        return `00${millisecond}`;

    if(millisecond < 100)
        return `0${millisecond}`;

    return millisecond;
}

export function renderFormattedTime(milliseconds) {
    const duration = moment.duration({milliseconds});
    return `${duration.seconds()}'${formatMilliSecond(duration.milliseconds())}''`
}