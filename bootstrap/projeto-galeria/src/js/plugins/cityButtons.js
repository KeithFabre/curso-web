import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'

const duration = 300

function filterByCity(city) {
    $('[city]').each(function (i, e) {
        //se true: cidade exibida
        //se false: cidade escondida
        const isTarget = $(this).attr('city') === city
            || city === null //se for nulo o target sempre será true, exibindo todas as cidades

        if (isTarget) {
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })

        }
    })
}

//const cityButtons = $('[city-buttons]')

$.fn.cityButtons = function () {
    //plugin não precisa ser protegido devido
    //ao sistema de módulos do node
    //Set para evitar repetição
    const cities = new Set
    $('[city]').each(function (i, e) {
        cities.add($(e).attr('city'))
    })

    const btns = Array.from(cities).map(city => {
        const btn = $('<button>')
            .addClass(['btn', 'btn-info']).html(city)
        btn.click(e => filterByCity(city))
        return btn
    })

    const btnAll = $('<button>')
    .addClass(['btn', 'btn-info', 'active']).html('Todas')
    btnAll.click(e => filterByCity(null))
    btns.push(btnAll)

    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)

    $(this).html(btnGroup)
    return this 
}

onLoadHtmlSuccess(function() {
    $('[city-buttons]').cityButtons()
})

