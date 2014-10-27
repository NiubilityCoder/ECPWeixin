///<reference path="jquery-1.8.3-vsdoc.js"/>

$(document).ready(function () {
    calculateTotal();
	calculateTotalCount();
});

//$(document).ready(function () {
//    $("#mycart").validate({
//        //写一些特定逻辑
//    });
//});

$(document).ready(function () {
    $("#mycart").validate({
        submitHandler: function (form) {
            // do other things for a valid form
            //alert("want to submit");

            var totoalPrice = new Number($("#totalPrice").text());
            if (totoalPrice <= 0) {
                //alert("亲！至少买一件吧！");
                $("#popupDialog").popup('open');
            }
            else {
                form.submit();
            }
        }
    });
});



//TODO:阻止重复提交


$(function () {
    //结算
    $("#check").click(function () {
        var totoalPrice = new Number($("#totalPrice").text());
        if (totoalPrice <= 0) {
            //alert("亲！至少买一件吧！");
            $("#popupDialog").popup('open');
        }
         
    });

    //购买数量变化上(按钮)
    $("input[name^='count']").change(function () {
        //alert($(this).attr("value"));
        calculateTotal();
    });
    //输入
    $("input[name^='count']").on('input', function (e) {
        //alert($(this).attr("value"));
        calculateTotal();
    });

    //单独选择某一个
    $("input[name='check_item']").click(function () {
        var index = $("input[name='check_item']").index(this);
        var currentChk = $("input[name='check_item']").eq(index);

        if (currentChk.is(":checked")) {
            currentChk.removeClass("checkbox");
            currentChk.removeClass("checked");
            currentChk.addClass("checked");
        }
        else {
            currentChk.removeClass("checkbox");
            currentChk.removeClass("checked");
            currentChk.addClass("checkbox");
        }
        //Need refresh
        $("input[name='check_item']").eq(index).prop("checked", $(this).prop("checked")).checkboxradio("refresh");
        calculateTotal();
		calculateTotalCount()
    });
    //全选
    $("#box_all").click(function () {
        $("input[name='check_item']").attr("checked", $(this).prop("checked")).checkboxradio("refresh");

        if ($(this).attr("checked")) {
            $("input[name='check_item'],#check_all,#box_all").removeClass("checkbox");
            $("input[name='check_item'],#check_all,#box_all").removeClass("checked");
            $("input[name='check_item'],#check_all,#box_all").toggleClass("checked");
        }
        else {
            $("input[name='check_item'],#check_all,#box_all").removeClass("checkbox");
            $("input[name='check_item'],#check_all,#box_all").removeClass("checked");
            $("input[name='check_item'],#check_all,#box_all").toggleClass("checkbox");
        }
        //alert( $("#totalPrice").text());
        calculateTotal();
		calculateTotalCount();
    });
    //
});

//删除
$(function () {
    $("a[name='delete']").click(function () {
        var index = $("a[name='delete']").index(this);
        var currentSelectedGoodName = $("p[name='goodName']").eq(index);
        var currentgoodtr = $("table[class='goodtr']").eq(index); //当前的good 所在的tr节点
        //alert($("tr[class='goodtr']").length);
        //alert("delete:" + currentgoodtr.html() + ":" + index);

        $("#confirm").popup('open');
        $("#confirm #yes").on('click', function () {
            currentgoodtr.remove();
            calculateTotal();
			calculateTotalCount();
            if ($("tr[class='goodtr']").length < 1) {//没货了
                $("#totalCheck").remove();
                $("#popupDialog").popup('open'); //TODO:显示购物车是空的的div或图
            }
        })
    })
});


//计算总价格
function calculateTotal() {
    //显示总价
    //计算每一笔 现价*数量
    var arrChk = $("input[name='check_item']"); //获得每个check box
    var totalPrice = 0;
    for (var i = 0; i < arrChk.length; i++) {
        var currentChk = arrChk.eq(i);
        //alert(currentChk.prop("checked"));
        //查找现价（单价）
        //var price = currentChk.siblings("p").find("lable[name='price']").text(); 
        var price = $("lable[name='price']").eq(i).text();  
        //alert('price:'+price);
        //购买数量
         //var count = currentChk.siblings("p").find("input[name^='count']").attr("value");
         var count = $("input[name^='count']").eq(i).attr("value");
        //alert('count:'+count);

        if (currentChk.is(":checked")) {
            totalPrice += new Number(price) * new Number(count);
        }
    }
    $("#totalPrice").text(totalPrice);
}
//计算共选择的件数
function calculateTotalCount(){
		var total = 0;
		var arrChk = $("input[name='check_item']");
		 for (var i = 0; i < arrChk.length; i++) {
			 var currentChk = arrChk.eq(i);
			 if (currentChk.is(":checked")) {
            	total ++;
        		}
			}
		 $("#totalcount1").text(total);
	}