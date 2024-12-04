// Inicializa a biblioteca AOS (Animate On Scroll), usada para animações de rolagem na página.
AOS.init(); 

// Define a data e hora do evento como 31 de dezembro de 2024, às 19:00.
const dataDoEvento = new Date("Dec 31, 2024, 19:00:00");

// Converte a data e hora do evento para um timestamp (número de milissegundos desde 1 de janeiro de 1970).
const timeStampDoEvento = dataDoEvento.getTime();

// Define uma função que será executada a cada segundo para calcular e atualizar o tempo restante até o evento.
const contaAsHoras = setInterval(function() {
    // Captura a data e hora atual.
    const agora = new Date();
    // Converte a data e hora atual para um timestamp.
    const timeStampAtual = agora.getTime();

    // Calcula a diferença em milissegundos entre a data do evento e a data atual.
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    // Define as constantes para a conversão de milissegundos em dias, horas e minutos.
    const diaEmMs = 1000 * 60 * 60 * 24; // Total de milissegundos em um dia.
    const horasEmMs = 1000 * 60 * 60;    // Total de milissegundos em uma hora.
    const minutoEmMs = 1000 * 60;        // Total de milissegundos em um minuto.

    // Calcula o número inteiro de dias restantes até o evento.
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    // Calcula o número inteiro de horas restantes (desconsiderando dias completos).
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horasEmMs);
    // Calcula o número inteiro de minutos restantes (desconsiderando horas completas).
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutoEmMs);
    // Calcula o número inteiro de segundos restantes (desconsiderando minutos completos).
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);
    
    // Atualiza o elemento HTML com ID 'contador' para exibir o tempo restante no formato "Xd Xh Xm Xs".
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    // Verifica se a data do evento já passou.
    if (distanciaAteOEvento < 0) {
        // Para a execução do intervalo, já que o evento expirou.
        clearInterval(contaAsHoras);
        // Atualiza o elemento HTML para exibir a mensagem "Evento expirado".
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000); // Define o intervalo de execução como 1 segundo (1000 ms).