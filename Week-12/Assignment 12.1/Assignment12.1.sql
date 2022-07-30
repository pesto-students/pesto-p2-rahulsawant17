--Table creation Queries

create table  CITIES(CITY CHAR(20),STATE CHAR(20));
create table  WAREHOUSES(WID INTEGER PRIMARY KEY,WNAME CHAR(30),LOCATION CHAR(20),EXTRA_CONTEXT varchar(100));
create table  STORES(SID INTEGER,STORE_NAME CHAR(20), WID INTEGER,LOCATION_CITY CHAR(20) ,FOREIGN KEY (WID) REFERENCES WAREHOUSES(WID));
create table  CUSTOMER(CNO INTEGER, CNAME CHAR(50),ADDR VARCHAR(50),CU_CITY CHAR(20));
create table  ITEMS(ONO INT PRIMARY KEY,ITEMNO INTEGER,DESCRIPTION TEXT,WEIGHT DECIMAL(5,2),COST DECIMAL(5,2) );
create table  ORDERS(ONO INT,ODATE DATE,CNO INTEGER ,FOREIGN KEY (ono) REFERENCES ITEMS(ono) );

--Queries to insert data into tables
insert into cities values("PUNE","MAHARASHTRA");
insert into cities values("MUMBAI","MAHARASHTRA");
insert into cities values("CHENNAI","TAMIL NADU");
insert into cities values("BANGLORE","KARNATAKA");
insert into cities values("MYSORE","KARNATAKA");
insert into cities values("LUCKNOW","UTTAR PRADESH");
insert into cities values("KANPUR","UTTAR PRADESH");
insert into cities values("NAGPUR","MAHARASHTRA");

insert into CUSTOMER  values(1,"RAHUL","Cecilia Chapman 711-2880 Nulla St","PUNE");
insert into CUSTOMER  values(2,"AJAY","Iris Watson P.O. Box 283 8562 Fusce Rd.Frederick Nebraska","MUMBAI");
insert into CUSTOMER  values(3,"RAM","Celeste Slater 606-3727 Ullamcorper. Street Roseville NH ","BANGLORE");
insert into CUSTOMER  values(4,"SHAM","Theodore Lowe Ap #867-859 Sit Rd. Azusa","BANGLORE");
insert into CUSTOMER  values(5,"RAJ","Calista Wise 7292 Dictum Av. San Antonio ","KANPUR");
insert into CUSTOMER  values(6,"PATIL","Kyla Olsen Ap #651-8679 Sodales Av. Tamuning 4","CHENNAI");
insert into CUSTOMER  values(7,"AKASH","Forrest Ray 191-103 Integer Rd. Corona ","PUNE");
insert into CUSTOMER  values(8,"VISHAL","Hiroko Potter P.O. Box 887 2508 Dolor. Av.","NAGPUR");

insert into items values (323,101,"ELECTRONICS",2.3,2450);
insert into items values (124,102,"BOTTLES",0.7,300.23);
insert into items values (221,103,"CURTAINS",1.13,599.99);
insert into items values (657,104,"BEDSHEETS",2.13,420.50);
insert into items values (989,105,"FRAMES",1.23,300.00);
insert into items values (786,106,"BOOKS",1.3,750.34);
insert into items values (654,107,"CROCKERY",2.3,1990.2);
insert into items values (386,108,"RUG",3.5,3400.1);
insert into items values (321,101,"ELECTRONICS",2.3,2450);
insert into items values (126,102,"BOTTLES",0.7,300.23);
insert into items values (220,103,"CURTAINS",1.13,599.99);
insert into items values (652,104,"BEDSHEETS",2.13,420.50);
insert into items values (984,106,"BOOKS",1.23,300.00);
insert into items values (781,106,"BOOKS",1.3,750.34);
insert into items values (658,107,"CROCKERY",2.3,1990.2);
insert into items values (381,106,"BOOKS",3.5,3400.1);


INSERT INTO ORDERS VALUES(323,'12/01/2022',2);
INSERT INTO ORDERS VALUES(124,'24/11/2021',1);
INSERT INTO ORDERS VALUES(221,'1/3/2021',8);
INSERT INTO ORDERS VALUES(657,'23/7/2022',8);
INSERT INTO ORDERS VALUES(989,'17/1/2022',5);
INSERT INTO ORDERS VALUES(786,'7/9/2021',4);
INSERT INTO ORDERS VALUES(654,'5/8/2021',4);
INSERT INTO ORDERS VALUES(386,'14/2/2022',3);





INSERT INTO WAREHOUSES VALUES(2001,'SK Logistics','PUNE','SK Logistics will handle all of your pharmaceutical warehousing, storage, and repackaging needs in one place');
INSERT INTO WAREHOUSES VALUES(2002,'Supreme Logistics Solutions','MYSORE','They offer end-to-end, tailor-made solutions to our clients with our expertise in warehousing and transportation services');
INSERT INTO WAREHOUSES VALUES(2003,'Gati Limited','BANGLORE','Gati has been a pioneer in India’s express distribution systems, pioneering many ground-breaking innovative initiatives');
INSERT INTO WAREHOUSES VALUES(2004,'EPT Global Logistics','Gujarat','EPT GLOBAL LOGISTICS (P) LTD was established in 2005 as a private company in Ahmedabad ');
INSERT INTO WAREHOUSES VALUES(2005,'Fly High Logistics','KANPUR','Fly High Logistics is diversifying its operations in the north Indian region to provide world-class logistics services');
INSERT INTO WAREHOUSES VALUES(2006,'OmTrans Logistics Ltd','NAGPUR','Om Trans is an ambitious warehousing company based in India that aims to provide world-class logistics services to its clients');
INSERT INTO WAREHOUSES VALUES(2007,'B2B Logistics','MUMBAI','B2B Logistics is a well-known logistics and freight forwarding firm in India.');
INSERT INTO WAREHOUSES VALUES(2008,'Stockarea','HYDRABAD','Stockarea provides end-to-end Logistics Solutions for your business');

INSERT INTO STORES VALUES(210,'Kaizen Shops',2002,'PUNE');
INSERT INTO STORES VALUES(211,'Manhattan Mall',2002,'MYSORE');
INSERT INTO STORES VALUES(212,'Million Dollar Store',2008,'BANGLORE');
INSERT INTO STORES VALUES(213,'Vintage Corner',2003,'CHENNAI');
INSERT INTO STORES VALUES(214,'Record Retail',2007,'KANPUR');
INSERT INTO STORES VALUES(215,'Order Online',2006,'NAGPUR');
INSERT INTO STORES VALUES(216,'The Saving Store',2004,'MUMBAI');
INSERT INTO STORES VALUES(217,'Corner Collections',2005,'HYDRABAD');


--Queries to fetch data from tables

select ITEMNO,DESCRIPTION from items where weight =(select min(weight) from items)
select wname from Warehouses where lower(location)="pune"
select description from items where ono in (select ono from orders where cno=(select cno from customer where cname='PATIL'))
select  wname,count(w.wid) as count from warehouses as w inner join stores as s on w.wid=s.wid group by w.wid having count=(select max(count) from (select count(w.wid)as count from warehouses as w inner join stores as s on w.wid=s.wid group by w.wid) )

select DESCRIPTION ,count(description) from items group by description having count(DESCRIPTION)=(select min(count) from (select count(description) as count from items group by description))

select cname ,o.ono,odate ,itemno,description from customer c inner join orders o on c.cno=o.cno inner join items i on o.ono=i.ono
