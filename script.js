const baseUrl = "https://66780c740bd45250561d5340.mockapi.io/api/v1/data"

const mapData = data => data.map(({_id, ...rest}) => ({id: _id, ...rest}))

const getDataList = () => fetch(baseUrl).then(responce => responce.json()).then(mapData)

getDataList().then((responce) => setBanners(responce))

function setBanners(data) {
    data.forEach((d) => {
        if (d["site"] != true) {
            document.getElementById(d["name"]).innerHTML = d["data"]
        }
    })
    //document.getElementById("activities_banner").innerHTML = data[0]["data"]
    //document.getElementById("header_banner_left").innerHTML = data[1]["data"]
    //document.getElementById("header_banner_right").innerHTML = data[2]["data"]
    //document.getElementById("header_banner_middle").innerHTML = data[3]["data"]
}

window.onload = function () {
    const userAgent = navigator.userAgent.toLowerCase();
    const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        if(isTablet==false){
            document.querySelector("head").innerHTML += '<link rel="stylesheet" href="mobile.css">'
            document.getElementById("header_banner_left").setAttribute("hidden", "hidden")
            document.getElementById("header_banner_right").setAttribute("hidden", "hidden")
            document.getElementById("header_banner_middle").removeAttribute("hidden")
        }
    }
}