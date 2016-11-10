/**
 * Created by Administrator on 2016/11/10.
 */
//将心肺评估内容json转成html
function LabJsonFormatter(type, value) {
    var html = "<table class='table table-bordered'> <tr> <th></th> <th>峰值</th> <th>百分比</th> </tr>";
    try {
        if (value == undefined || value == undefined)
            return "";
        console.log("access.js is running......");
        var str = value.replace(/class="conTi"/g, 'class=conTi').replace(/\r\n/g, '\<br\>');
        console.log("str: \n" + str);
        var data = $.parseJSON(str);
        $.each(data, function (key, value) {
            if (data[key] == undefined || data[key] == null)
                data[key] = "";
        });
        switch (type) {
            case "运动心肺-踏车":
                html += "<tr><td>摄氧量/Peak VO2</td><td>" + isUndefined(data.HYL_MaxHYL) + "</td><td></td></tr>"
                    + "<tr><td>公斤摄氧量/Peak VO2/kg</td><td>" +isUndefined(data.HYL_MaxGJYH) + "</td><td></td></tr>"
                    + "<tr><td>功率/Peak watt</td><td>" + isUndefined(data.tc_MaxPower) + "</td><td></td></tr>"
                    + "<tr><td>代谢当量/Peak MET</td><td>" + isUndefined(data.tc_MaxLoad)+ "</td><td></td></tr>"
                    + "<tr><td>心率/Peak HR</td><td>" + isUndefined(data.tc_MaxRate) + "</td><td></td></tr>"
                    + "<tr><td>血压/Peak BP</td><td>" + isUndefined(data.sporting_MaxSys) + "</td><td></td></tr>"
                    + "<tr><td>峰值呼吸交换率/RER</td><td>" + isUndefined(data.HYL_HXJHL) + "</td><td></td></tr>"
                    + "<tr><td>ΔVO2/ΔWR</td><td>" + isUndefined(data.HYL_VOWR)+ "</td><td></td></tr>"
                    + "<tr><td>VE/VCO2斜率</td><td>" + isUndefined(data.HYL_XieLv) + "</td><td></td></tr>"
                    + "</table>" + "<h4><B>无氧阈</B></h4>"
                    + "<table class='table table-bordered'><tr><th>项目</th><th>无氧阈</th><th>百分比</th></tr>"
                    + "<tr><td>无氧阈时公斤摄氧量/ VO2/kg@AT</td><td>" + isUndefined(data.WYY_GJYH) + "</td><td></td></tr>"
                    + "<tr><td>功率/Watt @ AT</td><td>" + isUndefined(data.WYY_Power)+ "</td><td></td></tr>"
                    + "<tr><td>代谢当量/MET @ AT</td><td>" +isUndefined(data.WYY_YDFH) + "</td><td></td></tr>"
                    + "<tr><td>心率/HR @ AT</td><td>" +isUndefined(data.WYY_DYXL) + "</td><td></td></tr>"
                    + "<tr><td>呼吸交换率/RER @ AT</td><td>" + isUndefined(data.WYY_HXS) + "</td><td></td></tr>"
                    + "</table>" + "<h4><B>结论</B></h4>"
                    + "<table class='table table-bordered'><tr><td>" + isUndefined(data.Conclusion) + "</td></tr></table>";
                break;
        }

    }
    catch (e) {

        html = "数据转换错误\n" + e;
    }
    return html;
}
function isUndefined(data) {
    var value = "";
    if (data != undefined) {
         value=data;
    }
    else {
         value='';
    }
    return value;
}