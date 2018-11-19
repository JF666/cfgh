var goods,price;
$(function() {
    var str = localStorage.getItem("hero");
    $.ajax({
        url: "http://www.cspy.online:8080/test/hero/select_name",
        dataType: "json",
        contentType: "application/json",
        data: {name: str},
        success: function (response) {
            localStorage.removeItem("hero");
            var data = response.maps.hero;
            var img = document.createElement("img");
            img.src = "img/"+ data.heroImage +".jpg";
            var span1 = document.createElement("span");
            var span2 = document.createElement("span");
            span2.setAttribute("class","num");
            span1.innerHTML = data.heroName+"\t"+data.heroType+"\t"+data.heroOriginal;
            if(data.heroSale=="是"){
                span2.innerHTML = "￥"+data.newPrice;
                price = data.newPrice;
            }
            else {
                span2.innerHTML = "￥"+data.oldPrice;
                price = data.oldPrice;
            }
            $(".hero").append(img);
            $(".hero").append(span1);
            $(".hero").append(span2);
            goods = data.heroName+"-"+price+"-"+"1";
        },error: function () {

        }
    })
})
function order(){
    commit(goods,0);
}

function  commit(goods,type) {
    var data = goods.split("_");
    var good=[];
    var sum=0;
    for (var i = 0; i < data.length; i++) {
        good.push(data[i].split("-"));
    }
    for (var i = 0; i < good.length; i++) {
        sum+=good[i][1]*good[i][2];
    }
    var user = localStorage.getItem("username");
    var money=0;
    $.ajax({
        url: "http://www.cspy.online:8080/test/get_money",
        dataType: "json",
        async: false,
        contentType: "application/json",
        data: {username: user},
        success: function (response) {
            money = response.maps.user_money;
        }, error: function () {

        }
    })
    if(money<sum){
        alert("当前余额不足！");
    }
    else {
        if(confirm("商品总价："+sum+"\n当前余额："+ money+"\n"+"确定购买吗？")) {

            $.ajax({
                url: "www.cspy.online:8080/test/order_commit",
                dataType: "json",
                type: "get",
                async:false,
                contentType: "application/json;charset=utf-8",
                data: {username: user,goodList: goods},
                success: function (response) {
                    alert("购买成功");
                    var id = localStorage.getItem("cartid");
                    if (type==1){
                        $.ajax({
                            url: "www.cspy.online:8080/test/refresh_shop_cart",
                            dataType: "json",
                            contentType: "application/json;charset=utf-8",
                            data: {shopCartId: id, goodsList: ""},
                            success: function (response) {
                                location.href="index.html";
                            }, error: function () {
                                alert("获取购物车状态失败");
                            }
                        })
                    }
                }, error: function () {

                }
            })
            return true;
        }
        else {
            return false;
        }
    }
}