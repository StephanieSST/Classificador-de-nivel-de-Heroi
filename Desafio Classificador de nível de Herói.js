
let nivel = ""
let repetir = ""


    do {
        let nome = prompt("Qual é o nome do herói? ")
        let xp = Number(prompt("Qual é a experiência do herói?"))

        if (xp < 1000){
            nivel = "Ferro"
        } 
        else if (xp <= 2000){
            nivel = "Bronze"
        }
        else if (xp <= 5000){
            nivel = "Prata"
        }
        else if (xp <= 7000){
            nivel = "Ouro"
        }
        else if (xp <= 8000){
            nivel = "Platina"
        }
        else if (xp <= 9000){
            nivel = "Ascendente"
        }
        else if (xp <= 10000){
            nivel = "Imortal"
        }
        else if (xp > 10000){
            nivel = "Radiante"
        }
        else{
            // nivel = "Erro"
            alert("Erro! Experiência Inválida!")
            repetir = prompt("Deseja tentar novamente? (s/n)")
            
        }
        if (!isNaN(xp)){  /* xp != String | (nivel != "Erro") */
            alert("O Herói de nome " + nome + " está no nível de " + nivel + "!")
            repetir = prompt("Deseja repetir? (s/n)")
        
        }  
     }
    
     while (repetir == "s" || repetir == "S")

    

     
 
   






