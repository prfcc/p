const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const s = urlParams.get('s')
const baseUrl = "https://66780c740bd45250561d5340.mockapi.io/api/v1/data"
const mapData = data => data.map(({_id, ...rest}) => ({id: _id, ...rest}))
const getDataList = () => fetch(baseUrl).then(responce => responce.json()).then(mapData)
const updateData = (dataId, dataData) => fetch(baseUrl + "/" + dataId, {method: "PUT", headers: {"Content-Type": "application/json;charset=utf-8"}, body: JSON.stringify({"visits": dataData})})
console.log(urlParams.get("s"))
getDataList().then((responce) => {
    console.log(responce[s])
    if (responce[s]["template"] == "html"){
        document.querySelector("body").innerHTML = responce[s]["code"]
    }
    else {
        parameters = ["contact", "name", "description", "offers_h"]
        templates = {'shop' : '<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <title>Perfect business</title>    <link rel="stylesheet" href="style.css">    <script src="script.js"></script></head><body><div id="header">    <div id="contact">        myshop@mail.com    </div>    <div id="name">        <h1>Market!</h1>    </div>    <div id="">    </div></div><div id="description"></div><div id="content">    <div id="offers_h1">        <h1 id="offers_h">            Offers!        </h1>    </div>    <div id="offers">        <div class="offer">            <div class="name">                1            </div>            <div class="image">                <img src="tools_img.jpg">            </div>            <div class="price">                1            </div>        </div>    </div></div></body></html>'}
        document.querySelector("body").innerHTML = templates[responce[s]["template"]]
        parameters.forEach((param) => {
            try {
                document.getElementById(param).innerHTML = responce[s][param]
            } catch (e) {

            }
        })
        responce[s]["resources"].forEach((r) => {
            eval(responce[s]["resources_code"])
        })
    }
    updateData(parseInt(s) + 1, responce[s]["visits"])
})