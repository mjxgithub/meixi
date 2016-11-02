$(function(){
    var brand_a = ["北京", "河北","山西"];
    var brand_b = {
        "北京": ["北京"],
        "河北": ["石家庄市","唐山市","秦皇岛"],
		"山西": ["太原市","运城市","长治市"]
    };
    var brand_c = {
        "北京": ["东城区","西城区","昌平区"],
        "石家庄市": ["长安区", "桥东区","桥西区"],
        "唐山市": ["路南区", "路北区", "古冶区"],
        "秦皇岛": ["海港区", "昌黎县", "抚宁区"],
		"太原市": ["小店区", "迎泽区", "晋源区"],
		"运城市": ["盐湖区", "临猗县", "万荣县"],
		"长治市": ["长治县", "襄垣县", "屯留县"]
    };				
	$(function(){
        var a = $("#brand_a"),
                b = $("#brand_b"),
                c = $("#brand_c");
        a.append("<option value=''>请选择</option>");
        b.append("<option value=''>请选择</option>");
        c.append("<option value=''>请选择</option>");
        $(brand_a).each(function(i, dom){
            a.append("<option value='"+dom+"'>" + dom + "</option>");
        });
        a.change(function(){
            var me = $(this),str;
            if(str = me.val()){
                var arr = brand_b[str];
                b.html("").append("<option value=''>请选择</option>");
                c.html("").append("<option value=''>请选择</option>");
                $(arr).each(function(i, dom){
                    b.append("<option value='"+dom+"'>" + dom + "</option>");
                });
            }else{
                b.html("").append("<option value=''>请选择</option>");
                c.html("").append("<option value=''>请选择</option>");
            }
        });
        b.change(function(){
            var me = $(this),str;
            if(str = me.val()){
                var arr = brand_c[str];
                c.html("").append("<option value=''>请选择</option>");
                $(arr).each(function(i, dom){
                    c.append("<option value='"+dom+"'>" + dom + "</option>");
                });
            }else{
                c.html("").append("<option value=''>请选择</option>");
            }
        });
    });
})
