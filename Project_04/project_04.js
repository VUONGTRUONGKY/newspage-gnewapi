$(document).ready(function() {
    //const api_key = "5ae4f24310ab8898a69774c68dcf4981";
    //const api_key = "45aa805b97486bdabcbb0d8e8eb1a969";
    const api_key = "6652f544c0ce7cb259363ca440db5950";

    /*link take headlines*/
    let url_News = "https://gnews.io/api/v4/top-headlines?token=" + api_key + "&lang = en";
    $("#loading").show(); //Show loading icon while loading data from api
    fetch(url_News)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log(data);

            for(i=0; i<data.articles.length;i++) {
                let image = data.articles[i].image;
                let title = data.articles[i].title;
                let description = data.articles[i].description;
                let publishedAt = data.articles[i].publishedAt.slice(0, 10);
                let url = data.articles[i].url;
                let content = data.articles[i].content;
                let News = `<div class = ".col-d-12 .col-t-12 .col-m-12">
                    <div class = ".col-d-12 .col-t-12 .col-m-12 image"><image src = "${image}" alt = "image ${i+1}" style = "width: 100%"></div>
                    <div class = ".col-d-12 .col-t-12 .col-m-12 text01">
                    <a href = ${url} target = "_blank"><h3>${title}</h3></a>
                    <p>${publishedAt}</p>
                    <p>${description}</p>
                    <p>${content}</p>
                    </div>
                    </div>`
                $("#new_list").append(News);
                $("#loading").hide();//hide loading icon while complete loaded data from api
            }
    });
    /*Click search*/
    $("#search").click(function() {
        //$(".backdrop, .box").css("display", "none");
        let date = $("#input_date_filter").val() + "T00:00:00Z"; //get time filter the news
        console.log(date);
        $("#new_list").empty();
        $("#loading").show(); //Show loading icon while loading data from api
        close();
        var keyWord = $("#search_input").val();
        if(keyWord!= "") {
            let New_url = "https://gnews.io/api/v4/search?q=" + keyWord + "&token=" + api_key + "&lang = en"+ "&to=" + date;
            fetch(New_url)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    console.log(data);
                    for(i=0; i<data.articles.length; i++) {
                        let image = data.articles[i].image;
                        let title = data.articles[i].title;
                        let description = data.articles[i].description;
                        let publishedAt = data.articles[i].publishedAt.slice(0, 10);
                        let url = data.articles[i].url;
                        let content = data.articles[i].content;
                        let News = `<div class = ".col-d-12 .col-t-12 .col-m-12 content">
                            <div class = ".col-d-12 .col-t-12 .col-m-12 image"><image src = "${image}" alt = "image ${i+1}" style = "width: 100%"></div>
                            <div class = ".col-d-12 .col-t-12 .col-m-12 text01">
                            <a href = ${url} target = "_blank"><h3>${title}</h3></a>
                            <p>${publishedAt}</p>
                            <p>${description}</p>
                            <p>${content}</p>
                            </div>
                            </div>`
                        $("#new_list").append(News);
                        $("#loading").hide();//hide loading icon while complete loaded data from api
                    }
                });
        }
    });
    /*Click search*/

    $(".lighbox").click(function() {
        $(".backdrop, .box").css("display", "inline-block");
    });

    $(".close").click(function() {
        //$(".backdrop, .box").css("display", "none");
        close();
    });
    /**/
    $(".backdrop").click(function() {
        close();
    });
});
/*function used close box*/
function close() {
    $(".backdrop, .box").css("display", "none");
}


