window.onload = function(){
    // 定位
    let local = document.querySelector(".head-left")
    let addr = document.querySelector(".address")
    let line1 = document.querySelector(".head-left-line")
    local.onmouseenter = function(){
        addr.style.display = "block"
        local.style.backgroundColor = '#fff'
        local.style.border= "1px solid #ccc";
        line1.style .display = "block"
    }
    local.onmouseleave = function(){
        addr.style.display = "none"
        local.style.backgroundColor = ''
        local.style.border= "1px solid transparent";
        line1.style .display = "none"
    }
    // 我的京东
    let jingd = document.querySelector(".my-box")
    let my = document.querySelector(".my")
    let line2 = document.querySelector(".my-box-line")
    jingd.onmouseenter = function(){
        my.style.display = "block"
        jingd.style.backgroundColor = '#fff'
        jingd.style.border= "1px solid #ccc";
        line2.style.display = "block"
    }
    jingd.onmouseleave = function(){
        my.style.display = "none"
        jingd.style.backgroundColor = ''
        jingd.style.border= "1px solid transparent";
        line2.style.display = "none"
    }
    // 企业采购
    let firm_box = document.querySelector(".firm-box")
    let firm = document.querySelector(".firm")
    let line3 = document.querySelector(".firm-box-line")
    firm_box.onmouseenter = function(){
        firm.style.display = "block"
        firm_box.style.backgroundColor = '#fff'
        firm_box.style.border= "1px solid #ccc";
        line3.style.display = "block"
    }
    firm_box.onmouseleave = function(){
        firm.style.display = "none"
        firm_box.style.backgroundColor = ''
        firm_box.style.border= "1px solid transparent";
        line3.style.display = "none"
    }
    // 客户服务
    let client_box = document.querySelector(".client-box")
    let client = document.querySelector(".client")
    let line4 = document.querySelector(".client-box-line")
    client_box.onmouseenter = function(){
        client.style.display = "block"
        client_box.style.backgroundColor = '#fff'
        client_box.style.border= "1px solid #ccc";
        line4.style.display = "block"
    }
    client_box.onmouseleave = function(){
        client.style.display = "none"
        client_box.style.backgroundColor = ''
        client_box.style.border= "1px solid transparent";
        line4.style.display = "none"
    }
    // 网站导航
    let web_box = document.querySelector(".web-box")
    let web = document.querySelector(".web")
    let line5 = document.querySelector(".web-box-line")
    web_box.onmouseenter = function(){
        web.style.display = "block"
        web_box.style.backgroundColor = '#fff'
        web_box.style.border= "1px solid #ccc";
        line5.style.display = "block"
    }
    web_box.onmouseleave = function(){
        web.style.display = "none"
        web_box.style.backgroundColor = ''
        web_box.style.border= "1px solid transparent";
        line5.style.display = "none"
    }
    // 手机京东
    let phone_box = document.querySelector(".phone-box")
    let phone = document.querySelector(".phone-pop")
    phone_box.onmouseenter = function(){
        phone.style.display = "block"
    }
    phone_box.onmouseleave = function(){
        phone.style.display = "none"
    }
    // 购物车
    let car = document.querySelector(".shopcar")
    let down = document.querySelector(".shopcar-down")
    let shopline = document.querySelector(".shopcar-line")
    car.onmouseenter = function(){
        down.classList.remove("disp")
        shopline.style.display = "block"
    }
    car.onmouseleave = function(){
        down.classList.add("disp")
        shopline.style.display = "none"
    }

    // 透明轮播
    let index = 0;
    let page = document.querySelectorAll(".banner .banner-img a")
    let banner = document.querySelector(".banner-img")
    let pre = document.querySelector(".banner .button-left")
    let next = document.querySelector(".banner .button-right")
    let dots = document.querySelectorAll(".banner .dots li div")
        // 移入停止
    banner.onmouseenter = function(){
        clearInterval(t)
    }
    banner.onmouseleave = function(){
        t = setInterval(run,5000)
    }
        // 自动轮播
    function run(status='next'){
        // 轮播一次
        if(status == 'next'){
            index += 1;
        }else if(status == 'pre'){
            index -= 1;
        }
        if(index < 0){
            index = 7
        }
        if(index > 7){
            index = 0
        }
        page.forEach(function(item,i){
            item.classList.remove("active")
        })
        page[index].classList.add("active")
        dots.forEach(function(item,i){
            item.classList.remove("dot-active")
        })
        dots[index].classList.add("dot-active")
    }
    let t = setInterval(run,5000)
        // 左右点击事件
    pre.onclick = function(){
        run("pre")
    }
    next.onclick = function(){
        run()
    }
        // 轮播点点击事件
    dots.forEach(function(item,i){
        item.onmouseenter = function(){
            page.forEach(function(item){
                item.classList.remove("active")
            })
            page[i].classList.add("active")
            dots.forEach(function(item){
                item.classList.remove("dot-active")
            })
            dots[i].classList.add("dot-active")
            index = i;
        }
    })

    // 闪购平移轮播
    let pagem = document.querySelectorAll(".flash-box .flash-move-box")
    let prem = document.querySelector(".flash-box .prev") 
    let nextm = document.querySelector(".flash-box .next") 
    let prevm = 0;
    let nowm = 0;
    pagem.forEach(function(item,i){
        if(i == 0){
            return;
        }
        item.style.left = "800px";
    })
    function runm(status = "next"){
        if(status == "next"){
            nowm += 1;
            if(nowm>2){
                nowm = 0;
            }
            pagem[nowm].style.left = '800px';
            animate(pagem[nowm],{'left':0});
            animate(pagem[prevm],{'left':-800});
        }else if(status == "pre"){
            nowm -= 1;
            if(nowm<0){
                nowm = 2;
            }
            pagem[nowm].style.left = '-800px';
            animate(pagem[nowm],{'left':0});
            animate(pagem[prevm],{'left':800});
        }
        prevm = nowm;
    }
    // 箭头
    prem.onclick = function(){
        runm("pre")
    }
    nextm.onclick = function(){
        runm()
    }

    //闪购无缝轮播
    let pagef = document.querySelectorAll(".flash-chn .chn-img img")
    let bannerf = document.querySelector(".flash-chn")
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
            if(i===now){
                return;
            }
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
            }else if(i<now){
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

    // 排行榜
    let tab = document.querySelectorAll(".tab-box .tab")
    let body_box = document.querySelectorAll(".content-top .body-box")
    tab.forEach(function(item,i){
        item.onmouseenter = function(){
            tab.forEach(function(item){
                item.classList.remove("con1-active")
            })
            this.classList.add("con1-active")
            body_box.forEach(function(item){
                item.classList.remove("active")
            })
            body_box[i].classList.add("active")
        }
    })
    body_box.forEach(function(item,i){
        item.onmouseenter = function(){
            let rank = document.querySelectorAll(".content-one .content-top .body-items")
            let rank_btn = document.querySelectorAll(".content-one .content-top .body-box .slider-dot")
            rank_btn.forEach(function(){
                rank_btn[1].onmouseenter = function(){
                    rank[0].style.left = "-350px"
                    rank_btn[0].classList.remove("sdot-active")
                    this.classList.add("sdot-active")
                }
                rank_btn[0].onmouseenter = function(){
                    rank[0].style.left = "0"
                    rank_btn[1].classList.remove("sdot-active")
                    this.classList.add("sdot-active")
                }
                rank_btn[3].onmouseenter = function(){
                    rank[1].style.left = "-350px"
                    rank_btn[2].classList.remove("sdot-active")
                    this.classList.add("sdot-active")
                }
                rank_btn[2].onmouseenter = function(){
                    rank[1].style.left = "0"
                    rank_btn[3].classList.remove("sdot-active")
                    this.classList.add("sdot-active")
                }
                rank_btn[5].onmouseenter = function(){
                    rank[2].style.left = "-350px"
                    rank_btn[4].classList.remove("sdot-active")
                    this.classList.add("sdot-active")
                }
                rank_btn[4].onmouseenter = function(){
                    rank[2].style.left = "0"
                    rank_btn[5].classList.remove("sdot-active")
                    this.classList.add("sdot-active")
                }
                rank_btn[7].onmouseenter = function(){
                    rank[3].style.left = "-350px"
                    rank_btn[6].classList.remove("sdot-active")
                    this.classList.add("sdot-active")
                }
                rank_btn[6].onmouseenter = function(){
                    rank[3].style.left = "0"
                    rank_btn[7].classList.remove("sdot-active")
                    this.classList.add("sdot-active")
                }
                rank_btn[9].onmouseenter = function(){
                    rank[4].style.left = "-350px"
                    rank_btn[8].classList.remove("sdot-active")
                    this.classList.add("sdot-active")
                }
                rank_btn[8].onmouseenter = function(){
                    rank[4].style.left = "0"
                    rank_btn[9].classList.remove("sdot-active")
                    this.classList.add("sdot-active")
                }
            })
        }
    })
    

    // 会买专辑轮播
    let pagec = document.querySelectorAll(".content-one .content-middle .center-box .center")
    let bannerc = document.querySelector(".content-one .content-middle")
    let dotc = document.querySelectorAll(".content-one .content-middle .slider .slider-dot")
    let prec = document.querySelector(".content-one .content-middle .prev") 
    let nextc = document.querySelector(".content-one .content-middle .next") 
    let prevc = 0;
    let nowc = 0;
    pagec.forEach(function(item,i){
        if(i == 0){
            return;
        }
        item.style.left = "350px";
    })
    // 切换
    function run2(status = "next"){
        if(status == "next"){
            nowc += 1;
            if(nowc>2){
                nowc = 0;
            }
            pagec[nowc].style.left = '350px';
            animate(pagec[nowc],{'left':0});
            animate(pagec[prevc],{'left':-350});
            dotc.forEach(function(item){
                item.classList.remove("sdot-active")
            })
            dotc[nowc].classList.add("sdot-active")
        }else if(status == "pre"){
            nowc -= 1;
            if(nowc<0){
                nowc = 2;
            }
            pagec[nowc].style.left = '-350px';
            animate(pagec[nowc],{'left':0});
            animate(pagec[prevc],{'left':350});
            dotc.forEach(function(item){
                item.classList.remove("sdot-active")
            })
            dotc[nowc].classList.add("sdot-active")
        }
        prevc = nowc;
    }
    let c = setInterval(run2,4000);
    // 箭头
    prec.onclick = function(){
        run2("pre")
    }
    nextc.onclick = function(){
        run2()
    }
    // 移入停止
    bannerc.onmouseenter = function(){
        clearInterval(c)
    }
    bannerc.onmouseleave = function(){
        c = setInterval(run2,4000)
    }
    // 轮播点点击事件
    dotc.forEach(function(item,i){
        item.onmouseenter = function(){
            if(i===nowc){
                return;
            }
            if(i>nowc){
                pagec[i].style.left = '350px';
                animate(pagec[i],{'left':0});
                animate(pagec[prevc],{'left':-350});
                dotc.forEach(function(item){
                    item.classList.remove("sdot-active")
                })
                dotc[i].classList.add("sdot-active")
                prevc = i;
                nowc = i;
            }else if(i<nowc){
                pagec[i].style.left = '-350px';
                animate(pagec[i],{'left':0});
                animate(pagec[prevc],{'left':350});
                dotc.forEach(function(item){
                    item.classList.remove("sdot-active")
                })
                dotc[i].classList.add("sdot-active")
                prevc = i;
                nowc = i;
            }
        }
    })

    // 领券中心
    let Coupon = document.querySelector(".content-one .content-bottom .middle")
    let cou_btn = document.querySelectorAll(".content-one .content-bottom .slider-dot")
    cou_btn.forEach(function(){
        cou_btn[1].onmouseenter = function(){
            Coupon.style.left = "-350px"
            cou_btn.forEach(function(item){
                item.classList.remove("sdot-active")
            })
            this.classList.add("sdot-active")
        }
        cou_btn[0].onmouseenter = function(){
            Coupon.style.left = "0"
            cou_btn.forEach(function(item){
                item.classList.remove("sdot-active")
            })
            this.classList.add("sdot-active")
        }
    })
       


    // 觅me轮播
    let page2 = document.querySelectorAll(".content-two .content-middle .center-box .center")
    let banner2 = document.querySelector(".content-two .content-middle")
    let dot2 = document.querySelectorAll(".content-two .content-middle .slider .slider-dot")
    let pre2 = document.querySelector(".content-two .content-middle .prev") 
    let next2 = document.querySelector(".content-two .content-middle .next") 
    let prev2 = 0;
    let now2 = 0;
    page2.forEach(function(item,i){
        if(i == 0){
            return;
        }
        item.style.left = "350px";
    })
    // 切换
    function run3(status = 'next'){
        if(status == "next"){
            now2 += 1;
            if(now2>2){
                now2 = 0;
            }
            page2[now2].style.left = '350px';
            animate(page2[now2],{'left':0});
            animate(page2[prev2],{'left':-350});
            dot2.forEach(function(item){
                item.classList.remove("sdot-active")
            })
            dot2[now2].classList.add("sdot-active")
        }else if(status == "pre"){
            now2 -= 1;
            if(now2<0){
                now2 = 2;
            }
            page2[now2].style.left = '-350px';
            animate(page2[now2],{'left':0});
            animate(page2[prev2],{'left':350});
            dot2.forEach(function(item){
                item.classList.remove("sdot-active")
            })
            dot2[now2].classList.add("sdot-active")
        }
        prev2 = now2;
    }
    let me = setInterval(run3,4000);
    // 箭头
    pre2.onclick = function(){
        run3("pre")
    }
    next2.onclick = function(){
        run3()
    }
    // 移入停止
    banner2.onmouseenter = function(){
        clearInterval(me)
    }
    banner2.onmouseleave = function(){
        me = setInterval(run3,4000)
    }
    // 轮播点点击事件
    dot2.forEach(function(item,i){
        item.onmouseenter = function(){
            if(i===now2){
                return;
            }
            if(i>now2){
                page2[i].style.left = '350px';
                animate(page2[i],{'left':0});
                animate(page2[prev2],{'left':-350});
                dot2.forEach(function(item){
                    item.classList.remove("sdot-active")
                })
                dot2[i].classList.add("sdot-active")
                prev2 = i;
                now2 = i;
            }else if(i<now2){
                page2[i].style.left = '-350px';
                animate(page2[i],{'left':0});
                animate(page2[prev2],{'left':350});
                dot2.forEach(function(item){
                    item.classList.remove("sdot-active")
                })
                dot2[i].classList.add("sdot-active")
                prev2 = i;
                now2 = i;
            }
        }
    })

    // 特色推荐轮播
    let pages = document.querySelectorAll(".special .special-box .special-bd")
    let banners = document.querySelector(".special")
    let dot = document.querySelectorAll(".special .slider .slider-dot")
    let sprev = document.querySelector(".special .control-prev")
    let snext = document.querySelector(".special .control-next")
    let prevs = 0;
    let nows = 0;
    pages.forEach(function(item,i){
        if(i == 0){
            return;
        }
        item.style.left = "1190px";
    })
    // 切换
    function run4(status = 'next'){
        if(status == "next"){
            nows += 1;
            if(nows>3){
                nows = 0;
            }
            pages[nows].style.left = '1190px';
            animate(pages[nows],{'left':0});
            animate(pages[prevs],{'left':-1190});
            dot.forEach(function(item){
                item.classList.remove("sdot-active")
            })
            dot[nows].classList.add("sdot-active")
        }else if(status == "pre"){
            nows -= 1;
            if(nows<0){
                nows = 3;
            }
            pages[nows].style.left = '-1190px';
            animate(pages[nows],{'left':0});
            animate(pages[prevs],{'left':1190});
            dot.forEach(function(item){
                item.classList.remove("sdot-active")
            })
            dot[nows].classList.add("sdot-active")
        }
        prevs = nows;
    }
    let s = setInterval(run4,4000);
    // 左右箭头
    sprev.onclick = function(){
        run4("pre")
    }
    snext.onclick = function(){
        run4()
    }
    // 移入停止
    banners.onmouseenter = function(){
        clearInterval(s)
    }
    banners.onmouseleave = function(){
        s = setInterval(run4,4000)
    }
    // 轮播点点击事件
    dot.forEach(function(item,i){
        item.onmouseenter = function(){
            if(i===nows){
                return;
            }
            if(i>nows){
                pages[i].style.left = '1190px';
                animate(pages[i],{'left':0});
                animate(pages[prevs],{'left':-1190});
                dot.forEach(function(item){
                    item.classList.remove("sdot-active")
                })
                dot[i].classList.add("sdot-active")
                prevs = i;
                nows = i;
            }else if(i<nows){
                pages[i].style.left = '-1190px';
                animate(pages[i],{'left':0});
                animate(pages[prevs],{'left':1190});
                dot.forEach(function(item){
                    item.classList.remove("sdot-active")
                })
                dot[i].classList.add("sdot-active")
                prevs = i;
                nows = i;
            }
        }
    })
    
    let back = document.querySelector(".jdm-toolbar-tabsdi")
    back.onclick = function(){
        animate(document.documentElement,{scrollTop:0});
    }

}