const apiKey = '99189a44fdd173151b729a259cdec892d77070d585a466922137c8041147f52d';
// https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,ADA,DOGE,XRP,BNB&tsyms=USD

function mapNews(data) {
    for(var i = 0;i<6;i++) {
        var element = document.createElement('div');
        var newsImage = document.createElement('img');
        var paragraph = document.createElement('p');
        paragraph.innerText = data[i].body.substring(0 , 100);
        newsImage.src = data[i].imageurl;
        element.classList.add('news');
        element.appendChild(newsImage);
        element.appendChild(paragraph);
        document.getElementById('newsBox').appendChild(element);
        var link = document.createElement('a');
        link.href = data[i].url;
        link.innerText = 'Read More ... ';
        element.appendChild(link);
    }
}
function getNews(url) {
    $.get(url, function (data, status) {
        if (status === 'success') {
            mapNews(data.Data);
        }
    });
}


function mapTopCryptos(data) {
    var keys = Object.keys(data);
    var values = Object.values(data);
    for(var i =0;i<keys.length;i++) {
        var element = document.createElement('div');
        var title = document.createElement('div');
        var cdata = document.createElement('div');
        element.classList.add('box-item');
        title.classList.add('box-item-title');
        cdata.classList.add('box-item-data');
        title.innerText = keys[i];
        element.appendChild(title);
        cdata.innerText = values[i].USD;
        element.appendChild(cdata);
        document.getElementById('TopCurrencies').appendChild(element);
        // document.getElementById('mostProfit').appendChild(element);
        // document.getElementById('mostSellings').appendChild(element);
    }
}
function mapMostProfit(data) {
    var keys = Object.keys(data);
    var values = Object.values(data);
    for(var i =0;i<keys.length;i++) {
        var element = document.createElement('div');
        var title = document.createElement('div');
        var cdata = document.createElement('div');
        element.classList.add('box-item');
        title.classList.add('box-item-title');
        cdata.classList.add('box-item-data');
        title.innerText = keys[i];
        element.appendChild(title);
        cdata.innerText = values[i].USD;
        element.appendChild(cdata);
        // document.getElementById('TopCurrencies').appendChild(element);
        document.getElementById('mostProfit').appendChild(element);
        // document.getElementById('mostSellings').appendChild(element);
    }
}
function mapBestSellings(data) {
    var keys = Object.keys(data);
    var values = Object.values(data);
    for(var i =0;i<keys.length;i++) {
        var element = document.createElement('div');
        var title = document.createElement('div');
        var cdata = document.createElement('div');
        element.classList.add('box-item');
        title.classList.add('box-item-title');
        cdata.classList.add('box-item-data');
        title.innerText = keys[i];
        element.appendChild(title);
        cdata.innerText = values[i].USD;
        element.appendChild(cdata);
        // document.getElementById('TopCurrencies').appendChild(element);
        // document.getElementById('mostProfit').appendChild(element);
        document.getElementById('mostSellings').appendChild(element);
    }
}
function getCryptoes(url) {
    $.get(url , function(data , status) {
        if(status === 'success') {
            mapTopCryptos(data);
            mapMostProfit(data);
            mapBestSellings(data);
        }
    });
}
$(document).ready(function () {
    getNews('https://min-api.cryptocompare.com/data/v2/news/?lang=EN');
    getCryptoes('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,ADA,DOGE,BNB&tsyms=USD');
    $('#menu').on('click', function () {
        $('#menu-panel').slideToggle('slow');
    });
    $("#Top").click(function () {
        $('html, body').animate({
            scrollTop: $("#TopCurrencies").offset().top
        }, 1000);
    });
    $('#selling').click(function () {
        $('html , body').animate({
            scrollTop: $('#mostSellings').offset().top
        }, 1000);
    });
    $('#profit').click(function () {
        $('html , body').animate({
            scrollTop: $('#mostProfit').offset().top
        }, 1000);
    });
    $('#News').click(function () {
        $('html , body').animate({
            scrollTop: $('#newsBox').offset().top
        }, 1000);
    });
});