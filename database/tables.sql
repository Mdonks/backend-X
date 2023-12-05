-- Active: 1700433623589@@dpg-cld6vct4lnec73e768fg-a.oregon-postgres.render.com@5432@mariopineda1
create table tbl_role
(
    id SERIAL PRIMARY key,
    name_role varchar(100), 
    is_active BOOLEAN DEFAULT true, 
    created_date TIMESTAMP DEFAULT current_timestamp, 
    deleted_date TIMESTAMP, 
    update_date TIMESTAMP
);

insert into tbl_role
(name_role)
values
('Admin'), 
('Client');

select * from tbl_role;

create table tbl_users
(
    user_name varchar(30) PRIMARY key,
    email VARCHAR(70) UNIQUE, 
    pass VARCHAR(30),
    profile_picture bytea, 
    id_role int REFERENCES tbl_role(id),
    is_active BOOLEAN DEFAULT true, 
    created_date TIMESTAMP DEFAULT current_timestamp, 
    deleted_date TIMESTAMP, 
    update_date TIMESTAMP
);

insert into tbl_users 
(user_name, email, pass, id_role)
values 
('mario23', 'mario.pined@unitec.edu', 'Mdonks2828$', 1), 
('alumno01', 'alumno@unitec.edu', 'Hola10$', 2);

select * from tbl_users
where user_name = 'mario23' and pass = 'Mdonks2828$' and is_active = true;

drop table tbl_example;

create table tbl_example 
(
    id serial primary key, 
    data_example varchar(200),
    user_name varchar(500)
);


select * from tbl_users;

delete from tbl_users where USER_name is not null ;


create table tbl_post 
(   
    id SERIAL PRIMARY key,
    description varchar(200),
    img bytea,
    create_date TIMESTAMP default current_timestamp,
    user_name varchar(30) REFERENCES tbl_users (user_name) 
);


select id, description , user_name ,  encode(img, 'base64') img_base64 from tbl_post
order by create_date desc;

delete from tbl_post where id is not null;