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
			if ($("#div"+i).children(".queen").lenght > 0) {
				$("#div"+i).addClass("cell-error");
			} else {
				
			}
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