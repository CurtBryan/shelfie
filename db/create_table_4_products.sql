create table if not exists products(
    id serial primary key,
    name varchar(25) not null,
    price integer not null,
    img text not null 
);