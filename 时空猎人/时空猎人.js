var a=document.getElementById('gamebox');
		var b=a.getElementsByTagName('p');
		var c=document.getElementsByClassName('box')[0];
		var d=c.getElementsByTagName('div');
		
		for(var i=0;i<b.length;i++){
			b[i].index=i;
			b[i].onmousemove=function(){
				for(j=0;j<b.length;j++){
					b[j].className='';
					d[j].style.display='none';
					
					
				}
				this.className='active';
				d[this.index].style.display='block';
				
				
			}
				
			
		}