const personagem = {
    "Boitatá":{
        "Nome": "Boitatá",
        "Força": 9,
        "img": "/imagem/Boitata.webp",
        "Defesa": 5,
        "Esquiva": 7, 
        "Resistência": 13,
        "Pontos de Vida": 6,
        "Magia": 9,
        "Defesa de Magia": 5,
        "Técnica Mágica": 13,
        "Magia Estrutural": 8,
        "Energia": 16,
        "Especial":{
            "EspMagia":["Filhas cobras",4,9,"Retira 2 pontos direto do Pdv de todos os Adversário"], 
            "EspTecnica":["Rajada de Fogo",13,5],
            "estrutural":["Em chamas",7,1,"Aumenta 1 em todos os Próprios Atributos"] 
        }
    },
    "Master Healing":{
        "Nome": "Master Healing",
        "Força": 2,
        "img": "/imagem/master healing.jpeg",
        "Defesa": 5,
        "Esquiva": 8, 
        "Resistência": 7,
        "Pontos de Vida": 8,
        "Magia": 13,
        "Defesa de Magia": 11,
        "Técnica Mágica": 10,
        "Magia Estrutural": 14,
        "Energia": 25,
        "Especial":{
            "EspMagia" : ["Envenenado",1,9,"Retira 1 em todos os atributos de um advesário"], 
            "EspTecnica": ["Cipó de Ataque",10,4],
            "estrutural": ["Curando Sempre", 16,1,"Almenta 0.5 pdv de todos os Aliados por Rodada."]
        }
    },
    "King Zumbu":{
        "Nome": "King Zumbu",
        "Força": 8,
        "img":"/imagem/King Zumbu.jpeg",
        "Defesa": 8,
        "Esquiva": 12, 
        "Resistência": 10,
        "Pontos de Vida": 5,
        "Magia": 2,
        "Defesa de Magia": 10,
        "Técnica Mágica": 8,
        "Magia Estrutural": 9,
        "Energia": 14,
        "Especial": {
            "EspMagia": ["Power",1,2,"Mais 2 em força"], 
            "EspTecnica": ["Soco das 100 Almas",8,3],
            "estrutural": ["Espiritos da Floresta",6,1,"Mais 1 em todos os Atributos de defesa de Todos os Aliados"]
        }
    },
    "Grifo Amaldiçoado":{
        "Nome": "Grifo Amaldiçoado",
        "Força": 7,
        "img": "/imagem/Girfo Amaldi.jpeg",
        "Defesa": 4,
        "Esquiva": 13, 
        "Resistência": 6,
        "Pontos de Vida": 6,
        "Magia": 7,
        "Defesa de Magia": 10,
        "Técnica Mágica": 7,
        "Magia Estrutural": 10,
        "Energia": 14,
        "Especial":{
            "EspMagia": ["Estático",10,9,"Retira a Resistência de um Adversário"], 
            "EspTecnica": ["Sonar Grifo",7,3],
            "estrutural": ["Tempestade",7,1,"Aumenta 2 em todos os atributos Próprios"]
             
        }
    },
    "Adrian - Apenas Mais Uma Historia":{
        "Nome": "Adrian - Apenas Mais Uma Historia",
        "Força": 12,
        "img": "/imagem/Adrian.jpeg",
        "Defesa": 8,
        "Esquiva": 3, 
        "Resistência": 6,
        "Pontos de Vida": 4,
        "Magia": 2,
        "Defesa de Magia": 6,
        "Técnica Mágica": 1,
        "Magia Estrutural": 2,
        "Energia": 3,
        "Especial":{
            "EspMagia": ["Power",1,2,"Mais 2 em força"], 
            "EspTecnica": ["Baratas Arranhando",1,1],
            "estrutural": ["Sobrevivendo",2,1,"Almenta 1 em seu próprio PdV"] 
             
        }
    },
    "Soul Drain":{
        "Nome": "Soul Drain",
        "Força": 2,
        "img": "/imagem/Soul Sucker.jpeg",
        "Defesa": 3,
        "Esquiva": 7, 
        "Resistência": 4,
        "Pontos de Vida": 6,
        "Magia": 15,
        "Defesa de Magia": 4,
        "Técnica Mágica": 2,
        "Magia Estrutural": 15,
        "Energia": 30,
        "Especial":{
            "EspMagia": ["Sugando",15,5,"Tira 1 de pdv do um Adversário e Aumenta 3 em seu Próprio pdv"], 
            "EspTecnica": ["Golpes de Espíritos",2,1],
            "estrutural": ["Fortalecido",16,1,"Aumenta +0.5 em Força de Todos os Aliados por Rodada."]
             
        }
    },
    "Kim Jae Son":{
        "Nome": "Kim Jae Son",
        "Força": 4,
        "img": "/imagem/kim jae son.jpeg",
        "Defesa": 6,
        "Esquiva": 7, 
        "Resistência": 8,
        "Pontos de Vida": 8,
        "Magia": 8,
        "Defesa de Magia": 8,
        "Técnica Mágica": 9,
        "Magia Estrutural": 6,
        "Energia": 14,
        "Especial":{
            "EspMagia": ["Estático",8,8,"Retira a Resistência de um Adversário"],
            "EspTecnica": ["Espada Flamejante",9,3],
            "estrutural": ["Defendendo e Absorvendo",6,1,"Aumenta 1 em Energia Própria em cada rodada"]         
        }
    },
    "Luna Enfurecida":{
        "Nome": "Luna Enfurecida",
        "Força": 2,
        "img": "/imagem/Luna Enfurecida.jpeg",
        "Defesa": 3,
        "Esquiva": 12, 
        "Resistência": 5,
        "Pontos de Vida": 12,
        "Magia": 6,
        "Defesa de Magia": 6,
        "Técnica Mágica": 6,
        "Magia Estrutural": 14,
        "Energia": 20,
        "Especial":{
            "EspMagia": ["Carregando",6,3,"Aumenta 5 de Energia"],
            "EspTecnica": ["Sonar da Lua",6,5],
            "estrutural": ["Mais forte que Nunca",9,1,"Em cada Rodada, Aumenta 2 em algum atributo aleatório."]         
        }
    },
    "Fortaleza":{
        "Nome": "Fortaleza",
        "Força": 0,
        "img": "/imagem/fortaleza.jpeg",
        "Defesa": 11,
        "Esquiva": 0, 
        "Resistência": 11,
        "Pontos de Vida": 14,
        "Magia": 9,
        "Defesa de Magia": 11,
        "Técnica Mágica": 0,
        "Magia Estrutural": 14,
        "Energia": 35,
        "Especial":{
            "EspMagia": ["Flechada Cruel",2,5,"Diminui 2 de Pdv de um Adversário Aleatório"],
            "EspTecnica": ["Nenhum",0,0],
            "estrutural": ["Recuperando",6,1,"aumenta 3 no Pdv de todos os Aliados"]         
        }
    },
    "Guardião do Abismo":{
        "Nome": "Guardião do Abismo",
        "Força": 7,
        "img": "/imagem/o guardião do abismo.jpeg",
        "Defesa": 7,
        "Esquiva": 5, 
        "Resistência": 7,
        "Pontos de Vida": 8,
        "Magia": 6,
        "Defesa de Magia": 8,
        "Técnica Mágica": 15,
        "Magia Estrutural": 9,
        "Energia": 16,
        "Especial":{
            "EspMagia": ["Rugido das Trevas",1,6,"Tira 75% da Energia de um Adversário"], 
            "EspTecnica": ["Lâmina Demoníaca",15,4],
            "estrutural": ["Abraço do Abismo",4,1,"Aumenta 2 a própria Força e a Defesa"]
             
        }
    },
}

let personAtrib=[[null,null,null],[null,null,null]]
let personAtribModalAtk = null
let personAtribModalDef = null
const fimDeJogo = document.getElementById('fimDeJogo')

let porradaValidacao = false;
let tecnicaValidacao = false;
let sabertime1 = null;
let saberplayer1 = null;
let sabertime2 = null;
let saberplayer2 = null;
let casoPreciseDeMagia = null;
let buff = []
let turno = true 

function criarBuff(acao){
    buff.push(acao)
}

function removerBuff(acao){
    const dx = buff.indexOf(acao)
    if(dx > -1){
        buff.splice(dx,1)
    }
}

document.getElementById('btnEscolherPlay1').addEventListener("click", function(){
    var jogador11 = document.getElementById('jogador11')
    var person11 = jogador11.value
    personAtrib[0][0] = {...personagem[person11]}
    document.getElementById('guerreiro__arena11').src = personAtrib[0][0]['img']

    var jogador12 = document.getElementById('jogador12')
    var person12 = jogador12.value
    personAtrib[0][1] = {...personagem[person12]}
    document.getElementById('guerreiro__arena12').src = personAtrib[0][1]['img']
    
    var jogador13 = document.getElementById('jogador13')
    var person13 = jogador13.value
    personAtrib[0][2] = {...personagem[person13]}
    document.getElementById('guerreiro__arena13').src = personAtrib[0][2]['img']
    
    energiaPdv()
})

document.getElementById('btnEscolherPlay2').addEventListener("click", function(){
    var jogador21 = document.getElementById('jogador21')
    var person21 = jogador21.value
    personAtrib[1][0] = {...personagem[person21]}
    document.getElementById('guerreiro__arena21').src = personAtrib[1][0]['img']

    var jogador22 = document.getElementById('jogador22')
    var person22 = jogador22.value
    personAtrib[1][1] = {...personagem[person22]}
    document.getElementById('guerreiro__arena22').src = personAtrib[1][1]['img']

    var jogador23 = document.getElementById('jogador23')
    var person23 = jogador23.value
    personAtrib[1][2] = {...personagem[person23]}
    document.getElementById('guerreiro__arena23').src = personAtrib[1][2]['img']

    energiaPdv()
})

function energiaPdv(){
    document.getElementById('informacaoCombate11__Pdv').innerHTML = personAtrib[0][0]['Pontos de Vida']
    document.getElementById('informacaoCombate11__Energia').innerHTML = personAtrib[0][0]['Energia']
    document.getElementById('informacaoCombate12__Pdv').innerHTML = personAtrib[0][1]['Pontos de Vida']
    document.getElementById('informacaoCombate12__Energia').innerHTML = personAtrib[0][1]['Energia']
    document.getElementById('informacaoCombate13__Pdv').innerHTML = personAtrib[0][2]['Pontos de Vida']
    document.getElementById('informacaoCombate13__Energia').innerHTML = personAtrib[0][2]['Energia']
    document.getElementById('informacaoCombate21__Pdv').innerHTML = personAtrib[1][0]['Pontos de Vida']
    document.getElementById('informacaoCombate21__Energia').innerHTML = personAtrib[1][0]['Energia']
    document.getElementById('informacaoCombate22__Pdv').innerHTML = personAtrib[1][1]['Pontos de Vida']
    document.getElementById('informacaoCombate22__Energia').innerHTML = personAtrib[1][1]['Energia']
    document.getElementById('informacaoCombate23__Pdv').innerHTML = personAtrib[1][2]['Pontos de Vida']
    document.getElementById('informacaoCombate23__Energia').innerHTML = personAtrib[1][2]['Energia']
}

function dado(lados){
    return parseInt(Math.round(Math.random() * lados))
}

document.getElementById('jogar__novamente').addEventListener('click', function(){
    window.location.reload()
})

function mostrarAlvo(xang){
    let ping = document.querySelectorAll(xang);
    ping.forEach(function(img){img.classList.remove("invisivel")});

}

function mostrarAlvoMagia(xeng){
    let pung = document.querySelectorAll(xeng);
    pung.forEach(function(img){img.classList.remove("invisivel")})
}

function sumirAlvo(xang){
    let pong = document.querySelectorAll(xang);
    pong.forEach(function(imgs){imgs.classList.add("invisivel")});
}

function sumirAlvoMagia(xeng){
    let pung = document.querySelectorAll(xeng);
    pung.forEach(function(img){img.classList.add("invisivel")})
}

function abrirAtaque(time, personagem) {
    if (personAtrib[time][personagem]["Pontos de Vida"] <= 0){
        return
    }
    personAtribModalAtk = personAtrib[time][personagem];
    sabertime1 = time;
    saberplayer1 = personagem;
    let finca = document.getElementById("janelaModal1");
    finca.classList.add("hide");

    if (time === 0){
        mostrarAlvo(".espadinhaAtacar2");
        dadosModalPersonagem(1);
    } else {
        mostrarAlvo(".espadinhaAtacar1");
        dadosModalPersonagem(0)
    }
    
};

function abrirDefesa(time,personagem){
    personAtribModalDef = personAtrib[time][personagem];
    sabertime2 = time;
    saberplayer2 = personagem;
    let xunda = document.getElementById("janelaModal2");
    xunda.classList.add("hide")

    if (time === 0){
        sumirAlvo(".espadinhaAtacar1")
    } else {
        sumirAlvo(".espadinhaAtacar2")
    }
};

function validacaoAtaque(messi){
    if(messi === 1){
        porradaValidacao = true;
    } if (messi === 4){
        tecnicaValidacao = true;
    }
};

document.getElementById("fecharModal1").addEventListener("click", function() {
    document.getElementById("janelaModal1").classList.remove("hide")
});

document.getElementById("fecharModal2").addEventListener("click", function() {
    document.getElementById("janelaModal2").classList.remove("hide")
});

function ataqueDePorrada(atk, def, pdV, res){
    const atkresul = (atk + dado(12))
    const defresul = (def + dado(12))

    valoresNaTela(atkresul, defresul, "Porrada", "Defesa")

    const golpe = atkresul - defresul
    if(golpe > 0){
        const resist = golpe - Math.floor(res / 2)
        if(resist > 0){
            return (pdV - resist)
        }
    }
    return pdV;
};

function esquivaDeAtaque(atk, def, pdV, res){
    const atkresul = (atk + dado(12))
    const defresul = (def + dado(12))

    valoresNaTela(atkresul, defresul, "Porrada", "Esquiva")

    const golpe = atkresul - defresul
    if(golpe > 0){
        const resist = golpe - Math.floor(res / 3.5)
        if(resist > 0){
            return (pdV - resist)
        }
    }
    return pdV;
};

function ataqueDeTecnica(atk, def, pdV, res,){
    const atkresul = (atk + dado(15))
    const defresul = (def + dado(12))

    valoresNaTela(atkresul, defresul, "Técnica Especial", "Defesa")

    const golpe = atkresul - defresul
    if(golpe > 0){
        const resist = golpe - Math.floor(res / 2)
        if(resist > 0){
            if((pdV - resist) <= 0){
                mortePorTecnica(sabertime2)
            }
            return (pdV - resist)
        }
    }
    return pdV;
};

function esquivaDeTecnica (atk, def, pdV, res,){
    const atkresul = (atk + dado(15))
    const defresul = (def + dado(12))

    valoresNaTela(atkresul, defresul, "Técnica Especial", "Esquiva")

    const golpe = atkresul - defresul

    if(golpe > 0){
        const resist = golpe - Math.floor(res / 3.5)
        if(resist > 0){
            if((pdV - resist) <= 0){
                mortePorTecnica(sabertime2)
            }
            return (pdV - resist)
        }
    }
    return pdV;
};

function gastaEnergia (enr, gst){
    if(enr >= gst){
        energfi = enr - gst
        return energfi

    } else {
        return enr
    }
};

function limpaDados (){
    porradaValidacao = false;
    tecnicaValidacao = false;
}

function valoresNaTela(ataque, defesa, nomeA, nomeB){
    document.getElementById("ataqueValor").textContent = "Sua "+ nomeA +" foi de "+ ataque
    document.getElementById("defesaValor").textContent = "Sua "+ nomeB +" foi de "+ defesa
}

function morteDePersonagem(xamba){
    if(xamba <= 0){
        if(sabertime2 === 0 && saberplayer2 === 0){
            document.getElementById('guerreiro__arena11').src = "/imagem/morte.jpeg"
        }
        if(sabertime2 === 0 && saberplayer2 === 1){
            document.getElementById('guerreiro__arena12').src = "/imagem/morte2.jpeg"
        }
        if(sabertime2 === 0 && saberplayer2 === 2){
            document.getElementById('guerreiro__arena13').src = "/imagem/morte3.jpeg"
        }
        if(sabertime2 === 1 && saberplayer2 === 0){
            document.getElementById('guerreiro__arena21').src = "/imagem/morte.jpeg"
        }
        if(sabertime2 === 1 && saberplayer2 === 1){
            document.getElementById('guerreiro__arena22').src = "/imagem/morte2.jpeg"
        }
        if(sabertime2 === 1 && saberplayer2 === 2){
            document.getElementById('guerreiro__arena23').src = "/imagem/morte3.jpeg"
        }
    }
}

function alvoDaMagia(time,personagem){
    sabertime2 = time
    saberplayer2 = personagem
    if(casoPreciseDeMagia === "Envenenado"){
        personAtrib[sabertime2][saberplayer2]["Magia"] -= 1; personAtrib[sabertime2][saberplayer2]["Defesa de Magia"] -= 1; personAtrib[sabertime2][saberplayer2]["Especial"]["EspTecnica"][1] -= 1;
        personAtrib[sabertime2][saberplayer2]["Força"] -= 1; personAtrib[sabertime2][saberplayer2]["Defesa"] -= 1; personAtrib[sabertime2][saberplayer2]["Esquiva"] -= 1; personAtrib[sabertime2][saberplayer2]["Resistência"] -= 1;
    
    } if(casoPreciseDeMagia === "Estático"){
        personAtrib[sabertime2][saberplayer2]["Resistência"] = 0;

    } if(casoPreciseDeMagia === "Sugando"){
        personAtrib[sabertime2][saberplayer2]["Pontos de Vida"] -= 1;
        personAtrib[sabertime1][saberplayer1]["Pontos de Vida"] += 3;
    } if(casoPreciseDeMagia === "Rugido das Trevas"){
        const mendieta = (personAtrib[time][personagem]["Energia"])/4
        personAtrib[time][personagem]["Energia"] = mendieta
    }


    if (time === 0){
        sumirAlvoMagia(".magiaAtacar1")
    } else if(time === 1){
        sumirAlvoMagia(".magiaAtacar2")
    }

    energiaPdv(sabertime1, saberplayer1)
    energiaPdv(sabertime2, saberplayer2)
}

function apareceMagia(riquelme){
    document.getElementById("magiaValor").textContent = riquelme[0]
    const beckham = document.getElementById("magiaTexto")
    const veron = document.getElementById("magiaValor")
    veron.addEventListener("mouseenter", function(){
        beckham.classList.remove("invisivel")
    })
    veron.addEventListener("mouseout", function(){
        beckham.classList.add("invisivel")
    })

    beckham.textContent = riquelme[3]
}

function conjurarMagia(){
    if(personAtrib[sabertime1][saberplayer1]["Energia"] >= personAtrib[sabertime1][saberplayer1]["Especial"]["EspMagia"][2]){
        let tchouameni = personAtrib[sabertime1][saberplayer1]["Especial"]["EspMagia"][0]
        let deBruine = gastaEnergia(personAtrib[sabertime1][saberplayer1]["Energia"], personAtrib[sabertime1][saberplayer1]["Especial"]["EspMagia"][2])
        personAtrib[sabertime1][saberplayer1]["Energia"] = deBruine
        if (tchouameni === "Filhas cobras"){
            if(sabertime1 === 0){
                personAtrib[1][0]["Pontos de Vida"] -=2;
                personAtrib[1][1]["Pontos de Vida"] -=2;
                personAtrib[1][2]["Pontos de Vida"] -=2;
            } if(sabertime1 === 1){
                personAtrib[0][0]["Pontos de Vida"] -=2;
                personAtrib[0][1]["Pontos de Vida"] -=2;
                personAtrib[0][2]["Pontos de Vida"] -=2;
            } 

        } if (tchouameni === "Envenenado"){
            casoPreciseDeMagia = "Envenenado"
            if (sabertime1 === 0){
                mostrarAlvoMagia(".magiaAtacar2")
            } else {
                mostrarAlvoMagia(".magiaAtacar1")
            }

        } if (tchouameni === "Power"){
            personAtrib[sabertime1][saberplayer1]["Força"] += 2

        } if (tchouameni === "Estático"){
            casoPreciseDeMagia = "Estático"
            if (sabertime1 === 0){
                mostrarAlvoMagia(".magiaAtacar2")
            } else {
                mostrarAlvoMagia(".magiaAtacar1")
            }
        } if (tchouameni === "Sugando"){
            casoPreciseDeMagia = "Sugando"
            if (sabertime1 === 0){
                mostrarAlvoMagia(".magiaAtacar2")
            } else {
                mostrarAlvoMagia(".magiaAtacar1")
            }
        } if (tchouameni === "Carregando"){
            personAtrib[sabertime1][saberplayer1]["Energia"] += 5

        } if (tchouameni === "Flechada Cruel"){
            const bill = parseInt(Math.round(Math.random() * 3) -1)
            if (sabertime1 === 0){
                personAtrib[1][bill]["Pontos de Vida"] -=2;
            } if (sabertime1 === 1){
                personAtrib[0][bill]["Pontos de Vida"] -=2;
            }
        } if (tchouameni === "Rugido das Trevas"){
            casoPreciseDeMagia = "Rugido das Trevas"
            if (sabertime1 === 0){
                mostrarAlvoMagia(".magiaAtacar2")
            } else {
                mostrarAlvoMagia(".magiaAtacar1")
            }
        }
    } else {
        document.getElementById("magiaValor").textContent = "Você não tem energia Suficiente!!!"
    }
    energiaPdv()
    finalDePartida()
    turno = true
}

function conjurarEstrutural(){
    if (personAtrib[sabertime1][saberplayer1]["Energia"] >= personAtrib[sabertime1][saberplayer1]["Especial"]["estrutural"][1]){
        let makelele = personAtrib[sabertime1][saberplayer1]["Especial"]["estrutural"][0]
        let recoba = gastaEnergia(personAtrib[sabertime1][saberplayer1]["Energia"], personAtrib[sabertime1][saberplayer1]["Especial"]["estrutural"][1])
        personAtrib[sabertime1][saberplayer1]["Energia"] = recoba
        if(makelele === "Em chamas"){
            personAtrib[sabertime1][saberplayer1]["Magia"] += 1; personAtrib[sabertime1][saberplayer1]["Defesa de Magia"] += 1; personAtrib[sabertime1][saberplayer1]["Especial"]["EspTecnica"][1] += 1;
            personAtrib[sabertime1][saberplayer1]["Força"] += 1; personAtrib[sabertime1][saberplayer1]["Defesa"] += 1; personAtrib[sabertime1][saberplayer1]["Esquiva"] += 1; personAtrib[sabertime1][saberplayer1]["Resistência"] += 1;
        
        } if(makelele === "Curando Sempre"){
            criarBuff((function(){
                let contador = 10
                let time = sabertime1
                const acao = function(){
                    if (contador === 0){
                        removerBuff(acao)
                        return
                    }
                    curandoSempre(time)
                    contador--
                }
                return acao
            })()) 
        } if(makelele === "Espiritos da Floresta"){
            personAtrib[sabertime1][0]["Defesa"] += 1
            personAtrib[sabertime1][1]["Defesa"] += 1
            personAtrib[sabertime1][2]["Defesa"] += 1
            personAtrib[sabertime1][0]["Esquiva"] += 1
            personAtrib[sabertime1][1]["Esquiva"] += 1
            personAtrib[sabertime1][2]["Esquiva"] += 1
            personAtrib[sabertime1][0]["Defesa de Magia"] += 1
            personAtrib[sabertime1][1]["Defesa de Magia"] += 1
            personAtrib[sabertime1][2]["Defesa de Magia"] += 1

        } if(makelele === "Tempestade"){
            personAtrib[sabertime1][saberplayer1]["Magia"] += 2; personAtrib[sabertime1][saberplayer1]["Defesa de Magia"] += 2; personAtrib[sabertime1][saberplayer1]["Especial"]["EspTecnica"][1] += 2;
            personAtrib[sabertime1][saberplayer1]["Força"] += 2; personAtrib[sabertime1][saberplayer1]["Defesa"] += 2; personAtrib[sabertime1][saberplayer1]["Esquiva"] += 2; personAtrib[sabertime1][saberplayer1]["Resistência"] += 2;
        
        } if(makelele === "Sobrevivendo"){
            personAtrib[sabertime1][saberplayer1]["Pontos de Vida"] += 1
        
        } if(makelele === "Fortalecido"){
            criarBuff((function(){
                let contador = 5
                let time = sabertime1
                const acao = function(){
                    if (contador === 0){
                        removerBuff(acao)
                        return
                    }
                    fortalecido(time)
                    contador--
                }
                return acao
            })())
        } if(makelele === "Defendendo e Absorvendo"){
            criarBuff((function(){
                let contador = 1000
                let time = sabertime1
                let personagem = saberplayer1
                const acao = function(){
                    if (contador === 0){
                        removerBuff(acao)
                        return
                    }
                    defendendoEAbsorvendo(time,personagem)
                    contador--
                }
                return acao
            })())
        } if(makelele === "Mais forte que Nunca"){
            criarBuff((function(){
                let contador = 6
                let time = sabertime1
                let personagem = saberplayer1
                const acao = function(){
                    if (contador === 0){
                        removerBuff(acao)
                        return
                    }
                    maisForteQueNunca(time, personagem)
                    contador--
                }
                return acao
            })())
        } if(makelele === "Recuperando"){
            personAtrib[sabertime1][0]["Pontos de Vida"] += 3
            personAtrib[sabertime1][1]["Pontos de Vida"] += 3
            personAtrib[sabertime1][2]["Pontos de Vida"] += 3
        } if(makelele === "Abraço do Abismo"){
            personAtrib[sabertime1][saberplayer1]["Força"] += 2;
            personAtrib[sabertime1][saberplayer1]["Defesa"] += 2;
        }
    } else {
        document.getElementById("magiaValor").textContent = "Você não tem energia Suficiente!!!"
    }

    energiaPdv()
    finalDePartida()
    animacaoTecnica(sabertime1)
    turno = true
}

function aparecePersonagem(nome){
    let robben = document.getElementById(nome)
    robben.classList.remove("invisivel")
}

function desaparecePersonagem(nome){
    let vanPersie = document.getElementById(nome)
    vanPersie.classList.add("invisivel")
}

function finalDePartida(){
    if(personAtrib[0][0]["Pontos de Vida"] <= 0 && personAtrib[0][1]["Pontos de Vida"] <= 0 && personAtrib[0][2]["Pontos de Vida"] <= 0){
        fimDeJogo.textContent = "Player 2 Venceu!!!"
    } if(personAtrib[1][0]["Pontos de Vida"] <= 0 && personAtrib[1][1]["Pontos de Vida"] <= 0 && personAtrib[1][2]["Pontos de Vida"] <= 0){
        fimDeJogo.textContent = "Player 1 Venceu!!!"
    }
}

//Função magias de rodadas

function incrementaRodada(){
    if (turno === true){
        for(i=0; i<buff.length; i++){
            buff[i]()
            turno = false      
        }
    }
}

function abrirAtaqueEincrementaRodada(time, personagem){
    abrirAtaque(time, personagem)
    incrementaRodada()
    energiaPdv()
    limpaDados()
    removeDiv()
}

function curandoSempre(time){
    personAtrib[time][0]["Pontos de Vida"] += 0.5
    personAtrib[time][1]["Pontos de Vida"] += 0.5
    personAtrib[time][2]["Pontos de Vida"] += 0.5
}

function fortalecido(time){
    personAtrib[time][0]["Força"] += 0.5
    personAtrib[time][1]["Força"] += 0.5
    personAtrib[time][2]["Força"] += 0.5
}

function defendendoEAbsorvendo(time,personagem){
    personAtrib[time][personagem]["Energia"] += 1
}

function maisForteQueNunca(time, personagem){
    const venancia = personAtrib[time][personagem]
    let berahino = parseInt(Math.round(Math.random() * 7) -1)
    if (berahino === 1){
        venancia["Força"] += 2
    } if (berahino === 2){
        venancia["Defesa"] += 2
    } if (berahino === 3){
        venancia["Esquiva"] += 2
    } if (berahino === 4){
        venancia["Resistência"] += 2
    } if (berahino === 5){
        venancia["Defesa de Magia"] += 2
    } if (berahino === 6){
        venancia["Técnica Mágica"] += 2
    }
}


// Função para lidar com as ações
document.getElementById("btnPorrada").addEventListener("click", function() {
    document.getElementById("janelaModal1").classList.remove("hide")
});

document.getElementById("btnMagia").addEventListener("click", function() {
    document.getElementById("janelaModal1").classList.remove("hide")
    apareceMagia(personAtrib[sabertime1][saberplayer1]["Especial"]["EspMagia"]);
    conjurarMagia();
    if (sabertime1 === 0){
        sumirAlvo(".espadinhaAtacar2");
    } else {
        sumirAlvo(".espadinhaAtacar1");
    }
});

document.getElementById("btnMagia__Estrutural").addEventListener("click", function() {
    document.getElementById("janelaModal1").classList.remove("hide")
    apareceMagia(personAtrib[sabertime1][saberplayer1]["Especial"]["estrutural"])
    conjurarEstrutural() 
    if (sabertime1 === 0){
        sumirAlvo(".espadinhaAtacar2");
    } else {
        sumirAlvo(".espadinhaAtacar1");
    }
    limpaDados()
});

document.getElementById("btnTécnica__Especial").addEventListener("click", function() {
    document.getElementById("janelaModal1").classList.remove("hide")
});


//aperto de botões
document.getElementById("btnDefesa").addEventListener("click", function() {
    document.getElementById("janelaModal2").classList.remove("hide")
    if (porradaValidacao === true){
        const ronaldinho = ataqueDePorrada(personAtribModalAtk["Força"], personAtribModalDef["Defesa"], personAtribModalDef["Pontos de Vida"], personAtribModalDef["Resistência"])
        personAtrib[sabertime2][saberplayer2]["Pontos de Vida"] = ronaldinho
        energiaPdv();
        limpaDados();
        morteDePersonagem(ronaldinho);
        finalDePartida();
    } if (tecnicaValidacao === true){
        document.getElementById("magiaValor").textContent = "Essa combinação não existe!!!"
        limpaDados ()
    }

    turno = true
});

document.getElementById("btnDefesaDeTécnica").addEventListener("click", function() {
    document.getElementById("janelaModal2").classList.remove("hide")
    if(personAtrib[sabertime1][saberplayer1]["Energia"] >= personAtrib[sabertime1][saberplayer1]["Especial"]["EspTecnica"][2] ){
        if (tecnicaValidacao === true){
            const zidane = ataqueDeTecnica(personAtribModalAtk["Técnica Mágica"], personAtribModalDef["Defesa de Magia"], personAtribModalDef["Pontos de Vida"], personAtribModalDef["Resistência"])
            personAtrib[sabertime2][saberplayer2]["Pontos de Vida"] = zidane
            const rivaldo = gastaEnergia(personAtrib[sabertime1][saberplayer1]["Energia"], personAtrib[sabertime1][saberplayer1]["Especial"]["EspTecnica"][2])
            personAtrib[sabertime1][saberplayer1]["Energia"] = rivaldo
            energiaPdv()
            limpaDados()
            morteDePersonagem(zidane);
            finalDePartida()
        } if (porradaValidacao === true){
            document.getElementById("magiaValor").textContent = "Essa combinação não existe!!!"
            limpaDados ()
        }
    } else {
        document.getElementById("magiaValor").textContent = "O Atacante não tem energia para usar a Técnica!!!"
    }

    turno = true
});

document.getElementById("btnEsquiva").addEventListener("click", function() {
    document.getElementById("janelaModal2").classList.remove("hide")
    if (porradaValidacao === true){
        const okocha = esquivaDeAtaque(personAtribModalAtk["Força"], personAtribModalDef["Esquiva"], personAtribModalDef["Pontos de Vida"], personAtribModalDef["Resistência"])
        personAtrib[sabertime2][saberplayer2]["Pontos de Vida"] = okocha
        energiaPdv()
        limpaDados();
        morteDePersonagem(okocha);
        finalDePartida()
    } if (tecnicaValidacao === true) {
        if (personAtrib[sabertime1][saberplayer1]["Energia"] >= personAtrib[sabertime1][saberplayer1]["Especial"]["EspTecnica"][2]){
            const nedved = esquivaDeTecnica(personAtribModalAtk["Técnica Mágica"], personAtribModalDef["Esquiva"], personAtribModalDef["Pontos de Vida"], personAtribModalDef["Resistência"])
            personAtrib[sabertime2][saberplayer2]["Pontos de Vida"] = nedved
            const gallas = gastaEnergia(personAtrib[sabertime1][saberplayer1]["Energia"], personAtrib[sabertime1][saberplayer1]["Especial"]["EspTecnica"][2])
            personAtrib[sabertime1][saberplayer1]["Energia"] = gallas
            energiaPdv()
            limpaDados()
            morteDePersonagem(nedved)
            finalDePartida()
        } else {
            document.getElementById("magiaValor").textContent = "O Atacante não tem energia para usar a Técnica!!!"
        }
    }

    turno = true
});


//hover dos personagens
function apareceDadosDuranteRodada(time,personagem){
    document.getElementById("tituloHover").textContent = personAtrib[time][personagem]["Nome"]
    document.getElementById("forçaHover").textContent = personAtrib[time][personagem]["Força"]
    document.getElementById("tecnicaHover").textContent = personAtrib[time][personagem]["Técnica Mágica"]
    document.getElementById("magiaHover").textContent = personAtrib[time][personagem]["Magia"]
    document.getElementById("estruturalHover").textContent = personAtrib[time][personagem]["Magia Estrutural"]
    
}

function dadosModalPersonagem(time){
    document.getElementById("tituloModalP1").innerHTML = personAtrib[time][0]["Nome"]
    document.getElementById("defesaModalP1").innerHTML = personAtrib[time][0]["Defesa"]
    document.getElementById("esquivaModalP1").innerHTML = personAtrib[time][0]["Esquiva"]
    document.getElementById("defesaMagiaModalP1").innerHTML = personAtrib[time][0]["Defesa de Magia"]

    document.getElementById("tituloModalP2").innerHTML = personAtrib[time][1]["Nome"]
    document.getElementById("defesaModalP2").innerHTML = personAtrib[time][1]["Defesa"]
    document.getElementById("esquivaModalP2").innerHTML = personAtrib[time][1]["Esquiva"]
    document.getElementById("defesaMagiaModalP2").innerHTML = personAtrib[time][1]["Defesa de Magia"]

    document.getElementById("tituloModalP3").innerHTML = personAtrib[time][2]["Nome"]
    document.getElementById("defesaModalP3").innerHTML = personAtrib[time][2]["Defesa"]
    document.getElementById("esquivaModalP3").innerHTML = personAtrib[time][2]["Esquiva"]
    document.getElementById("defesaMagiaModalP3").innerHTML = personAtrib[time][2]["Defesa de Magia"]
}


// Animação do jogo

function animacaoTecnica(time){
    if (time === 0){
        document.getElementById("lutaTchanP1").classList.add("tremor")
    } if (time === 1){
        document.getElementById("lutaTchanP2").classList.add("tremor")
    }
}

function mortePorTecnica(time){
    const newDiv = document.createElement("div");
    newDiv.className = "blink-text";
    newDiv.innerHTML = "Se Fudeu!!!"

    if(time === 0){
        document.getElementById("lutaTchanP1").appendChild(newDiv);
    } if(time === 1){
        document.getElementById("lutaTchanP2").appendChild(newDiv);
    }
}

function removeDiv() {
    const divToRemove = document.querySelector('.blink-text');
    if (divToRemove) {
      divToRemove.remove();
    }
}
