(function () {
    function marcarLinkComoSelecionado(hash) {
        const links = document.querySelectorAll(`[wm-link]`)
        links.forEach(link => link.classList.remove('selecionado'))

        const link = document.querySelector(`[wm-link='${hash}']`)
        link.classList.add('selecionado')
    }

    function navegarViaAjax(hash) {
        if (!hash) return

        const link = document.querySelector(`[wm-link='${hash}']`)
        const destino = document.querySelector('[wm-link-destino]')

        const url = hash.substring(1)
        fetch(url)
            .then(resp => resp.text()) //transforma em texto html
            .then(html => {
                destino.innerHTML = html
                marcarLinkComoSelecionado(hash)
            })
    }

    function configurarLinks() {
        document.querySelectorAll('[wm-link]')
            .forEach(link => {
                link.href = link.attributes['wm-link'].value
            })
    }

    function navegacaoInicial() {
        if (location.hash) {
            navegarViaAjax(location.hash)
        } else {
            const primeiroLink = document.querySelector('[wm-link]')
            navegarViaAjax(primeiroLink.hash)
        }
    }

    //quando o hash muda chama a navegação via ajax
    window.onhashchange = e => navegarViaAjax(location.hash)
    
    configurarLinks()
    navegacaoInicial()
})()