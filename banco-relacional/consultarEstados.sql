select * from estados 

select nome as 'Nome do estado', sigla from estados
where regiao = 'Sul'

--outra forma
select 
    Sigla,
    nome as 'Nome do estado'
from estados
where regiao = 'Sul'

select nome, regiao, populacao from estados
where populacao >= 10
order by populacao desc