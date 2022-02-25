drop database if exists phones;

create database phones collate utf8mb4_general_ci;

create user phones_user@localhost identified by 'jf2p098uf02%3fpñiou';

grant all privileges on phones.* to phones_user@localhost with grant option;

flush privileges ;
