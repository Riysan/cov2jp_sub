var api = "https://covid19-japan-web-api.now.sh/api/v1/prefectures";
var xhr  = new XMLHttpRequest();
xhr.open("GET", api);
xhr.responseType = "json";
xhr.send();
xhr.onload = function () {
    console.log(xhr.response);
}
