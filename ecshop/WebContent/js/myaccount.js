///<reference path="jquery-1.8.3-vsdoc.js"/>

 

//$(document).ready(function () {
    //$("#gooddetails").validate({
        //写一些特定逻辑
		//alert("want to submit");
    //});
//});

$(document).ready(function () {
    $("#myaccount").validate({
        submitHandler: function (form) {
            // do other things for a valid form
            //alert("want to submit");
			var selectedxiaoqu = $("#selectxiaoqu").html();
			if(selectedxiaoqu == '请选择小区')
			{
				$("#popupDialog p").text("请选择小区");
				$("#popupDialog").popup('open');
				return;
			}
			
			var selectedshop = $("#selectshop").html();
			if(selectedshop == '请选择商店')
			{
				$("#popupDialog p").text("请选择商店");
				$("#popupDialog").popup('open');
				return;
			}
			
			form.submit();
        }
    });
});

$(document).ready(function() {
    $("a[name='reversequ']").on('click',function(e){
			//alert($(this).html());
			$("#selectqu").html($(this).html());
			$("#selectedqu").html($(this).html());
			$("#selectxiaoqu").html("请选择小区");
			$("#selectshop").html("请选择商店");
		});
});

$(document).ready(function() {
    $("a[name='reversexiaoqu']").on('click',function(e){
			//alert($(this).html());
			$("#selectxiaoqu").html($(this).html());
			$("#selectshop").html("请选择商店");
		});
});
$(document).ready(function() {
    $("a[name='reverseshop']").on('click',function(e){
			//alert($(this).html());
			$("#selectshop").html($(this).html());
			 
		});
});
 


 