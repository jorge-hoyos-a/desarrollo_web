//Los eventos se ubican en las etiquetas de los elementos html (forma en desuso)
const user = "georgieH"
const pw = 1234
function verificar(){
    let usuario = document.getElementById("usuario").value
    let clave = document.getElementById("clave").value
            
    if(usuario == user && clave == pw){
        alert("Login exitoso")
    }else{
        alert("Revise los datos ingresados")
    }
}