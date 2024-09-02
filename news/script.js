function openThis(n) {
    n.querySelector(".shortDescription").setAttribute("hidden", "hidden")
    n.querySelector(".description").removeAttribute("hidden")
    n.setAttribute("onclick", "closeThis(this)")
}

function closeThis(n) {
    n.querySelector(".description").setAttribute("hidden", "hidden")
    n.querySelector(".shortDescription").removeAttribute("hidden")
    n.setAttribute("onclick", "openThis(this)")
}

window.onload = function () {
    news = [{"title": "<h1>First business will get 50% off!</h1>", "shortDescription": "First business will get 50% discount for all options!", "description": "First business will get 50% discount for all options. You can buy subscriptions here: <a href='https://prfcc.github.io/p/business/subscribe/'>subscribe</a>"}]
    news.forEach((n) => {
        document.getElementById("news").innerHTML += "<div class='n' onclick='openThis(this)'><div class='title'>" + n["title"] + "</div><div class='shortDescription'>" + n["shortDescription"] + "</div><div class='description' hidden='hidden'>" + n["description"] + "</div></div>"
    })

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const open = urlParams.get('open')
    if (open > 0) {
        news.forEach((n) => {
            if (open == n["title"]) {
                openThis[document.querySelector('<div class="title">' + open + '')]
            }
        })
    }
}
