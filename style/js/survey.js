// percentages
var s1=81;
var s2=89;
var s3=65;
var s4=25;

// flags
var flag1=0;
var flag2=0;
var flag3=0;
var flag4=0;

// speed
var speed=40;

// offset
var ht = $('.p3').offset().top ;
var off=200;

var ctx2 = document.getElementById('a');
ctx2.width = 800;
ctx2.height = 800;
ctx2.style.width = "400px";
ctx2.style.height = "400px";
if ($(window).width() > 768) {
    ctx2.getContext('2d').scale(6,6);
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
    ctx.lineWidth = 4;
    ctx.fillStyle = '#ee2b72';
    ctx.strokeStyle = "#fd9394";
    ctx.textAlign = 'center';
    // ctx.fillText(al+'%', 38, 38);
    ctx.beginPath();
    ctx.arc(35, 35, 30, start, diff/10+start, false);
    ctx.stroke();

    if(al >= s1){
        flag1++;
        clearTimeout(sim);
    }
    else{
    al++;}
}
var sim;
$(document).scroll(function() {
	console.log($(this).scrollTop());
	
    if( $(this).scrollTop() > ht-off )
    {
		if(flag1==0 && al<=80)
		{
			sim = setInterval(progressSim, speed);
		}
	}
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var ctx4 = document.getElementById('b');
ctx4.width = 800;
ctx4.height = 800;
ctx4.style.width = "475px";
ctx4.style.height = "475px";

if ($(window).width() > 768) {
    ctx4.getContext('2d').scale(6,6);
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
    ctx_4.lineWidth = 3.5;
    ctx_4.fillStyle = '#ee2b72';
    ctx_4.strokeStyle = "#6ec6c5";
    ctx_4.textAlign = 'center';
    // ctx_4.fillText(bl+'%', 38, 38);
    ctx_4.beginPath();
    ctx_4.arc(35, 35, 30, start4, diff4/10+start4, false);
    ctx_4.stroke();
    if(bl >= s2){
        flag3++;
        clearTimeout(sim4);
    }else{
    bl++;}
}
var sim4;

$(document).scroll(function() {
	
    if( $(this).scrollTop() > ht-off )
    {
		if(flag3==0)
		{
			sim4 = setInterval(progressSim4, speed);
		}
	}
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


var ctx3 = document.getElementById('c');
ctx3.width = 800;
ctx3.height = 800;
ctx3.style.width = "550px";
ctx3.style.height = "550px";
if ($(window).width() > 768) {
    ctx3.getContext('2d').scale(6,6);
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
    ctx_3.lineWidth = 3;
    ctx_3.fillStyle = 'blue';
    ctx_3.strokeStyle = "#efee85";
    ctx_3.textAlign = 'center';
    //ctx_3.fillText(cl+'%', 38, 38);
    ctx_3.beginPath();
    ctx_3.arc(35, 35, 30, start3, diff3/10+start3, false);
    ctx_3.stroke();
    if(cl >= s3){
         flag2++;
        clearTimeout(sim3);
    }else{
    cl++;}
}
var sim3;

$(document).scroll(function() {
	
    if( $(this).scrollTop() > ht-off )
    {
		if(flag2==0)
		{
			sim3 = setInterval(progressSim3, speed);
		}
	}
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


var ctx5 = document.getElementById('d');
ctx5.width = 800;
ctx5.height = 800;
ctx5.style.width = "620px";
ctx5.style.height = "620px";
if ($(window).width() > 768) {
    ctx5.getContext('2d').scale(6,6);
}
else{
    ctx5.getContext('2d').scale(2.3,2.3);
}


var ctx_5 = document.getElementById('d').getContext('2d');
var dl = 0;
var start5 = 4.72;
var cw5 = ctx_5.canvas.width;
var ch5 = ctx_5.canvas.height; 
var diff5;
function progressSim5(){
    
    diff5 = ((dl / 100) * Math.PI*2*10).toFixed(2);
    ctx_5.clearRect(0, 0, cw5, ch5);
    ctx_5.lineWidth = 2.5;
    ctx_5.fillStyle = 'blue';
    ctx_5.strokeStyle = "#eaeaea";
    ctx_5.textAlign = 'center';
    //ctx_3.fillText(cl+'%', 38, 38);
    ctx_5.beginPath();
    ctx_5.arc(35, 35, 30, start5, diff5/10+start5, false);
    ctx_5.stroke();
    if(dl >= s4){
        flag4++;
        clearTimeout(sim5);
    }else{
    dl++;}
}
var sim5;

$(document).scroll(function() {
	
    if( $(this).scrollTop() > ht-off )
    {
		if(flag4==0)
		{
			sim5 = setInterval(progressSim5, speed);
		}
	}
});