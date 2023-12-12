
let nivel = ""
let repetir = ""


    do {
        let nome = prompt("Qual é o nome do herói? ")
        let xp = Number(prompt("Qual é a experiência do herói?"))

        if (xp < 1000){
            nivel = "Ferro"
        } 
        else if (xp >= 1000 && xp <= 2000){
            nivel = "Bronze"
        }
        else if (xp > 2000 && xp <= 5000){
            nivel = "Prata"
        }
        else if (xp > 5000 && xp <= 7000){
            nivel = "Ouro"
        }
        else if (xp > 7000 && xp <= 8000){
            nivel = "Platina"
        }
        else if (xp > 8000 && xp <= 9000){
            nivel = "Ascendente"
        }
        else if (xp > 9000 && xp <= 10000){
            nivel = "Imortal"
        }
        else if (xp > 10000){
            nivel = "Radiante"
        }
        else{
            nivel = "Erro"
            alert("Erro! Experiência Inválida!")
            repetir = prompt("Deseja tentar novamente? (s/n)")
            
        }
        if (nivel != "Erro"){
            alert("O Herói de nome " + nome + " está no nível de " + nivel)
            repetir = prompt("Deseja repetir? (s/n)")
        
        }  
        
     }
    
     while (repetir == "s" || repetir == "S")

    

     
 
   






// switch (xp) {

//     case 1000:
//         alert("Ferro");
//         break;
    
//         case (xp > 1000 && xp <= 2000):
//         nivel = "Bronze"
//         break;

//         case (xp > 2000 && xp <= 5000):
//             nivel = "Prata"
//             break;

//             case (xp > 6000 && xp <= 7000):
//             nivel = "Ouro"
//             break;

//             case (xp > 7000 && xp <= 8000):
//                 nivel = "Platina"
//                 break;

//                 case (xp > 8000 && xp <= 9000):
//                     nivel = "Ascendente"
//                     break;

//                     case (xp > 9000 && xp <= 10000):
//                         nivel = "Imortal"
//                         break;

//                         case (xp >= 10001):
//                             nivel = "Radiante"
//                             break
                            
//                             default:
//                                 alert("Erro! Experiência Inválida!")
        

// }
// alert("O Herói de nome " + nome + " está no nível de " + nivel) 

