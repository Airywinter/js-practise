//为按钮添加图片
var btn = document.getElementsByClassName("btn");
var btn_bottom = document.getElementsByClassName("div_bottom");
for(let i = 0;i < btn.length;i++){
    btn[i].style.backgroundImage = "url('img/sbanner/sbanner_0"+i+".png')";
}
var pic = document.getElementById("pic");
var img = document.getElementsByTagName("img");
var max = img.length - 1;
var left = document.getElementById("left");
var right = document.getElementById("right");
var count = 0;
//图片移动函数
function move(count){
    pic.style.transform = "translate("+ -804 * count + "px)";
}
//自动轮播
auto();
function auto(){
    timer = setInterval(function(){
        move(count);
        tab_render()
        if(count > max){
            count = 0;
            pic.style.transform = "translate(0px)";
        }
        count++;
    },3000);
}
pic.onmouseover = function(){
    clearInterval(timer);
}
pic.onmouseout = function(){
    auto();
}
//左右按钮
left.onmouseover = function(){
    clearInterval(timer);
}
left.onmouseout = function(){
    auto();
}
right.onmouseover = function(){
    clearInterval(timer);
}
right.onmouseout = function(){
    auto();
}
left.onclick = function(){
    count--;
    if(count < 0) count = max;
    tab_render()
    move(count);
}
right.onclick = function(){
    count++;
    if(count > max) count = 0;
    tab_render()
    move(count);
}
//底部按钮点击时换图片
for(let i = 0;i < btn.length;i++){
    btn[i].onclick = function(){
        count = i;
        move(i);
        tab_render();
    }
}
//底部颜色条
function tab_render(){
    var color=["#6A25E0","#607CA4","#C67833","#3A9087","#C26581","#7168B8"]
    for(var i=0;i<btn_bottom.length;i++){
        btn_bottom[i].style.backgroundColor="#303030";
    }
    btn_bottom[count].style.backgroundColor=color[count];
}