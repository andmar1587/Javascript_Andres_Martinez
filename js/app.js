var numero1
var numero2
var operacion


var Calculadora = {
    init: function(){
        var self=this
        var uno=document.getElementById('1')
		var dos=document.getElementById('2')
		var tres=document.getElementById('3')
		var cuatro=document.getElementById('4')
		var cinco=document.getElementById('5')
		var seis=document.getElementById('6')
		var siete=document.getElementById('7')
		var ocho=document.getElementById('8')
		var nueve=document.getElementById('9')
		var cero=document.getElementById('0')
		var suma=document.getElementById('mas')
		var resta=document.getElementById('menos')
		var multiplicacion=document.getElementById('por')
		var division=document.getElementById('dividido')
		var igual=document.getElementById('igual')
		var reset=document.getElementById('on')
		var display=document.getElementById('display')
		var punto=document.getElementById('punto')
		var sign=document.getElementById('sign')
		this.aplicarEfectoTeclas();
        this.uno();
        this.dos();
        this.tres();
        this.cuatro();
        this.cinco();
        this.seis();
        this.siete();
        this.ocho();
        this.nueve();
        this.cero();
        this.punto();
        this.reset();
        this.suma();
        this.resta();
        this.multiplicacion();
        this.division();
        this.igual();
        this.signo();
       
    },
    //Aquí de encuentra el código para el efecto de tamaño en las teclas
    aplicarEfectoTeclas: function(){
        var teclas = document.getElementsByClassName('tecla');
        for(var i = 0; i <teclas.length; ++i) {
            teclas[i].onmousedown = this.presionarTecla;
            teclas[i].onmouseup = this.soltarTecla;
        }
    },
    presionarTecla: function(event){
        var tecla = event.target;
 		tecla.style.transform = "scale(0.93)"   
    },
    soltarTecla: function(event){
        var tecla = event.target;
 		tecla.style.transform = "scale(1)"   
    },

    //Aquie se encuentra la funciona de cada tecla
    uno: function(){
    	document.getElementById('1').addEventListener("click",function(){
    		if (verificaciondigitos()) {
	    		if(self.display.innerHTML == 0){
	    			self.display.innerHTML = '1';
	    		}else{
	    			self.display.innerHTML = self.display.innerHTML + '1';
	    		}
    		}
    	})
    },
    dos: function(){
    	document.getElementById('2').addEventListener("click",function(){
    		if (verificaciondigitos()) {
	    		if(self.display.innerHTML == 0){
	    			self.display.innerHTML = '2';
	    		}else{
	    			self.display.innerHTML = self.display.innerHTML + '2';
	    		}
    		}
    	})
    },
    tres: function(){
    	document.getElementById('3').addEventListener("click",function(){
    		if (verificaciondigitos()) {
	    		if(self.display.innerHTML == 0){
	    			self.display.innerHTML = '3';
	    		}else{
	    			self.display.innerHTML = self.display.innerHTML + '3';
	    		}
    		}
    	})
    },
    cuatro: function(){
    	document.getElementById('4').addEventListener("click",function(){
    		if (verificaciondigitos()) {
	    		if(self.display.innerHTML == 0){
	    			self.display.innerHTML = '4';
	    		}else{
	    			self.display.innerHTML = self.display.innerHTML + '4';
	    		}
    		}
    	})
    },
    cinco: function(){
    	document.getElementById('5').addEventListener("click",function(){
    		if (verificaciondigitos()) {
	    		if(self.display.innerHTML == 0){
	    			self.display.innerHTML = '5';
	    		}else{
	    			self.display.innerHTML = self.display.innerHTML + '5';
	    		}
    		}
    	})
    },
    seis: function(){
    	document.getElementById('6').addEventListener("click",function(){
    		if (verificaciondigitos()) {
	    		if(self.display.innerHTML == 0){
	    			self.display.innerHTML = '6';
	    		}else{
	    			self.display.innerHTML = self.display.innerHTML + '6';
	    		}
    		}
    	})
    },
    siete: function(){
    	document.getElementById('7').addEventListener("click",function(){
    		if (verificaciondigitos()) {
	    		if(self.display.innerHTML == 0){
	    			self.display.innerHTML = '7';
	    		}else{
	    			self.display.innerHTML = self.display.innerHTML + '7';
	    		}
    		}
    	})
    },
    ocho: function(){
    	document.getElementById('8').addEventListener("click",function(){
    		if (verificaciondigitos()) {
	    		if(self.display.innerHTML == 0){
	    			self.display.innerHTML = '8';
	    		}else{
	    			self.display.innerHTML = self.display.innerHTML + '8';
	    		}
    		}
    	})
    },
    nueve: function(){
    	document.getElementById('9').addEventListener("click",function(){
    		if (verificaciondigitos()) {
	    		if(self.display.innerHTML == 0){
	    			self.display.innerHTML = '9';
	    		}else{
	    			self.display.innerHTML = self.display.innerHTML + '9';
	    		}
    		}
    	})
    },
    cero: function(){
    	document.getElementById('0').addEventListener("click",function(){
    		if (verificaciondigitos()) {
	    		if(self.display.innerHTML == 0){
	    			self.display.innerHTML = '0';
	    		}else{
	    			self.display.innerHTML = self.display.innerHTML + '0';
	    		}
    		}
    	})
    },
    punto: function(){
    	document.getElementById('punto').addEventListener("click",function(){
    		if (verificaciondigitos()) {
	    		if(self.display.innerHTML == 0){
	    			
	    		}else if (verificarpunto()){
	    				
	    		}else{
	    			self.display.innerHTML = self.display.innerHTML + '.';
	    		}	
	    		
    		}
    	})
    },
    reset: function(){
    	document.getElementById('on').addEventListener("click",function(){
    		self.display.innerHTML='0'
    		numero1=0
    		numero2=0
    		operacion=''
    	})
    },
    suma: function(){
    	document.getElementById('mas').addEventListener("click",function(){
    		numero1=self.display.innerHTML
    		operacion='+'
    		limpiar()
    	})
    },
    resta: function(){
    	document.getElementById('menos').addEventListener("click",function(){
    		numero1=self.display.innerHTML
    		operacion='-'
    		limpiar()
    	})
    },
    multiplicacion: function(){
    	document.getElementById('por').addEventListener("click",function(){
    		numero1=self.display.innerHTML
    		operacion='*'
    		limpiar()
    	})
    },
    division: function(){
    	document.getElementById('dividido').addEventListener("click",function(){
    		numero1=self.display.innerHTML
    		operacion='/'
    		limpiar()
    	})
    },
    igual: function(){
    	document.getElementById('igual').addEventListener("click",function(){
    		numero2= self.display.innerHTML
    		resolver()
    	})
    },
    signo: function(){
    	document.getElementById('sign').addEventListener("click",function(){
    	if(self.display.innerHTML != 0){
    	  self.display.innerHTML*=-1
    	}	
    	})
    }
    



};
Calculadora.init();

function verificaciondigitos(){
		if(document.getElementById('display').innerHTML.length <=7){
			return true;	
		}else{
			return false;
		}
	}
function verificarpunto(){
	var displayaux=document.getElementById('display').innerHTML
	for(var i=0; i<displayaux.length;i++){
		if(displayaux.indexOf('.')!= -1){
			return true
		}else{
			return false
		}
	}
}
function limpiar(){
	display.innerHTML=''

}
function resolver(){
	res=0;
	switch(operacion){
		case'+':
		res=parseFloat(numero1)+parseFloat(numero2)
		break
		case'-':
		res=parseFloat(numero1)-parseFloat(numero2)
		break
		case'*':
		res=parseFloat(numero1)*parseFloat(numero2)
		break
		case'/':
		res=parseFloat(numero1)/parseFloat(numero2)
		break
	}
	Calculadora.reset()
	
		
			document.getElementById('display').innerHTML=res.toPrecision(8)
		
		

	
}
	

