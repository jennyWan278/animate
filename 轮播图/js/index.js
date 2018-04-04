window.onload=function () {
    let container = document.querySelector('.container');
    const  picwidth=container.offsetWidth;
    let box= container.children[0];
    let picArrlike=box.getElementsByTagName('li');
    let cricle = document.getElementsByClassName('cricle')[0];
    
    
    //将第一张图片复制
    const newli=picArrlike[0].cloneNode(true);
    box.appendChild(newli);
    
    //创建图片小圆圈
    for (let i = 0; i < picArrlike.length-1;i++){
        let newli=document.createElement('li');
        cricle.appendChild(newli);
    }

    let cricleArr = cricle.children;
    let criclearr = Array.prototype.slice.call(cricleArr);
    console.log(cricleArr);
    console.log(criclearr);
    console.log(criclearr[1]);
    //默认第一张图片被选中
    cricleArr[0].className="now";
    console.log(cricleArr);

    // requestAnimationFrame的兼容处理
    if (!window.requestAnimationFrame) {
        requestAnimationFrame = function (fn) {
            setTimeout(fn, 1000/60);
        };
    }
    
    //移动图片
    let start = 0, begin = 0;
    let change = 600, during = 50;
    let key=0,squre=0;
    // let isMoving=true;
        const step = function () {
            
            let lef = Tween.Cubic.easeOut(start, begin, change, during);
            let left = -lef;
            
            for (let i = 0; i < picArrlike.length; i++) {
                picArrlike[i].style.transform = 'translateX(' + left + 'px)';
            }
            
            if (start < during) {
                requestAnimationFrame(step);
            } else {
                // isMoving = false;
                start=-1;
                begin=lef;
            }
            start++;
        };


    // 设置定时器
    timer = setTimeout(function autoplay() {

        key++;
        if (key > picArrlike.length - 1) {
            begin = 0;
            key = 0;
        }
        step();

        squre++;
        if (squre > criclearr.length-1) {
            squre = 0;
        }
        for (let i = 0; i < criclearr.length; i++) {
            criclearr[i].className = "";
        }

        console.log(squre);
        criclearr[squre].className ='now';

        setTimeout(autoplay, 2000);
    }, 2000);;
   
    // step();
    // step();
   
    
}
