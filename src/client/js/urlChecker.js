const urlChecker = (url) => {
    let regex = /^(ftp|http|https):\/\/[^ "]+$/; // source: https://stackoverflow.com/questions/1410311/regular-expression-for-url-validation-in-javascript
    return regex.test(url);
}

export { urlChecker }