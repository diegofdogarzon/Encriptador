document.getElementById('encrypt-btn').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value;
    const outputText = document.getElementById('output-text');

    const resultText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    outputText.textContent = resultText || 'Ningún mensaje fue encontrado';
});

document.getElementById('decrypt-btn').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value;
    const outputText = document.getElementById('output-text');

    const resultText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    outputText.textContent = resultText || 'Ningún mensaje fue encontrado';
});

document.getElementById('copy-btn').addEventListener('click', function () {
    const outputText = document.getElementById('output-text').textContent;
    navigator.clipboard.writeText(outputText).then(function () {
        alert('Texto copiado al portapapeles');
    }, function () {
        alert('Error al copiar el texto');
    });
});