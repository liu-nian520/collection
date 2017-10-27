



$(function(){
	$("#c p>a").click(function() {
		$("#j_mask").show();
		$("#j_formAdd").show();
	});
	$("#j_hideFormAdd").click(function() {
		//显示遮盖层和j_formAdd这个盒子
		$("#j_mask").hide();
		$("#j_formAdd").hide();
	});
	$(".form-submit input").click(function()
	{
		$("#j_mask").hide();
		$("#j_formAdd").hide();
		 $(".check-box input:eq(0)").prop("checked",true);
	});
});

$(document).ready(function() {
	//需求：在input中按回车，插入光标跳转到下一个input
	$("input").on("keyup", function(e) {
		//					 alert(e.keyCode);
		if (e.keyCode === 9) {

			//						 $(this).next().next()[0].focus();
			$(this).next().next().focus();
		}
	});

});
