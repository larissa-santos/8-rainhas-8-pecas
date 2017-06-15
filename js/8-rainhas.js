	var cellAtual = null;

	function allowDrop(ev) {
	    ev.preventDefault();
	}

	function drag(ev) {
	    ev.dataTransfer.setData("text", ev.target.id);
	}

	function removeAtaca(remove, local){
		var atacadas = $("#div"+local).attr('ataca');
		var att = atacadas.split(",");
		atacadas = [];
		for (var i = att.length - 1; i >= 0; i--) {
			if (att[i] != remove) {
				atacadas.push(att[i]);
			}
		}
		atacadas = atacadas.join(',');

		// testa se tem algum numero na variavel
		if (!(/([0-9])+/.test(atacadas))) {
			// remove alerta de erro e atualiza ataca para vazio
		 	$("#div"+local).removeClass("cell-error");
		 	$("#div"+local).attr('ataca', '');
		} else {
			$("#div"+local).attr('ataca', atacadas);
		}
	}

	function atualizaAtacava(data){
		var cellAnteiror = $("#"+data).attr("anterior");
	    var atacava = $("#"+cellAnteiror).attr("ataca");

	    var indice = cellAnteiror.replace("div","");

	    atacava = atacava.split(",");
	    for (var i = atacava.length - 1; i >= 0; i--) {
	    	if (parseInt(atacava[i]) > 0) {
	    		removeAtaca(indice, atacava[i]);
	    	}
	    }

	    // remove celulas que atacava e alerta de erro
	    $("#"+cellAnteiror).attr("ataca",'');
	    $("#"+cellAnteiror).removeClass("cell-error");
	}

	function drop(ev) {
	    //ev.preventDefault();
	    // id da rainha que esta sendo movida
	    var data = ev.dataTransfer.getData("text");
	    // transferindo rainha de lugar
	    ev.target.appendChild(document.getElementById(data));
	    
	    atualizaAtacava(data);
	    
	    var cellAtual = ev.target.id;
	    $("#"+data).attr("anterior", cellAtual);

	    verificarValidade(ev.target.id);
	}

	function addAtaca(add, cell){
		var atacadas = $("#"+cell).attr('ataca');
		atacadas = atacadas.split(",");
		if($.inArray(''+add, atacadas) === -1) atacadas.push(add);
		
		$("#"+cell).attr('ataca', atacadas.join(","));
	}

	function verificaFilho(i, pai) {
		if ($("#div"+i).children(".queen").length > 0) {
			$("#div"+i).addClass("cell-error");
			
			if ($("#"+pai).children(".queen").length > 0) addAtaca(i, pai);
			
			addAtaca(pai.replace("div",""), "div"+i);
			return 1;
		} 
		return 0;
	}

	function verificarValidade(id) {
		var posicao = parseInt(id.replace("div",""));
		var indice = posicao%8;
		var valida = 0;		

		// horizontal para frente
		for (var i = posicao + 1; (i%8) > 1; i++) {
			valida += verificaFilho(i, id);
		}
		if (indice !== 0) {
			valida += verificaFilho(i, id);
		}
		
		// horizontal para trás
		for (var i = posicao - 1; (i%8) > 1; i--) {
			valida += verificaFilho(i, id);
		}
		if (indice !== 1)  {
			valida += verificaFilho(i, id);
		}
		
		// vertical para baixo
		var i = posicao + 8; 
		while (i < 65) {
			valida += verificaFilho(i, id);
			i += 8;
		}
		// vertical para cima
		var i = posicao - 8; 
		while (i > 0) {
			valida += verificaFilho(i, id);
			i -= 8;
		}

		// diagonal principal para baixo
		if ((posicao%8) !== 0) {
			var i = posicao + 9; 
			while (i < 65 && (i%8) > 1) {
				valida += verificaFilho(i, id);
				i += 9;
			}
			if ((i%8) == 0) {
				valida += verificaFilho(i, id);
			}
		}

		// diagonal principal para cima
		var i = posicao - 9; 
		if ((posicao%8) !== 1) {
			while (i > 0 && (i%8) > 1) {
				valida += verificaFilho(i, id);
				i -= 9;
			}
			if ((i%8) == 1) {
				valida += verificaFilho(i, id);
			}
		}

		// diagonal secundaria para baixo
		if ((posicao%8) !== 1) {
			var i = posicao + 7; 
			while (i < 64 && (i%8) > 1) {
				valida += verificaFilho(i, id);
				i += 7;
			}
			if (i < 64 && (i%8) == 1) {
				valida += verificaFilho(i, id);
			}
		}
		
		// diagonal secundaria para cima
		var i = posicao - 7; 
		if ((posicao%8) !== 0) {
			while (i > 1 && (i%8) > 1) {
				valida += verificaFilho(i, id);
				i -= 7;
			}
			if (i > 1 && (i%8) == 0) {
				valida += verificaFilho(i, id);
			}
		}

		if (valida > 0)	{
			$("#"+id).has(".queen").addClass("cell-error");
		}

		return valida;
	}

	function solucao() {
		var arrayDiv = ['div2','div12','div22','div32','div35','div41','div55','div61'];
		var arrayDrag = ["#drag1","#drag2","#drag3","#drag4","#drag5","#drag6","#drag7","#drag8"];
		
		$(".posicoes").each(function(){
			$(this).removeClass("cell-error");
			$(this).attr("ataca","");
		});

		for (var i = arrayDiv.length - 1; i >= 0; i--) {
			$("#" + arrayDiv[i]).append($(arrayDrag[i]));
			$(arrayDrag[i]).attr("anterior", arrayDiv[i]);
		}
		
		for (var i = arrayDiv.length - 1; i >= 0; i--) verificarValidade(arrayDiv[i]);
	}

	function recomecar() {
		
		$(".jogo").css("visibility", "visible");
		$(".comecar").css("display","none");

		var arrayDiv = ['div57','div58','div59','div60','div61','div62','div63','div64'];
		var arrayDrag = ["#drag1","#drag2","#drag3","#drag4","#drag5","#drag6","#drag7","#drag8"];
		
		$(".posicoes").each(function(){
			$(this).removeClass("cell-error");
			$(this).attr("ataca","");
		});

		for (var i = arrayDiv.length - 1; i >= 0; i--) {
			$("#" + arrayDiv[i]).append($(arrayDrag[i]));
			$(arrayDrag[i]).attr("anterior", arrayDiv[i]);
		}

		for (var i = arrayDiv.length - 1; i >= 0; i--) verificarValidade(arrayDiv[i]);
	}
	
	function solucaoIA(){
		//var arrayDiv = ['div2','div12','div22','div32','div35','div41','div55','div61'];
		//var posicao = [57,58,59,60,61,62,63,64];
		var arrayDrag = ["#drag1","#drag2","#drag3","#drag4","#drag5","#drag6","#drag7","#drag8"];
		var arrayDiv = [];

		$(".posicoes").each(function(){
			var ataques = verificarValidade($(this).attr("id"));;
			$(this).attr("ataques", ataques);
		});

		for (var i = arrayDrag.length - 1; i >= 0; i--) {
			
			var posicao = $(arrayDrag[i]).parent(".posicoes").attr("id");
			posicao = parseInt(posicao.replace("div",""));
			
			var x = posicao + 8; 
			var valor = $(arrayDrag[i]).parent(".posicoes").attr("ataques");
			var pos = x;

			// vertical para baixo
			while (x < 65) {
				console.log(x);
				var ataque = $("#div"+x).attr("ataques");
				if (valor > ataque) {
					valor = ataque;
					pos = x;
				}
				x += 8;
			}
			
			// vertical para cima
			var x = posicao - 8; 
			while (x > 0) {

				var ataque = parseInt($("#div"+x).attr("ataques"));
				if (valor > ataque) {
					valor = ataque;
					pos = x;
				}
				x -= 8;
			}
			
			$("#div" + pos).append($(arrayDrag[i]));
			$(arrayDrag[i]).attr("anterior", pos);
		}
		
		// for (var i = arrayDiv.length - 1; i >= 0; i--) verificarValidade(arrayDiv[i]);
	}