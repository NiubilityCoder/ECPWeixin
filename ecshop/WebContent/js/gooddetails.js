///<reference path="jquery-1.8.3-vsdoc.js"/>

 

//$(document).ready(function () {
    //$("#gooddetails").validate({
        //写一些特定逻辑
		//alert("want to submit");
    //});
//});

$(document).ready(function () {
    $("#gooddetails").validate({
        submitHandler: function (form) {
            // do other things for a valid form
            //alert("want to submit");
			$("#popupDialog").popup('open');
            
        }
    });
});
 


 