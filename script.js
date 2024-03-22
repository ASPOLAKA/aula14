function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero= ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <5) {
                //Bebe
                img.setAttribute('src', 'bebemenino.png')
            } else if (idade <15){
                //Criança
                img.setAttribute('src', 'menino.png')
            } else if (idade <25) {
                //Jovem
                img.setAttribute('src', 'jovemmenino.png')
            } else if (idade <65) {
                //Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <5) {
                //Bebe
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade <15){
                //Criança
                img.setAttribute('src', 'menina.png')
            } else if (idade <25) {
                //Jovem
                img.setAttribute('src', 'jovemmenina.png')
            } else if (idade <65) {
                //Adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Idade Calculada: ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}