var pN,pN1;
var user=localStorage.getItem("username");
$(function () {
    var firP,lasP,pageNum;
    var pp = [];
    if (user!=null){
        $(".user").empty();
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var a = document.createElement("a");
        a.href="#";
        a.onclick=function(){quit();};
        a.innerHTML = "退出";
        li1.innerHTML = user;
        li2.append(a);
        $(".user").append(li1);
        $(".user").append(li2);
    }
    $.ajax({
        url: "http://www.cspy.online:8080/test/hero/sale",
        dataType: "json",
        contentType: "application/json",
        data: {},
        success: function (response) {
            var data = response.maps.pageInfo.list;
            var ul = document.createElement("ul");
            var isFp,isLp;
            for (i in data) {
                var li, a, div, img, h4, span1, span2, span3, p, del, br;
                li = document.createElement("li");
                a = document.createElement("a");
                div = document.createElement("div");
                img = document.createElement("img");
                h4 = document.createElement("h4");
                span1 = document.createElement("span");
                span2 = document.createElement("span");
                span3 = document.createElement("span");
                p = document.createElement("p");
                del = document.createElement("del");
                br = document.createElement("br");
                img.alt = data[i].heroImage;
                img.src = "img/" + data[i].heroImage + ".jpg";
                img.width = 160;
                h4.innerHTML = data[i].heroName;
                span1.innerHTML = data[i].heroOriginal+"\t"+data[i].heroType+"\t"+data[i].heroLevel;
                span2.innerHTML = data[i].newPrice+"元";
                span2.setAttribute("class","num_n");
                span3.innerHTML = data[i].oldPrice+"元";
                div.setAttribute("class","dis_info");
                a.href="detail.html?name="+data[i].heroName;
                div.append(img);
                div.append(h4);
                div.append(span1);
                div.append(br);
                div.append(span2);
                del.append(span3);
                div.append(del);
                a.append(div);
                li.append(a);
                ul.append(li);
                isFp = response.maps.pageInfo.isFirstPage;
                isLp = response.maps.pageInfo.isLastPage;
                pN = response.maps.pageInfo.pageNum;
            }
            $(".discount1").append(ul);
            var li1=document.createElement("li");
            var li2=document.createElement("li");
            var btn1=document.createElement("button");
            var btn2=document.createElement("button");
            var span1=document.createElement("span");
            var span2=document.createElement("span");
            span1.setAttribute("class","glyphicon glyphicon-chevron-left gly-left");
            span2.setAttribute("class","glyphicon glyphicon-chevron-right");
            btn1.setAttribute("class","btn");
            btn1.onclick = function (){toLeft();};
            btn2.setAttribute("class","btn");
            btn2.onclick = function (){toRight();};
            btn1.append(span1);
            btn2.append(span2);
            li1.append(btn1);
            li2.append(btn2);
            $(".page1").append(li1);
            $(".page1").append(li2);
            if (isFp==true){
                btn1.setAttribute("disabled","disabled");
            }
            else if (isLp==true){
                btn2.setAttribute("disabled","disabled");
            }
        }, error: function () {
        }
    })
    $.ajax({
        url: "http://www.cspy.online:8080/test/hero",
        dataType: "json",
        contentType: "application/json",
        data: {},
        success: function (response) {
            var data = response.maps.pageInfo.list;
            pp = response.maps.pageInfo.navigatepageNums;
            pageNum = response.maps.pageInfo.navigatePages;
            firP = response.maps.pageInfo.navigateFirstPage;
            lasP = response.maps.pageInfo.navigateLastPage;
            var ul = document.createElement("ul");
            var isFp1,isLp1;
            for (i in data) {
                var li, a, div, img, h4, span1, span2, span3, p, del, br;
                li = document.createElement("li");
                a = document.createElement("a");
                div = document.createElement("div");
                img = document.createElement("img");
                h4 = document.createElement("h4");
                span1 = document.createElement("span");
                span2 = document.createElement("span");
                span3 = document.createElement("span");
                p = document.createElement("p");
                del = document.createElement("del");
                br = document.createElement("br");
                img.alt = data[i].heroImage;
                img.src = "img/" + data[i].heroImage + ".jpg";
                img.width = 160;
                h4.innerHTML = data[i].heroName;
                span1.innerHTML = data[i].heroOriginal+"\t"+data[i].heroType+"\t"+data[i].heroLevel;
                div.setAttribute("class","dis_info");
                a.href="detail.html?name="+data[i].heroName;
                div.append(img);
                div.append(h4);
                div.append(span1);
                div.append(br);
                if (data[i].heroSale=="是"){
                    span2.innerHTML = data[i].newPrice+"元";
                    span2.setAttribute("class","num_n");
                    span3.innerHTML = data[i].oldPrice+"元";
                    div.append(span2);
                    del.append(span3);
                    div.append(del);
                }
                else {
                    span3.innerHTML = data[i].oldPrice+"元";
                    span3.setAttribute("class","num_n");
                    div.append(span3);
                }
                a.append(div);
                li.append(a);
                ul.append(li);
                isFp1 = response.maps.pageInfo.isFirstPage;
                isLp1 = response.maps.pageInfo.isLastPage;
                pN1 = response.maps.pageInfo.pageNum;
            }
            $(".products1").append(ul);
            var li1=document.createElement("li");
            var li2=document.createElement("li");
            var btn1=document.createElement("button");
            var btn2=document.createElement("button");
            var span1=document.createElement("span");
            var span2=document.createElement("span");
            span1.setAttribute("class","glyphicon glyphicon-chevron-left gly-left");
            span2.setAttribute("class","glyphicon glyphicon-chevron-right");
            btn1.setAttribute("class","btn");
            btn1.onclick = function (){toLeft1();};
            btn2.setAttribute("class","btn");
            btn2.onclick = function (){toRight1();};
            btn1.append(span1);
            btn2.append(span2);
            li1.append(btn1);
            li2.append(btn2);
            $(".page2").append(li1);
            var btn3=[];
            for (var i = 0; i < pageNum; i++) {
                var li3=[];
                li3[i]=document.createElement("li");
                btn3[i]=document.createElement("button");
                btn3[i].setAttribute("class","btn");
                btn3[i].onclick = function (){toPn(this);};
                btn3[i].innerHTML = pp[i];
                li3[i].append(btn3[i]);
                $(".page2").append(li3[i]);
            }
            $(".page2").append(li2);
            if (isFp1==true){
                btn1.setAttribute("disabled","disabled");
            }
            else if (isLp1==true){
                btn2.setAttribute("disabled","disabled");
            }
            if(response.maps.pageInfo.prePage==0){
                btn3[0].setAttribute("disabled","disabled");
            }
            else if(response.maps.pageInfo.nextPage==0){
                btn3[pageNum-1].setAttribute("disabled","disabled");
            }
            for (var i = 0; i < pp.length; i++) {
                if(pp[i]==response.maps.pageInfo.pageNum) {
                    btn3[i].setAttribute("disabled","disabled");
                }
            }
        }, error: function () {
        }
    })
})
function quit() {
    $(".user").empty();
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var a1 = document.createElement("a");
    var a2 = document.createElement("a");
    a1.href="login.html";
    a2.href="register.html";
    a1.innerHTML = "登录"
    a2.innerHTML = "注册";
    li1.append(a1);
    li2.append(a2);
    $(".user").append(li1);
    $(".user").append(li2);
    window.location.href = "index.html";
    localStorage.removeItem("username");
}
function toLeft() {
    $.ajax({
        url: "http://www.cspy.online:8080/test/hero/sale",
        dataType: "json",
        contentType: "application/json",
        data: {pn:pN-1},
        success: function (response) {
            $(".discount1").empty();
            $(".page1").empty();
            var data = response.maps.pageInfo.list;
            var ul = document.createElement("ul");
            var isFp,isLp;
            for (i in data) {
                var li, a, div, img, h4, span1, span2, span3, p, del, br;
                li = document.createElement("li");
                a = document.createElement("a");
                div = document.createElement("div");
                img = document.createElement("img");
                h4 = document.createElement("h4");
                span1 = document.createElement("span");
                span2 = document.createElement("span");
                span3 = document.createElement("span");
                p = document.createElement("p");
                del = document.createElement("del");
                br = document.createElement("br");
                img.alt = data[i].heroImage;
                img.src = "img/" + data[i].heroImage + ".jpg";
                img.width = 160;
                h4.innerHTML = data[i].heroName;
                span1.innerHTML = data[i].heroOriginal+"\t"+data[i].heroType+"\t"+data[i].heroLevel;
                span2.innerHTML = data[i].newPrice+"元";
                span2.setAttribute("class","num_n");
                span3.innerHTML = data[i].oldPrice+"元";
                div.setAttribute("class","dis_info");
                a.href="detail.html?name="+data[i].heroName;
                div.append(img);
                div.append(h4);
                div.append(span1);
                div.append(br);
                div.append(span2);
                del.append(span3);
                div.append(del);
                a.append(div);
                li.append(a);
                ul.append(li);
                isFp = response.maps.pageInfo.isFirstPage;
                isLp = response.maps.pageInfo.isLastPage;
                pN = response.maps.pageInfo.pageNum;
            }
            $(".discount1").append(ul);
            var li1=document.createElement("li");
            var li2=document.createElement("li");
            var btn1=document.createElement("button");
            var btn2=document.createElement("button");
            var span1=document.createElement("span");
            var span2=document.createElement("span");
            span1.setAttribute("class","glyphicon glyphicon-chevron-left gly-left");
            span2.setAttribute("class","glyphicon glyphicon-chevron-right");
            btn1.setAttribute("class","btn");
            btn1.onclick = function (){toLeft();};
            btn2.setAttribute("class","btn");
            btn2.onclick = function (){toRight();};
            btn1.append(span1);
            btn2.append(span2);
            li1.append(btn1);
            li2.append(btn2);
            $(".page1").append(li1);
            $(".page1").append(li2);
            if (isFp==true){
                btn1.setAttribute("disabled","disabled");
            }
            else if (isLp==true){
                btn2.setAttribute("disabled","disabled");
            }
        }, error: function () {
        }
    })
}
function toRight() {
    $.ajax({
        url: "http://www.cspy.online:8080/test/hero/sale",
        dataType: "json",
        contentType: "application/json",
        data: {pn:pN+1},
        success: function (response) {
            $(".discount1").empty();
            $(".page1").empty();
            var data = response.maps.pageInfo.list;
            var ul = document.createElement("ul");
            var isFp,isLp;
            for (i in data) {
                var li, a, div, img, h4, span1, span2, span3, p, del, br;
                li = document.createElement("li");
                a = document.createElement("a");
                div = document.createElement("div");
                img = document.createElement("img");
                h4 = document.createElement("h4");
                span1 = document.createElement("span");
                span2 = document.createElement("span");
                span3 = document.createElement("span");
                p = document.createElement("p");
                del = document.createElement("del");
                br = document.createElement("br");
                img.alt = data[i].heroImage;
                img.src = "img/" + data[i].heroImage + ".jpg";
                img.width = 160;
                h4.innerHTML = data[i].heroName;
                span1.innerHTML = data[i].heroOriginal+"\t"+data[i].heroType+"\t"+data[i].heroLevel;
                span2.innerHTML = data[i].newPrice+"元";
                span2.setAttribute("class","num_n");
                span3.innerHTML = data[i].oldPrice+"元";
                div.setAttribute("class","dis_info");
                a.href="detail.html?name="+data[i].heroName;
                div.append(img);
                div.append(h4);
                div.append(span1);
                div.append(br);
                div.append(span2);
                del.append(span3);
                div.append(del);
                a.append(div);
                li.append(a);
                ul.append(li);
                isFp = response.maps.pageInfo.isFirstPage;
                isLp = response.maps.pageInfo.isLastPage;
                pN = response.maps.pageInfo.pageNum;
            }
            $(".discount1").append(ul);
            var li1=document.createElement("li");
            var li2=document.createElement("li");
            var btn1=document.createElement("button");
            var btn2=document.createElement("button");
            var span1=document.createElement("span");
            var span2=document.createElement("span");
            span1.setAttribute("class","glyphicon glyphicon-chevron-left gly-left");
            span2.setAttribute("class","glyphicon glyphicon-chevron-right");
            btn1.setAttribute("class","btn");
            btn1.onclick = function (){toLeft();};
            btn2.setAttribute("class","btn");
            btn2.onclick = function (){toRight();};
            btn1.append(span1);
            btn2.append(span2);
            li1.append(btn1);
            li2.append(btn2);
            $(".page1").append(li1);
            $(".page1").append(li2);
            if (isFp==true){
                btn1.setAttribute("disabled","disabled");
            }
            else if (isLp==true){
                btn2.setAttribute("disabled","disabled");
            }
        }, error: function () {
        }
    })
}
function toLeft1() {
    $.ajax({
        url: "http://www.cspy.online:8080/test/hero",
        dataType: "json",
        contentType: "application/json",
        data: {pn:pN1-1},
        success: function (response) {
            $(".products1").empty();
            $(".page2").empty();
            var data = response.maps.pageInfo.list;
            pp = response.maps.pageInfo.navigatepageNums;
            pageNum = response.maps.pageInfo.navigatePages;
            firP = response.maps.pageInfo.navigateFirstPage;
            lasP = response.maps.pageInfo.navigateLastPage;
            var ul = document.createElement("ul");
            var isFp1,isLp1;
            for (i in data) {
                var li, a, div, img, h4, span1, span2, span3, p, del, br;
                li = document.createElement("li");
                a = document.createElement("a");
                div = document.createElement("div");
                img = document.createElement("img");
                h4 = document.createElement("h4");
                span1 = document.createElement("span");
                span2 = document.createElement("span");
                span3 = document.createElement("span");
                p = document.createElement("p");
                del = document.createElement("del");
                br = document.createElement("br");
                img.alt = data[i].heroImage;
                img.src = "img/" + data[i].heroImage + ".jpg";
                img.width = 160;
                h4.innerHTML = data[i].heroName;
                span1.innerHTML = data[i].heroOriginal+"\t"+data[i].heroType+"\t"+data[i].heroLevel;
                div.setAttribute("class","dis_info");
                a.href="detail.html?name="+data[i].heroName;
                div.append(img);
                div.append(h4);
                div.append(span1);
                div.append(br);
                if (data[i].heroSale=="是"){
                    span2.innerHTML = data[i].newPrice+"元";
                    span2.setAttribute("class","num_n");
                    span3.innerHTML = data[i].oldPrice+"元";
                    div.append(span2);
                    del.append(span3);
                    div.append(del);
                }
                else {
                    span3.innerHTML = data[i].oldPrice+"元";
                    span3.setAttribute("class","num_n");
                    div.append(span3);
                }
                a.append(div);
                li.append(a);
                ul.append(li);
                isFp1 = response.maps.pageInfo.isFirstPage;
                isLp1 = response.maps.pageInfo.isLastPage;
                pN1 = response.maps.pageInfo.pageNum;
            }
            $(".products1").append(ul);
            var li1=document.createElement("li");
            var li2=document.createElement("li");
            var btn1=document.createElement("button");
            var btn2=document.createElement("button");
            var span1=document.createElement("span");
            var span2=document.createElement("span");
            span1.setAttribute("class","glyphicon glyphicon-chevron-left gly-left");
            span2.setAttribute("class","glyphicon glyphicon-chevron-right");
            btn1.setAttribute("class","btn");
            btn1.onclick = function (){toLeft1();};
            btn2.setAttribute("class","btn");
            btn2.onclick = function (){toRight1();};
            btn1.append(span1);
            btn2.append(span2);
            li1.append(btn1);
            li2.append(btn2);
            var btn3=[];
            $(".page2").append(li1);
            for (var i = 0; i < pageNum; i++) {
                var li3=[];
                li3[i]=document.createElement("li");
                btn3[i]=document.createElement("button");
                btn3[i].setAttribute("class","btn");
                btn3[i].onclick = function (){toPn(this);};
                btn3[i].innerHTML = pp[i];
                li3[i].append(btn3[i]);
                $(".page2").append(li3[i]);
            }
            $(".page2").append(li2);
            if (isFp1==true){
                btn1.setAttribute("disabled","disabled");
            }
            else if (isLp1==true){
                btn2.setAttribute("disabled","disabled");
            }
            if(response.maps.pageInfo.prePage==0){
                btn3[0].setAttribute("disabled","disabled");
            }
            else if(response.maps.pageInfo.nextPage==0){
                btn3[pageNum-1].setAttribute("disabled","disabled");
            }
            for (var i = 0; i < pp.length; i++) {
                if(pp[i]==response.maps.pageInfo.pageNum) {
                    btn3[i].setAttribute("disabled","disabled");
                }
            }
        }, error: function () {
        }
    })
}
function toRight1() {
    $.ajax({
        url: "http://www.cspy.online:8080/test/hero",
        dataType: "json",
        contentType: "application/json",
        data: {pn:pN1+1},
        success: function (response) {
            $(".products1").empty();
            $(".page2").empty();
            var data = response.maps.pageInfo.list;
            pp = response.maps.pageInfo.navigatepageNums;
            pageNum = response.maps.pageInfo.navigatePages;
            firP = response.maps.pageInfo.navigateFirstPage;
            lasP = response.maps.pageInfo.navigateLastPage;
            var ul = document.createElement("ul");
            var isFp1,isLp1;
            for (i in data) {
                var li, a, div, img, h4, span1, span2, span3, p, del, br;
                li = document.createElement("li");
                a = document.createElement("a");
                div = document.createElement("div");
                img = document.createElement("img");
                h4 = document.createElement("h4");
                span1 = document.createElement("span");
                span2 = document.createElement("span");
                span3 = document.createElement("span");
                p = document.createElement("p");
                del = document.createElement("del");
                br = document.createElement("br");
                img.alt = data[i].heroImage;
                img.src = "img/" + data[i].heroImage + ".jpg";
                img.width = 160;
                h4.innerHTML = data[i].heroName;
                span1.innerHTML = data[i].heroOriginal+"\t"+data[i].heroType+"\t"+data[i].heroLevel;
                div.setAttribute("class","dis_info");
                a.href="detail.html?name="+data[i].heroName;
                div.append(img);
                div.append(h4);
                div.append(span1);
                div.append(br);
                if (data[i].heroSale=="是"){
                    span2.innerHTML = data[i].newPrice+"元";
                    span2.setAttribute("class","num_n");
                    span3.innerHTML = data[i].oldPrice+"元";
                    div.append(span2);
                    del.append(span3);
                    div.append(del);
                }
                else {
                    span3.innerHTML = data[i].oldPrice+"元";
                    span3.setAttribute("class","num_n");
                    div.append(span3);
                }
                a.append(div);
                li.append(a);
                ul.append(li);
                isFp1 = response.maps.pageInfo.isFirstPage;
                isLp1 = response.maps.pageInfo.isLastPage;
                pN1 = response.maps.pageInfo.pageNum;
            }
            $(".products1").append(ul);
            var li1=document.createElement("li");
            var li2=document.createElement("li");
            var btn1=document.createElement("button");
            var btn2=document.createElement("button");
            var span1=document.createElement("span");
            var span2=document.createElement("span");
            span1.setAttribute("class","glyphicon glyphicon-chevron-left gly-left");
            span2.setAttribute("class","glyphicon glyphicon-chevron-right");
            btn1.setAttribute("class","btn");
            btn1.onclick = function (){toLeft1();};
            btn2.setAttribute("class","btn");
            btn2.onclick = function (){toRight1();};
            btn1.append(span1);
            btn2.append(span2);
            li1.append(btn1);
            li2.append(btn2);
            $(".page2").append(li1);
            var btn3=[];
            for (var i = 0; i < pageNum; i++) {
                var li3=[];
                li3[i]=document.createElement("li");
                btn3[i]=document.createElement("button");
                btn3[i].setAttribute("class","btn");
                btn3[i].onclick = function (){toPn(this);};
                btn3[i].innerHTML = pp[i];
                li3[i].append(btn3[i]);
                $(".page2").append(li3[i]);
            }
            $(".page2").append(li2);
            if (isFp1==true){
                btn1.setAttribute("disabled","disabled");
            }
            else if (isLp1==true){
                btn2.setAttribute("disabled","disabled");
            }
            if(response.maps.pageInfo.prePage==0){
                btn3[0].setAttribute("disabled","disabled");
            }
            else if(response.maps.pageInfo.nextPage==0){
                btn3[pageNum-1].setAttribute("disabled","disabled");
            }
            for (var i = 0; i < pp.length; i++) {
                if(pp[i]==response.maps.pageInfo.pageNum) {
                    btn3[i].setAttribute("disabled","disabled");
                }
            }
        }, error: function () {
        }
    })
}
function toPn(n) {
    $.ajax({
        url: "http://www.cspy.online:8080/test/hero",
        dataType: "json",
        contentType: "application/json",
        data: {pn:n.innerHTML},
        success: function (response) {
            $(".products1").empty();
            $(".page2").empty();
            var data = response.maps.pageInfo.list;
            pp = response.maps.pageInfo.navigatepageNums;
            pageNum = response.maps.pageInfo.navigatePages;
            firP = response.maps.pageInfo.navigateFirstPage;
            lasP = response.maps.pageInfo.navigateLastPage;
            var ul = document.createElement("ul");
            var isFp1,isLp1;
            for (i in data) {
                var li, a, div, img, h4, span1, span2, span3, p, del, br;
                li = document.createElement("li");
                a = document.createElement("a");
                div = document.createElement("div");
                img = document.createElement("img");
                h4 = document.createElement("h4");
                span1 = document.createElement("span");
                span2 = document.createElement("span");
                span3 = document.createElement("span");
                p = document.createElement("p");
                del = document.createElement("del");
                br = document.createElement("br");
                img.alt = data[i].heroImage;
                img.src = "img/" + data[i].heroImage + ".jpg";
                img.width = 160;
                h4.innerHTML = data[i].heroName;
                span1.innerHTML = data[i].heroOriginal+"\t"+data[i].heroType+"\t"+data[i].heroLevel;
                div.setAttribute("class","dis_info");
                a.href="detail.html?name="+data[i].heroName;
                div.append(img);
                div.append(h4);
                div.append(span1);
                div.append(br);
                if (data[i].heroSale=="是"){
                    span2.innerHTML = data[i].newPrice+"元";
                    span2.setAttribute("class","num_n");
                    span3.innerHTML = data[i].oldPrice+"元";
                    div.append(span2);
                    del.append(span3);
                    div.append(del);
                }
                else {
                    span3.innerHTML = data[i].oldPrice+"元";
                    span3.setAttribute("class","num_n");
                    div.append(span3);
                }
                a.append(div);
                li.append(a);
                ul.append(li);
                isFp1 = response.maps.pageInfo.isFirstPage;
                isLp1 = response.maps.pageInfo.isLastPage;
                pN1 = response.maps.pageInfo.pageNum;
            }
            $(".products1").append(ul);
            var li1=document.createElement("li");
            var li2=document.createElement("li");
            var btn1=document.createElement("button");
            var btn2=document.createElement("button");
            var span1=document.createElement("span");
            var span2=document.createElement("span");
            span1.setAttribute("class","glyphicon glyphicon-chevron-left gly-left");
            span2.setAttribute("class","glyphicon glyphicon-chevron-right");
            btn1.setAttribute("class","btn");
            btn1.onclick = function (){toLeft1();};
            btn2.setAttribute("class","btn");
            btn2.onclick = function (){toRight1();};
            btn1.append(span1);
            btn2.append(span2);
            li1.append(btn1);
            li2.append(btn2);
            $(".page2").append(li1);
            var btn3=[];
            for (var i = 0; i < pageNum; i++) {
                var li3=[];
                li3[i]=document.createElement("li");
                btn3[i]=document.createElement("button");
                btn3[i].setAttribute("class","btn");
                btn3[i].onclick = function (){toPn(this);};
                btn3[i].innerHTML = pp[i];
                li3[i].append(btn3[i]);
                $(".page2").append(li3[i]);
            }
            $(".page2").append(li2);
            if (isFp1==true){
                btn1.setAttribute("disabled","disabled");
            }
            else if (isLp1==true){
                btn2.setAttribute("disabled","disabled");
            }
            if(response.maps.pageInfo.prePage==0){
                btn3[0].setAttribute("disabled","disabled");
            }
            else if(response.maps.pageInfo.nextPage==0){
                btn3[pageNum-1].setAttribute("disabled","disabled");
            }
            for (var i = 0; i < pp.length; i++) {
                if(pp[i]==response.maps.pageInfo.pageNum) {
                    btn3[i].setAttribute("disabled","disabled");
                }
            }
        }, error: function () {
        }
    })
}
function contains(c,cs) {
    if (c===cs){
        return true;
    }
    return false;
}
function over(obj) {
    var cla=obj.getAttribute("class");
    var name=obj.innerHTML;
    var cl = [];
    cl=obj.parentNode.getAttribute("class");
    var url;
    var ori;
    if (contains("original",cl)){
        url = "http://www.cspy.online:8080/test/hero/select_original_all";
        ori = {original: name};
    }
    if (contains("type",cl)){
        url = "http://www.cspy.online:8080/test/hero/select_type_all";
        ori = {type: name};
    }
    $.ajax({
        url: url,
        dataType: "json",
        contentType: "application/json",
        data: ori,
        success: function (response) {
            var data = response.maps.heros;
            var map = new Map();
            $(".tx").next().children().children().empty();
            for (i in data) {
                var key = data[i].heroImage;
                map[key] = data[i].heroName;
                var p,a,img,br;
                p = document.createElement("p");
                a = document.createElement("a");
                img = document.createElement("img");
                br = document.createElement("br");
                img.src = "img/"+data[i].heroImage+".jpg";
                img.alt = data[i].heroImage;
                img.width = 140;
                img.height = 173;
                a.href="detail.html?name="+data[i].heroName;
                a.append(img);
                a.append(br);
                a.append(data[i].heroName);
                p.append(a);
                $(".tx").next().children().children().append(p);
            }

        }, error: function () {
        }
    })
}
function cart(){
    if(user!=null){
        location.href="shopcart.html";
    }
    else {
        window.location.href="login.html";
    }
}