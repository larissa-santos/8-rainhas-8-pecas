<!DOCTYPE HTML>
<html>
<head>

    <script src="jquery-3-1-0.min.js"></script>
	<style>

	button {
		margin-bottom: 10px;
		border-radius: 5px;
		padding: 5px;
	}

	.posicoes {
	    float: left;
	    width: 50px;
	    height: 50px;
	    padding: 10px;
	    border: 1px solid black;
	    margin-bottom: -3px;
	}

	.queen {
		width: 47px;
	    height: 44px;
	    background: url('queen.png') no-repeat left bottom scroll;
	    -webkit-background-size: cover;
	    -moz-background-size: cover;
	    background-size: cover;
	    -o-background-size: cover;
	}

	.cell-preta {
		background-color: #7c7a7a;
	}

	.cell-error {
		background-color: red;
	}
	</style>
	<script>
	function allowDrop(ev) {
	    ev.preventDefault();
	}

	function drag(ev) {
		console.log(ev);
	    ev.dataTransfer.setData("text", ev.target.id);
	}

	function drop(ev) {
	    //ev.preventDefault();
	    // id da rainha que esta sendo movida
	    var data = ev.dataTransfer.getData("text");
	    // transferindo rainha de lugar
	    ev.target.appendChild(document.getElementById(data));
	    verificarValidade(ev);
	}

	function verificarValidade(ev) {
		var posicao = parseInt(ev.target.id.replace("div",""));
		console.log(posicao);
		var indice = posicao/8;
		
		// horizontal para frente
		// var i = posicao + 1;
		// console.log(i + '--');
		// console.log((i%8));
		for (var i = posicao + 1; (i%8) != 0; i++) {
			//if ($("#div"+i).children(".queen"))
			$("#div"+i).has(".queen").addClass("cell-error");
		}
		$("#div"+i).has(".queen").addClass("cell-error");
		
		// horizontal para trás
		for (var i = posicao - 1; (i%8) > 1; i--) {
			//if ($("#div"+i).children(".queen"))
			$("#div"+i).has(".queen").addClass("cell-error");
		}
		$("#div"+i).has(".queen").addClass("cell-error");

		// diagonal para frente
		// for (var i = posicao + 9; (i/8) < 8; i+9) {
		// 	console.log($("#div"+i));
		// }
		// $(".posicoes").each(function(){
		// 	var pos = this.id.replace("div","");
		// 	var ind = pos/8;
		// 	console.log(pos);
		// 	//if (this ){}

		// });
	}

	function solucao() {
		$('#div2').append($("#drag1"));
		$('#div12').append($("#drag2"));
		$('#div22').append($("#drag3"));
		$('#div32').append($("#drag4"));
		$('#div35').append($("#drag5"));
		$('#div41').append($("#drag6"));
		$('#div55').append($("#drag7"));
		$('#div61').append($("#drag8"));
	}

	function recomecar() {
		$('#div1').append($("#drag1"));
		$('#div9').append($("#drag2"));
		$('#div17').append($("#drag3"));
		$('#div25').append($("#drag4"));
		$('#div33').append($("#drag5"));
		$('#div41').append($("#drag6"));
		$('#div49').append($("#drag7"));
		$('#div57').append($("#drag8"));
	}
	</script>
</head>
<body>

<h2>Jogo das 8 rainhas</h2>
<p>Organize as rainhas sem que nenhuma se atacaque.</p>

<button onclick="solucao()">Solução</button>
<button onclick="recomecar()">Recomeçar</button>

<table class="tabuleiro">
	<tr>
		<td class="posicoes" id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
			<div class="queen" draggable="true" ondragstart="drag(event)" id="drag1"></div>
		</td>
		<td class="posicoes cell-preta" id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div3" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div4" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div5" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div6" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div7" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div8" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
	</tr>
	<tr>
		<td class="posicoes cell-preta" id="div9" ondrop="drop(event)" ondragover="allowDrop(event)">
	  		<div class="queen" draggable="true" ondragstart="drag(event)" id="drag2"></div>
		</td>
		<td class="posicoes" id="div10" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div11" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div12" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div13" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div14" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div15" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div16" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
	</tr>
	<tr>
		<td class="posicoes " id="div17" ondrop="drop(event)" ondragover="allowDrop(event)">
		  <div class="queen" draggable="true" ondragstart="drag(event)" id="drag3"></div>
		</td>
		<td class="posicoes cell-preta" id="div18" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div19" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div20" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div21" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div22" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div23" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div24" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
	</tr>
	<tr>
		<td class="posicoes cell-preta" id="div25" ondrop="drop(event)" ondragover="allowDrop(event)">
		  <div class="queen" draggable="true" ondragstart="drag(event)" id="drag4"></div>
		</td>
		<td class="posicoes" id="div26" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div27" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div28" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div29" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div30" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div31" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div32" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
	</tr>
	<tr>
		<td class="posicoes" id="div33" ondrop="drop(event)" ondragover="allowDrop(event)">
		  <div class="queen" draggable="true" ondragstart="drag(event)" id="drag5"></div>
		</td>
		<td class="posicoes cell-preta" id="div34" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div35" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div36" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div37" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div38" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div39" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div40" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
	</tr>
	<tr>
		<td class="posicoes cell-preta" id="div41" ondrop="drop(event)" ondragover="allowDrop(event)">
		  <div class="queen" draggable="true" ondragstart="drag(event)" id="drag6"></div>
		</td>
		<td class="posicoes" id="div42" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div43" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div44" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div45" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div46" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div47" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div48" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
	</tr>
	<tr>
		<td class="posicoes" id="div49" ondrop="drop(event)" ondragover="allowDrop(event)">
		  <div class="queen" draggable="true" ondragstart="drag(event)" id="drag7"></div>
		</td>
		<td class="posicoes cell-preta" id="div50" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div51" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div52" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div53" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div54" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div55" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div56" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
	</tr>
	<tr>
		<td class="posicoes cell-preta" id="div57" ondrop="drop(event)" ondragover="allowDrop(event)">
		  <div class="queen" draggable="true" ondragstart="drag(event)" id="drag8"></div>
		</td>
		<td class="posicoes" id="div58" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div59" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div60" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div61" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div62" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes cell-preta" id="div63" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td class="posicoes" id="div64" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
	</tr>
</table>

</body>
</html>
