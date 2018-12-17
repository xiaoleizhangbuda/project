window.onload = function(){
	//1、自动播放
	autoPlay();
	$("#banner").onmouseover = stop;
	$("#banner").onmouseout = autoPlay;
	let lis = $("#banner").lastElementChild.children;
	for(var i=0;i<lis.length;i++){
		lis[i].setAttribute("index",i);
		lis[i].onclick = function(){
			goImg(parseInt(this.getAttribute("index")));
		};
	}

	
//#no2
	let currDivIndex = 0;
	var myTimer = null;
	function goDiv(transDiv){//2
	//1、改变数据（图片序号）
	let outIndex = currDivIndex;
		currDivIndex=transDiv;
	//2、边界处理
		if(currDivIndex>2 || currDivIndex<0){
			currDivIndex = 0;
		}
		//3、改变外观
		showDiv(outIndex,currDivIndex);
	}
	function showDiv(outIndex,inIndex){
	//3、改变外观
	let divs = $(".k1");
	for(let i=0;i<divs.length;i++){
		divs[i].style.zIndex = 0;
	}
	divs[inIndex].style.zIndex = 1;
	fadeInOut(divs[outIndex],divs[inIndex],1000);
	//2)、改豆豆
	let list = $("#no2").lastElementChild.children;
	for(let i=0;i<list.length;i++){
		list[i].style.backgroundColor = "#ccc";
	}
		list[currDivIndex].style.backgroundColor = "green";
	}
	
	let list = $("#no2").lastElementChild.children;
	
	for(var i=0;i<list.length;i++){
		list[i].setAttribute("index",i);//这句话是给每个li增加了一个index属性，值是下标。
		list[i].onclick = function(){
			goDiv(parseInt(this.getAttribute("index")));
		}
	}
	//shop#no3
	let currDIndex = 0;
	var myTimer = null;
	function goDivs(transDiv){//2
	//1、改变数据（图片序号）
	let outIndex = currDIndex;
		currDIndex=transDiv;
	//2、边界处理
		if(currDIndex>3 || currDIndex<0){
			currDIndex = 0;
		}
		//3、改变外观
		showDivs(outIndex,currDIndex);
	}
	function showDivs(outIndex,inIndex){
	//3、改变外观
	let divs = $(".r17");
	for(let i=0;i<divs.length;i++){
		divs[i].style.zIndex = 0;
	}
	divs[inIndex].style.zIndex = 1;
	fadeInOut(divs[outIndex],divs[inIndex],1000);
	//2)、改豆豆
	let lists = $(".no3")[0].lastElementChild.children;
	for(let i=0;i<lists.length;i++){
		lists[i].style.backgroundColor = "#ccc";
	}
		lists[currDIndex].style.backgroundColor = "green";
	}
	
	let lists = $(".no3")[0].lastElementChild.children;
	
	for(var i=0;i<lists.length;i++){
		lists[i].setAttribute("index",i);//这句话是给每个li增加了一个index属性，值是下标。
		lists[i].onclick = function(){
			goDivs(parseInt(this.getAttribute("index")));
		}
	}
	//.one
	let currte = 0;
	var myTimer = null;
	function goDl(transDl){
	//1、改变数据（图片序号）
	let outIndex = currte;
		currte=transDl;
	//2、边界处理
		if(currte>3 || currte<0){
			currte = 0;
		}
		//3、改变外观
		showDl(outIndex,currte);
	}
	function showDl(outIndex,inIndex){
	//3、改变外观
	let dls = $(".oneA");
	for(let i=0;i<dls.length;i++){
		dls[i].style.zIndex = 0;
	}
	dls[inIndex].style.zIndex = 1;
	fadeInOut(dls[outIndex],dls[inIndex],1000);
		//2)、改豆豆
	let dlts = $(".uls")[0].children;
	for(let i=0;i<dlts.length;i++){
		dlts[i].style.backgroundColor = "#ccc";
	}
	dlts[currte].style.backgroundColor = "green";
	}
	let dlt = $(".uls")[0].children;
	for(var i=0;i<dlt.length;i++){
		dlt[i].setAttribute("index",i);//这句话是给每个li增加了一个index属性，值是下标。
		dlt[i].onclick = function(){
			goDl(parseInt(this.getAttribute("index")));
		}
	}
	//.two
	let currtes = 0;
	var myTimer = null;
	function goDls(transDls){
	//1、改变数据（图片序号）
	let outIndex = currtes;
		currtes=transDls;
	//2、边界处理
		if(currtes>3 || currtes<0){
			currtes = 0;
		}
		//3、改变外观
		showDls(outIndex,currtes);
	}
	function showDls(outIndex,inIndex){
	//3、改变外观
		let dls = $(".twoA");
		for(let i=0;i<dls.length;i++){
			dls[i].style.zIndex = 0;
		}
		dls[inIndex].style.zIndex = 1;
		fadeInOut(dls[outIndex],dls[inIndex],1000);
		//2)、改豆豆
		let dltss = $(".two")[0].lastElementChild.children;
		for(let i=0;i<dltss.length;i++){
			dltss[i].style.backgroundColor = "#ccc";
		}
			dltss[currtes].style.backgroundColor = "green";
		}
	
	let dlts = $(".two")[0].lastElementChild.children;
	for(var i=0;i<dlts.length;i++){
		dlts[i].setAttribute("index",i);//这句话是给每个li增加了一个index属性，值是下标。
		dlts[i].onclick = function(){
			goDls(parseInt(this.getAttribute("index")));
		}
	}
}	