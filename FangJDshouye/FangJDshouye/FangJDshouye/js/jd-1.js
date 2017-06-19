
    window.onload=function(){
							/*
	验证用户名
	get
		guestbook/index.php
			m : index
			a : verifyUserName
			username : 要验证的用户名
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/

	$(document).ready(function(){
		console.time('a')
		
		
		
		
		
		
		
		
		$('#zcusernema').blur(usernemeget);
		
		function usernemeget(){
			
		  $.get("guestbook/index.php",'m=index&a=verifyUserName&username=' + $(this).val(),function(data,status){
		  
		  var  d=JSON.parse(data);
		  $('#yanzhien').html(d.message);
			  if(d.code){
			  	 $('#yanzhien').css({'color':'red'})
			  }else{
			  	 $('#yanzhien').css({'color':'green'})
			  }
		  });
		};	
	/*
	用户注册
	get/post
		guestbook/index.php
			m : index
			a : reg
			username : 要注册的用户名
			password : 注册的密码
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/	
	$('#zcsubmit').click(zcsubmit);
	function zcsubmit(){
		$.post('guestbook/index.php','m=index&a=reg&username='+$('#zcusernema').val()+'&password='+$('#zcuserpasword').val(),function(data,status){
			var d=JSON.parse(data);
				alert(d.message+"请到登陆界面登陆！")
			$('.zhuche').hide();	
		})
	}
		
	/*
	用户登陆
	get/post
		guestbook/index.php
			m : index
			a : login
			username : 要登陆的用户名
			password : 登陆的密码
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/	
	$('#submi').click(submiclick);
	function submiclick(){
		$.post('guestbook/index.php','m=index&a=login&username='+$('#userneme').val()+'&password='+$('#password').val(),function(data,status){
			var d=JSON.parse(data);
			alert(d.message)
			console.log(d)
			$('.dengluk').hide()
			$('#nihao').html('你好，'+$('#userneme').val())
		})
	}
		
	/*
	用户退出
	get/post
		guestbook/index.php
			m : index
			a : logout
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/			
		$('#tuichu').click(closetuichu);
		function closetuichu(){
			$.post('guestbook/index.php','m=index&a=logout',function(data,status){
				var d=JSON.parse(data);
					alert(d.message);
				$('#nihao').html('你好，请登陆')	
			})
		}
		
		
		$('#nihao').click(denglukshow);
		$('#touxtextPdenglu').click(denglukshow);
		$('#navtou2span').click(zhuceshow);
		function denglukshow(){
			$('.dengluk').show()
		}
		
		$('#lijzhuc').click(function(){
			
			$('.dengluk').hide();
			$('.zhuche').show();
		})
		$('#closezc').click(zckhide);
		function zckhide(){
			$('.zhuche').hide();
		}
		$('#close').click(debglukhide);
		function debglukhide(){
			$('.dengluk').hide();
		}
		
		$('#touxtextPzhuche').click(zhuceshow);
		function zhuceshow(){
			$('.zhuche').show();
		}
		
		$('#rightgudingdaohang_fist').click(denglukshow);
		
		$('.fileimg').click(function(){
			//alert(1)
			$('.filemg').click();
		})
	
		
		
		
		$(".lispan").mousemove(lispanmove);
		function lispanmove(){
			$(this).css({color:"#900707"})
		}
		$(".lispan").mouseout(lispanout);
		function lispanout(){
			$(this).css({color:"#cccccc"})
		}
		var html='';
		var catiy=['北京','上海','天津','重庆','河北','山西','河南','黑龙江','吉林','辽宁','哈尔滨','江苏','浙江','四川','广东','广西','新疆','内蒙','云南','贵州']
		for(i=0;i<catiy.length;i++){
			html+="<li>"+catiy[i]+"</li>";
		}
		$(".chengshixunxiang ul").html(html);
		
		var ht='';
			$('.chengshixunxiang ul li').click(chengshixunxiangClick);

		function chengshixunxiangClick(e){
				
				$(this).css({"background-color":"red"});
				$(this).siblings().css({"background-color":"#fff"});
			    ht=e.target.innerHTML;
				$('.chengshispansp').html(ht)
			}
		
		
		//var myjd=['待处理订单','消息','返修退换货','问答','降价商品','我的关注','我的京豆','我的白条','我的优惠卷','我的理财',]
//		var mjd='';
//		for(i=0;i<myjd.length;i++){
//			mjd+="<li >"+myjd[i]+"</li>";
//		}
//		$('.myjd').html(mjd);
		var xxktu=['img/1111111111.png','img/2222222222.png','img/333333333333.png','img/4444444444.png',
				'img/1111111111.png','img/2222222222.png','img/333333333333.png','img/4444444444.png',
				'img/1111111111.png','img/2222222222.png','img/333333333333.png','img/4444444444.png',
				'img/1111111111.png','img/2222222222.png','img/333333333333.png','img/4444444444.png',]
		var aui=document.querySelector('#leftlistUl');
		var ulli=aui.querySelectorAll('li');
		var xxk=document.querySelector('.xxk');
		
		
		for (i=0;i<ulli.length;i++) {
			ulli[i].index=i;
			ulli[i].onmousemove=function(){
				xxk.style.display="block";
				xxk.style.zIndex=1000;
				for (j=0;j<xxktu.length;j++) {
					xxk.style.backgroundImage='url('+xxktu[this.index]+')';
				}
			};
			ulli[i].onmouseout=function(){
				xxk.style.display="none";
				xxk.onmousemove=function(){
						xxk.style.display="block";
						xxk.onmouseout=function(){
								xxk.style.display="none";
							}
					}
			}
		};
		var ssk_2_myshoping=document.querySelector('.ssk_2_myshoping'),
			ssk_2_myshopingTanKuang=document.querySelector('.ssk_2_myshopingTanKuang');
		ssk_2_myshoping.onmousemove=function(){
			ssk_2_myshopingTanKuang.style.display="block";
			ssk_2_myshopingTanKuang.style.zIndex=100;
			ssk_2_myshoping.style.borderBottomColor="white";
			ssk_2_myshoping.style.zIndex=200;
			ssk_2_myshoping.style.height=37+'px';
			ssk_2_myshopingTanKuang.style.backgroundColor='white';
			
		}
		ssk_2_myshoping.onmouseout=function(){
			ssk_2_myshopingTanKuang.style.display="none";
			ssk_2_myshoping.style.zIndex=200;
			ssk_2_myshoping.style.height=35+'px';
			ssk_2_myshoping.style.borderBottomColor="#999999";
			ssk_2_myshopingTanKuang.onmousemove=function(){
				ssk_2_myshopingTanKuang.style.display="block";
				ssk_2_myshoping.style.borderBottomColor="white";
				ssk_2_myshoping.style.zIndex=200;
				ssk_2_myshoping.style.height=37+'px';
			}
			ssk_2_myshopingTanKuang.onmouseout=function(){
				ssk_2_myshopingTanKuang.style.display="none";
				ssk_2_myshoping.style.zIndex=200;
				ssk_2_myshoping.style.height=35+'px';
				ssk_2_myshoping.style.borderBottomColor="#999999";
				
			}
				
		}
		
		
		var ssk_1_input=['格力空调','美的电器','小米手机','恒大冰泉'];
		var m=0;
		var st=setInterval(sskssouk,1000);
		function  sskssouk(){
			
				if(m<=ssk_1_input.length){
					$('#ssk_1_input').attr('placeholder',ssk_1_input[m]);
					m++;
				}else if(m>ssk_1_input.length){
					m=0;
				}
		}
		$('#ssk_1_input').mousemove(sskssoukmove);
		function sskssoukmove(){
			clearInterval(st)
		}
		$('#ssk_1_input').mouseout(sskmouseout);
		function sskmouseout(){
			st=setInterval(sskssouk,1000)}
	
		$('#myshoingdcount').html(0);
		var shoingtextP="还有没商品哦！"
		$('#myshoingtextP').html(shoingtextP);

	var mySwiper_one = new Swiper('.swiper-lunBoTu',{
		
	    pagination: '.pagination',
	    autoplay:1500,
	    loop:true,
	    grabCursor: true,
	    paginationClickable: true
	  })

		$('#cx').mousemove(cxmove);
		function cxmove(e){
			var aa=e.target.offsetWidth+15+'px';
			$('#huad').css({'width':aa,'margin-left':'0px'});
			$('#cxUl').show();
			$('.ggUl').hide();
			
		}
	
		$('#gg').mousemove(ggmove);
		function ggmove(e){
			
			var aa=e.target.offsetWidth+15+'px';
			$('#huad').css({'width':aa,'margin-left':'50px'});
			$('.ggUl').show();
			$('#cxUl').hide();
		}
		
		var ssk_3_top=$('#ssk_3_ul_1').offset().top;
		
		$(window).scroll(function(){
			var sclltop=$(window).scrollTop();
			//console.log(sclltop)
			if(sclltop>ssk_3_top){
				$('#ssk_3_ul_1').addClass('ssk_3_ul_1_fixd')
			}else{
				$('#ssk_3_ul_1').removeClass('ssk_3_ul_1_fixd')
			}
		})
		
			$(window).scroll(showheid);
		function showheid(){
			 var top=$(window).scrollTop();
			
			 var keshitop=$(window).height();
			  //console.log("fdsfa"+top);
			if(top>keshitop){
				$('.tougudingdaohang').show();
				$('.leftgudingdaohang').show();
				$('.rightgudingdaohang').show();
				$('.righ_top').show();
			}else{
				$('.tougudingdaohang').hide();
				$('.leftgudingdaohang').hide();
				$('.rightgudingdaohang').hide();
				$('.righ_top').hide();
			}
		}
		
		
		
		var stt=null;
		var time=6542;//倒计时时间，以秒计算
		stt=setInterval(djs,1000);
		
		function djs(){
			time--;
			var se=time%60;
			var min=parseInt(time/60%60);
			var hous=parseInt(time/3600%24);
			//秒
				if(se<10){
					$('.clearfix6_3').html('0'+se);
				}else{
					$('.clearfix6_3').html(se);
				}
			//分
				if(min<10){
					
				$('.clearfix6_2').html('0'+min);
				}else{
					$('.clearfix6_2').html(min);
				}
			//时
				if(hous<10){
					$('.clearfix6_1').html('0'+hous);
				}else{
				$('.clearfix6_1').html(hous);
				}
			if(se<0){
				$('.clearfix6_3').html('00');
				$('.clearfix6_2').html('00');
				$('.clearfix6_1').html('00');
				clearInterval(stt);
				time=7200;
			}
			if(time>0){
				clearInterval(stt);
				stt=setInterval(djs,1000);
			}
		}

		var mySwiper_two = new Swiper('.swiper-ShangPrq',{
			
			loop:true,
			})
		 $('#button_left').on('click', function(e){
		    e.preventDefault()
		    mySwiper_two.swipePrev()
		  })
		$('#button_right').on('click', function(e){
		    e.preventDefault()
		    mySwiper_two.swipeNext()
		  })
		
		$('#fxhh_ul img').hover(imgmove,imgout);
		function imgmove(){
			console.log(0)
			$(this).css({'margin-left':'100px'})
		}
		function imgout(){
			$(this).css({'margin-left':'110px'})
			console.log(2)
		}
			
		var mySwiperyouPinpgZhuanJ = new Swiper('.youPinpgZhuanJ-lunB',{
			//autoplay : 5000,//可选选项，自动滑动
			pagination:'.pagination_ypzj',	
			loop : true,//可选选项，开启循环
			speed:500,
			//spaceBetween: 30,
        	effect: 'fade',
        	 paginationClickable: true
			
		})
			
		$('#button_ypzj_left').on('click', function(e){
		    e.preventDefault()
		    mySwiperyouPinpgZhuanJ.swipePrev()
		  })
		$('#button_ypzj_right').on('click', function(e){
		    e.preventDefault()
		    mySwiperyouPinpgZhuanJ.swipeNext()
		  })
		$('#paiHangBang-calssname li').last().css({'border':'none'})
		
		$('#paiHangBang-calssname li').hover(paiHangBangmove,paiHangBangout)
		function paiHangBangmove(ev){
			$(this).css({'color':'red'});
			var This=$(this);
			paiHangBangHuadong(ev);
			paiHangBangmovexxk(This);
			
		}
		function paiHangBangout(){
			$(this).css({'color':'black'})
		}
		function paiHangBangHuadong(ev){
			var aa=ev.target.offsetWidth+'px';
			var bb=ev.target.offsetLeft-6+'px';
			
			$('#paiHangBang-xiahuax_d').css({'width':aa,'margin-left':bb});
		}
		$('#paiHangBang-nerong li').eq(0).css({'display':'block'})
		function paiHangBangmovexxk(This){
			console.log(This)
			var  cc=This.index('#paiHangBang-calssname li');
			$('#paiHangBang-nerong li').eq(cc).css({'display':'block'})
			$('#paiHangBang-nerong li').eq(cc).siblings().css({'display':'none'})
		}
		
		$('.leftgudingdaohang li').eq(0).css({'border':'none'})
		$('.leftgudingdaohang li').mousemove(leftgudingdaohangmove);
		function  leftgudingdaohangmove(){
			$(this).css({'background-color':'red'});
			$(this).siblings().css({'background-color':'#888888'});
		}
		
		
		
		
		
		
		$('.rightgudingdaohang li').hover(rightgudingdaohangmove,rightgudingdaohangout);
		function rightgudingdaohangmove(){
			$(this).css({'background-color':'red'});
			//$(this).siblings().css({'background-color':'#888888'});
			var This=$(this);
			leftyidong(This);
		}
		function rightgudingdaohangout(){
			$(this).css({'background-color':'#888888'});
			var This=$(this);
			leftyidongout(This);
		}
		function leftyidong(This){
			var aa=This.index('.rightgudingdaohang li');
			$('.rightgudingdaohang p').eq(aa).show().css({'margin-left':'-70px','transition': '0.4s','opacity': '1'});
		}
		function leftyidongout(This){
			var aa=This.index('.rightgudingdaohang li');
			
			$('.rightgudingdaohang p').eq(aa).hide().css({'margin-left':'130px','transition': '0.4s','opacity': '0'})
		}
		
		//setInterval(showheid,100);
	
		



//==========================================================================vue.js			
		var HuaF=Vue.component("serviceEntryHuaF",{
			data:function(){
				return{
					message:'抢50元话费卷',
					message1:'App Store充值',
					message2:'低至18元'
				}
			},
			template:`<div id="serviceEntryRq">
				
				<div class="butput" id=butput>
					<input type="button" name="" id="hfcz" value="话费充值" class="butputbut"/>
					<input type="button" name="" id="llcz" value="流量充值" class="butputbut"/>
					<input type="button" name="" id="tcbg" value="套餐变更" class="butputbut"/>
				</div>
				<ul id="serviceEntryHuaF">
					<li>
						<label>号码
						<input type="tel" id="serviceEntryHuaFeiHaoM" value="" placeholder="移动/电信/联通" /></label>
					</li>
					<li>
						<label>面值
							<select name="">
								<option value="100元">100元</option>
								<option value="50元">50元</option>
								<option value="20元">20元</option>
								<option value="10元">10元</option>
							</select>
						<span id="hfczSpan">￥98-￥100</span>
						</label>
					</li>
					<li>
						<input type="button" name="" id="serviceEntryHuaFeiBut" value="快速充值" />
					</li>
					<li>
						<span id="serviceEntryHuaFeiHoutImg"> <img src="img/iframe-hot.png"/></span>
						<span id="serviceEntryHuaFeiHoutA">{{message}}</span>
					</li>
				</ul>
				
				
				<ul id="serviceEntryLiuLCz">
					<li>
						<label>号码
						<input type="tel" id="serviceEntryHuaFeiHaoM" value="" placeholder="移动/电信/联通" /></label>
					</li>
					<li>
						<label>流量
							<select name="" class="llFanW">
								<option value="全国">全国</option>
								<option value="省内">省内</option>
								
							</select>
							<select name="" class="liWatch">
								<option value="500M">500M</option>
								<option value="300M">300M</option>
								<option value="200M">200M</option>
								<option value="100M">100M</option>
								<option value="50M">50M</option>
							</select><br>	
						<span id="hfczSpan">￥75-￥100</span>
						</label>
					</li>
					<li>
						<input type="button" name="" id="serviceEntryHuaFeiBut" value="套餐变更" />
					</li>
					<li>
						<span id="serviceEntryHuaFeiHoutImg"> <img src="img/iframe-hot.png"/></span>
						<span id="serviceEntryHuaFeiHoutA">{{message1}}</span>
					</li>
				</ul>
				
				
				
				
				<ul id="serviceEntryTaoCanBianGeng">
					<li>
						<label>号码
						<input type="tel" id="serviceEntryHuaFeiHaoM" value="" placeholder="移动/电信/联通" /></label>
					</li>
					<li>
						<label>月费
							<select name="" class="taoCanBianGeng">
								<option value="38元">38元</option>
								<option value="48元">48元</option>
								<option value="58元">58元</option>
								<option value="88元">88元</option>
								<option value="138元" selected = "selected">138元</option>
								<option value="158元">158元</option>
								<option value="238元">238元</option>
								<option value="268元">268元</option>
								<option value="338元">338元</option>
								<option value="588元">588元</option>
							</select>	
						<span id="hfczSpan">500分钟1G流量</span>
						</label>
					</li>
					<li>
						<input type="button" name="" id="serviceEntryHuaFeiBut" value="快速充值" />
					</li>
					<li>
						<span id="serviceEntryHuaFeiHoutImg"> <img src="img/iframe-hot.png"/></span>
						<span id="serviceEntryHuaFeiHoutA">{{message2}}</span>
					</li>
				</ul>
				
				
				
				
				
				</div>`,
		});
		var JiP=Vue.component("serviceEntryJiP",{
			template:`<div id="serviceEntryRq">
				
				<ul id='serviceEntryJiPUl'>
					<li><img src="img/JiP.png"/></li>
				</ul>
				</div>`,
		});
		var JiuD=Vue.component('serviceEntryJiuD',{
			template:`<div id="serviceEntryRq">
				
				<ul id='serviceEntryJiuDUl'>
					<li><img src="img/JiuD.png"/></li>
				</ul>
				</div>`,
		});
		var YouX=Vue.component('serviceEntryYouX',{
			template:`<div id="serviceEntryRq" >
				
				<ul id='serviceEntryYouXUl'>
					<li><img src="img/YouX.png"/></li>
				</ul>
				</div>`,
		});
		new Vue({
			el:"#service_entry",
			data:{
				current:HuaF,
			},
			methods:{
				tabComponent(ind){
					if(ind===1){
						this.current=HuaF
					}else if(ind===2){
						this.current=JiP
					}
					else if(ind===3){
						this.current=JiuD
					}
					else if(ind===4){
						
						this.current=YouX
					}
					console.log(ind)
				}
			}
		});
		
		$("#service_entry a").mousemove(service_entrymove);
		function service_entrymove(e){
				var aa=e.target.offsetWidth+'px';
				var jj=e.target.offsetLeft-2+'px';
				
				$('.topIineHd').css({'width':aa,'margin-left':jj})
		}
		
		$('#butput input').mousemove(butputmkkove);
		function butputmkkove(e){
			
			$(this).css({'background-color':'red','color': '#fff'})
			$(this).siblings().css({'background-color':'#ffffff','color': '#D1CECE'})
			
		}
		$('#hfcz').mousemove(hfczmove);
		function hfczmove(){
			$('#serviceEntryHuaF').show();
			$('#serviceEntryLiuLCz').hide();
			$('#serviceEntryTaoCanBianGeng').hide();
			
		}
		$('#llcz').mousemove(llczmove);
		function llczmove(){
			$('#serviceEntryHuaF').hide();
			$('#serviceEntryLiuLCz').show();
			$('#serviceEntryTaoCanBianGeng').hide();
			
		}
		$('#tcbg').mousemove(tcbgmove);
		function tcbgmove(){
			$('#serviceEntryHuaF').hide();
			$('#serviceEntryLiuLCz').hide();
			$('#serviceEntryTaoCanBianGeng').show();
			
		}
		$('.serviceEntryRX').click(serviceEntryRXclick);
		function serviceEntryRXclick(){
			$('#rightlist_4_service_entry').toggle(500);
			$('#rightlist_4_service_list').show(1000)
		}
		
		$('#rightlist_4_service_list li:lt(3)').click(rightlistckikc);
		function rightlistckikc(){
			$('#rightlist_4_service_list').toggle(500);
			$('#rightlist_4_service_entry').show(1000);
			

		}
		console.timeEnd('a')
	})
}
//
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
