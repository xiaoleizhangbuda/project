window.onload = function(){
	function initUI(username){
		if(username!=null){
			$("#usernameSpan").innerHTML = username;
			$("#welcomeBox").style.display = "block";	
		}
	}
	var username = getCookie("username");
	//2、初始化界面
	initUI(username);
	//3、注销
	$("#btnOut").onclick= function(){
		removeCookie("username");
		location.href="login.html";
	}
	//点击小图换大图
var smallDom=$(".img");
for(var i=0;i<smallDom.length;i++){
	smallDom[i].onclick=function(){
		for(let j=0;j<smallDom.length;j++){
			smallDom[j].parentNode.style.opacity="0.6";
		}
	this.parentNode.style.opacity="1";
	var imgDom=this.src;
	$(".bigImgs")[0].setAttribute("src",imgDom);
	}
}
	//勾选参数换页面
	$(".mRed")[0].onclick=function(){
		$(".bigImgs")[0].setAttribute("src","../images/goodsh11.png");
		$(".img")[0].src="../images/goodsh11.png";
		$(".img")[1].src="../images/goodsh22.png";
		$(".img")[2].src="../images/goodsh33.png";
		$(".img")[3].src="../images/goodsh44.png";
		var arr=$(".phoneColor");
		for(let i=0;i<arr.length;i++){
			arr[i].style.borderColor="#ccc";
		}
		$(".mRed")[0].style.borderColor="#05b570";
		
	}
	$(".yGreen")[0].onclick=function(){
	
		$(".bigImgs")[0].setAttribute("src","../images/goodsl11.png");
		$(".img")[0].src="../images/goodsl11.png";
		$(".img")[1].src="../images/goodsl22.png";
		$(".img")[2].src="../images/goodsl33.png";
		$(".img")[3].src="../images/goodsl44.png";
		var arr=$(".phoneColor");
		for(let i=0;i<arr.length;i++){
			arr[i].style.borderColor="#ccc";
		}
		this.style.borderColor="#05b570";
	}
	$(".mBlack")[0].onclick=function(){
		
		$(".bigImgs")[0].setAttribute("src","../images/goodsw11.png");
		$(".img")[0].src="../images/goodsw11.png";
		$(".img")[1].src="../images/goodsw22.png";
		$(".img")[2].src="../images/goodsw33.png";
		$(".img")[3].src="../images/goodsw44.png";
		var arr=$(".phoneColor");
		for(let i=0;i<arr.length;i++){
			arr[i].style.borderColor="#ccc";
		}
		this.style.borderColor="#05b570";
	}
	$(".fBlue")[0].onclick=function(){

		$(".bigImgs")[0].setAttribute("src","../images/goodsp11.png");
		$(".img")[0].src="../images/goodsp11.png";
		$(".img")[1].src="../images/goodsp22.png";
		$(".img")[2].src="../images/goodsp33.png";
		$(".img")[3].src="../images/goodsp44.png";
		var arr=$(".phoneColor");
		for(let i=0;i<arr.length;i++){
			arr[i].style.borderColor="#ccc";
		}
		this.style.borderColor="#05b570";
	}
	$(".config")[1].onclick=function(){
		$(".config")[0].style.borderColor="#ccc";
		this.style.borderColor="#05b570";
		$(".money")[0].innerHTML="￥2999.00 ";
	}
	$(".config")[0].onclick=function(){
		$(".config")[1].style.borderColor="#ccc";
		this.style.borderColor="#05b570";
		$(".money")[0].innerHTML="￥3499.00 ";
	}
	$(".eaer")[0].onclick=function(){
		let attr=getStyle($(".eaer")[0],"borderColor");
		if (attr[0]!="#05b570") {
		this.style.borderColor="#05b570";

		}else{
			this.style.borderColor="#ccc";
		}
	}
	$(".serve")[0].onclick=function(){
		$(".serve")[1].style.borderColor="#ccc";
		$(".serve")[2].style.borderColor="#ccc";
		this.style.borderColor="#05b570";
	}
	$(".serve")[1].onclick=function(){
		$(".serve")[2].style.borderColor="#ccc";
		$(".serve")[0].style.borderColor="#ccc";
		this.style.borderColor="#05b570";
	}
	$(".serve")[2].onclick=function(){
		$(".serve")[1].style.borderColor="#ccc";
		$(".serve")[0].style.borderColor="#ccc";
		this.style.borderColor="#05b570";
	}
	$(".pay")[0].onclick=function(){
		$(".pay")[1].style.borderColor="#ccc";
		$(".pay")[2].style.borderColor="#ccc";
		this.style.borderColor="#05b570";
	}
	$(".pay")[1].onclick=function(){
		$(".pay")[2].style.borderColor="#ccc";
		$(".pay")[0].style.borderColor="#ccc";
		this.style.borderColor="#05b570";
	}
	$(".pay")[2].onclick=function(){
		$(".pay")[1].style.borderColor="#ccc";
		$(".pay")[0].style.borderColor="#ccc";
		this.style.borderColor="#05b570";
	}
	function initUI(username){
	if(username!=null){
		$("#usernameSpan").innerHTML = username;
		$("#welcomeBox").style.display = "block";
	}else{
		$("#welcomeBox").style.display = "none";
	}
	}
	//1、读取用户名
	var username = getCookie("username");
	//2、初始化界面
	initUI(username);
	//3、注销
	$("#btnOut").onclick= function(){
		removeCookie("username");
		location.href="../html/login.html";
	}
}	
window.onscroll=function(){
	let scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
	if (scrollTop>100) {
		$(".lefts")[0].style.position="fixed";
		$(".lefts")[0].style.top="100px";
		if (scrollTop>590) {
			$(".lefts")[0].style.position="absolute";
			$(".lefts")[0].style.bottom="0px";
			$(".lefts")[0].style.top="auto";
		}
	}else{
		$(".lefts")[0].style.position="static";
		$(".lefts")[0].style.bottom="0px";
		$(".lefts")[0].style.top="0px";
	}

}