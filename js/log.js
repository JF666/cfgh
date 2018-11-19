function log() {
    var user=$("#inputUser").val();
    var pass=$("#inputPassword3").val();
    if(user===""||pass===""){
        alert("未填写信息");
    }
    else {
        $.ajax({
            url: "http://www.cspy.online:8080/test/login",
            dataType: "json",
            contentType: "application/json",
            data: {
                username: user,
                password: pass,
            },
            success: function (response) {
                if(response.code==100){
                    localStorage.setItem("username",user);
                    location.href="index.html";
                    localStorage.removeItem("good");
                }
                else {
                    alert("登录失败");
                }

            }, error: function () {
                alert("连接失败");
            }
        })
        $.ajax({
            url: "http://www.cspy.online:8080/test/valid_user",
            dataType: "json",
            contentType: "application/json",
            data: {username:user},
            success: function (response) {
                 var codes = response.code;
                 localStorage.setItem("codes",codes);
            }, error: function () {
            }
        })
        var codes=localStorage.getItem("codes");
        if (codes==100){
            $.ajax({
                url: "http://www.cspy.online:8080/test/get_shopcart",
                dataType: "json",
                contentType: "application/json",
                data: {username:user},
                success: function (response) {
                    var id = response.maps.shop_cart_id;
                    localStorage.setItem("cartid",id);
                }, error: function () {

                }
            })
        }
    }
}