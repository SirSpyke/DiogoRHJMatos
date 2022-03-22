function Hamburguer() {
    var tbs = document.getElementById("tabs");
    var hb = document.getElementById("hambu");
    var crs = document.getElementById("cross");
    if (tbs.style.display === "block") {
        tbs.style.display = "none";
        hb.style.display = "block";
        hb.style.visibility = "visible";
        crs.style.visibility = "hidden";
    } else {
        tbs.style.display = "block";
        hb.style.display = "none";
        hb.style.visibility = "hidden";
        crs.style.visibility = "visible";
    }
}