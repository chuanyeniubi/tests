   //弹出窗
    $(function () {
	    $('.js-btn-promptUl').click(function(){
	       $('.js-modal-promptUl').addClass("modal-in");
	       $('.modal-overlay').addClass("modal-overlay-visible");
	    });
	    $('.js-modal-close').click(function(){
	       $('.modal').removeClass("modal-in");
	       $('.modal-overlay').removeClass("modal-overlay-visible");
	    });
	    $('#js-btn-download').click(function(){
	       $('.js-modal-download').addClass("modal-in");
	       $('.modal-overlay').addClass("modal-overlay-visible");
	    });
	    $('#js-btn-push').click(function(){
	       $('.js-modal-push').addClass("modal-in");
	       $('.modal-overlay').addClass("modal-overlay-visible");
	       $('.js-push-content').show();
	       $('.js-push-result').hide();
	    });
	    $('#js-btn-PushAffirm').click(function(){
	       $('.js-push-result').show();
	       $('.js-push-content').hide();
	    });
	    $('#js-btn-qrcode').click(function(){
	       $('.js-modal-qrcode').addClass("modal-in");
	       $('.modal-overlay').addClass("modal-overlay-visible");
	    });
    });
	
  //日历
    $(function () {

		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		$(".input-date").calendar({
			value: [year + '-' + month + '-' + day]
		});
    });
    //日期格式转换
    function Transformation(a){
        return a.replace(/-/g,'');
    }
$("#js-btn-search1").on("click",function(){
console.log(Transformation($("#a").val()))
})

  //选择下拉框控制div 
   $(function(){
  		$("#hideselect").change(function(){
            var hideselect = $(this).val();
			if(hideselect ==2){
				$(".item1,.item3,.item5").css("display","block");
				$(".item2,.item4").css("display","none");
			}
			else if(hideselect ==3){
				$(".item4,.item5").css("display","block");
				$(".item1,.item2,.item3").css("display","none");
			}
			else{
				$(".item1,.item2").css("display","block");
				$(".item3,.item4,.item5").css("display","none");
			}
		})
    });

  //提交显示结果页面
    $(function () {
	    $('#js-btn-search1').click(function(){
	       $('.js-search-result1').show();
	       $('.js-search-result1-btns').css("display","flex");
	       $('.js-search-result2,.js-btn-promptUl').hide();
	    });
	    $('#js-btn-search2').click(function(){
	       $('.js-search-result2').show();
	       $('.js-search-content,.js-search-result1,.js-search-result1-btns,.js-btn-promptUl').hide();
	    });
	    $('.js-btn-return').click(function(){
	       $('.js-search-content').show();
	       $('.js-search-result1,.js-search-result1-btns,.js-search-result2').hide();
	    });
    });
      //获取当前12个月
    $(function () {
		for (var i=0;i<12;i++) {
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() - i;
		if(month<=0){
			year=year-1;
			month=12+month
		}
	   if(month<10){
			month='0'+month
		}
			$(".selsty").append('<option value="'+year+month+'">'+year+'年'+month+'月</option>')
		}
		
		
//		var now = new Date();
//		var date = new Date(now.getTime() - 1 * 24 * 3600 * 1000);
//		var year = date.getFullYear();
//		var month = date.getMonth() + 1;
//		var day = date.getDate();
//		var hour = date.getHours();
//		var minute = date.getMinutes();
//		var second = date.getSeconds();
//		$(".input-date").val(year+ month + day);
    });

