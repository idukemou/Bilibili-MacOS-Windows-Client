/**
 * Convert timestamp to specific format.
 * @param time the value for converting
 * @returns {string} the formatted duration
 */
function convertDuration(time){
    let hour = Math.floor(time / 3600 % 24);
    let min = Math.floor(time / 60 % 60);
    let sec = Math.floor(time % 60);

    if(hour > 0 && hour < 10){
        hour = "0" + hour;
    }

    if(min > 0 && min < 10){
        min = "0" + min;
    }

    if(sec > 0 && sec < 10){
        sec = "0" + sec;
    }

    if(hour >= 1 && min === 0 && sec === 0){
        return `${hour}:00:00`;
    }else if(hour >= 1 && min !== 0 && sec === 0){
        return `${hour}:${min}:00`;
    }else if(hour >= 1 && min !== 0 && sec !== 0){
        return `${hour}:${min}:${sec}`;
    }else if(min >= 1 && sec === 0){
        return `${min}:00`;
    }else if(min >= 1 && sec !== 0){
        return `${min}:${sec}`
    }else if(hour === 0 && min === 0 && sec !== 0){
        return `00:${sec}`
    }

    return '00:00'
}

/**
 * Convert views to specific format.
 * @param views the value for converting
 * @returns {string|*} the formatted view
 */
function convertViews(views){

    if(views < 10000) return views;
    return (views / 10000).toFixed(1)+'万';
}


function convertTime(timeStamp){
    const time = new Date(timeStamp * 1000);
    let month = time.getMonth()+1;
    let day = time.getDate();
    let hour = time.getHours();
    let min = time.getMinutes();

    if(month > 0 && month < 10)
        month = "0" + month;

    if(day > 0 && day < 10)
        day = "0" + day;

    if(hour > 0 && hour < 10)
        hour = "0" + hour;

    if(min > 0 && min < 10){
        min = "0" + min;
    }

    return `${month}-${day} ${hour}:${min}`;
}


export {
    convertViews,
    convertDuration,
    convertTime
}