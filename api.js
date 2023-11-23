async function buscarCEP() {
    try {
        const cep = document.getElementById('cep').value
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)
        const data = await response.json()
        
        document.getElementById('rua').value = data.logradouro
        document.getElementById('bairro').value = data.bairro
        document.getElementById('cidade').value = data.localidade
        document.getElementById('uf').value = data.uf
    } catch(error) {
        error.message = "Não foi possível localizar o CEP informado"
        alert(error.message)
    }
    }