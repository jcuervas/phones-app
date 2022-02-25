drop database if exists phone;
create database if not exists phones;

create user phones_user@localhost identified by 'jf2p098uf02%3fpñiou';

grant all privileges on phones.* to phones_user@localhost with grant option;

flush privileges ;
