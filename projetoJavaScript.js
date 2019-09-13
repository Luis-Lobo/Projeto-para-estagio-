<!------------- Função para tabela iterativa---------------->

var tabDrones = [
["Vazio", 				     			0],
["asa_fixa_JA39_196,56", 				     19656],
["asa_fixa_OKEN_EPO_298,79", 				     29879],
["asa_fixa_OKEN_PHOENIX_TB-6011_225,34", 		     22534],
["asa_fixa_ZOHD_dark_asa_310,59",			     31059],
["asa_rotativa_Cheerson_CX40_169,52", 			     16952],
["asa_rotativa_Crazyflie2.1_open_source_729,03", 	     72903],
["asa_rotativa_DROCON_Ninja_629,90", 			     62990],
["asa_rotativa_eachine_E58_457,00", 		             45700],
["asa_rotativa_JJRC_NanoHexacopter_115,49", 		     11549]
];

function Mostra(ind) {
var foto = document.getElementById("imgCad");
var prec = document.getElementById("prcCad");
foto.src = "imagens/" + tabDrones[ind][0] + ".png";
prec.innerHTML = "R$ " + tabDrones[ind][1] ;
}

<!------Função para somar os valores da compra -------->
var tabTipos = [
"Asa Fixa",
"Asa Rotativa"
];

var tabProdutos = [
[0, "asa_fixa_JA39_196,56", 				     19656],
[0, "asa_fixa_OKEN_EPO_298,79", 			     29879],
[0, "asa_fixa_OKEN_PHOENIX_TB-6011_225,34", 		     22534],
[0, "asa_fixa_ZOHD_dark_asa_310,59",			     31059],
[1, "asa_rotativa_Cheerson_CX40_169,52", 		     16952],
[1, "asa_rotativa_Crazyflie2.1_open_source_729,03", 	     72903],
[1, "asa_rotativa_DROCON_Ninja_629,90", 	     	     62990],
[1, "asa_rotativa_eachine_E58_457,00", 		             45700],
[1, "asa_rotativa_JJRC_NanoHexacopter_115,49", 		     11549]
];


function Compra(f) {
var total = (f.TxtTotal.value > 0) ?
parseFloat(f.TxtTotal.value) : 0;
var nl = f.selProdutos.selectedIndex - 1;
var tp = tabProdutos[nl][0];
f.listaPedidos.value += tabTipos[tp] + " "
+ tabProdutos[nl][1] + "\n";
f.TxtTotal.value = total + tabProdutos[nl][2];
write("</tabProdutos[p][1]>");

}


