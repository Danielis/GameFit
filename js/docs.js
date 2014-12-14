function updateContent(e) {
    var pageContent = document.getElementById("page-content-wrapper");

    switch (e) {
        case "overview":
            pageContent.innerHTML = "THIS IS AN OVERVIEW";
            break;
        case "getting-started":
            pageContent.innerHTML = "<iframe src='docs_getting_started.html' frameborder=\"no\" width=\"100%\" height=\"100%\" scrolling=\"no\"></iframe>";
            break;
        case "pc-games":
            pageContent.innerHTML = "<iframe src='docs_pc_games.html' frameborder=\"no\" width=\"100%\" height=\"100%\" scrolling=\"no\"></iframe>";
            break;
        case "mobile-games":
            pageContent.innerHTML = "<iframe src='docs_mobile_games.html' frameborder=\"no\" width=\"100%\" height=\"100%\" scrolling=\"no\"></iframe>";
            break;
    }
}