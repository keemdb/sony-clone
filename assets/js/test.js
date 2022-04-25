$(document).ready(function(){

	$('#ajaxTigger').click(function(){
		$.ajax({
			type :'GET',
			url :'js/data.json',
			dataType :'text',
			success:function(data){
				var jsonObj = eval("("+data+")");
				var nav = "";
					nav +="<ul id='gnb'>";
					for(var i =0; i< jsonObj.menuData.menuText.length; i++ ){
						nav += "<li><a href='"+jsonObj.menuData.menuLink[i]+"' target='"+jsonObj.menuData.menuWn[i]+"' >";
						if(jsonObj.menuData.menuStyle[i]){
							nav += "<img src='"+jsonObj.menuData.menuSrc[i]+"' alt='"+jsonObj.menuData.menuText[i]+"' >";
							//이미로 노출
						}else{
							nav += jsonObj.menuData.menuText[i]; // 글자노출
						}
						nav +="</a></li>";
					}
					nav +="</ul>";
				$("#hd nav").html(nav);
			},
			error : function(data,status,error){
			alert("접속불가이유 "+data.status+"\n"+data.responseText+"\n"+"error "+error);
			}
		});
	});
	$('#ajaxTigger').click();	

});
	
