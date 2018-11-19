function res() {
    var user=$("#inputUser").val();
    var email=$("#inputEmail3").val();
    var pass=$("#inputPassword3").val();
    var pass1=$("#inputPassword4").val();
    if(user===""||email===""||pass===""||pass1===""){
        alert("未填写信息");
    }
    else if(pass!==pass1){
        alert("密码不一致");
    }
    else {
        $.ajax({
            url: "http://www.cspy.online:8080/test/register",
            dataType: "json",
            contentType: "application/json",
            data: {
                username: user,
                password: pass,
                email: email
            },
            success: function () {
                alert("注册成功");
                window.location.href="login.html";
            }, error: function () {
                alert("注册失败");
            }
        })
    }
}