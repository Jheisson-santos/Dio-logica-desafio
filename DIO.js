let NomeDoHeroi = "Avallon "
let NivelDoHeroi = 10002

switch (true){
     case NivelDoHeroi <= 1000:
         console.log( NomeDoHeroi + ",você ainda esta no nível Ferro") ;
          break;

     case NivelDoHeroi > 1000 && NivelDoHeroi <= 2000:
         console.log( NomeDoHeroi + ",você ainda esta no nível Bronze");
          break;

     case NivelDoHeroi > 2000 && NivelDoHeroi <= 5000:
         console.log( NomeDoHeroi + ",você ainda esta no nível Prata");
          break;

     case NivelDoHeroi > 5000 && NivelDoHeroi <= 7000:
         console.log("PARABÉNS " + NomeDoHeroi + ",você esta no nível Ouro");
          break;
       
     case NivelDoHeroi > 7000 && NivelDoHeroi <=8000:
         console.log("PARABÉNS " + NomeDoHeroi + "você esta no nível Platina");
          break;
    
     case NivelDoHeroi > 8000 && NivelDoHeroi <= 9000:
         console.log("PARABÉNS " + NomeDoHeroi + "você esta no nível Ascendente")
          break;

     case NivelDoHeroi > 9000 && NivelDoHeroi <= 10000:
         console.log("UAAU " + NomeDoHeroi + "você alcançou o nível Imortal")
          break;

     case NivelDoHeroi >= 10001:
         console.log("UAAU " + NomeDoHeroi + "você alcançou o nível Radiante")
}
