function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert ('[ERRO!] Verifique os dados e tente novamente')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (fsex [0].checked) {
            gênero = ' Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute ('src', 'imagens/photo-babym1.png')
            } else if ( idade < 20) {
                img.setAttribute ('src', 'imagens/photo-guy3.png')
            } else if (idade < 50) {
                img.setAttribute ('src', 'imagens/photo-adult2.png')
            } 
            else {
                img.setAttribute ('src', 'imagens/oldman2.png')
            }
            
        } else if (fsex [1].checked) {
            gênero = 'Mulher'
             if (idade >= 0 && idade < 10) {
                 img.setAttribute ('src', 'imagens/babyf.png')
             } else if (idade < 20) {
                 img.setAttribute ('src', 'imagens/photo-girl2.png')
             } 
             else if (idade < 50 ) {
                 img.setAttribute ('src', 'imagens/woman.png')
             }
             else {
                 img.setAttribute('src', 'imagens/granny1.png')
             }
        }
        img.style.padding = '8px'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um (a) ${gênero} com ${idade} anos `
        res.appendChild(img)
    }
    
}