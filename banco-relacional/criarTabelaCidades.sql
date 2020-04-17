--relação 1 pra n com estados (1 estado para n cidades)
create table if not exists cidades (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id INT UNSIGNED NOT NULL,
    area DECIMAL(10,2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) REFERENCES estados (id)
);

-- create table if not exists teste (
--     id int unsigned not null auto_increment primary key
-- );

-- drop table if exists teste;