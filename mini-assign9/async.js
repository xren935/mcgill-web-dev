function getContent(url) {
    try {
        asyncRequest = new XMLHttpRequest();

        asyncRequest.addEventListener("readystatechange", stateChange, false); 
        asyncRequest.open("GET", url, true); 
        asyncRequest.send(null);
    }catch(exception){
        alert("request failed");
    }
}