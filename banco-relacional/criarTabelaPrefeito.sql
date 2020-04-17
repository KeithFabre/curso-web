--quando existem questões de performance envolvidas é mais recomendado acrescentar uma coluna 
--ao invés de fazer uma nova tabela
-- se perguntar: é mesmo necessário ter uma relação 1 pra 1?

create table if not exists prefeitos (
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    cidade_id int unsigned,
    primary key (id),
    unique key (cidade_id),
    foreign key (cidade_id) references cidades (id)
)