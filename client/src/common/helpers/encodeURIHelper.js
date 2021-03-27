export default (obj) => {
    const formBody = [] 

    for (let [key,value] of Object.entries(obj)) {
        formBody.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
    }

    return formBody.join("&");
}
