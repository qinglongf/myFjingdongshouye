function ajax(metead,url,data,success ){
	var myajax=null;
	try{
		myajax=new XMLHttpRequest();
	}catch(e){
		myajax=new ActiveXObject('Microsoft.XMLHTTP')
	}
	
	if(metead == 'get' && data){
		url+="?"+data;
	}
	myajax.open(metead,url,true);
	if(metead == 'get'){
		myajax.send();
	}else{
		myajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		myajax.send(data);
	}
	myajax.onreadystatechange=function(){
		if(myajax.readyState == 4){
			if(myajax.status == 200){
				success && success(myajax.responseText);
//				console.log(myajax.responseText);
			}else{
				alert('出错了,Err：' + myajax.status);
			}
		}
	} 
}
