alter table empresas modify cnpj varchar(14);

insert into empresas
    (nome, cnpj)
values
    ('Bradesco', 64343439000108),
    ('Vale', 75063020000100),
    ('Cielo', 98913383000193);

-- descreve a tabela
desc empresas;
desc prefeitos;
select * from empresas;
select * from cidades;

insert into empresas_unidades 
    (empresa_id, cidade_id, sede)
values 
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);