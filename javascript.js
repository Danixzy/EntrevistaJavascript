const input1 = document.getElementById('input1');
const botao1 = document.getElementById('botao1');
const botaoLimpar1 = document.getElementById('botaoLimpar1');
const resultado1 = document.getElementById('resultado1');

const input2 = document.getElementById('input2');
const botao2 = document.getElementById('botao2');
const botaoLimpar2 = document.getElementById('botaoLimpar2');
const resultado2 = document.getElementById('resultado2');
const numero2 = document.getElementById('numero2');
const botaoCalcular2 = document.getElementById('botaoCalcular2');
let array2 = [];

const input3 = document.getElementById('input3');
const botao3 = document.getElementById('botao3');
const botaoLimpar3 = document.getElementById('botaoLimpar3');
const resultado3 = document.getElementById('resultado3');
const numero3 = document.getElementById('numero3');
const botaoCalcular3 = document.getElementById('botaoCalcular3');
const array3 = [];

const input4 = document.getElementById('input4');
const botao4 = document.getElementById('botao4');
const botaoLimpar4 = document.getElementById('botaoLimpar4');
const resultado4 = document.getElementById('resultado4');

const input5 = document.getElementById('input5');
const botao5 = document.getElementById('botao5');
const botaoLimpar5 = document.getElementById('botaoLimpar5');
const resultado5 = document.getElementById('resultado5');

const input6 = document.getElementById('input6');
const botao6 = document.getElementById('botao6');
const botaoLimpar6 = document.getElementById('botaoLimpar6');
const resultado6 = document.getElementById('resultado6');
const botaoCalcular6 = document.getElementById('botaoCalcular6');
const array6 = [];

const input7 = document.getElementById('input7');
const botao7 = document.getElementById('botao7');
const resultado7 = document.getElementById('resultado7');
const botaoCalcular7 = document.getElementById('botaoCalcular7');
const botaoLimpar7 = document.getElementById('botaoLimpar7');
const array7 = [];
let frequencia = {};

const botao8 = document.getElementById('botao8');
const botaoLimpar8 = document.getElementById('botaoLimpar8');
const resultado8 = document.getElementById('resultado8');

const input9 = document.getElementById('input9');
const botao9 = document.getElementById('botao9');
const botaoLimpar9 = document.getElementById('botaoLimpar9');
const resultado9 = document.getElementById('resultado9');

const input10 = document.getElementById('input10');
const botao10 = document.getElementById('botao10');
const botaoLimpar10 = document.getElementById('botaoLimpar10');
const selectNotas = document.getElementById('selectNotas');
const resultado10 = document.getElementById('resultado10');
const botao102 = document.getElementById('botao102');
const notasEscolhidasContainer = document.createElement('div'); 
resultado10.insertAdjacentElement('beforebegin', notasEscolhidasContainer);

let notasDisponiveis = {
    "100": true,
    "50": true,
    "20": true,
    "10": true,
    "5": true,
    "2": true
};

let nota100 = 99999999999999;
let nota50 = 99999999999999;
let nota20 = 99999999999999;
let nota10 = 99999999999999;
let nota5 = 99999999999999;
let nota2 = 99999999999999;
let bolso = {
    "nota100": 0,
    "nota50": 0,
    "nota20": 0,
    "nota10": 0,
    "nota5": 0,
    "nota2": 0
};


botao102.addEventListener('click', function() {
    const valorNota = selectNotas.value;
    if (notasDisponiveis[valorNota]) {
        const notaElemento = document.createElement('div');
        notaElemento.className = 'nota-item';
        notaElemento.innerHTML = `
            <span>Nota de ${valorNota}</span>
            <button class="remover-nota" data-valor="${valorNota}">Remover</button>
        `;
        notasEscolhidasContainer.appendChild(notaElemento);
        notasDisponiveis[valorNota] = false; 

      
        notaElemento.querySelector('.remover-nota').addEventListener('click', function() {
            notasEscolhidasContainer.removeChild(notaElemento);
            notasDisponiveis[valorNota] = true; 
        });
    }
});

botaoLimpar10.addEventListener('click', function () {
    input10.value = "";
    resultado10.innerHTML = "";
    notaElemento.innerHTML = "";
});


botao10.addEventListener('click', function() {
    let numero = parseInt(input10.value);
    resultado10.innerHTML = "";

    bolso = {
        "nota100": 0,
        "nota50": 0,
        "nota20": 0,
        "nota10": 0,
        "nota5": 0,
        "nota2": 0
    };

    const notasEscolhidas = Array.from(notasEscolhidasContainer.querySelectorAll('.nota-item span'))
        .map(el => parseInt(el.textContent.split(' ')[2]));

    if (notasEscolhidas.length === 0) {
        resultado10.innerHTML = "Selecione pelo menos um tipo de nota para sacar.";
        return;
    }

    while (numero > 0) {
        if (notasEscolhidas.includes(100) && numero >= 100 && nota100 > 0) {
            bolso.nota100 += 1;
            nota100 -= 1;
            numero -= 100;
        } else if (notasEscolhidas.includes(50) && numero >= 50 && nota50 > 0) {
            bolso.nota50 += 1;
            nota50 -= 1;
            numero -= 50;
        } else if (notasEscolhidas.includes(20) && numero >= 20 && nota20 > 0) {
            bolso.nota20 += 1;
            nota20 -= 1;
            numero -= 20;
        } else if (notasEscolhidas.includes(10) && numero >= 10 && nota10 > 0) {
            bolso.nota10 += 1;
            nota10 -= 1;
            numero -= 10;
        } else if (notasEscolhidas.includes(5) && numero >= 5 && nota5 > 0) {
            bolso.nota5 += 1;
            nota5 -= 1;
            numero -= 5;
        } else if (notasEscolhidas.includes(2) && numero >= 2 && nota2 > 0) {
            bolso.nota2 += 1;
            nota2 -= 1;
            numero -= 2;
        } else {
            resultado10.innerHTML = 'valor não pode ser sacado com as notas escolhidas.';
            return;
        }
    }

    resultado10.innerHTML = `
    Notas de 100: ${bolso.nota100} <br>
    Notas de 50: ${bolso.nota50} <br>
    Notas de 20: ${bolso.nota20} <br>
    Notas de 10: ${bolso.nota10} <br>
    Notas de 5: ${bolso.nota5} <br>
    Notas de 2: ${bolso.nota2} 
    `;
});

botaoLimpar9.addEventListener('click', function () {
    input9.value = "";
    resultado9.innerHTML = "";
});

botao9.addEventListener('click', function() {
    function validarLuhn(numero) {
        let soma = 0;
        let paridade = numero.length % 2;

        for (let i = 0; i < numero.length; i++) {
            let digito = parseInt(numero[i], 10);
            if (i % 2 === paridade) {
                digito *= 2;
                if (digito > 9) digito -= 9;
            }
            soma += digito;
        }

        return soma % 10 === 0;
    }

    const prefixo = '543210';
    const sufixo = '1234';
    let encontrado = false;

    for (let i = 0; i < 1000000; i++) {
        let parteIntermediaria = i.toString().padStart(6, '0');
        let numeroCartao = prefixo + parteIntermediaria + sufixo;

        if (parseInt(numeroCartao, 10) % 123457 === 0 && validarLuhn(numeroCartao)) {
            resultado9.innerHTML = `Número do cartão encontrado: ${numeroCartao}`;
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        resultado9.innerHTML = 'Nenhum número de cartão encontrado que atenda aos critérios.';
    }
});


botaoLimpar8.addEventListener('click', function () {
    resultado8.innerHTML = "";
});


botao8.addEventListener('click', function() {

    fetch('/mnt/data/data.dat')
        .then(response => response.text())
        .then(text => {
        
            const linhas = text.split('\n');
            let contadorLinhasValidas = 0;

        
            linhas.forEach(linha => {
                const zeros = (linha.match(/0/g) || []).length;
                const uns = (linha.match(/1/g) || []).length;

        
                if (zeros % 3 === 0 || uns % 2 === 0) {
                    contadorLinhasValidas++;
                }
            });

 
            resultado8.innerHTML = `Número de linhas que atendem as condições: ${contadorLinhasValidas}`;
        })
        .catch(error => {
            console.error('Erro ao ler o arquivo:', error);
            resultado8.innerHTML = 'Erro ao ler o arquivo';
        });
});

botao7.addEventListener('click', function () {
    array7.push(input7.value);
    input7.value = "";
});

botaoCalcular7.addEventListener("click", function () {
    for (let i = 0; i < array7.length; i++) {
        const num = array7[i];
        frequencia[num] = (frequencia[num] || 0) + 1;
    }

    for (let i = 0; i < array7.length; i++) {
        if (frequencia[array7[i]] === 1) {
            resultado7.innerHTML = array7[i];
            return;
        }
    }

    resultado7.innerHTML = "Nenhum elemento não repetido encontrado";
});

botaoLimpar7.addEventListener('click', function() {
    array7.length = 0;
    resultado7.innerHTML = "";
    for (let key in frequencia) {
        delete frequencia[key];
    }
    input7.value = "";
});

botaoLimpar6.addEventListener('click', function () {
    input6.value = "";
    array6.length = 0;
    resultado6.innerHTML = "";
});


botao6.addEventListener('click', function () {
    array6.push(input6.value);
    input6.value = "";
});

botaoCalcular6.addEventListener("click", function () {
    let n = array6.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array6[j] > array6[j + 1]) {
                let temp = array6[j];
                array6[j] = array6[j + 1];
                array6[j + 1] = temp;
            }
        }
    }
    console.log(array6);
    resultado6.innerHTML = array6;
});

botaoLimpar5.addEventListener('click', function() {
    resultado5.innerHTML = "";
    input5.value = "";
});

botao5.addEventListener('click', function () {
    let frase = '';
    const texto = input5.value;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "a" || texto[i] === "e" || texto[i] === "i" || texto[i] === "o" || texto[i] === "u") {
            frase += "?";
        } else {
            frase += texto[i];
        }
    }
    resultado5.innerHTML = frase;
});

botaoLimpar4.addEventListener('click', function() {
    resultado4.innerHTML = "";
    input4.value = "";
});

botao4.addEventListener('click', function () {
    const nome = input4.value;
    let nomeInvertido = '';
    input4.value = "";

    for (let i = nome.length - 1; i >= 0; i--) {
        nomeInvertido += nome[i];
    }
    resultado4.innerHTML = `Frase invertida: ${nomeInvertido}`;
});

botaoLimpar3.addEventListener('click', function() {
    resultado3.innerHTML = "";
    numero3.innerHTML = "";
    array3.length = 0;
    input3.value = "";
});

botao3.addEventListener('click', function () {
    numero3.innerHTML = "";
    const valor = parseFloat(input3.value);

    if (valor > 0 && Number.isInteger(valor)) {
        array3.push(valor);
        input3.value = "";
    } else {
        numero3.innerHTML = "Número inválido: insira um número inteiro maior que 0.";
    }
});

botaoCalcular3.addEventListener('click', function () {
    let contador3 = 0;
    for (let i = 0; i < array3.length; i++) {
        if (array3[i] % 2 === 0) {
            contador3 = contador3 + 1;
        }
    }
    resultado3.innerHTML = `${contador3} números pares`;
    numero3.innerHTML = "";
});

botaoLimpar2.addEventListener('click', function () {
    input2.value = "";
    resultado2.innerHTML = "";
    numero2.innerHTML = "";
    array2.length = 0;
});

botao2.addEventListener('click', function () {
    if (array2.length < 3) {
        array2.push(input2.value);
        input2.value = "";
    } else {
        numero2.innerHTML = "Limite de números excedido";
    }
});

botaoCalcular2.addEventListener('click', function () {
    let soma = 0;

    if (array2.length > 2) {
        for (let i = 0; i < array2.length; i++) {
            soma += parseFloat(array2[i]);
        }
        const resultadoFinal = soma / 3;
        resultado2.innerHTML = resultadoFinal;
    } else {
        resultado2.innerHTML = false;
    }
});

botaoLimpar1.addEventListener('click', function () {
    input1.value = "";
    resultado1.innerHTML = "";
});

botao1.addEventListener('click', function () {
    const numeroMes = parseInt(input1.value);
    let mes = '';

    switch (numeroMes) {
        case 1:
            mes = "Janeiro";
            break;
        case 2:
            mes = "Fevereiro";
            break;
        case 3:
            mes = "Março";
            break;
        case 4:
            mes = "Abril";
            break;
        case 5:
            mes = "Maio";
            break;
        case 6:
            mes = "Junho";
            break;
        case 7:
            mes = "Julho";
            break;
        case 8:
            mes = "Agosto";
            break;
        case 9:
            mes = "Setembro";
            break;
        case 10:
            mes = "Outubro";
            break;
        case 11:
            mes = "Novembro";
            break;
        case 12:
            mes = "Dezembro";
            break;
        default:
            mes = "Mês Desconhecido";
    }

    resultado1.innerHTML = mes;
});
