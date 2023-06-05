CREATE DATABASE KCsVolei;

USE KCsVolei;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
altura INT
);

CREATE TABLE login(
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
fkSelecao INT,
FOREIGN KEY (fkSelecao) REFERENCES selecao(idSelecao)
);