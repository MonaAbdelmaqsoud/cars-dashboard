const dashboardLink = document.getElementById("dashboard")

function linkRef (element, link){
    element.href = link
}

dashboardLink.addEventListener("click", linkRef(dashboardLink, "index.html"))