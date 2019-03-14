window.onload=function(){
    // 导航栏
    

    // 购物车
    let box1 = document.getElementsByClassName("buycar")[0]
	let box2 = document.getElementsByClassName("dropdown-layer")[0]
	box1.onmouseover = function(){
	    box2.style.display = "block"
	}
	box1.onmouseout = function(){
	    box2.style.display = "none"		
    }
    

    // 选项卡
	let boxs = document.querySelectorAll(".cate-menu-item")
	let cons = document.querySelectorAll(".cate_pop")
	boxs.forEach(function(v,i){
		v.onmouseenter = function(){
			cons[i].style.display = "block"
		}
		v.onmouseleave = function(){
			cons[i].style.display = "none"
		}
	})


}