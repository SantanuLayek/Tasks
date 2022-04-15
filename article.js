// 104a01a7251a4f27945fa81b61ab7f34
let source = 'trump';
let apiKey = '104a01a7251a4f27945fa81b61ab7f34';

//Grab the news container
let newsCard = document.getElementById('collapseWidthExample');

//Create a ajax Get request to the News API
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?q=${source}&apiKey=${apiKey}`, true);
xhr.getResponseHeader('Content-Type', 'application/json');
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles); 
        let newsHtml = "";
        articles.forEach(function (element, index) {
            console.log(element);
            let news = `<p>
                            <button class="btn btn-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                               <b>Breaking News ${index+1} :</b> ${element["title"]}
                            </button>
                        </p>
                        <div style="min-height: 100px;">
                            <div class="collapse collapse-vertical" id="collapse${index}">
                                <div class="card card-body" style="width: 300px;">
                                    ${element["content"]} <a href="${element["url"]}" target = "_blank"> Read More Here </a>
                                </div>
                            </div>
                        </div>`

            newsHtml += news;
        });
        newsCard.innerHTML = newsHtml;

    }
    else {
        console.log("Something went wrong");
    }
}

xhr.send();



