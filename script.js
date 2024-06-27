const chaveApi = '64ed82577ced7f69cb1687f0ce536131';
const urlApi = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('botao-pesquisa').addEventListener('click', () => {
    const cidade = document.getElementById('input-cidade').value;
    fetch(`${urlApi}?q=${cidade}&appid=${chaveApi}&units=metric&lang=pt`)
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error('Cidade não encontrada');
            }
            return resposta.json();
        })
        .then(dados => {
            const previsaoTempo = document.getElementById('previsao-tempo');
            previsaoTempo.innerHTML = `
                <div class="item-previsao">Temperatura: ${dados.main.temp} °C</div>
                <div class="item-previsao">${dados.weather[0].description}</div>
                <div class="item-previsao"><img src="http://openweathermap.org/img/wn/${dados.weather[0].icon}.png" alt="Ícone do clima"></div>
            `;
        })
        .catch(erro => {
            alert(erro.message);
        });
});