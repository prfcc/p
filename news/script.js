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
    news = [{"title": "<h1>Abc</h1>", "shortDescription": "Yea i like it!!!! Mhm!! Oh yea!", "description": "Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea! Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!"}, {"title": "Abc", "shortDescription": "Yea i like it!!!! Mhm!! Oh yea!", "description": "Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!"}, {"title": "Abc", "shortDescription": "Yea i like it!!!! Mhm!! Oh yea!", "description": "Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!"}, {"title": "Abc", "shortDescription": "Yea i like it!!!! Mhm!! Oh yea!", "description": "Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!"}, {"title": "Abc", "shortDescription": "Yea i like it!!!! Mhm!! Oh yea!", "description": "Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!Yea i like it!!!! Mhm!! Oh yea!"}]

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
