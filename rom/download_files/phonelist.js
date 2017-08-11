	var positionX = ["1px", "-140px", "-281px", "-422px", "-563px", "-704px", "-845px", "-986px", "-1127px", "-1268px", "-1409px", "-1676px", "-1550px"];
	var positionY = [" -2px", " -84px", " -166px"];
	var sortOrders ={ "name": [ ["Hiten Beta","Beta 测试版","Beta 公测版","2","1","0"],["热门 TOP10","热门 TOP 11-20","更多机型"],["一周内有更新","两周内有更新","一个月内有更新","一个月前有更新"]],
	"standard":[["BETA","TEST","GC","2","1","0"],[10,20],[1,2,4]]
	};
	var categorys = [" ","小米","一加","360","魅族","三星","其他"];
	function liHover() {
		var index = jQuery("categorys p").index(jQuery(this));
	}
	jQuery(function(){
		var lis = jQuery(".categorys li");
        for (var i = 1; i < lis.length; i++) {
                lis.eq(i).css("backgroundPosition", positionX[i] + " " + positionY[0]);
        }

        rebuild2(phoneSort(phones , "all" , "0"));
        searchSuggest("#search_txt" , "api.php?mod=autocomplete");

        jQuery(".categorys p").hover(
                function()
                {
                        var index = jQuery(".categorys p").index(jQuery(this));
                        jQuery(this).parent().css("backgroundPosition" , positionX[index] + positionY[2]);
                },
                function()
                {
                        var index = jQuery(".categorys p").index(jQuery(this));
                        if( jQuery(this).attr("class") != "phover" )
                        {
                                jQuery(this).parent().css("backgroundPosition" , positionX[index] + positionY[0]);
                        }
                        else
                        {
                                jQuery(this).parent().css("backgroundPosition" , positionX[index] + positionY[1]);
                        }
                }
        )

        jQuery(".categorys p").click(function()
        {
                var index = jQuery(".categorys p").index(jQuery(this));
                var pIndex = jQuery(".categorys p").index(jQuery(".phover"));
                if( index != pIndex ){
                jQuery(this).parent().css("backgroundPosition" , positionX[index] + positionY[1]);
                jQuery(".phover").parent().css("backgroundPosition" , positionX[pIndex] + positionY[0]);
                jQuery(".categorys p").removeClass("phover");
                jQuery(this).addClass("phover");
                var category = jQuery(this).attr("name");
                var sortOrder = jQuery(".ahover").attr("name");
                var phonesList = phoneSort(phones, category, sortOrder);
                if( category == "all" && sortOrder == "0" )
                {
                	rebuild(phonesList);
                }
                else{
                rebuild2(phonesList);
                }
                }
        })

        jQuery(".sortOrder a").click(function(event)
        {
                event.preventDefault();
                jQuery(".sortOrder a").removeClass("ahover");
                jQuery(this).addClass("ahover");
                var category = jQuery(".phover").attr("name");
                if( jQuery(".phover").length == 0 ){ category = "all"; }
                var sortOrder = jQuery(this).attr("name");
                var phonesList = phoneSort(phones, category, sortOrder);
                if( category == "all" && sortOrder == "0" )
                {
                	rebuild(phonesList);
                }
                else{
                rebuild2(phonesList);
                }
        })


});

var sorts = ["Hiten Beta","Beta 测试版","Beta 公测版", "V5", "V4", "V2.3"];
function phoneSort(phones, categorys, sortOrder) {
        var arr = new Array();
        if (categorys == "all") {
                arr = phones;
        } else {
                for (var i = 0; i < phones.length; i++) {
                        if (phones[i].type == categorys) {
                                arr.push(phones[i]);
                        }
                };
        };
        switch(sortOrder) {
                case "0":
                        if(categorys == "all") {arr = initAllSort(arr);}else{ arr = initSort(arr); };
                        break;
                case "1":
                        arr = versionSort(arr);
                        break;
                case "2":
                        arr = hotBubbleSort(arr);
                        break;
                case "3":
                        arr = updateBubbleSort(arr);
                        break;
        };
        return arr;
}

function initAllSort(arr){
        var arr0 = new Array();
        for (var i = 0; i < arr.length; i++) {
                if( arr0[categorys[arr[i].type]] )
                {
                        arr0[categorys[arr[i].type]].push(arr[i]);
                }
                else
                {
                        arr0[categorys[arr[i].type]] = [];
                        arr0[categorys[arr[i].type]].push(arr[i]);
                }
        };
        return arr0;
}

function initSort(arr)
{
        return versionSort(arr);
}

function hotBubbleSort(arr) {
        var array = new Array() , arr0 = new Array() ,arr1 = new Array(),arr2 = new Array();
        for (var i = 0; i < arr.length; i++) {
                for (var j = arr.length -1 ; j > i; j--) {
                        if (parseInt(arr[j-1].hot) <= parseInt(arr[j].hot)) {
                                var temp = arr[j];
                                arr[j] = arr[j-1];
                                arr[j-1] = temp;
                        }
                };
        };
         for( var i = 0; i < arr.length; i++ )
{
                if( i < sortOrders.standard[1][0] )
                {
                        arr0.push(arr[i]);
                }
                else if( i < sortOrders.standard[1][1] )
                {
                        arr1.push(arr[i]);
                }
                else
                {
                        arr2.push(arr[i]);
                }
        }
        array[sortOrders.name[1][0]] = arr0;
        array[sortOrders.name[1][1]] = arr1;
        array[sortOrders.name[1][2]] = arr2;
        return array;
}

function updateBubbleSort(arr) {
        var array = new Array() , arr0 = new Array() ,arr1 = new Array(),arr2 = new Array(),arr3 = new Array();
        for (var i = 0; i < arr.length; i++) {
                for (var j = i; j < arr.length - 1; j++) {
                        if (parseInt(arr[j].update) > parseInt(arr[j + 1].update)) {
                                var temp = arr[j];
                                arr[j] = arr[j + 1];
                                arr[j + 1] = temp;
                        }
                };
        };
        for( var i = 0; i < arr.length; i++ )
        {
                if( arr[i].update <= sortOrders.standard[2][0] )
                {
                        arr0.push(arr[i]);
                }
                else if( arr[i].update <= sortOrders.standard[2][1] )
                {
                        arr1.push(arr[i]);
                }
                else if( arr[i].update <= sortOrders.standard[2][2] )
                {
                        arr2.push(arr[i]);
                }
                else
                {
                        arr3.push(arr[i]);
                }
        }
        array[sortOrders.name[2][0]] = arr0;
        array[sortOrders.name[2][1]] = arr1;
        array[sortOrders.name[2][2]] = arr2;
        array[sortOrders.name[2][3]] = arr3;
        return array;
}

function versionSort(arr) {
        var arr0 = new Array(), arr1 = new Array(), arr2 = new Array(), arr3 = new Array(), arr4 = new Array(), arr5 = new Array();
        for (var i = 0; i < arr.length; i++) {
                if (arr[i].version == sortOrders.standard[0][0]) {
                        arr0.push(arr[i]);
                } else if (arr[i].version == sortOrders.standard[0][1]) {
                        arr1.push(arr[i]);
                } else if (arr[i].version == sortOrders.standard[0][2]) {
                        arr2.push(arr[i]);
                } else if (arr[i].version == sortOrders.standard[0][3]) {
                        arr3.push(arr[i]);
                } else if (arr[i].version == sortOrders.standard[0][4]) {
                        arr4.push(arr[i]);
                } else if (arr[i].version == sortOrders.standard[0][5]) {
                        arr5.push(arr[i]);
                }
        };
        var array = new Array();
        array["Hiten Beta"] = arr0;
        array["Beta 测试版"] = arr1;
        array["Beta 公测版"] = arr2;
        array["V5"] = arr3;
        array["V4"] = arr4;
        array["V2.3"] = arr5;
        return array;
}
function rebuild(arr) {
        var str = new Array() , strAll = "" , j = 0;
        for( var n = 1 ; n < categorys.length; n++ ){
                if( arr[categorys[n]].length != 0 ){
                str[0] = '<div class="category">';
                str[1] = '<h4 class="cg_name"><span class="cg_name_' + j + '">' + categorys[n] + '</span></h4>';
                j++;
                if( j == 3 ){ j = 0;}
                str[2] = '<ul class="cg_lists">';
                str[3] = '';
                var cg_lists = arr[categorys[n]];
                for( var i = 0 ; i < cg_lists.length ; i++ ) {
	str[3] += '<li><a href="' + BASEURL + cg_lists[i].pid + '.html"><div class="phone" style="background:url(' + cg_lists[i].pic+ ') 0 0 no-repeat"></div><p class="cg_lists_p">' + cg_lists[i].name + '</p></a></li>'
                }
                str[4] = '<div style="clear: both;"></div></ul></div>';
                strAll += str.join('');
                }
        }
        jQuery(".phone_lists").html(strAll);
}
function rebuild2(arr) {
        var str = new Array() , strAll = "" , j = 0;
        for( var key in arr ){
                if( arr[key].length != 0 ){
                str[0] = '<div class="category">';
                str[1] = '<h4 class="cg_name"><span class="cg_name_' + j + '">' + key + '</span></h4>';
                j++;
                if( j == 3 ){ j = 0;}
                str[2] = '<ul class="cg_lists">';
                str[3] = '';
                var cg_lists = arr[key];
                for( var i = 0 ; i < cg_lists.length ; i++ ) {
	str[3] += '<li><a href="' + BASEURL + cg_lists[i].pid + '.html"><div class="phone" style="background:url(' + cg_lists[i].pic+ ') 0 0 no-repeat"></div><p class="cg_lists_p">' + cg_lists[i].name + '</p></a></li>'
                }
                str[4] = '<div style="clear: both;"></div></ul></div>';
                strAll += str.join('');
                }
        }
        jQuery(".phone_lists").html(strAll);
}



function searchSuggest(id,suggestAjaxUrl) {
        var keyInput = jQuery(id) ,  keywords , sv_len , num = 0 , flag = false , suggestValues = [] ;
        keyInput.keydown(function(e){
                if(e.keyCode == 38){
                         if(flag){ keywordsChange(-1);};
                         return false;
                };
        });
        keyInput.keyup(function(e){
                if(e.keyCode == 38 ){
                        return false;
                        if(flag){ keywordsChange(-1);};
                }
                else if(e.keyCode == 40 ){
                        if(flag){ keywordsChange(1);}
                }
                else if(e.keyCode == 13)
                {
                	if(jQuery(".suggestions").css("display") != "none" && jQuery(".li_hover").length )
                	{
                		jQuery(".li_hover").click();
                	}
                }
                else{
                        if( (keywords != keyInput.prop("value")) ){
                        		keywords =keyInput.prop("value");
                                if( keyInput.prop("value").length >= 2 ){
                                ajax(keyInput.prop("value"));
                                }
                                else
                                {
                                	jQuery(".suggestions").hide();
                                }
                        };
                };
        });
        var ajax = function(text){
                num = 0;
                flag = true;
                var str = [];
                suggestValues = [];
                suggestValues.push(text);
                jQuery.ajax({
                        type: 'post',
                      dataType: 'json',
                        url: suggestAjaxUrl,
                        data: { keywords : text },
                        success: function (suggestValues1) {
                                var sgTemp = suggestValues1['V5'] , borderFlag = 0;
                                if( sgTemp && sgTemp.length){
                                        str.push('<div class="suggest suggest0">') ;
					if( borderFlag == 0 ){
                                                str.push('<ul class="sg_ul" style="border-top: none;">')
                                        }
                                        else
                                        {
                                                str.push('<ul class="sg_ul">')
                                        }
                                        for(var i = 0; i < sgTemp.length ; i++){
		str.push("<a href='" + BASEURL + sgTemp[i].pID + ".html' ><li>");
                                                str.push(replaceStr(sgTemp[i].name , text));
                                                str.push("</li></a>");
                                                suggestValues.push(sgTemp[i].name);
                                        };
                                        str.push("</ul></div>");
                                        borderFlag++;
                                }
                                sgTemp = suggestValues1['V4'];
                                if( sgTemp && sgTemp.length){
                                        str.push('<div class="suggest suggest1"><ul class="sg_ul"') ;
                                        if( borderFlag == 0 ){
                                                str.push('<ul class="sg_ul" style="border-top: none;">')
                                        }
                                        else
                                        {
                                                str.push('<ul class="sg_ul">')
                                        }
                                        for(var i = 0; i < sgTemp.length ; i++){
		str.push("<a href='" + BASEURL + sgTemp[i].pID + ".html' ><li>");		
                                                str.push(replaceStr(sgTemp[i].name , text));
                                                str.push("</li></a>");
                                                suggestValues.push(sgTemp[i].name);
                                        };
                                        str.push("</ul></div>");
                                        borderFlag++;
                                }
                                sgTemp = suggestValues1['V2.3'];
                                if( sgTemp && sgTemp.length){
                                        str.push('<div class="suggest suggest2">') ;
                                        if( borderFlag == 0 ){
                                                str.push('<ul class="sg_ul" style="border-top: none;">')
                                        }
                                        else
                                        {
                                                str.push('<ul class="sg_ul">')
                                        }
                                        for(var i = 0; i < sgTemp.length ; i++){
		str.push("<a href='" + BASEURL + sgTemp[i].pID + ".html' ><li>");
                                                str.push(replaceStr(sgTemp[i].name , text));
                                                str.push("</li></a>");
                                                suggestValues.push(sgTemp[i].name);
                                        };
                                        str.push("</ul></div>");
                                };

                                jQuery(".suggestions").html(str.join("")).show();
                                jQuery("body").on("click",bodyClick);
                        }
                });
        };
var keywordsChange = function(key){
                                jQuery(".suggestions li").eq(num-1).removeClass("li_hover");
                                sv_len = suggestValues.length;
                                num = num + parseInt(key);
                                if( num == -1 ){
                                        num = num  + sv_len ;
                                }
                                else if( num == sv_len  ){
                                        num = 0;
                                };
                                keyInput.prop("value",suggestValues[num]);
                                if( num != 0){
                                jQuery(".suggestions li").eq(num-1).addClass("li_hover");
                                }
        };
        var trHover = function(){
                jQuery(".suggestions li").removeClass("li_hover");
                jQuery(this).addClass("li_hover");
                num = jQuery(".suggestions li").index(jQuery(this)) + 1;
        };
        var suggestionHide = function(e){
                jQuery(".suggestions").hide();
                flag = false;
        };
        var bodyClick = function(event){
                var eve = event.target || event.srcElement;
                var elem = jQuery(eve);
                if(elem.parents(".search").length ){
                        event.stopPropagation();
                }else{
                        suggestionHide();
                };
                jQuery("body").off("click",bodyClick);
        };
        jQuery(".suggestions").delegate("li" , "mouseover" , trHover);
        jQuery(".search_txt").on("focus" , stFocus)
        function stFocus(){
                jQuery(this).addClass("st_focus");
                jQuery(this).prop("value" , "");
                jQuery(".search_txt").off("focus" , stFocus)
        }

        function replaceStr(str , words){
  			var str1 = '/(' + words + ')/gi';
   			str1 = new RegExp(words , "i");
   			var str2 = str1.exec(str);
     		str = str.replace(str1 , "<span class='red_span'>" + str2[0] + "</span>");
            return str;
        }

	}
	jQuery.noConflict();