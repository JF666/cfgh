var gds;
$(function() {
    var id = localStorage.getItem("cartid");
    var good = [];
    $.ajax({
        url: "http://www.cspy.online:8080/test/get_shop_cart",
        dataType: "json",
        async: false,
        contentType: "application/json",
        data: {shopCartId: id},
        success: function (response) {
            gds = response.maps.goods;
            if (!gds){
                var gd=localStorage.getItem("good");
                if (gd==undefined){
                    alert("购物车为空！");
                    return;
                }
                else {
                    gds=gd;

                }

            } else {
                var gd=localStorage.getItem("good");
                if (gd!=undefined){
                    gds =  gd+"￥" +gds;
                }
            }

                var data = gds.split("￥");
                for (var i = 0; i < data.length; i++) {
                    good.push(data[i].split("-"));
                }
                for (var j = 0; j < good.length; j++) {
                    var tr = document.createElement("tr");
                    var td1 = document.createElement("td");
                    var td2 = document.createElement("td");
                    var td3 = document.createElement("td");
                    var td4 = document.createElement("td");
                    var img = document.createElement("img");
                    var path = getImage(good[j][0]);
                    img.src = "img/" + path + ".jpg";
                    img.alt = path;
                    td1.append(img);
                    tr.appendChild(td1);
                    td2.innerHTML = good[j][0];
                    tr.appendChild(td2);
                    td3.innerHTML = good[j][1];
                    tr.appendChild(td3);
                    td4.innerHTML = good[j][2];
                    tr.appendChild(td4);
                    $("#tbody-result").append(tr);
                }

        },error: function () {

        }
    })
})
function getImage(obj) {
    var data;
    $.ajax({
        url: "http://www.cspy.online:8080/test/hero/select_name",
        dataType: "json",
        async: false,
        contentType: "application/json",
        data: {name: obj},
        success: function (response) {
            data = response.maps.hero.heroImage;
        }, error: function () {

        }
    })
    return data;
}

function sum() {
    commit(gds,1);
}

function  commit(goods,type) {
    var data = goods.split("￥");
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
                async:false,
                contentType: "application/json;charset=utf-8",
                data: {goodList: goods,username: user},
                success: function (response) {
                    alert("购买成功");

                }, error: function () {

                }
            })
            var id = localStorage.getItem("cartid");
            if (type==1){
                $.ajax({
                    url: "www.cspy.online:8080/test/refresh_shop_cart",
                    dataType: "json",
                    async:false,
                    contentType: "application/json;charset=utf-8",
                    data: {shopCartId: id, goodsList: ""},
                    success: function (response) {
                        $("#tbody-result").empty();
                    }, error: function () {
                        alert("获取购物车状态失败");
                    }
                })
            }
            return true;
        }
        else {
            return false;
        }
    }
}