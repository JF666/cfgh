var user=localStorage.getItem("username");
var str,good,price;
$(function(){
    var url = location.search;
    if (url.indexOf("?") != -1) {
        str = decodeURI(url.substr(1).split("=")[1]);
    }
    $.ajax({
        url: "http://www.cspy.online:8080/test/hero/select_name",
        dataType: "json",
        contentType: "application/json",
        data: {name: str},
        success: function (response) {
            var data = response.maps.hero;
            var img = document.createElement("img");
            var h1 = document.createElement("h1");
            var p1 = document.createElement("p");
            var p2 = document.createElement("p");
            var span1 = document.createElement("span");
            var span2 = document.createElement("span");
            var span3 = document.createElement("span");
            var a = document.createElement("a");
            var del = document.createElement("del");
            var btn1 = document.createElement("button");
            var btn2 = document.createElement("button");
            img.src = "img/" + data.heroImage + ".jpg";
            img.alt = data.heroImage;
            $(".pic").append(img);
            h1.innerHTML = data.heroName+"\t"+data.heroType+"\t"+data.heroOriginal;
            p1.innerHTML = data.heroCommend.substring(0,data.heroCommend.indexOf("。")+1);
            p2.setAttribute("class","price1");
            $(".buy").append(h1);
            $(".buy").append(p1);
            if (data.heroSale=="是"){
                span1.innerHTML = "￥"+data.newPrice;
                span1.setAttribute("class","num1");
                span2.innerHTML = "￥"+data.oldPrice;
                span2.setAttribute("class","num2");
                p2.append(span1);
                del.append(span2);
                p2.append(del);
                price=data.newPrice;
            }
            else {
                span1.innerHTML = "￥"+data.oldPrice;
                span1.setAttribute("class","num1");
                p2.append(span1);
                price=data.oldPrice;
            }
            $(".buy").append(p2);
            a.href = data.heroName
            btn1.setAttribute("class","btn btn-add");
            btn1.onclick = function () {addPro();};
            btn1.innerHTML = "加入购物车";
            btn2.setAttribute("class","btn btn-danger btn-buy");
            btn2.onclick = function () {buyPro();};
            btn2.innerHTML = "立即购买";
            $(".buy").append(btn1);
            $(".buy").append(btn2);
            var h2 = document.createElement("h2");
            h2.innerHTML = data.heroName;
            var p = document.createElement("p");
            p.innerHTML = data.heroCommend;
            $(".intro_2").append(h2);
            $(".intro_2").append(p);
            good = data.heroName+"-"+price+"-"+1;
        }, error: function () {

        }
    })
    $(window).scroll(function(){
        slideIn($(".intro"),200);
    });
    function slideIn(obj,right){
        var targetHeight = obj.offset().top;   //目标元素到顶部的距离
        var scrollTop = $(window).scrollTop(); //页面滚动的距离

        if(scrollTop>targetHeight-400){
            obj.animate({right:right+'px',opacity:1,filter:'Alpha(opacity=90)'},500);
        }
    }
});
function addPro() {
    var id=localStorage.getItem("cartid");
    $.ajax({
        url: "http://www.cspy.online:8080/test/get_shop_cart",
        dataType: "json",
        async: false,
        contentType: "application/json",
        data: {shopCartId: id},
        success: function (response) {
            var data = response.maps.goods;
            if (data!=undefined) {
                good= good +"￥"+data;
            }
            alert(good);
            localStorage.setItem("good",good);
        }, error: function () {

        }
    })
    if(user){
        localStorage.setItem("hero",str);
        $.ajax({
            url: "http://www.cspy.online:8080/test/refresh_shop_cart",
            dataType: "json",
            contentType: "application/json",
            data: {shopCartId: id,goodsList:good},
            success: function () {
                location.href="add.html";
                alert(good);
            }, error: function () {
            }
        })
    }
    else {
        window.location.href="login.html";
    }
}
function buyPro() {
    if(user){
        localStorage.setItem("hero",str);
        location.href="order.html";
    }
    else {
        window.location.href="login.html";
    }
}