function Calcular(){

    let imput_cuenta = document.getElementById("valor_pagar").value
    let imput_porcentaje = document.getElementById("porcentaje_propina").value;
    
if (imput_cuenta === "" || imput_cuenta === null) {
    alert("Por favor ingresa el Valor a Pagar")
    return;
}

if (imput_porcentaje === "" || imput_porcentaje === null) {
    alert("Por favor ingresa el porcentaje de propina")
    return;
}

let total_cuenta = parseInt(imput_cuenta)
let porcentaje = parseInt(imput_porcentaje)
let valor_propina = parseInt(total_cuenta * porcentaje / 100)
//console.log(valor_propina)
let total_pagar = total_cuenta + valor_propina

document.getElementById("vr_inicial").innerHTML=total_cuenta;
document.getElementById("vr_propina").innerHTML=valor_propina;
document.getElementById("vr_total").innerHTML=total_pagar
document.getElementById("resume").classList.remove("oculto")
document.getElementById("resume").classList.add("visible")
console.log (total_pagar)

}

function Limpiar(){

document.getElementById("vr_inicial").innerHTML=""
document.getElementById("vr_propina").innerHTML=""
document.getElementById("vr_total").innerHTML=""

document.getElementById("valor_pagar").value=""
document.getElementById("porcentaje_propina").value=""
document.getElementById("resume").classList.remove("visible")
document.getElementById("resume").classList.add("oculto")
}