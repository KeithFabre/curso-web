import $ from 'jquery' //importando e referenciando com $

//array de callbacks que serão chamadas quando uma req for bem sucedida
const loadHtmlSuccessCallbacks = []

//regista funções no array 
export function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent) { //procura no parent
    if(!parent) parent = 'body'
    $(parent).find('[include]').each(function(i, e) {
        const url = $(e).attr('include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('include') //se função for chamada de novo já não interpreta mais a propriedade

                loadHtmlSuccessCallbacks.forEach(
                    callback => callback(data))
                //função recursiva, procura em todos os elementos
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()