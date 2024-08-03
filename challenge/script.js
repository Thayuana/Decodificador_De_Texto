// Função para criptografar o texto
function criptografar() {
    let inputText = document.getElementById('inputText').value;
    let outputText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = outputText;
}

// Função para descriptografar o texto
function descriptografar() {
    let inputText = document.getElementById('inputText').value;
    let outputText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = outputText;
}

// Função para copiar o texto para a área de transferência
function copiarTexto() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móveis
    navigator.clipboard.writeText(outputText.value)
        .then(() => {
            alert("Texto copiado para a área de transferência!");
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
}
