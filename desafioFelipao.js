let hi = "PuroSu"
let xp = 500
let newNv = ("Parabens" + hi + ", voce chegou ao nivel ")
let nvs = ["FERRO!" , "BRONZE!" , "PRATA!" , "OURO!" , "PLATINA!" , "ASCENDENTE!" , "IMORTAL!" , "RADIANTE!"]
let boss = ["probletais" , "brigatas" , "finablemas" , "frustraempresto"]
let hpB = [2000 , 4000 , 6000 , 8000]
let dano = 1000

    if(xp <= 1000){
        console.log(newNv + nvs[0])   
    }else if((xp <= 2000) && (xp >= 1001)){
        console.log(newNv + nvs[1])
        dano += 1000
    }else if((xp <= 5000) && (xp >= 2001)){
        console.log(newNv + nvs[2])
        dano += 1000
    }else if((xp <= 7000) && (xp >= 5001)){
        console.log(newNv + nvs[3])
        dano += 1000
    }else if((xp <= 8000) && (xp >= 7001)){
        console.log(newNv + nvs[4])
        dano += 2000 
    }else if((xp <= 9000) && (xp >= 8001)){
        console.log(newNv + nvs[5])
        dano += 1000
    }else if((xp <= 10000) && (xp >= 9001)){
        console.log(newNv + nvs[6])
        dano += 2000
    }else{
        console.log(newNv + nvs[7])
        dano += 1000
    }


console.log("Bem vindo " + hi + ", esse é o seu premeiro desafio!! Eu sei que voce esta cansado, mas voce precisa continuar. Se voce parar agora vai continuar no mesmo lugar e não é isso que vc quer, certo?")

console.log("seu desafio é muito simples, enquanto os seus inimigos estiverem vivos, voce continua lutando e batendo, ate que não sobre nada")

console.log("DROGA!! É o " + boss[0])
while(hpB[0] >= 0){
    hpB[0] = hpB[0] - dano
}


console.log("ELE NÃO TEM MAIS PONTOS DE VIDA!!")

if(hpB[0] <= 0){
    xp += 2000
}

if(xp <= 1000){
    console.log(newNv + nvs[0])   
}else if((xp <= 2000) && (xp >= 1001)){
    console.log(newNv + nvs[1])
    dano += 1000
}else if((xp <= 5000) && (xp >= 2001)){
    console.log(newNv + nvs[2])
    dano += 1000
}else if((xp <= 7000) && (xp >= 5001)){
    console.log(newNv + nvs[3])
    dano += 1000
}else if((xp <= 8000) && (xp >= 7001)){
    console.log(newNv + nvs[4])
    dano += 2000 
}else if((xp <= 9000) && (xp >= 8001)){
    console.log(newNv + nvs[5])
    dano += 1000
}else if((xp <= 10000) && (xp >= 9001)){
    console.log(newNv + nvs[6])
    dano += 2000
}else{
    console.log(newNv + nvs[7])
    dano += 1000
}

console.log("olha so, não é que vc conseguiu, isso me surpreende! não desistiu como nos ultimos 20 anos, eu realmente fico muito feliz por isso! Mas ainda não acabou")
console.log("temos muitos inimigos pela frente, e voce não pode parar")

console.log("Parece que o " + boss[1] + " esta aqui agora")

while(hpB[1] >= 0){
    hpB[1] = hpB[1] - dano
}



if(hpB[1] <= 0){
    xp += 5000
    console.log("ELE NÃO TEM MAIS PONTOS DE VIDA!!")
}

if(xp <= 1000){
    console.log(newNv + nvs[0])   
}else if((xp <= 2000) && (xp >= 1001)){
    console.log(newNv + nvs[1])
    dano += 1000
}else if((xp <= 5000) && (xp >= 2001)){
    console.log(newNv + nvs[2])
    dano += 1000
}else if((xp <= 7000) && (xp >= 5001)){
    console.log(newNv + nvs[3])
    dano += 1000
}else if((xp <= 8000) && (xp >= 7001)){
    console.log(newNv + nvs[4])
    dano += 2000 
}else if((xp <= 9000) && (xp >= 8001)){
    console.log(newNv + nvs[5])
    dano += 1000
}else if((xp <= 10000) && (xp >= 9001)){
    console.log(newNv + nvs[6])
    dano += 2000
}else{
    console.log(newNv + nvs[7])
    dano += 1000
}
console.log("Parece que o " + boss[2] + " esta aqui agora")

while(hpB[2] >= 0){
    hpB[2] = hpB[2] - dano
}



if(hpB[2] <= 0){
    xp += 2000
    console.log("ELE NÃO TEM MAIS PONTOS DE VIDA!!")
}
if(xp <= 1000){
    console.log(newNv + nvs[0])   
}else if((xp <= 2000) && (xp >= 1001)){
    console.log(newNv + nvs[1])
    dano += 1000
}else if((xp <= 5000) && (xp >= 2001)){
    console.log(newNv + nvs[2])
    dano += 1000
}else if((xp <= 7000) && (xp >= 5001)){
    console.log(newNv + nvs[3])
    dano += 1000
}else if((xp <= 8000) && (xp >= 7001)){
    console.log(newNv + nvs[4])
    dano += 2000 
}else if((xp <= 9000) && (xp >= 8001)){
    console.log(newNv + nvs[5])
    dano += 1000
}else if((xp <= 10000) && (xp >= 9001)){
    console.log(newNv + nvs[6])
    dano += 2000
}else{
    console.log(newNv + nvs[7])
    dano += 1000
}
console.log("Parece que o " + boss[3] + " esta aqui agora")

while(hpB[3] >= 0){
    hpB[3] = hpB[3] - dano
}



if(hpB[3] <= 0){
    xp += 2000
    console.log("ELE NÃO TEM MAIS PONTOS DE VIDA!!")
}
if(xp <= 1000){
    console.log(newNv + nvs[0])   
}else if((xp <= 2000) && (xp >= 1001)){
    console.log(newNv + nvs[1])
    dano += 1000
}else if((xp <= 5000) && (xp >= 2001)){
    console.log(newNv + nvs[2])
    dano += 1000
}else if((xp <= 7000) && (xp >= 5001)){
    console.log(newNv + nvs[3])
    dano += 1000
}else if((xp <= 8000) && (xp >= 7001)){
    console.log(newNv + nvs[4])
    dano += 2000 
}else if((xp <= 9000) && (xp >= 8001)){
    console.log(newNv + nvs[5])
    dano += 1000
}else if((xp <= 10000) && (xp >= 9001)){
    console.log(newNv + nvs[6])
    dano += 2000
}else{
    console.log(newNv + nvs[7])
    dano += 1000
}

console.log("E NÃO É QUE VOCE ENFRENTOU TODOS ELES " + hi)
console.log("esse foi seu primeiro desafio, mas não vai ser o ultimo! Não perca seu FOCO!!")
console.log("DROGA, SEU REMEDIO DO TDH ACABOU!!!")
console.log("continua...")