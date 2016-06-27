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

// dropmenu for select
function customDropDown(ele){
	this.dropdown=ele;
	this.placeholder=this.dropdown.find(".placeholder");
	this.options=this.dropdown.find("ul.dropdown-menu > li");
	this.val='';
	this.index=-1;//默认为-1;
	this.initEvents();
}
customDropDown.prototype={
	initEvents:function(){
		var obj=this;
		//这个方法可以不写，因为点击事件被Bootstrap本身就捕获了，显示下面下拉列表
		obj.dropdown.on("click",function(event){
			$(this).toggleClass("active");
		});
		
		//点击下拉列表的选项
		obj.options.on("click",function(){
			var opt=$(this);
			obj.text=opt.find("a").text();
			obj.val=opt.attr("value");
			obj.index=opt.index();
			obj.placeholder.text(obj.text);
		});
	},
	getText:function(){
		return this.text;
	},
	getValue:function(){
		return this.val;
	},
	getIndex:function(){
		return this.index;
	}
}