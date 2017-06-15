<!DOCTYPE HTML>
<html>
<head>

    <script src="jquery-3-1-0.min.js"></script>
	<link href="css/8-rainhas.css" rel="stylesheet">
	<script type="text/javascript" src="js/8-rainhas.js"></script>
</head>
<body>

<h2>Jogo das 8 rainhas</h2>
<p>Organize as rainhas sem que nenhuma se atacaque.</p>

<button onclick="solucao()">Solução</button>
<button onclick="recomecar()">Recomeçar</button>

<table class="tabuleiro">
	<tr>
		<td ataca="" class="posicoes" id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
			<div class="queen" draggable="true" anterior="div1" ondragstart="drag(event)" id="drag1"></div>
		</td>
		<td ataca="" class="posicoes cell-preta" id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div3" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div4" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div5" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div6" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div7" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div8" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
	</tr>
	<tr>
		<td ataca="" class="posicoes cell-preta" id="div9" ondrop="drop(event)" ondragover="allowDrop(event)">
	  		<div class="queen" draggable="true" anterior="div9" ondragstart="drag(event)" id="drag2"></div>
		</td>
		<td ataca="" class="posicoes" id="div10" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div11" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div12" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div13" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div14" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div15" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div16" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
	</tr>
	<tr>
		<td ataca="" class="posicoes " id="div17" ondrop="drop(event)" ondragover="allowDrop(event)">
		  <div class="queen" draggable="true" anterior="div17" ondragstart="drag(event)" id="drag3"></div>
		</td>
		<td ataca="" class="posicoes cell-preta" id="div18" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div19" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div20" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div21" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div22" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div23" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div24" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
	</tr>
	<tr>
		<td ataca="" class="posicoes cell-preta" id="div25" ondrop="drop(event)" ondragover="allowDrop(event)">
		  <div class="queen" draggable="true" anterior="div25" ondragstart="drag(event)" id="drag4"></div>
		</td>
		<td ataca="" class="posicoes" id="div26" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div27" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div28" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div29" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div30" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div31" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div32" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
	</tr>
	<tr>
		<td ataca="" class="posicoes" id="div33" ondrop="drop(event)" ondragover="allowDrop(event)">
		  <div class="queen" draggable="true" anterior="div33" ondragstart="drag(event)" id="drag5"></div>
		</td>
		<td ataca="" class="posicoes cell-preta" id="div34" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div35" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div36" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div37" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div38" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div39" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div40" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
	</tr>
	<tr>
		<td ataca="" class="posicoes cell-preta" id="div41" ondrop="drop(event)" ondragover="allowDrop(event)">
		  <div class="queen" draggable="true" anterior="div41" ondragstart="drag(event)" id="drag6"></div>
		</td>
		<td ataca="" class="posicoes" id="div42" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div43" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div44" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div45" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div46" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div47" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div48" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
	</tr>
	<tr>
		<td ataca="" class="posicoes" id="div49" ondrop="drop(event)" ondragover="allowDrop(event)">
		  <div class="queen" draggable="true" anterior="div49" ondragstart="drag(event)" id="drag7"></div>
		</td>
		<td ataca="" class="posicoes cell-preta" id="div50" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div51" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div52" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div53" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div54" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div55" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div56" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
	</tr>
	<tr>
		<td ataca="" class="posicoes cell-preta" id="div57" ondrop="drop(event)" ondragover="allowDrop(event)">
		  <div class="queen" draggable="true" anterior="div57" ondragstart="drag(event)" id="drag8"></div>
		</td>
		<td ataca="" class="posicoes" id="div58" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div59" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div60" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div61" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div62" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes cell-preta" id="div63" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
		<td ataca="" class="posicoes" id="div64" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
	</tr>
</table>

</body>
</html>
