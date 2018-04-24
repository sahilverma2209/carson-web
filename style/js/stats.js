var _x;var _y;


var _ht = $('.p3').offset().top ;
var _ht2 = $('.p4').offset().top ;
console.log('ht'+_ht);
console.log('ht2'+_ht2);

var _flag1=0;
var _flag2=0;
var _flag3=0;

var _ctx2 = document.getElementById('e');
_ctx2.width = 220;
_ctx2.height = 220;
_ctx2.style.width = "110px";
_ctx2.style.height = "110px";
if ($(window).width() > 768) {
	_ctx2.getContext('2d').scale(0,0);
}
else{
	_ctx2.getContext('2d').scale(2.3,2.3);
}



var _ctx = document.getElementById('e').getContext('2d');
var _al = 0;
var _start = 4.72;
var _cw = _ctx.canvas.width;
var _ch = _ctx.canvas.height; 
var _diff;
function _progressSim(){
	
	_diff = ((_al / 100) * Math.PI*2*10).toFixed(2);
	_ctx.clearRect(0, 0, _cw, _ch);
	_ctx.lineWidth = 7;
	_ctx.fillStyle = '#ee2b72';
	_ctx.strokeStyle = "#ee2b72";
	_ctx.textAlign = 'center';
	_ctx.fillText(_al+'%', 38, 38);
	_ctx.beginPath();
	_ctx.arc(35, 35, 30, _start, _diff/10+_start, false);
	_ctx.stroke();

	if(_al >= 75){
		_flag1++;
		clearTimeout(_sim);
	}
	else{
	_al++;}
}
var _sim;

$(document).scroll(function() {
	//console.log($(this).scrollTop());
	
    if( $(this).scrollTop() > _ht-105 )
    {
		if(_flag1==0 && _al<=80)
		{
			_sim = setInterval(_progressSim, 40);
		}
	}
});


// Second STAT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


var _ctx4 = document.getElementById('f');
_ctx4.width = 220;
_ctx4.height = 220;
_ctx4.style.width = "110px";
_ctx4.style.height = "110px";

if ($(window).width() > 768) {
	_ctx4.getContext('2d').scale(0,0);
}
else{
	_ctx4.getContext('2d').scale(2.3,2.3);
}


var _ctx_4 = document.getElementById('f').getContext('2d');
var _bl = 0;
var _start4 = 4.72;
var _cw4 = _ctx_4.canvas.width;
var _ch4 = _ctx_4.canvas.height; 
var _diff4;
function _progressSim4(){
	
	_diff4 = ((_bl / 100) * Math.PI*2*10).toFixed(2);
	_ctx_4.clearRect(0, 0, _cw4, _ch4);
	_ctx_4.lineWidth = 7;
	_ctx_4.fillStyle = '#ee2b72';
	_ctx_4.strokeStyle = "#ee2b72";
	_ctx_4.textAlign = 'center';
	_ctx_4.fillText(_bl+'%', 38, 38);
	_ctx_4.beginPath();
	_ctx_4.arc(35, 35, 30, _start4, _diff4/10+_start4, false);
	_ctx_4.stroke();
	if(_bl >= 92){
		_flag3++;
		clearTimeout(_sim4);
	}else{
	_bl++;}
}
var _sim4;
$(document).scroll(function() {
	
    if( $(this).scrollTop() > _ht-105 )
    {
		if(_flag3==0)
		{
			_sim4 = setInterval(_progressSim4, 40);
		}
	}
});


// THIRD STAT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var _ctx3 = document.getElementById('g');
_ctx3.width = 220;
_ctx3.height = 220;
_ctx3.style.width = "110px";
_ctx3.style.height = "110px";
if ($(window).width() > 768) {
	_ctx3.getContext('2d').scale(0,0);
}
else{
	_ctx3.getContext('2d').scale(2.3,2.3);
}


var _ctx_3 = document.getElementById('g').getContext('2d');
var _cl = 0;
var _start3 = 4.72;
var _cw3 = _ctx_3.canvas.width;
var _ch3 = _ctx_3.canvas.height; 
var _diff3;
function _progressSim3(){
	
	_diff3 = ((_cl / 100) * Math.PI*2*10).toFixed(2);
	_ctx_3.clearRect(0, 0, _cw3, _ch3);
	_ctx_3.lineWidth = 7;
	_ctx_3.fillStyle = '#ee2b72';
	_ctx_3.strokeStyle = "#ee2b72";
	_ctx_3.textAlign = 'center';
	_ctx_3.fillText(_cl+'%', 38, 38);
	_ctx_3.beginPath();
	_ctx_3.arc(35, 35, 30, _start3, _diff3/10+_start3, false);
	_ctx_3.stroke();
	if(_cl >= 80){
		_flag2++;
		clearTimeout(_sim3);
	}else{
	_cl++;}
}
var _sim3;
$(document).scroll(function() {
	
    if( $(this).scrollTop() > _ht-105 )
    {
		if(_flag2==0)
		{
			_sim3 = setInterval(_progressSim3, 40);
		}
	}
});

