window.onload = function() {
	var left = document.getElementById("left");
	var list = document.getElementById("list");
	var buttons = document.getElementById("buttons").getElementsByTagName("span");
	var prev = document.getElementById("prev")
	var next = document.getElementById("next")

	var index = 1;

	var animated = false;
	var timer;

	function showButton() {
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i].className == 'on') {
				buttons[i].className = '';
				break;
			}
		}
		buttons[index - 1].className = 'on';
	}

	//点击箭头时图片切换
	function animate(offset) {
		animated = true;
		var newLeft = parseInt(list.style.left) + offset;

		var time = 300; //位移总时间
		var interval = 10; //位移间隔时间
		var speed = offset / (time / interval); //每次位移量

		function go() {
			if ((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)) {
				list.style.left = parseInt(list.style.left) + speed + 'px';

				//			调用
				setTimeout(go, interval);

			} else {
				animated = false;
				list.style.left = newLeft + 'px';

				if (newLeft > -550) {
					list.style.left = -2750 + 'px';
				}
				if (newLeft < -2750) {
					list.style.left = -550 + 'px';
				}
			}
		}
		go();
	}

	function play() {
		//		播放,可以一直执行,setTimeOut之后执行一次
		timer = setInterval(function() {
			next.onclick();
		}, 3000);
	}

	function stop() {
		clearInterval(timer);
	}
	//	点击右箭头
	next.onclick = function() {
			if (index == 5) {
				index = 1;
			} else {
				index += 1;
			}
			if (!animated) {
				animate(-550);
			}

			showButton();
		}
		//点击左箭头
	prev.onclick = function() {
		if (index == 1) {
			index = 5;
		} else {
			index -= 1;
		}

		showButton();
		if (!animated) {
			animate(550);
		}

	}

	//	按钮切换
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function() {

			if (this.className == 'on') {
				return;
			}

			//index为自定义属性,只能通过getAttention取得index的值
			var myIndex = parseInt(this.getAttribute('index'));
			var offset = -550 * (myIndex - index);
			if (!animated) {
				animate(offset);
			}

			index = myIndex;
			showButton();
		}
	}
	 
	left.onmouseover = stop;
	left.onmouseout = play;
	play();
}