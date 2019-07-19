var a = document.getElementById('one_left');
var b = a.getElementsByTagName('li');
var c = document.getElementsByClassName('onebox')[0];
var d = c.getElementsByTagName('div');
for (var i = 0; i < b.length; i++) {
	b[i].index = i;
	b[i].onmouseover = function() {
		for (j = 0; j < b.length; j++) {
			b[j].className = '';
			d[j].style.display = 'none';


		}
		this.className = 'active';
		d[this.index].style.display = 'block';

	}

}



var a1 = document.getElementById('oneright');
var b1 = a1.getElementsByTagName('li');
var c1 = document.getElementsByClassName('onebox2')[0];
var d1 = c1.getElementsByTagName('div');
for (var i = 0; i < b1.length; i++) {
	b1[i].index = i;
	b1[i].onmouseover= function() {
		for (j = 0; j < b1.length; j++) {
			b1[j].className = '';
			d1[j].style.display = 'none';


		}
		this.className = 'active';
		d1[this.index].style.display = 'block';


	}

}




var a2 = document.getElementById('tworight');
var b2 = a2.getElementsByTagName('li');
var c2 = document.getElementsByClassName('twobox')[0];
var d2 = c2.getElementsByTagName('div');
for (var i = 0; i < b2.length; i++) {
	b2[i].index = i;
	b2[i].onmouseover= function() {
		for (j = 0; j < b2.length; j++) {
			b2[j].className = '';
			d2[j].style.display = 'none';


		}
		this.className = 'active';
		d2[this.index].style.display = 'block';


	}

}


var a3=document.getElementById('three');
var b3=a3.getElementsByTagName('li');
var c3=document.getElementsByClassName('threebox')[0];
var d3=c3.getElementsByTagName('div');

for (var i = 0; i < b3.length; i++) {
	b3[i].index = i;
	b3[i].onmouseover= function() {
		for (j = 0; j < b3.length; j++) {
			b3[j].className = '';
			d3[j].style.display = 'none';


		}
		this.className = 'active';
		d3[this.index].style.display = 'block';


	}

}

var a4=document.getElementById('four_box');
var b4=a4.getElementsByTagName('li');
var c4=document.getElementsByClassName('four_box3')[0];
var d4=c4.getElementsByTagName('div');
for( var i=0;i<b4.length;i++){
	b4[i].index=i;
	b4[i].onmouseover=function(){
		for(j=0;j<b4.length;j++){
			b4[j].className='';
			d4[j].style.display='none';
		}
		this.className='active';
		d4[this.index].style.display='block';
	}
	
}


var a5=document.getElementById('bottom');
var b5=a5.getElementsByTagName('li');
var c5=document.getElementsByClassName('bottm_box2')[0];
var d5=c5.getElementsByTagName('div');
for(var i=0;i<b5.length;i++){
	b5[i].index=i;
	b5[i].onmouseover=function(){
		for(var j=0;j<b5.length;j++){
			b5[j].className='';
			d5[j].style.display='none';
		}
		this.classList='active';
		d5[this.index].style.display='block';
	}
}








