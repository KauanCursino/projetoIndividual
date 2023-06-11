CREATE DATABASE KCsVolei;

USE KCsVolei;
 
CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
altura INT,
fkLogin INT,
FOREIGN KEY (fkLogin) REFERENCES login(idLogin)
);

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
CREATE TABLE jogador(
idJogador INT PRIMARY KEY AUTO_INCREMENT,
nomeJogador VARCHAR(45),
posicaoJogador VARCHAR(45),
altura INT,
fkSelecao INT,
FOREIGN KEY (fkSelecao) REFERENCES selecao(idSelecao)
);

SELECT * FROM usuario;
SELECT * FROM login;
delete FROM usuario WHERE idUsuario = 1;