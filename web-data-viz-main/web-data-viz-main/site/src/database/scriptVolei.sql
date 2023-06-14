
CREATE DATABASE KCsVolei;

USE KCsVolei;
CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
altura INT,
fkLogin INT,
FOREIGN KEY (fkLogin) REFERENCES login(idLogin)
);
SELECT * FROM usuario;
SELECT * FROM login;
SELECT nome, idUsuario, email  FROM login JOIN usuario ON idLogin = fkLogin WHERE email = 'dandas@gmail.com' AND senha = '123';

UPDATE usuario SET fkLogin = 1 WHERE idUsuario = 1;



CREATE TABLE login(
idLogin INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(45),
senha VARCHAR(45)
);

CREATE TABLE selecao(
idSelecao INT PRIMARY KEY AUTO_INCREMENT,
paisSede VARCHAR(45),
apelidoSelecao VARCHAR(50),
descricaoSelecao VARCHAR(500),
qtdTitulosMundiais INT,
qtdTitulosOlimpiadas INT
);
INSERT INTO selecao VALUES (null, 'Brasil', 'Os imperadores do vôlei', 'blablabla', 29, 11),
						   (null, 'Japão', 'Os mais disciplinados', 'blublublu', 10, 3),
						   (null, 'Polônia', 'Estrelas em ascensão', 'bliblibli', 10, 3),
						   (null, 'Alemanha', 'Abençoados pela natureza', 'blebleble', 10, 3);
                           SELECT * FROM selecao;
                           
SELECT	(SELECT qtdTitulosMundiais from selecao WHERE idSelecao = 1) Brasil,
    (SELECT qtdTitulosMundiais from selecao WHERE idSelecao = 2) Japão,
    (SELECT qtdTitulosMundiais from selecao WHERE idSelecao = 3) Polônia,
    (SELECT qtdTitulosMundiais from selecao WHERE idSelecao = 4) Alemanha;
    
SELECT (SELECT descricaoSelecao FROM selecao WHERE idSelecao = 1) Brasil,
    (SELECT descricaoSelecao FROM selecao WHERE idSelecao = 2) Japão,
    (SELECT descricaoSelecao FROM selecao WHERE idSelecao = 3) Polônia,
    (SELECT descricaoSelecao FROM selecao WHERE idSelecao = 4) Alemanha;
                           
CREATE TABLE jogador(
idJogador INT PRIMARY KEY AUTO_INCREMENT,
nomeJogador VARCHAR(45),
posicaoJogador VARCHAR(45),
altura INT,
fkSelecao INT,
FOREIGN KEY (fkSelecao) REFERENCES selecao(idSelecao)
);
INSERT INTO jogador VALUES (null, 'Bruniho', 'Levantador', 190, 1),
						   (null, 'Yoandi Leal', 'Ponteiro', 201,1);
INSERT INTO jogador VALUES (null, 'Yuji Nishida', 'Oposto', 186,2),
						   (null, 'Ishikawa', 'Ponteiro', 192, 2);
INSERT INTO jogador VALUES (null, 'Wilfredo Leon', 'Ponteiro', 201, 3),
						   (null, 'Mateusz Bieniek', 'Central', 210, 3),
                           (null, 'Tobias Krick', 'Central', 211, 4),
                           (null, 'Christian Fromm', 'Ponteiro', 204, 4);

INSERT INTO jogador VALUES (null, 'Alan Souza', 'Oposto', 202, 1),
						   (null, 'Honorato', 'Ponteiro', 190, 1),
                           (null, 'Lucarelli', 'Ponteiro', 196, 1),
                           (null, 'Flavio', 'Central', 200, 1);
                           
INSERT INTO jogador VALUES (null, 'Taishi Onodera', 'Central', 201, 2),
						   (null, 'Yamauchi', 'Central', 204, 2),
                           (null, 'Miyaura', 'Ponteiro', 190, 2),
                           (null, 'Yamamoto', 'Líbero', 174, 2);
                           
INSERT INTO jogador VALUES (null, 'Kurek', 'Oposto', 205, 3),
						   (null, 'Janusz', 'Levantador', 195, 3),
                           (null, 'Kamil', 'Ponteiro', 194, 3),
                           (null, 'Fornal', 'Ponteiro', 200, 3);
                           
INSERT INTO jogador VALUES (null, 'Ruben', 'Ponteiro', 204, 4),
						   (null, 'Lukas', 'Levantador', 196, 4),
                           (null, 'Krage', 'Central', 204, 4),
						   (null, 'Maase', 'Oposto', 212, 4);

                           SELECT (SELECT ROUND(AVG(altura)) FROM jogador WHERE fkSelecao = 1) Brasil,
                           (SELECT ROUND(AVG(altura)) FROM jogador WHERE fkSelecao = 2) Japão,
                           (SELECT ROUND(AVG(altura)) FROM jogador WHERE fkSelecao = 3) Polônia,
                           (SELECT ROUND(AVG(altura)) FROM jogador WHERE fkSelecao = 4) Alemanha; 


SELECT * FROM usuario;
SELECT * FROM login;
delete FROM usuario WHERE idUsuario = 1;