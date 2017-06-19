	var parar = false; // variavel usada para decidir verificacao da linha
	var rainhas = [];	// vetor com as posições das rainhas no tabuleiro - o índice do vetor indica a coluna, e o valor a linha
	var passos;			// contador de passos até a solução
	var passosSemMudanca;	// há quantos passos não houve mudança no tabuleiro - para detectar situações de estagnação
	var anterior = [];	// estado anterior do tabuleiro - para detectar situações de estagnação

	/* habilitar todas as celulas para soltar a rainha*/
	function allowDrop(ev) {
	    ev.preventDefault();
	}

	/* captura id da celula de destino da rainha*/
	function drag(ev) {
	    ev.dataTransfer.setData("text", ev.target.id);
	}

	/* Atualiza o atributo ataca da celulca $local, retirando o valor $remove 
	* caso necessário, remove a class de alerta de erro */
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

	/* percorre todas as rainhas que atacava anteriormente e atualiza os atributos ATACA das rainhas*/
	function atualizaAtacava(rainha){
	    var atacava = $("#div"+anterior[rainha-1]).attr("ataca");

	    // atualiza celulas que eram atacadas na antiga posicao
	    atacava = atacava.split(",");
	    for (var i = atacava.length - 1; i >= 0; i--) {
	    	if (parseInt(atacava[i]) > 0) {
	    		removeAtaca(anterior[rainha-1], atacava[i]);
	    	}
	    }

	    // atualiza celula anteior ocupada pela rainha, limpando o atributo ATACA e alerta de erro
	    $("#div"+anterior[rainha-1]).attr("ataca",'');
	    $("#div"+anterior[rainha-1]).removeClass("cell-error");
	}

	/* evento de transferencia de rainha*/
	function drop(ev) {
	    //ev.preventDefault();
	    // id da rainha que esta sendo movida
	    var rainha = ev.dataTransfer.getData("text");
	    // transferindo rainha de lugar
	    ev.target.appendChild(document.getElementById(rainha));
	    
	    // salvando estado anterior
	    anterior = copiaEstado(rainhas);

	    rainha = rainha.replace("drag","");
	    atualizaAtacava(rainha);
	    
	    var cellAtual = ev.target.id;
	    // $("#drag"+rainha).attr("anterior", cellAtual);
	    
	    // atualiza estado
	    rainhas[rainha-1] = cellAtual.replace("div","");

	    verificarValidade(ev.target.id, true);
	}

	/* Atualiza atributo ATACA no celular $cell, adicionando ataque a celula $add*/
	function addAtaca(add, cell){
		var atacadas = $("#"+cell).attr('ataca');
		atacadas = atacadas.split(",");
		if($.inArray(''+add, atacadas) === -1) atacadas.push(add);
		
		$("#"+cell).attr('ataca', atacadas.join(","));
	}

	/* verifica se na posicao $cell tem uma rainha que ataca a posicao $cell2
	* retorna 1 em caso d exitir uma rainha na posicao cell */
	function verificaTemRainha(cell1, cell2) {
		if ($("#div"+cell1).children(".queen").length > 0) {
			$("#div"+cell1).addClass("cell-error");
			
			// se na posicao cell2 tbm tiver uma rainha, adiciona cell no atributo ATACA de cell2
			if ($("#"+cell2).children(".queen").length > 0) addAtaca(cell1, cell2);
			
			addAtaca(cell2.replace("div",""), "div"+cell1);
			return 1;
		} 
		return 0;
	}

	/* verifica se existi alguma rainha nas linhas de ataque
	* o parametro verificaH, define de o algoritmo deve verificar as celulas da linha horizontal referente a div id
	* retorna a quantidade de ataques feitos */
	function verificarValidade(id, verificaH) {
		var posicao = parseInt(id.replace("div",""));
		var indice = posicao%8;
		var valida = 0;		

		if (verificaH) {
			// horizontal para frente
			for (var i = posicao + 1; (i%8) > 1; i++) {
				valida += verificaTemRainha(i, id);
			}
			if (indice !== 0) {
				valida += verificaTemRainha(i, id);
			}
			
			// horizontal para trás
			for (var i = posicao - 1; (i%8) > 1; i--) {
				valida += verificaTemRainha(i, id);
			}
			if (indice !== 1)  {
				valida += verificaTemRainha(i, id);
			}
		}
		
		// vertical para baixo
		var i = posicao + 8; 
		while (i < 65) {
			valida += verificaTemRainha(i, id);
			i += 8;
		}
		// vertical para cima
		var i = posicao - 8; 
		while (i > 0) {
			valida += verificaTemRainha(i, id);
			i -= 8;
		}

		// diagonal principal para baixo
		if ((posicao%8) !== 0) {
			var i = posicao + 9; 
			while (i < 65 && (i%8) > 1) {
				valida += verificaTemRainha(i, id);
				i += 9;
			}
			if ((i%8) == 0) {
				valida += verificaTemRainha(i, id);
			}
		}

		// diagonal principal para cima
		var i = posicao - 9; 
		if ((posicao%8) !== 1) {
			while (i > 0 && (i%8) > 1) {
				valida += verificaTemRainha(i, id);
				i -= 9;
			}
			if ((i%8) == 1) {
				valida += verificaTemRainha(i, id);
			}
		}

		// diagonal secundaria para baixo
		if ((posicao%8) !== 1) {
			var i = posicao + 7; 
			while (i < 64 && (i%8) > 1) {
				valida += verificaTemRainha(i, id);
				i += 7;
			}
			if (i < 64 && (i%8) == 1) {
				valida += verificaTemRainha(i, id);
			}
		}
		
		// diagonal secundaria para cima
		var i = posicao - 7; 
		if ((posicao%8) !== 0) {
			while (i > 1 && (i%8) > 1) {
				valida += verificaTemRainha(i, id);
				i -= 7;
			}
			if (i > 1 && (i%8) == 0) {
				valida += verificaTemRainha(i, id);
			}
		}

		if (valida > 0)	{
			if ($("#"+id).children(".queen").length > 0 ) $("#"+id).addClass("cell-error");
			else $("#"+id).removeClass("cell-error");
		} else {
			$("#"+id).removeClass("cell-error");
		}

		return valida;
	}

	/* Coloca o tabuleiro no estado inicial, com todas as rainhas na posição inferior*/
	function recomecar() {		
		$(".jogo").css("visibility", "visible");
		$(".comecar").css("display","none");

		//estado de inicializacao do tabuleiro
		rainhas = ['1','9','17','25','33','41','49','57'];
		anterior = ['1','9','17','25','33','41','49','57'];
		
		limpaConflitos();
		exibeEstado();
	}

	/* solucao pronta */
	function solucao() {
		// estado final aceitavel
		rainhas = ['2','12','22','32','35','41','55','61'];
		
		limpaConflitos();
		exibeEstado();
	}

	/* Limpa todas as class de alerta de ataque e atributos ATACA*/
	function limpaConflitos(){
		$(".posicoes").each(function(){
			$(this).removeClass("cell-error");
			$(this).attr("ataca","");
		});
	}

	/* percorre todas as rainhas e retorna quantidade de ataques possiveis no tabuleiro*/
	function getTotalAtaques(){
		var total = 0;
		for (var i = 1; i <= rainhas.length; i++) {
			total += verificarValidade("div"+rainhas[i-1], false);
		}

		return total;
	}

	/* retorna o valor encontrado no atributo ATAQUES, que expressa a qtd de conflitos com outras rainhas na posicao x*/
	function getAttrAtaques(x){
		return $("#div" + x).attr("ataques");
	}

	/* atualiza tabuleiro na tela - retorna o número de conflitos*/
	function exibeEstado() {
		// muda posicao das rainhas
		for (var i = 1; i <= rainhas.length; i++) {

			$("#div" + rainhas[i-1]).append($("#drag" + i));
			// $("#drag" + i).attr("anterior", "div"+rainhas[i-1]);
			atualizaAtacava(i);
		}
		
		// atualiza variaveis de ataques das posicoes
		$(".posicoes").each(function(){
			var ataques = verificarValidade($(this).attr("id"), false);
			$(this).attr("ataques", ataques);
		});

		return getTotalAtaques();
	}

	/* funções auxiliares */
	function copiaEstado(estado) {	// retorna uma cópia do estado
		var retorno = [];
		for (var i = 0; i < estado.length; i++)	// copia elementos do array
			retorno[i] = estado[i];					// necessário para evitar a cópia por referência
	    
		return retorno;
	}
	function comparaEstados(estado1,estado2) {	// compara estados
		for (var i=0; i<estado1.length; i++)
			if (estado1[i] != estado2[i])
				return false;
					
		return true;
	}

	/* inicializacao de variaveis para a busca iterativa da solucao*/
	function solucaoIA() {
		$(".solucao").attr("disabled","disabled");
		$(".parar").removeAttr("disabled");
		parar = false;

		// nome das divs q representam as rainhas
		var arrayDrag = ["#drag1","#drag2","#drag3","#drag4","#drag5","#drag6","#drag7","#drag8"];

		// percorre todas as rainhas para encontrar o estado atual
		for (var i = arrayDrag.length - 1; i >= 0; i--) {		
			var posicao = $(arrayDrag[i]).parent(".posicoes").attr("id");
			posicao = parseInt(posicao.replace("div",""));
			
			// armazena estado atual
			rainhas[i] = posicao;
		}
					
		passos = 0;
		passosSemMudanca = 0;
		anterior = copiaEstado(rainhas);
		melhoraIterativa(0);	// inicia o algoritmo de melhora iterativa, a partir da primeira coluna
	}
	
	/* a busca tenta minimizar o número de conflitos com a rainha i */
	function melhoraIterativa(i) {
console.log("Passos:"+ passos);
console.log("Passos sem mudança:"+passosSemMudanca);
console.log("estado Ant:"+ anterior);
console.log(i);
console.log("rainhas: " + rainhas);

		var min;	// número mínimo de conflitos
		var opcoes = [];	// array das posições com mínimo de conflitos
		var conflitos, y;
		
		limpaConflitos();	// limpa nº de conflitos das células
		
		if (i == 0)	{
			if (passosSemMudanca > 24){	// cinco ciclos sem alterar o tabuleiro - possível estado de estagnação
				if (confirm("Possível estagnação detectada!\n\nReiniciar usando o estado inicial?")) {
					recomecar();	// limpa tabuleiro
					solucaoIA(); // reinicia busca pela solucao
					return;
				} else {
					passosSemMudanca = 0;	// continua tentando resolver
					return; // finaliza busca por solucao
				}
			}
		}

		if (exibeEstado()) {	// atualiza tabuleiro na tela - prossegue se ainda houver conflitos
			passos++;
			conflitos = getAttrAtaques(rainhas[i]);

			min = conflitos;		// inicializa número mínimo de conflitos
			opcoes = [];	// inicializa lista de opções com a posição atual
			// percorre todas as celulas da linha i 
			for (y = 0; y < 8; y++) {
				var pos = i * 8 + (y + 1);
				conflitos = getAttrAtaques(pos);
				if (conflitos < min) {	// se achou um menor número de conflitos
					min = conflitos;	// atualiza mínimo
					opcoes = [pos];		// reinicializa lista de opções com essa posição
				} else if (conflitos == min) {	// se essa posição tem o número mínimo de conflitos
					opcoes.push(pos);			// adiciona à lista de opções
				}
			}
			console.log(opcoes);
			y = Math.floor(Math.random()*opcoes.length); // escolhe uma das posições que tem o mínimo de conflitos
			rainhas[i] = opcoes[y];	// reposiciona rainha desta linha

			if (comparaEstados(rainhas,anterior)) {	// verifica se houve mudança no tabuleiro
				passosSemMudanca++;
			} else {
				anterior = copiaEstado(rainhas);
				passosSemMudanca = 0;
			}
			
			exibeEstado();	// exibe tabuleiro atualizado
			
			i = (i<7) ? i+1 : 0;	// próxima coluna
			window.setTimeout(function() { 
				if (!parar)	melhoraIterativa(i) 
			}, 2000);  // nova iteração em n milissegundos
		} else {	
			// se não há conflitos no tabuleiro, encontrou uma solução!
			alert("Solução encontrada, com "+passos+" passos");
			limpaConflitos();
		}
	}

	function stop(){
		$(".solucao").removeAttr("disabled");
		$(".parar").attr("disabled","disabled");
		parar = true;
	}