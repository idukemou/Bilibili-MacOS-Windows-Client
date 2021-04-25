/**
 * Convert timestamp to specific format.
 * @param time the value for converting
 * @returns {string} the formatted duration
 */
function convertDuration(time){
    const hour = Math.floor(time / 3600 % 24);
    const min = Math.floor(time / 60 % 60);
    const sec = Math.floor(time % 60);

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
        return `0:${sec}`
    }

    return '0:0'
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



export {
    convertViews,
    convertDuration
}