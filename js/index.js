/*
* @Author: admin
* @Date:   2018-03-08 21:47:44
* @Last Modified by:   admin
* @Last Modified time: 2018-03-11 18:03:18
*/



// 轮播图
$(function(){
	var i=0;
	var timer=null;
	for (var j = 0; j < $('.img li').length; j++) { //创建圆点
$('.num').append('<li></li>')
}
$('.num li').first().addClass('active'); //给第一个圆点添加样式
var firstimg=$('.img li').first().clone(); //复制第一张图片
$('.img').append(firstimg).width($('.img li').length*($('.img img').width())); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
// 下一个按钮
$('.next').click(function(){
i++;
if (i==$('.img li').length) {
i=1; //这里不是i=0
$('.img').css({left:0}); //保证无缝轮播，设置left值
};
$('.img').stop().animate({left:-i*1226},920);
if (i==$('.img li').length-1) { //设置小圆点指示
$('.num li').eq(0).addClass('active').siblings().removeClass('active');
}else{
$('.num li').eq(i).addClass('active').siblings().removeClass('active');
}
})
// 上一个按钮
$('.prev').click(function(){
i--;
if (i==-1) {
i=$('.img li').length-2;
$('.img').css({left:-($('.img li').length-1)*1226});
}
$('.img').stop().animate({left:-i*1226},920);
$('.num li').eq(i).addClass('active').siblings().removeClass('active');
})
//设置按钮的显示和隐藏
$('.banner').hover(function(){
$('.btn').show();
},function(){
$('.btn').hide();
})
//鼠标划入圆点
$('.num li').mouseover(function(){
var _index=$(this).index();
$('.img').stop().animate({left:-_index*1226},2000);//这里的2000 是图片停滞的时间
$('.num li').eq(_index).addClass('active').siblings().removeClass('active');
})
//定时器自动播放
timer=setInterval(function(){
i++;
if (i==$('.img li').length) {
i=1;
$('.img').css({left:0});
};
$('.img').stop().animate({left:-i*1226},920);
if (i==$('.img li').length-1) { 
$('.num li').eq(0).addClass('active').siblings().removeClass('active');
}else{
$('.num li').eq(i).addClass('active').siblings().removeClass('active');
}
},3000)


//鼠标移入，暂停自动播放，移出，开始自动播放
$('.img').hover(function(){ //原来是banner,是为了放在tab上图片仍在运作
clearInterval(timer);
},function(){
timer=setInterval(function(){
i++;
if (i==$('.img li').length) {
i=1;
$('.img').css({left:0});
};
$('.img').stop().animate({left:-i*1226},920);
if (i==$('.img li').length-1) { 
$('.num li').eq(0).addClass('active').siblings().removeClass('active');
}else{
$('.num li').eq(i).addClass('active').siblings().removeClass('active');
}
},3000)
})


//放在“上一个”按钮停止播放
$('.prev').hover(function(){
	clearInterval(timer);
},function(){
	timer=setInterval(function(){
		i++;
		if(i == $('img li').length){
			i=1;
			$('.img').css({left:0});
		};
		    $('.img').stop(false,false).animate({left:-i*1226},920);
		    if(i == $('img li')-1){
		    	$('.num li').eq(0).addclass('active').siblings().removeClass('active');
		    }else{
		    	$('.num li').eq(i).addClass('active').siblings().removeClass('active');
		    }
	}, 3000)
})
//放在“下一个”按钮停止播放
$('.next').hover(function(){
	clearInterval(timer);
},function(){
	timer=setInterval(function(){
		i++;
		if(i == $('.img li').length){
			i=1;
			$('.img li').css({left:0});
		};
		$('.img').stop(false,false).animate({left:-i*1226}, 920);
		if(i == $('.img li').length-1){
			$('.num li').eq(0).addclass('active').siblings().removeClass('active');
		}else{
			$('.num li').eq(i).addClass('active').siblings().removeClass('active');
		}
	}, 3000)
})

})







//左侧tab

window.addEventListener("load",function(){
	var cateitemlist=document.getElementById("cateitemlist");
	var lis=cateitemlist.getElementsByTagName("li");
	for(var i = 0; i<lis.length; i++){
		lis[i].onmouseover=function(){
			this.className="cateitem on";
		}
		lis[i].onmouseout=function(){
			this.className="cateitem";
		}
	}
})



//明星单品轮播图
$(function(){
	$(".right-btn").click(function(){
		$(".products-bigbox").stop(false,false).animate({marginLeft:-1226},2000)
	})
	$(".left-btn").click(function(){
		$(".products-bigbox").stop(false,false).animate({marginLeft:0},2000)
	})
})

//购物车
	$(document).ready(function(){
		$(".shop").hover(function(){
			$(".bg02").stop(false,false).slideToggle(500);
		});
	})