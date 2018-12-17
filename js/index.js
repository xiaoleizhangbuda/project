$("#firstli").onmouseover = function(){
		$("#phone").style.display="block";
	}
	$("#firstli").onmouseout = function(){
		$("#phone").style.display="none";
	}
	$("#phone").onmouseover = function(){
		$("#phone").style.display="block";
	}
	$("#phone").onmouseout = function(){
		$("#phone").style.display="none";
	}
function $(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	


function getStyle(domObj,attr){
	if(domObj.currentStyle){
		return domObj.currentStyle[attr];
	}else{
		return window.getComputedStyle(domObj)[attr];
	}	
}
function linearMove03(domObj,attr,startValue,endValue,timeLong){
	
	//假定时间间隔
	let timeSpace = 10;
	//计算步长
	let step = Math.abs(endValue-startValue)/(timeLong/timeSpace);
	//给当前值赋为初始值
	let currValue = startValue;
	//方向
	let direction = startValue<endValue?1:-1;
	var myTimer = setInterval(function(){
		//1、改变数据                
		currValue = currValue+direction*step;
		
		//2、边界处理
		if(Math.abs((currValue-direction*step)-endValue)<=step){
			currValue = endValue;//500
			window.clearInterval(myTimer);
		}
		//3、改变外观
		domObj.style[attr] = currValue+"px";
	},timeSpace);
}

let currIndex = 0;
var myTimer = null;
let clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
let clientHeight = document.body.clientHeight || document.documentElement.clientHeight;

function autoPlay(){	
	if(myTimer!=null){
		return;
	}
	myTimer = setInterval(function(){
		//1、改变数据（图片序号）
		let outIndex = currIndex;//要出去的那张。
		currIndex=currIndex+1;
		//2、边界处理

		if(currIndex>4 || currIndex<0){
			currIndex = 0;
		}
		//3、改变外观

		showImg(outIndex,currIndex);
	},3000);	
}

//2、停止
function stop(){
	if(myTimer!=null){
		window.clearInterval(myTimer);
		myTimer = null;
	}
}

//3、跳转指定的图片
function goImg(transIndex){//2
	//1、改变数据（图片序号）
	let outIndex = currIndex;
	currIndex=transIndex;//2
	//2、边界处理
	if(currIndex>5|| currIndex<0){
		currIndex = 0;
	}
	//3、改变外观
	showImg(outIndex,currIndex);
}
function showImg(outIndex,inIndex){
	//3、改变外观
	//1)、改图片
	let imgs = $("#banner").children;
	imgs[inIndex].style.left = "clientWidth";
	//让inIndex滑入
	linearMove03(imgs[inIndex],"left",clientWidth,0,clientHeight);
	//让outIndex滑出
	linearMove03(imgs[outIndex],"left",0,-clientWidth,clientHeight);
	
	//2)、改豆豆
	let lis = $("#banner").lastElementChild.children;
	for(let i=0;i<lis.length;i++){
		lis[i].style.backgroundColor = "white";
	}
	lis[currIndex].style.backgroundColor = "red";
	
}

function fadeInOut(outDomObj,inDomObj,timeLong){	
	//假定时间间隔
	let timeSpace = 10;
	//计算步长
	let step = 1/(timeLong/timeSpace);	
	//给当前值赋为初始值
	let currOpacity = 0;
	//方向
	var myTimer = setInterval(function(){
		//1、改变数据                 
		currOpacity = currOpacity+step;
		
		//2、边界处理
		if(currOpacity>=1){
			currOpacity = 1;
			window.clearInterval(myTimer);
		}
		//3、改变外观
		inDomObj.style.opacity = currOpacity;
		outDomObj.style.opacity = 1-currOpacity;		
	},timeSpace);
}