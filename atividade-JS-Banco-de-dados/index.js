// Simulação de uma busca em um banco de dados



async function fazerRequisicao() {
    const resp = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const data = await resp.json();
    const deckId = data.deck_id
    return deckId
}

async function escolherCarta(deckId) {
    const resp = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
    return await resp.json();

}

async function tirarCarta() {
    try {
        const deckOfCards = await fazerRequisicao()
        const carta = await escolherCarta(deckOfCards)
        const imagemCarta = carta.cards[0].image;
        const div = document.querySelector('img').src = imagemCarta;
        console.log("Funcionou");
    } catch (err) {
        console.error(err);
    }
}

tirarCarta();