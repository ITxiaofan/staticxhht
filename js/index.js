(function() {
	// 列表切换样式
	$(".list .nav li").click(function() {
		$(this).addClass("actives").siblings().removeClass("actives")
	});

	// 切换项目展示栏
	$(".project-pre-list .row .col-sm-2-5").click(function(event) {
		$(this).addClass("project-active").siblings().removeClass("project-active")
		$("#pictures .row").eq($(this).index()).addClass("picture-active").siblings().removeClass("picture-active")
	})
})()
// 鼠标悬停
$(".mover .col-sm-2").mouseover(e => {
	let getName = '.' + e.currentTarget.classList[1] + '-a'
	$('.project-list .mouse .col-sm-2').css('display', 'none')
	$(getName).css('display', 'block')
	$(getName).css('clear', 'left')
})

$(".mover .col-sm-2").mouseout(e => {
	let getName = '.' + e.currentTarget.classList[1] + '-a'
	$('.project-list .mouse .col-sm-2').css('display', 'none')
	$('.project-list .mouse .col-sm-2').css('clear', 'left')
	$(getName).mouseover((e) => {
		let getName = '.' + e.currentTarget.classList[1]
		$(getName).css('display', 'block')
	})
	$(getName).mouseout((e) => {
		let getName = '.' + e.currentTarget.classList[1]
		$(getName).css('display', 'none')
		$(getName).css('clear', 'left')
	})
})


//项目展示列表右侧图片宫格
$('#imgdiv img').click(e => {
	// console.log(e.target.outerHTML)
	$('.modal').css('display', 'block')
	$('.modal').append(e.target.outerHTML)
	$('.modal').click(() => {
		$('.modal').css('display', 'none')
	})
})

// $(
// 	function() {
// 		$('#imgdiv img').click(
// 			function() {
// 				$('.modal').html($(this).html());
// 				$('.modal').modal('toggle');
// 			}
// 		);
// 	}
// );
// swiper
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3, //显示3个
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
