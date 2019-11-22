    // by andriely frança
    // inicializa as variáveis
    var dados = new Array();
    var media = 0, mediaGeral =0 , i = 0;
    var tAluno, tN1,tN2,tN3,tN4,aL,n01,n02,n03,n04
    
    function somar(){
                 
                 tAluno = window.document.getElementById('tAluno')
                 tN1 = window.document.getElementById('n01')
                 tN2= window.document.querySelector('input#n02')
                 tN3= window.document.querySelector('input#n03')
                 tN4= window.document.querySelector('input#n04') 
                
                 aL = toString(tAluno.value)
                 n1 = Number(tN1.value)
                 n2 = Number(tN2.value)
                 n3 = Number(tN3.value)
                 n4 = Number(tN4.value) 
    // cria o nosso array de dados de alunos
    //for (let i = 0 ; i < 4 ; i++){
        dados[i] = [ aL, n1,n2 ,n3,n4];
        i++
 console.log("as notas do aluno foram salvas!")
    //}
    
   }
   function exibir(){
  
   var contApr = 0, contRep = 0;  
   //for(var i = 0; i < dados.length; i++){
		
		
		for (var i  in dados){     
	 // calcula a média do aluno
        var mediaAluno = (dados[i][1]+dados[i][2]+dados[i][3]+dados[i][4]) / (dados[i].length -1);
        // armazena a média do aluno para futuro calculo da média geral
        media += mediaAluno;
        // escreve a média do aluno
        var status = mediaAluno >= 7?'aprovado':'reprovado'
       
        if (status === 'aprovado'){
                   contApr++
        }else {contRep++}
        /*var saidaA = window.document.getElementById('txtAlunos')
        saidaA.innerHTML= dados[i][0]+ " / Média: "+ mediaAluno.toFixed(2)+" ele está "+status+"\n"
        */
    
       }
     
    // calcula a média geral da turma
    mediaGeral = media/dados.length;
    // escreve a média da turma
    var saidaM = window.document.getElementById('txtMedia')
        saidaM.innerText = "Média Geral da turma: "+mediaGeral.toFixed(2)
        var estatistica = window.document.getElementById('txtEstat')
        estatistica.innerText =contApr+" Alunos foram aprovados e "+contRep+" foram reprovados"
   }


   function relatorio(){
    var contApr = 0, contRep = 0;  
    media =0
    for(var i = 0; i < dados.length; i++){
         // calcula a média do aluno
          var mediaAluno = (dados[i][1]+dados[i][2]+dados[i][3]+dados[i][4]) / (dados[i].length -1);
         // armazena a média do aluno para futuro calculo da média geral
         media += mediaAluno;
         // escreve a média do aluno
         var status = mediaAluno >= 7?'aprovado':'reprovado'
         if (status === 'aprovado'){
                    contApr++
         }else {contRep++}
        document.write(dados[i][0].toString+ " / Média: "+ mediaAluno.toFixed(2)+" ele está "+status+"<br/>")
         
     
        }
      
     // calcula a média geral da turma
     mediaGeral = media/dados.length;
   
     // escreve a média da turma
     document.write("Média Geral da turma: "+(mediaGeral.toFixed(2))+ "<br/>")
     document.write("\n"+contApr+" Alunos foram aprovados e "+contRep+" foram reprovados <br/>")
     
    }