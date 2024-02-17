const btn = document.getElementById("shotter")
btn.addEventListener('click',fetchShortenUrl)

async function fetchShortenUrl(){
    const longUrl1 = document.getElementById("longUrlInput").value;
    
    console.log(longUrl1)
    let str1 = "https://"
    const longUrl = str1.concat(longUrl1)
    console.log(longUrl)
    
        const url = 'https://url-shortener42.p.rapidapi.com/shorten/';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'b559bb3588msh432bec28659a201p18afdfjsnd8ddeba8732d',
                'X-RapidAPI-Host': 'url-shortener42.p.rapidapi.com'
            },
            body: JSON.stringify({
                url: longUrl,
                validity_duration: 5
            })
        };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        const surl = result.url;
        console.log(surl);
        const shorturl = document.getElementById("shorturl");
        shorturl.href = surl;
        document.getElementById("div").style.display = "block";
        


    } catch (error) {
        console.error(error);
        const pError = document.getElementById("error")
        pError.innerTEXT = error;
    }
}