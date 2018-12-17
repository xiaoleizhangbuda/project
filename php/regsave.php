<?php
	header("Content-type:text/html;charset=utf-8");
	//一、接收
	$username = $_GET['username'];
	$userpass = $_GET['userpass'];
	//二、处理
	//1、连接数据库服务器
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		//die("连接失败".mysql_error());
		//三、响应
	}else{
		//2、选择数据库
		mysql_select_db("mysql1",$conn);
		
		$sqlstr="insert into user(username,userpass)
					values('$username','$userpass')";
		$result = mysql_query($sqlstr,$conn);		
		//4、关闭数据库
		mysql_close($conn);
		if($result==1){			
			//三、响应
			echo "0";
		}else{
			echo "1";
		}
	}
?>