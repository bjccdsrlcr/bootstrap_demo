$(function () {
    $('.col-md-4').height($('.col-md-8').height());
});

$('.progress-bar-success').css('width', '80%');
$('.progress-bar-info').css('width', '70%');
$('.progress-bar-warning').css('width', '90%');
$('.progress-bar-danger').css('width', '40%');
function drawProcess(context, text , process, border_color, text_color) {
    // 选出页面上所有class为process的canvas元素,然后迭代每一个元素画图(这里用Jquery的选择器选的)

    // 将绘图区域清空,如果是第一次在这个画布上画图,画布上没有东西,这步就不需要了
    context.clearRect(0, 0, 40, 40);

    // ***开始画一个灰色的圆
    context.beginPath();
    // 坐标移动到圆心
    context.moveTo(20, 20);
    // 画圆,圆心是24,24,半径24,从角度0开始,画到2PI结束,最后一个参数是方向顺时针还是逆时针
    context.arc(20, 20, 20, 0, Math.PI * 2, false);
    context.closePath();
    // 填充颜色
    context.fillStyle = '#ddd';
    context.fill();
    // ***灰色的圆画完

    // 画进度
    context.beginPath();
    // 画扇形的时候这步很重要,画笔不在圆心画出来的不是扇形
    context.moveTo(20, 20);
    // 跟上面的圆唯一的区别在这里,不画满圆,画个扇形
    context.arc(20, 20, 20, 0, Math.PI * 2 * process / 100, false);
    context.closePath();
    context.fillStyle = border_color;
    context.fill();

    // 画内部空白
    context.beginPath();
    context.moveTo(20, 20);
    context.arc(20, 20, 17, 0, Math.PI * 2, true);
    context.closePath();
    context.fillStyle = 'rgba(255,255,255,1)';
    context.fill();

    // 画一条线
    context.beginPath();
    context.arc(20, 20, 14.5, 0, Math.PI * 2, true);
    context.closePath();
    // 与画实心圆的区别,fill是填充,stroke是画线
    context.strokeStyle = '#ddd';
    context.stroke();

    //在中间写字
    context.font = "bold 9pt Arial";
    context.fillStyle = text_color;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.moveTo(20, 20);
    context.fillText(text, 20, 20);

}


    var cts =$('.canvas_all');
    var cts1 = $('.canvas_win');
    var cts2 = $('.canval_kda');
    var cts_array = [cts, cts1, cts2];
   /* var text = cts[0].innerHTML;
    var process = text.substring(0, text.length - 1);
    var context = cts[0].getContext("2d");*/
for(var i = 0; i<cts_array.length; i++) {
    for(var j =0; j< cts_array[i].length; j++){
        if(cts_array[i] === cts) {
            drawProcess(cts_array[i][j].getContext("2d"), cts_array[i][j].innerHTML,
                cts_array[i][j].innerHTML.substring(0, cts_array[i][j].innerHTML.length - 1), '#F0AD4E', '#F0AD4E');
        }
        if(cts_array[i] === cts1) {
            drawProcess(cts_array[i][j].getContext("2d"), cts_array[i][j].innerHTML,
                cts_array[i][j].innerHTML.substring(0, cts_array[i][j].innerHTML.length - 1), '#558422', '#558422');
        }
        if(cts_array[i] === cts2) {
            drawProcess(cts_array[i][j].getContext("2d"), cts_array[i][j].innerHTML,
                cts_array[i][j].innerHTML.substring(0, cts_array[i][j].innerHTML.length - 1), '#80654A', '#80654A');
        }
    }
}