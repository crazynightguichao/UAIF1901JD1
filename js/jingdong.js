window.onload=function(){
    
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

    //轮播图开始
	let index = 0
    let pages = document.querySelectorAll(".wheel-two a")
    let banner = document.querySelector(".wheel-two")
    let pre = document.querySelector(".wheel-two .left")
    let next = document.querySelector(".wheel-two .right")
    let dot = document.querySelectorAll(".dot")
    //事件 触发才调用 （异步）
    banner.onmouseenter = function(){
        clearInterval(t)
    }
    banner.onmouseleave = function(){
        t = setInterval(run,2000)
    }
    function run(status='next'){  //默认next
        //轮播一次
        if(status=='next'){
            index+=1
        }else if(status=='pre'){
            index-=1
        }
        if(index<0){
            index=7
        }
        if(index>7){
            index=0
        }
        pages.forEach(function(item,i){
            item.classList.remove("active")
        })
		pages[index].classList.add("active")
		
        dot.forEach(function(item,i){
            item.classList.remove("active")
        })
        dot[index].classList.add("active")
    }
    t = setInterval(run,2000)

    next.onclick = function(){
        run()
    }
    pre.onclick = function(){
        run('pre')
	}

	dot.forEach(function(item,i){
        item.onmouseenter = function(){
            pages.forEach(function(item,i){
                item.classList.remove("active")
            })
            pages[i].classList.add("active")
            dot.forEach(function(item,i){
                item.classList.remove("active")
            })
			dot[i].classList.add("active")
		}
		
	})
	//轮播图结束

	//无缝轮播开始
    let pagef = document.querySelectorAll(".kill-right .chn-img img")
    let bannerf = document.querySelector(".kill-right")
    let dotf = document.querySelectorAll(".chn-dots .dot")
    let prev = 0;
    let now = 0;
    pagef.forEach(function(item,i){
        if(i == 0){
            return;
        }
        item.style.left = "180px";
    }) 
    // 切换
    function run1(){
        now += 1;
        if(now>2){
            now = 0;
        }
        pagef[now].style.left = '180px';
        animate(pagef[now],{'left':0});
        animate(pagef[prev],{'left':-180});
        dotf.forEach(function(item){
            item.classList.remove("chn-active")
        })
        dotf[now].classList.add("chn-active")
        prev = now;
    }
    let f = setInterval(run1,4000);
    // 移入停止
    bannerf.onmouseenter = function(){
        clearInterval(f)
    }
    bannerf.onmouseleave = function(){
        f = setInterval(run1,4000)
    }
    // 轮播点点击事件
    dotf.forEach(function(item,i){
        item.onmouseenter = function(){
            if(i>now){
                pagef[i].style.left = '180px';
                animate(pagef[i],{'left':0});
                animate(pagef[prev],{'left':-180});
                dotf.forEach(function(item){
                    item.classList.remove("chn-active")
                })
                dotf[i].classList.add("chn-active")
                prev = i;
                now = i;
            }else{
                pagef[i].style.left = '-180px';
                animate(pagef[i],{'left':0});
                animate(pagef[prev],{'left':180});
                dotf.forEach(function(item){
                    item.classList.remove("chn-active")
                })
                dotf[i].classList.add("chn-active")
                prev = i;
                now = i;
            }
        }
    })
	//无缝轮播结束



}