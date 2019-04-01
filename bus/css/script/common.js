window.onload=function(){
	var token=getUrlParam("token");
	$.ajax({
		type:"post",
		url:"http://bus.liebianzhe.com/api/login/isflag",
		async:false,
		data:{
			token:token,
		},
		success:function(data){
			if(data.code==0){
//				mui.toast("登录失效~~");
				setTimeout("isflag()",1500);
			}
		},
		error:function(){
			console.info("请求失败~");
		}
		
	});
}
function isflag(){
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isAndroid) {
        js.isflag();
    }
    if (isiOS) {
        var num={"msg":"登录失效"};
        window.webkit.messageHandlers.isflag.postMessage(num);
    }
}
function getUrlParam(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象var r = window.location.search.substr(1).match(reg);  //匹配目标参数if (r!=null) return unescape(r[2]); return null; //返回参数值} 
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r!=null) return unescape(r[2]); return null; //返回参数值
}