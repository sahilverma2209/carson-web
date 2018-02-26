var x;var y;


var ht = $('.p3').offset().top ;
var ht2 = $('.p4').offset().top ;
console.log('ht'+ht);
console.log('ht2'+ht2);

var flag1=0;
var flag2=0;
var flag3=0;

var ctx2 = document.getElementById('a');
ctx2.width = 220;
ctx2.height = 220;
ctx2.style.width = "110px";
ctx2.style.height = "110px";
if ($(window).width() > 768) {
	ctx2.getContext('2d').scale(3,3);
}
else{
	ctx2.getContext('2d').scale(2.3,2.3);
}



var ctx = document.getElementById('a').getContext('2d');
var al = 0;
var start = 4.72;
var cw = ctx.canvas.width;
var ch = ctx.canvas.height; 
var diff;
function progressSim(){
	
	diff = ((al / 100) * Math.PI*2*10).toFixed(2);
	ctx.clearRect(0, 0, cw, ch);
	ctx.lineWidth = 7;
	ctx.fillStyle = '#ee2b72';
	ctx.strokeStyle = "#ee2b72";
	ctx.textAlign = 'center';
	ctx.fillText(al+'%', 38, 38);
	ctx.beginPath();
	ctx.arc(35, 35, 30, start, diff/10+start, false);
	ctx.stroke();

	if(al >= 75){
		flag1++;
		clearTimeout(sim);
	}
	else{
	al++;}
}
var sim;

$(document).scroll(function() {
	console.log($(this).scrollTop());
	
    if( $(this).scrollTop() > ht-5 )
    {
		if(flag1==0 && al<=80)
		{
			sim = setInterval(progressSim, 40);
		}
	}
});


// Second STAT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


var ctx4 = document.getElementById('b');
ctx4.width = 220;
ctx4.height = 220;
ctx4.style.width = "110px";
ctx4.style.height = "110px";

if ($(window).width() > 768) {
	ctx4.getContext('2d').scale(3,3);
}
else{
	ctx4.getContext('2d').scale(2.3,2.3);
}


var ctx_4 = document.getElementById('b').getContext('2d');
var bl = 0;
var start4 = 4.72;
var cw4 = ctx_4.canvas.width;
var ch4 = ctx_4.canvas.height; 
var diff4;
function progressSim4(){
	
	diff4 = ((bl / 100) * Math.PI*2*10).toFixed(2);
	ctx_4.clearRect(0, 0, cw4, ch4);
	ctx_4.lineWidth = 7;
	ctx_4.fillStyle = '#ee2b72';
	ctx_4.strokeStyle = "#ee2b72";
	ctx_4.textAlign = 'center';
	ctx_4.fillText(bl+'%', 38, 38);
	ctx_4.beginPath();
	ctx_4.arc(35, 35, 30, start4, diff4/10+start4, false);
	ctx_4.stroke();
	if(bl >= 92){
		flag3++;
		clearTimeout(sim4);
	}else{
	bl++;}
}
var sim4;
$(document).scroll(function() {
	
    if( $(this).scrollTop() > ht-5 )
    {
		if(flag3==0)
		{
			sim4 = setInterval(progressSim4, 40);
		}
	}
});


// THIRD STAT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var ctx3 = document.getElementById('c');
ctx3.width = 220;
ctx3.height = 220;
ctx3.style.width = "110px";
ctx3.style.height = "110px";
if ($(window).width() > 768) {
	ctx3.getContext('2d').scale(3,3);
}
else{
	ctx3.getContext('2d').scale(2.3,2.3);
}


var ctx_3 = document.getElementById('c').getContext('2d');
var cl = 0;
var start3 = 4.72;
var cw3 = ctx_3.canvas.width;
var ch3 = ctx_3.canvas.height; 
var diff3;
function progressSim3(){
	
	diff3 = ((cl / 100) * Math.PI*2*10).toFixed(2);
	ctx_3.clearRect(0, 0, cw3, ch3);
	ctx_3.lineWidth = 7;
	ctx_3.fillStyle = '#ee2b72';
	ctx_3.strokeStyle = "#ee2b72";
	ctx_3.textAlign = 'center';
	ctx_3.fillText(cl+'%', 38, 38);
	ctx_3.beginPath();
	ctx_3.arc(35, 35, 30, start3, diff3/10+start3, false);
	ctx_3.stroke();
	if(cl >= 80){
		flag2++;
		clearTimeout(sim3);
	}else{
	cl++;}
}
var sim3;
$(document).scroll(function() {
	
    if( $(this).scrollTop() > ht-5 )
    {
		if(flag2==0)
		{
			sim3 = setInterval(progressSim3, 40);
		}
	}
});

