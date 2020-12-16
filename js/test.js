(function () { 
    //工具条按钮
    $(".toolbar li").click(function () {
        var type = "";
        type = $(this).attr("id");
        if (type != "") {
            switch (type) {
                case "zoomIn":
                    zoomIn();
                    break;
                case "zoomOut":
                    zoomOut();
                    break;
                case "zoomInLK":
                    mapRectZoom();
                    break;
                case "mapPan":
                    mapPan();
                    break;
                case "fullScreen":
                    fullscreen();
                    break;
                case "legend":
                    legend();
                    break;
                case "layerControl":
                    layerControl();
                    break;
                case "open":
                    break;
            }
        }
    });

    $("#layerControlaBoxClose").click(function () {
        var box = $("#layerControlaBox");
        if(box .css('display') == 'block'){
            box.style.display = 'none';}
    });

    $("#legendBoxClose").click(function () {
        var box = $("#legendBox");
        if(box .css('display') == 'block'){
            box.style.display = 'none';}
    });
});

//图例
function legend() {
    var box = document.getElementById('legendBox');
    if(box.style.display == 'none'){
        box.style.display = 'block';}
}

//图层控制
function layerControl() {
    //var box = document.getElementById('layerControlBox');
    //if(box.style.display == 'none'){
    //    box.style.display = 'block';}

    var box = $("#layerControlaBox");
    if(box .css('display') == 'none'){
        box.show();
    }
}

//图层控制实现
function on_hide() {

    var svgViewer = document.getElementById("svgEmbed");
    var SVGDoc = svgViewer.getSVGDocument();
    var SVGRoot = SVGDoc.documentElement;
    var rect = SVGDoc.getElementById("road1");
    rect.style.display = (document.getElementById("checkbox_1").checked == true) ? "block" : "none";

    var rect = SVGDoc.getElementById("road2");
    rect.style.display = (document.getElementById("checkbox_2").checked == true) ? "block" : "none";
    var rect = SVGDoc.getElementById("road3");
    rect.style.display = (document.getElementById("checkbox_3").checked == true) ? "block" : "none";

    var rect = SVGDoc.getElementById("road4");
    rect.style.display = (document.getElementById("checkbox_4").checked == true) ? "block" : "none";
}
})();
