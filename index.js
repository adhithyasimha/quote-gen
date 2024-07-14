window.onload = function() {
    // First, get the button element. The id of your button is 'btn'.
    const button = document.getElementById('btn');

    button.addEventListener('click', function() {
        const data = null;
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
            }
        });

        xhr.open('GET', 'https://random-chunk-api.p.rapidapi.com/api/quote?category=life&count=1');
        xhr.setRequestHeader('X-RapidAPI-Key', '029583deedmsh5119ae876d3e63ep15eb9jsn9f458813bdf1');
        xhr.setRequestHeader('X-RapidAPI-Host', 'random-chunk-api.p.rapidapi.com');

        xhr.send(data);
    });
}