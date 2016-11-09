//将实验室检查内容json转成html
function LabJsonFormatter(type, value) {
    var html = "<table class='table table-bordered'> <tr id='headline'> <th>项目名称</th> <th>结果</th> <th></th> </tr>";
    try {
        if (value == undefined || value == undefined)
            return "";
        var data = $.parseJSON(value);
        $.each(data, function (key, value) {
            if (data[key] == undefined || data[key] == null) 
                data[key] = "";
        });
        switch (type) {
            case "血常规":
                //html += "Hb:" + data.hb + "g/L " + labCcheck(type, "hb", data.hb)
                //    + ",RBC:" + data.rbc + "×10<sup>12</sup>/L " + labCcheck(type, "rbc", data.rbc)
                //    + ",WBC:" + data.wbc + "×10<sup>9</sup>/L " + labCcheck(type, "wbc", data.wbc)
                //    + ",L:" + data.l + "×10<sup>9</sup>/L " + labCcheck(type, "l", data.l)
                //    + ",N:" + data.n + "×10<sup>9</sup>/L " + labCcheck(type, "n", data.n)
                //    + ",PLT:" + data.plt + "×10<sup>9</sup>/L " + labCcheck(type, "plt", data.plt) +
                //    ",NEUT:" + data.NEUT + "% ";
                html+="<tr><td>Hb</td><td>"+data.hb +" g/L</td><td>"+labCcheck(type, 'hb', data.hb)+"</td></tr>"
                    +"<tr><td>RBC</td><td>"+data.rbc +" ×10<sup>12</sup>/L</td><td>"+labCcheck(type, 'rbc', data.rbc)+"</td></tr>"
                    +"<tr><td>WBC</td><td>"+data.wbc +"×10<sup>9</sup>/L </td><td>"+labCcheck(type, 'wbc', data.wbc)+"</td></tr>"
                    +"<tr><td>L</td><td>"+data.l +"×10<sup>9</sup>/L </td><td>"+labCcheck(type, 'l', data.l)+"</td></tr>"
                    +"<tr><td>N</td><td>"+data.n +"×10<sup>9</sup>/L </td><td>"+labCcheck(type, 'n', data.n)+"</td></tr>"
                    +"<tr><td>PLT</td><td>"+data.plt +"×10<sup>9</sup>/L </td><td>"+labCcheck(type, 'plt', data.plt)+"</td></tr>"
                    +"<tr><td>NEUT</td><td>"+data.NEUT +"% </td><td></td></tr>"
                    +"</table>";
                break;
            case "尿常规":
                //html += "Pro:" + data.pro
                //    + ",Glu:" + data.glu
                //    + ",镜检:" + data.jinjian
                //    + ",KET:" + data.KET+ "mmol/L";
                html+="<tr><td>Pro</td><td>"+data.pro +"</td><td></td></tr>"
                    +"<tr><td>Glu</td><td>"+data.glu +"</td><td></td></tr>"
                    +"<tr><td>镜检</td><td>"+data.jinjian +"</td><td></td></tr>"
                    +"<tr><td>KET</td><td>"+data.KET +"mmol/L</td><td></td></tr>"
                    +"</table>";

                break;
            case "血脂":
                // html += "TC:" + data.tc + "mmol/L " + labCcheck(type, "tc", data.tc) + ",TG:" + data.tg + "mmol/L " + labCcheck(type, "tg", data.tg) + ",LDL-C:" + data.ldlc + "mmol/L " + labCcheck(type, "ldlc", data.ldlc) + ",HDL-C:" + data.hdlc + "mmol/L " + labCcheck(type, "hdlc", data.hdlc) + ",LP-a:" + data.lpa + ",HDL/TC:" + data.hdltc + " " + labCcheck(type, "hdltc", data.hdltc);
                html+="<tr><td>TC</td><td>"+data.tc +" mmol/L</td><td>"+labCcheck(type, 'tc', data.tc)+"</td></tr>"
                     +"<tr><td>TG</td><td>"+data.tg +" mmol/L</td><td>"+labCcheck(type, 'tg', data.tg)+"</td></tr>"
                        +"<tr><td>LDL-C</td><td>"+data.ldlc +" mmol/L</td><td>"+labCcheck(type, 'ldlc', data.ldlc)+"</td></tr>"
                           +"<tr><td>HDL-C</td><td>"+data.hdlc +" mmol/L</td><td>"+labCcheck(type, 'hdlc', data.hdlc)+"</td></tr>"
                              +"<tr><td>LP-a</td><td>"+data.lpa +"</td><td></td></tr>"
                                 +"<tr><td>HDL/TC</td><td>"+data.hdltc +"</td><td>"+labCcheck(type, 'hdltc', data.hdltc)+"</td></tr>"
                                    +"</table>";
                break;
            case "血糖":
                html += "空腹:" + data.kongfu + "mmol/L " + labCcheck(type, "kongfu", data.kongfu) + ",餐后2h(OGTT):" + data.after2hogtt + "mmol/L " + labCcheck(type, "after2hogtt", data.after2hogtt);
                break;
            case "糖化血红蛋白":
                html += "HbA<sub>1c</sub>:" + data.hba1c + "% " + labCcheck(type, "hba1c", data.hba1c);
                break;
            case "乳酸":
                html += "空腹:" + data.kongfu + "mmol/L " + labCcheck(type, "kongfu", data.kongfu) + ",运动前:" + data.beforeSport + "mmol/L,运动后:" + data.afterSport + "mmol/L";
                break;
            case "胰岛素":
                html += " 空腹:" + data.kongfu + "μu/mL " + labCcheck(type, "kongfu", data.kongfu) + ",餐后2h:" + data.after2h + "μu/mL";
                break;
            case "肝功能":
                html += "总蛋白:" + data.totalProtein + "g/L " + labCcheck(type, "totalProtein", data.totalProtein) + ",白蛋白:" + data.whiteProtein + "g/L " + labCcheck(type, "whiteProtein", data.whiteProtein) + ",球蛋白:" + data.ballProtein + "g/L " + labCcheck(type, "ballProtein", data.ballProtein) + ",ALT:" + data.alt + "U/L " + labCcheck(type, "alt", data.alt) + ",AST:" + data.ast + "U/L " + labCcheck(type, "ast", data.ast) + ",TBIL:" + data.tbll + "umol/L " + labCcheck(type, "tbll", data.tbll) + ",DBIL:" + data.dbll + "umol/L " + labCcheck(type, "dbll", data.dbll);
                break;
            case "肾功能":
                html += "尿素:" + data.niaosu + "mmol/L " + labCcheck(type, "niaosu", data.niaosu) + ",尿酸:" + data.niaosuan + "umol/L " + labCcheck(type, "niaosuan", data.niaosuan) + ",肌酐:" + data.jigan + "umol/L " + labCcheck(type, "jigan", data.jigan);
                break;
            case "甲功三项":
                html += "FT3:" + data.ft3 + "pmol/L " + labCcheck(type, "ft3", data.ft3) + ",FT4:" + data.ft4 + "pmol/L " + labCcheck(type, "ft4", data.ft4) + ",TSH:" + data.tsh + "mIU/L " + labCcheck(type, "tsh", data.tsh);
                break;
            case "心电图":
                html += data.summary;
                break;
            case "胸片":
                html += '心脏:' + data.heart + ',肺野:' + data.lungField;
                break;
            case "心脏彩超":
                html += 'LA:' + data.LA + ' ' + labCcheck(type, "LA", data.LA) + ',LV:' + data.LV + ' ' + labCcheck(type, "LV", data.LV) + ',RA:' + data.RA + ' ' + labCcheck(type, "RA", data.RA) + ',RV:' + data.RV + ' ' + labCcheck(type, "RV", data.RV) + ',EF:' + data.EF + '% ' + labCcheck(type, "EF", data.EF) + ',E/A:' + data.EBA + ',PH:' + data.PH + 'mmHg,LVIDd:' + data.LVIDd + 'mm,IVSd:' + data.IVSd + 'mm,室壁运动:' + data.unknowA + 'mm,室壁瘤形成:' + data.unknowB + 'mm,二尖瓣狭窄:' + data.unknowC + ' ' + labCcheck(type, "unknowC", data.unknowC) + ',主动脉瓣狭窄:' + data.unknowD + ' ' + labCcheck(type, "unknowD", data.unknowD) + ',肺动脉高压:' + data.unknowE + ' ' + labCcheck(type, "unknowE", data.unknowE) + ',其它:' + data.summary;
                break;
            case "Holter":
                html += data.summary;
                break;
            case "其它":
                html += data.description;
                break;
            case "大便常规加隐血":
                html += '单克隆隐血试验:' + data.OCOABT;
                break;
            case "电解质":
                html += 'K:' + data.K + 'mmol/L ' + labCcheck(type, "K", data.K) + ',Na:' + data.Na + 'mmol/L ' + labCcheck(type, "Na", data.Na) + ',Cl:' + data.Cl + 'mmol/L ' + labCcheck(type, "Cl", data.Cl) + ',CO<sub>2</sub>:' + data.CO2 + 'mmol/L ' + labCcheck(type, "CO2", data.CO2) + ',Ca:' + data.Ca + 'mmol/L ' + labCcheck(type, "Ca", data.Ca) + ',P:' + data.P + 'mmol/L ' + labCcheck(type, "P", data.P) + ',Mg:' + data.Mg + 'mmol/L ' + labCcheck(type, "Mg", data.Mg);
                break;
            case "运动血糖检测":
                html += '运动前血糖:' + data.befourblood + 'mmol/L,运动后血糖:' + data.afterblood+ 'mmol/L';
                break;
            case "心肌酶":
                html += 'LDH:' + data.LDH + 'U/L ' + labCcheck(type, "LDH", data.LDH) + ',CK:' + data.CK + 'U/L ' + labCcheck(type, "CK", data.CK) + ',CK-MB:' + data.CKMB + 'U/L ' + labCcheck(type, "CKMB", data.CKMB) + ',Mb:' + data.Mb + 'ug/L ' + labCcheck(type, "Mb", data.Mb);
                break;
            case "肌钙蛋白":
                html += 'TnI:' + data.TnI + 'ng/ml ' + labCcheck(type, "TnI", data.TnI);
                break;
            case "C肽":
                html += 'CRT0\':' + data.CRT0 + 'ng/ml ' + labCcheck(type, "CRT0", data.CRT0) + ',CRT120\':' + data.CRT120 + 'ng/ml';
                break;
            case "CT":
                html += getCT(data);
                break;
            case "血气分析":
                html += 'PH值:' + data.ph + ' SaO2:' + data.SaO2 + '% ' + 'PO2:' + data.PO2 + 'mmHg ' + 'Hb:' + data.Hb + 'g/L ' + 'PCO2:' + data.PCO2 + 'mmHg ';
                break;
            case "冠脉造影":
                html += getSummary(data);
                break;
        }

    }
    catch (e) {

        html = "数据转换错误\n"+e;
    }
    return html;
}
function getCT(ct) {
    console.log(ct);
    str = "瓣环:" + ct.banh + " 弓部:" + ct.gongb + " 窦部:" + ct.dub + " 降主:" + ct.jiangz + " 升主:" + ct.shenz;

    if (ct.neil == "True") {
        str = str + "内漏:是 ";
    }
    else {
        str = str + "内漏:否 ";
    }
    if (ct.yuandpk == "True") {
        str = str + "远端破口:是 ";
    }
    else {
        str = str + "远端破口:否 ";
    }
    if (ct.jindpk == "True") {
        str = str + "近端破口:是 ";
    }
    else {
        str = str + "近端破口:否";
    }
    return str;
}
function getSummary(cag)
{
    var summary = "";
    if (cag.checktime_type != undefined && cag.checktime_type != '')
        summary += cag.checktime_type + ",";
    if (cag.LM1!=undefined&&cag.LM1!='')
        summary += "LM: " + cag.LM1 + "%,";
    if (cag.LM2!=undefined&&cag.LM2!='')
        summary += "LM远端: " + cag.LM2 + "%,";
    if (cag.LAD1!=undefined&&cag.LAD1!='')
        summary += "LAD1: " + cag.LAD1 + "%,";
    if (cag.LAD2!=undefined&&cag.LAD2!='')
        summary += "LAD2: " + cag.LAD2 + "%,";
    if (cag.LAD3!=undefined&&cag.LAD3!='')
        summary += "LAD3: " + cag.LAD3 + "%,";
    if (cag.D1!=undefined&&cag.D1!='')
        summary += "D1: " + cag.D1 + "%,";
    if (cag.D2!=undefined&&cag.D2!='')
        summary += "D2: " + cag.D2 + "%,";
    if (cag.LCX1!=undefined&&cag.LCX1!='')
        summary += "LCX1: " + cag.LCX1 + "%,";
    if (cag.LCX2!=undefined&&cag.LCX2!='')
        summary += "LCX2: " + cag.LCX2 + "%,";
    if (cag.LCX3!=undefined&&cag.LCX3!='')
        summary += "LCX3: " + cag.LCX3 + "%,";
    if (cag.RCA1!=undefined&&cag.RCA1!='')
        summary += "RCA1: " + cag.RCA1 + "%,";
    if (cag.RCA2!=undefined&&cag.RCA2!='')
        summary += "RCA2: " + cag.RCA2 + "%,";
    if (cag.RCA3!=undefined&&cag.RCA3!='')
        summary += "RCA3: " + cag.RCA3 + "%,";
    if (cag.PD!=undefined&&cag.PD!='')
        summary += "PD: " + cag.PD + "%,";
    if (cag.PL!=undefined&&cag.PL!='')
        summary += "PL: " + cag.PL + "%,";
    if (cag.TIMI!=undefined&&cag.TIMI!='')
        summary += "介入治疗后TIMI分级: " + cag.TIMI ;
    return summary;
}

function LabjsonFormatterps(type, value) {
    var html = "";
    try {
        if (value == undefined || value == undefined)
            return "";
        var data = $.parseJSON(value);
        switch (type) {
            case "血常规":
                if (labCcheck(type, "hb", data.hb) != '' && labCcheck(type, "hb", data.hb) != '正常')
                {
                    html += "Hb:" + data.hb + "g/L " + labCcheck(type, "hb", data.hb);
                }
                if (labCcheck(type, "rbc", data.rbc) != '' && labCcheck(type, "rbc", data.rbc) != '正常') {
                    html += " RBC:" + data.rbc + "×10<sup>12</sup>/L " + labCcheck(type, "rbc", data.rbc)
                }

                if (labCcheck(type, "wbc", data.wbc) != '' && labCcheck(type, "wbc", data.wbc) != '正常') {
                    html += " WBC:" + data.wbc + "×10<sup>9</sup>/L " + labCcheck(type, "wbc", data.wbc)
                }
                if (labCcheck(type, "l", data.l) != '' && labCcheck(type, "l", data.l) != '正常') {
                    html += " L:" + data.l + "×10<sup>9</sup>/L " + labCcheck(type, "l", data.l)
                }
                if (labCcheck(type, "n", data.n) != '' && labCcheck(type, "n", data.n) != '正常') {
                    html += " N:" + data.n + "×10<sup>9</sup>/L " + labCcheck(type, "n", data.n)
                }
                if (labCcheck(type, "plt", data.plt) != '' && labCcheck(type, "plt", data.plt) != '正常') {
                    html += " PLT:" + data.plt + "×10<sup>9</sup>/L " + labCcheck(type, "plt", data.plt)
                }
                break;
            case "血脂":

                if (labCcheck(type, "tc", data.tc) != '' && labCcheck(type, "tc", data.tc) != '正常') {
                    html += "TC:" + data.tc + "mmol/L " + labCcheck(type, "tc", data.tc)
                }
                if (labCcheck(type, "tg", data.tg) != '' && labCcheck(type, "tg", data.tg) != '正常') {
                    html += " TG:" + data.tg + "mmol/L " + labCcheck(type, "tg", data.tg)
                }
                if (labCcheck(type, "ldlc", data.ldlc) != '' && labCcheck(type, "ldlc", data.ldlc) != '正常') {
                    html += " LDL-C:" + data.ldlc + "mmol/L " + labCcheck(type, "ldlc", data.ldlc)
                }
                if (labCcheck(type, "hdlc", data.hdlc) != '' && labCcheck(type, "hdlc", data.hdlc) != '正常') {
                    html +=  " HDL-C:" + data.hdlc + "mmol/L " + labCcheck(type, "hdlc", data.hdlc)
                }
                break;
            case "血糖":
                if (labCcheck(type, "kongfu", data.kongfu) != '' && labCcheck(type, "kongfu", data.kongfu) != '正常') {
                    html += "空腹:" + data.kongfu + "mmol/L " + labCcheck(type, "kongfu", data.kongfu)
                }
                if (labCcheck(type, "after2hogtt", data.after2hogtt) != '' && labCcheck(type, "after2hogtt", data.after2hogtt) != '正常') {
                    html +=" 餐后2h(OGTT):" + data.after2hogtt + "mmol/L " + labCcheck(type, "after2hogtt", data.after2hogtt)
                }
                break;
            case "糖化血红蛋白":
                if (labCcheck(type, "hba1c", data.hba1c) != '' && labCcheck(type, "hba1c", data.hba1c) != '正常') {
                    html += "HbA<sub>1c</sub>:" + data.hba1c + "% " + labCcheck(type, "hba1c", data.hba1c);
                }
                break;
            case "乳酸":
                if (labCcheck(type, "kongfu", data.kongfu) != '' && labCcheck(type, "kongfu", data.kongfu) != '正常') {
                    html += "空腹:" + data.kongfu + "mmol/L " + labCcheck(type, "kongfu", data.kongfu)
                }
                break;
            case "胰岛素":
                if (labCcheck(type, "kongfu", data.kongfu) != '' && labCcheck(type, "kongfu", data.kongfu) != '正常') {
                    html += "空腹:" + data.kongfu + "μu/mL " + labCcheck(type, "kongfu", data.kongfu)
                }
                break;
            case "肝功能":
                if (labCcheck(type, "totalProtein", data.totalProtein) != '' && labCcheck(type, "totalProtein", data.totalProtein) != '正常') {
                    html += "总蛋白:" + data.totalProtein + "g/L " + labCcheck(type, "totalProtein", data.totalProtein)
                }
                if (labCcheck(type, "whiteProtein", data.whiteProtein) != '' && labCcheck(type, "whiteProtein", data.whiteProtein) != '正常') {
                    html += " 白蛋白:" + data.whiteProtein + "g/L " + labCcheck(type, "whiteProtein", data.whiteProtein)
                }
                if (labCcheck(type, "ballProtein", data.ballProtein) != '' && labCcheck(type, "ballProtein", data.ballProtein) != '正常') {
                    html += " 球蛋白:" + data.ballProtein + "g/L " + labCcheck(type, "ballProtein", data.ballProtein)
                }
                if (labCcheck(type, "alt", data.alt) != '' && labCcheck(type, "alt", data.alt) != '正常') {
                    html += " ALT:" + data.alt + "U/L " + labCcheck(type, "alt", data.alt)
                }
                if (labCcheck(type, "ast", data.ast) != '' && labCcheck(type, "ast", data.ast) != '正常') {
                    html += " AST:" + data.ast + "U/L " + labCcheck(type, "ast", data.ast)
                }
                if (labCcheck(type, "tbll", data.tbll) != '' && labCcheck(type, "tbll", data.tbll) != '正常') {
                    html += " TBIL:" + data.tbll + "umol/L " + labCcheck(type, "tbll", data.tbll)
                }
                if (labCcheck(type, "dbll", data.dbll) != '' && labCcheck(type, "dbll", data.dbll) != '正常') {
                    html += " DBIL:" + data.dbll + "umol/L " + labCcheck(type, "dbll", data.dbll)
                }
                break;
            case "肾功能":
                if (labCcheck(type, "niaosu", data.niaosu) != '' && labCcheck(type, "niaosu", data.niaosu) != '正常') {
                    html += "尿素:" + data.niaosu + "mmol/L " + labCcheck(type, "niaosu", data.niaosu)
                }
                if (labCcheck(type, "niaosuan", data.niaosuan) != '' && labCcheck(type, "niaosuan", data.niaosuan) != '正常') {
                    html += " 尿酸:" + data.niaosuan + "umol/L " + labCcheck(type, "niaosuan", data.niaosuan)
                }
                if (labCcheck(type, "jigan", data.jigan) != '' && labCcheck(type, "jigan", data.jigan) != '正常') {
                    html += " 肌酐:" + data.jigan + "umol/L " + labCcheck(type, "jigan", data.jigan)
                }

                break;
            case "甲功三项":
                if (labCcheck(type, "ft3", data.ft3) != '' && labCcheck(type, "ft3", data.ft3) != '正常') {
                    html += "FT3:" + data.ft3 + "pmol/L " + labCcheck(type, "ft3", data.ft3)
                }
                if (labCcheck(type, "ft4", data.ft4) != '' && labCcheck(type, "ft4", data.ft4) != '正常') {
                    html += " FT4:" + data.ft4 + "pmol/L " + labCcheck(type, "ft4", data.ft4)
                }

                if (labCcheck(type, "tsh", data.tsh) != '' && labCcheck(type, "tsh", data.tsh) != '正常') {
                    html += " TSH:" + data.tsh + "mIU/L " + labCcheck(type, "tsh", data.tsh)
                }
                break;
            case "心脏彩超":
                if (labCcheck(type, "LA", data.LA) != '' && labCcheck(type, "LA", data.LA) != '正常') {
                    html += 'LA:' + data.LA + ' ' + labCcheck(type, "LA", data.LA)
                }

                if (labCcheck(type, "LV", data.LV) != '' && labCcheck(type, "LV", data.LV) != '正常') {
                    html += ' LV:' + data.LV + ' ' + labCcheck(type, "LV", data.LV)
                }

                if (labCcheck(type, "RA", data.RA) != '' && labCcheck(type, "RA", data.RA) != '正常') {
                    html += ' RA:' + data.RA + ' ' + labCcheck(type, "RA", data.RA)
                }

                if (labCcheck(type, "RV", data.RV) != '' && labCcheck(type, "RV", data.RV) != '正常') {
                    html += ' RV:' + data.RV + ' ' + labCcheck(type, "RV", data.RV)
                }

                if (labCcheck(type, "EF", data.EF) != '' && labCcheck(type, "EF", data.EF) != '正常') {
                    html += ' EF:' + data.EF + '% ' + labCcheck(type, "EF", data.EF)
                }
                if (labCcheck(type, "unknowC", data.unknowC) != '' && labCcheck(type, "unknowC", data.unknowC) != '正常') {
                    html += ' 二尖瓣狭窄:' + data.unknowC + ' ' + labCcheck(type, "unknowC", data.unknowC)
                }
                if (labCcheck(type, "unknowD", data.unknowD) != '' && labCcheck(type, "unknowD", data.unknowD) != '正常') {
                    html += ' 主动脉瓣狭窄:' + data.unknowD + ' ' + labCcheck(type, "unknowD", data.unknowD)
                }
                if (labCcheck(type, "unknowE", data.unknowE) != '' && labCcheck(type, "unknowE", data.unknowE) != '正常') {
                    html += ' 肺动脉高压:' + data.unknowE + ' ' + labCcheck(type, "unknowE", data.unknowE)
                }
                break;
            case "电解质":
                if (labCcheck(type, "K", data.K) != '' && labCcheck(type, "K", data.K) != '正常') {
                    html += 'K:' + data.K + 'mmol/L ' + labCcheck(type, "K", data.K)
                }
                if (labCcheck(type, "Na", data.Na) != '' && labCcheck(type, "Na", data.Na) != '正常') {
                    html += ' Na:' + data.Na + 'mmol/L ' + labCcheck(type, "Na", data.Na)
                }
                if (labCcheck(type, "Cl", data.Cl) != '' && labCcheck(type, "Cl", data.Cl) != '正常') {
                    html += ' Cl:' + data.Cl + 'mmol/L ' + labCcheck(type, "Cl", data.Cl)
                }
                if (labCcheck(type, "CO2", data.CO2) != '' && labCcheck(type, "CO2", data.CO2) != '正常') {
                    html += ' CO<sub>2</sub>:' + data.CO2 + 'mmol/L ' + labCcheck(type, "CO2", data.CO2)
                }
                if (labCcheck(type, "Ca", data.Ca) != '' && labCcheck(type, "Ca", data.Ca) != '正常') {
                    html += ' Ca:' + data.Ca + 'mmol/L ' + labCcheck(type, "Ca", data.Ca)
                }
                if (labCcheck(type, "P", data.P) != '' && labCcheck(type, "P", data.P) != '正常') {
                    html += ' P:' + data.P + 'mmol/L ' + labCcheck(type, "P", data.P)
                }
                if (labCcheck(type, "Mg", data.Mg) != '' && labCcheck(type, "Mg", data.Mg) != '正常') {
                    html += ' Mg:' + data.Mg + 'mmol/L ' + labCcheck(type, "Mg", data.Mg)
                }
                break;
            case "心肌酶":
                if (labCcheck(type, "LDH", data.LDH) != '' && labCcheck(type, "LDH", data.LDH) != '正常') {
                    html += 'LDH:' + data.LDH + 'U/L ' + labCcheck(type, "LDH", data.LDH)
                }
                if (labCcheck(type, "CK", data.CK) != '' && labCcheck(type, "CK", data.CK) != '正常') {
                    html += ' CK:' + data.CK + 'U/L ' + labCcheck(type, "CK", data.CK)
                }
                if (labCcheck(type, "CKMB", data.CKMB) != '' && labCcheck(type, "CKMB", data.CKMB) != '正常') {
                    html += ' CK-MB:' + data.CKMB + 'U/L ' + labCcheck(type, "CKMB", data.CKMB)
                }
                if (labCcheck(type, "Mb", data.Mb) != '' && labCcheck(type, "Mb", data.Mb) != '正常') {
                    html += ' Mb:' + data.Mb + 'ug/L ' + labCcheck(type, "Mb", data.Mb)
                }
                break;
            case "肌钙蛋白":
                if (labCcheck(type, "TnI", data.TnI) != '' && labCcheck(type, "TnI", data.TnI) != '正常') {
                    html += 'TnI:' + data.TnI + 'ng/ml ' + labCcheck(type, "TnI", data.TnI)
                }
                break;
            case "C肽":
                if (labCcheck(type, "CRT0", data.CRT0) != '' && labCcheck(type, "CRT0", data.CRT0) != '正常') {
                    html += 'CRT0\':' + data.CRT0 + 'ng/ml ' + labCcheck(type, "CRT0", data.CRT0)
                }
                break;
        }

    }
    catch (e) {
        console.log(e);
        html = "数据有异常";
    }
    return html;


}