var lform = document.getElementById("contactform");

var lNombre = document.getElementById("nombre");
var lEmail = document.getElementById("email");
var lTelefono = document.getElementById("telefono");
var lFormaContacto = document.getElementById("contacto");
var lComentarios = document.getElementById("comentarios");
var llblComentarios = document.getElementById("labelComentario");

lFormaContacto.addEventListener('change', verificaOpcionContacto);


function verificaOpcionContacto() 
{
    var lContactoSelected = document.getElementById("contacto").value;

    if (lContactoSelected === 'Otros')
    {
    	/*document.getElementById("demo").innerHTML = "Yes";*/
    	llblComentarios.style.visibility = "visible";        
    	lComentarios.style.visibility = "visible";
    } 
    else
    {
    	/*document.getElementById("demo").innerHTML = "false";*/      
        lComentarios.style.visibility = "hidden";
        llblComentarios.style.visibility = "hidden";        
    }
}


lform.addEventListener("submit", function(evt){
  
  if (lNombre.checkValidity() == false) 
  {
	  alert("El nombre no se ha indicado o está incorrecto.\nIndíquelo antes de continuar.");
	  lNombre.focus();
	  evt.preventDefault();
	  return false;
  }

  if (ValidateEmail(lEmail) == false) 
  {
	  alert("El email no se ha indicado o está incorrecto.\nIndíquelo antes de continuar.");
	  lEmail.focus();
	  evt.preventDefault();
	  return false;
  }

  if (ValidatePhoneNumber(lTelefono) == false) 
  {
	  alert("El teléfono no se ha indicado o está incorrecto.\nIndíque los 10 números antes de continuar.");
	  lTelefono.focus();
	  evt.preventDefault();
	  return false;
  }

  var lContactoSelectedAux = document.getElementById("contacto").value;
  if (lContactoSelectedAux === 'Otros')
  {
  	  // validar contenido del memo 150 palabras máximo
	  if (ValidaNumeroDePalabras(lComentarios, 150) == false) 
	  {
		  alert("Los comentarios exceden el número máximo de palabras permitidas.\nIndíque máximo 150 palabras antes de continuar.");
		  lComentarios.focus();
		  evt.preventDefault();
		  return false;
	  }
  }

  return true;	
});


function ValidateEmail(uemail)  
{  
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(uemail.value.match(mailformat))  
	{  
		return true;  
	}  
	else  
	{  
		return false;  
	}  
} 

function ValidatePhoneNumber(inputtxt)  
{  
  var phoneno = /^\d{10}$/;
  
  if(inputtxt.value.match(phoneno))  
  {  
  	 return true;  	       
  }  
  else  
  {  
      return false;  
  }  
}  

function ValidaNumeroDePalabras(memoComentarios, maximoPalabras)
{
    var wordLen = maximoPalabras; // Maximum word length
    var s = memoComentarios.value;
    
    s = s.trim();
    s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    
    var len = s.split(' ').length; 

    if(len > wordLen)
	{
		// restablecemos valores
		memoComentarios.oldValue = memoComentarios.value!=memoComentarios.oldValue?memoComentarios.value:memoComentarios.oldValue;
		memoComentarios.value = memoComentarios.oldValue?memoComentarios.oldValue:"";
	    return false;
	}
    
	return true;
}






