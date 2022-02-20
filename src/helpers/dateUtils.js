export const getCurrentDate = () => {
    return new Date().toLocaleString('en-US', { weekday: 'short', day: 'numeric'}) + ', ' + new Date().toLocaleString('en-US', {month: 'long'});
}

export const getCurrentTime = () => {
    return new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
}