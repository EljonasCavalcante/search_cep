const cep = document.querySelector("#cep");

const viewData = (result) => {
    for(const campo in result) { 
        const getData = document.querySelector("#"+campo)     
        if(getData){
            getData.value = result[campo]
            console.log(campo)
        }
    }
}

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-","");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json`, options)
    .then(res =>{res.json()
        .then( data => viewData(data))
    })
    .cache(e => console.log("Erro: " + e, message))
})