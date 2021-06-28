// Checkpoint 28/06/2021
//Nome Integrantes Grupo:
// Bruno B. Miranda, David da Silva Sousa, Douglas Santos Araujo
// Mariana Pacheco, Giovani de Paula Silva 

// Microondas Super Veloz

// Comidas
let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;
let adc = 0;


function microondas(comidas, adc) {
    switch(comidas) {
        case "pipoca" :
            if (pipoca + adc < pipoca) // Limitando meu tempo menor do que 10 segundos !
            console.log("Tempo insuficiente !!!");
            else if (pipoca + adc >= 10 && pipoca + adc <= 19) // Limitando meu tempo entre 10 e 19 segundos !
            console.log("Prato pronto, bom apetite !!!");
            else if (pipoca + adc >= 20 && pipoca + adc <= 29) // Limitando meu tempo ente 20 e 29 segundos !
            console.log("A comida queimou !!!");
            else 
            console.log("Kabummm !!!") // Toda excessão de tempo superior ao pedido acima !
        break;
        case "macarrao" :
            if (macarrao + adc < 8) // Limitando meu tempo menor do que 8 segundos !
            console.log("Tempo insuficiente !!!");
            else if (macarrao + adc >= 8 && macarrao + adc <= 15) // Limitando meu tempo entre 8 e 15 segundos !
            console.log("Prato pronto, bom apetite !!!");
            else if (macarrao + adc >= 16 && macarrao + adc <= 23) // Limitando meu tempo entre 16 e 23 segundos !
            console.log("A comida queimou !!!");
            else 
            console.log("Kabummm !!!") // Toda excessão de tempo superior ao pedido acima !
        break;
        case "carne" :
            if (carne + adc < 15) // Limitando meu tempo menor do que 15 segundos !
            console.log("Tempo insuficiente !!!");
            else if (carne + adc >= 15 && carne + adc <= 29) // Limitando meu tempo entre 15 e 29 segundos !
            console.log("Prato pronto, bom apetite !!!");
            else if (carne + adc >= 30 && carne + adc <= 44) // Limitando meu tempo ente 30 e 44 segundos !
            console.log("A comida queimou !!!");
            else 
            console.log("Kabummm !!!") // Toda excessão de tempo superior ao pedido acima !
        break;
        case "feijao" :
            if (feijao + adc < 12) // Limitando meu tempo menor do que 12 segundos !
            console.log("Tempo insuficiente !!!");
            else if (feijao + adc >= 12 && feijao + adc <= 23) // Limitando meu tempo entre 12 e 23 segundos !
            console.log("Prato pronto, bom apetite !!!");
            else if (feijao + adc >= 24 && feijao + adc <= 35) // Limitando meu tempo ente 24 e 35 segundos !
            console.log("A comida queimou !!!");
            else 
            console.log("Kabummm !!!") // Toda excessão de tempo superior ao pedido acima !
        break;
        case "brigadeiro" :
            if (brigadeiro + adc < 8) // Limitando meu tempo menor do que 10 segundos !
            console.log("Tempo insuficiente !!!");
            else if (brigadeiro + adc >= 8 && brigadeiro + adc <= 15) // Limitando meu tempo entre 10 e 19 segundos !
            console.log("Prato pronto, bom apetite !!!");
            else if (brigadeiro + adc >= 16 && brigadeiro + adc <= 23) // Limitando meu tempo ente 20 e 29 segundos !
            console.log("A comida queimou !!!");
            else 
            console.log("Kabummm !!!") // Toda excessão de tempo superior ao pedido acima !
        break;
        default:
            return console.log("Prato inexistente !!!") // Qualquer prato que não esteja listado no switch !
    }
} 
microondas("pipoca", 0);
microondas("macarrao", 5);
microondas("carne", 5);
microondas("feijao", 10);
microondas("brigadeiro", 5);
microondas("Arroz", 10);
