function $(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
window.onload=function(){
	$("#checkMa").onclick=function(){
		var arr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		var n=4;
		$("#checkMa").innerHTML=checkMa(arr,n);
	}
	$("#username").onblur=function(){
		let xml =new XMLHttpRequest();
		xml.open("get","../php/reg.php?username="+this.value,true);
		xml.onreadystatechange=function(){
			if (xml.readyState==4 && xml.status==200) {
				if (xml.responseText=="0") {
					$("#userspan").style.color="green";
					$("#userspan").innerHTML="该用户名可以使用";
				}else{
					$("#userspan").style.color="red";
					$("#userspan").innerHTML="该用户名已经被使用";
				}
			}
		}
		xml.send();
	}
	$("#btnReg").onclick=function(){
			if ($("#checkma").value!=$("#checkMa").innerHTML) {
				alert("请输入正确的验证码");
				return;
			}
				let xhr =new XMLHttpRequest();
		xhr.open("get","../php/regsave.php?username="+$("#username").value+"&userpass="+$("#userpass").value,true);
		xhr.onreadystatechange=function(){
			if (xhr.readyState==4 && xhr.status==200) {
				if (xhr.responseText=="0") {
					alert("注册成功！");
					location.href="../html/login.html";
				}else{
					alert("注册失败！");
					location.href="../html/reg.html";
					}
				}
			}
		xhr.send();
	}
}
function checkMa(arr,n){
	var str="";
	for(var i=0;i<n;i++){
		 str+=arr[parseInt(Math.random()*arr.length)];
	}
	return str;
}
