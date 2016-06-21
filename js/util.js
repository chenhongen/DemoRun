/**
* add node like:<li><a href="javascript:;" class="a_title">2016-06-20_repeat()实现</a></li>
**/
function addLiItem(ulItem, name) {
	ulItem.append($('<li><a href="javascript:;" class="a_title">'+name+'</a></li>'));
}

/**
* format Code for save as json
* line breaks           :-N-
* double quotation marks:-Q-
**/
function formatCodeOut(code) {
	var saveStrN = "\n";
	var saveStrQ = "\"";
	alert(code.replace(new RegExp(saveStrN,'gm'),'-N-').replace(new RegExp(saveStrQ,'gm'),'-Q-'));
}

/**
* format Code for show on page
* line breaks           :-N-
* double quotation marks:-Q-
**/
function formatCodeIn(code) {
	var saveStrN = '-N-';
	var saveStrQ = '-Q-';
	return code.replace(new RegExp(saveStrN,'gm'),"\n").replace(new RegExp(saveStrQ,'gm'),"\"")
}


// 输出对象键值对
function po(obj){
	var temp = "";
	for(var i in obj){//用javascript的for/in循环遍历对象的属性
		temp += i+":"+obj[i]+"\n";
	}
	alert(temp);
}