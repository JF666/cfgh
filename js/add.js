$(function() {
    var str = localStorage.getItem("hero");
    var id = localStorage.getItem("cartid");
    $.ajax({
        url: "http://www.cspy.online:8080/test/hero/select_name",
        dataType: "json",
        contentType: "application/json",
        data: {name: str},
        success: function (response) {
            localStorage.removeItem("hero");
            var data = response.maps.hero;
            var span = document.createElement("span");
            span.setAttribute("class","name");
            span.innerHTML = data.heroName+"\t"+data.heroType+"\t"+data.heroOriginal;
            $(".hero").append(span);
        },error: function () {

        }
    })
})