
    function out(i) {
        var v = i.validity;
        if (true === v.valueMissing) {
            i.setCustomValidity("该项不能为空");
        } else {
            if (true === v.patternMismatch) {
                i.setCustomValidity("手机号码格式不正确");
            } else {
                i.setCustomValidity("");
            }
        }
    }
    $(document).ready(function () {
        $("button").click(function () {
            var telephone = document.getElementById("telephone").value;
            var realname = document.getElementById("realname").value;
            if(telephone == ""  ){
                document.getElementById("telText").innerHTML = "手机号不能为空";
            }
            else{
                if(!(/^1(3|4|5|7|8)\d{9}$/.test(telephone))) {
                    document.getElementById("telText").innerHTML = "手机号码有误，请重填";
                }else{
                    if(realname == ""){
                        document.getElementById("telText").innerHTML = "姓名不能为空";
                    }else{
                        $.post("http://123.57.143.76:8010/api/qq/reg", {
                                realname: $("#realname").val(),
                                telephone: $("#telephone").val(),
                                openid: $("#openid").val(),
                                password: $("#password").val(),
                            },
                            function (data) {
                                var status = data.status;
                                if (status=="103"){
                                    alert("绑定成功");
                                }else {
                                    alert("绑定失败");
                                }
                            });
                    }
                }
            }

        });
    });
