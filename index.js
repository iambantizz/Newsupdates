console.log("This is a news website");

//Initialize the news api parameters
let apiKey = '7a6a52bd345e42b0be1a21fe7135dbe5';
let category = 'technology';

//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`, true);

//what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element,index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                             <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                             data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                            <b> Breaking news ${index+1}:</b> ${element["title"]}
                         </button>
                         </h2>
                        </div>

                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                        <div class="card-body">${element["content"]}, <a href="${element['url']}" target ="_blank">Read more here</a></div>
                    </div>
                </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log('some error occured');
    }
}

xhr.send()
