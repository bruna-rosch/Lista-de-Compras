function gerarDiaDaSemana () {
     const diaDaSemana = new Date().toLocaleDateString("pt-BR",{
         weekday: "long"
    }); //ajuste da data 
    const data = new Date().toLocaleDateString("pt-BR");//em numero
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    })
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`

    return dataCompleta;
}

export default gerarDiaDaSemana;//enviar