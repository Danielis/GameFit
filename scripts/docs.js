
function updateContent(e) {
    var pageContent = document.getElementById("page-content-wrapper");

    switch (e) {
        case "dashboard":
            pageContent.innerHTML = "DASHBOARD";
            break;
        case "getting-started":
            pageContent.innerHTML = "GETTING STARTED";
            break;
        case "pc-games":
            pageContent.innerHTML = "PC GAMES";
            break;
        case "mobile-games":
            pageContent.innerHTML = "MOBILE GAMES";
            break;
    }
}