window.onload = function(){
			var dra = document.getElementById("dragonDown");
			var dragon = document.getElementById("dragon");
			var up = document.getElementById("up");
			var down = document.getElementById("down");
			var styleList = document.getElementById("style");
			var strMove = '',strRun = '',strTreeRun = '',strYunRun = '',strSunRun = '';
			var count = 0;

			for ( var i = 0; i < 100; i++) {
				strMove += i + '%{background: url("img/' + (i % 5 + 1) + '.png") no-repeat;}';
				strRun += i + '%{background: url("img/bg.png") no-repeat;transform: translateX(' + -2 * i + 'px);}';
				strTreeRun += i + '%{background: url("img/tree.png") no-repeat;transform: translateX(' + -10 * i + 'px);}';
				strYunRun += i + '%{background: url("img/yun.png") no-repeat;transform: translateX(' + -15 * i + 'px);}';
				strSunRun += i + '%{transform: translateX(' + -12 * i + 'px);}';
			}
			window.onkeydown=function(evt){
			var objEvt=evt||window.event;
			if(objEvt.keyCode===40){
				dra.style.display = "block";
			}
			
			if(objEvt.keyCode===38){
				
					dragon.style.transform = "translateY(-80px)";
				
			}
		}
			window.onkeyup=function(evt){
			var objEvt=evt||window.event;
			if(objEvt.keyCode===40){
				
				dra.style.display = "none";
			
			}
			if(objEvt.keyCode===38){
			
				dragon.style.transform = "translateY(0px)";
			
			}
		}
			strMove = '@keyframes move{' + strMove + '}';
			strRun =  '@keyframes run{' + strRun + '}';
			strtreeRun =  '@keyframes treeRun{' + strTreeRun + '}';
			strYunRun =  '@keyframes yunRun{' + strYunRun + '}';
			strSunRun =  '@keyframes sunRun{' + strSunRun + '}';
			styleList.innerHTML = strMove + strRun + strtreeRun + strYunRun + strSunRun;
			

}
