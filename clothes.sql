toc.dat                                                                                             0000600 0004000 0002000 00000124525 14652625205 0014457 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP               	            |           clothesstore    15.4    15.4 �    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         �           1262    17011    clothesstore    DATABASE     �   CREATE DATABASE clothesstore WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE clothesstore;
                postgres    false         �            1259    17374    Admins    TABLE     '  CREATE TABLE public."Admins" (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Admins";
       public         heap    postgres    false         �            1259    17373    Admins_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Admins_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Admins_id_seq";
       public          postgres    false    237         �           0    0    Admins_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Admins_id_seq" OWNED BY public."Admins".id;
          public          postgres    false    236         �            1259    17282 	   Customers    TABLE     	  CREATE TABLE public."Customers" (
    "CustomerID" integer NOT NULL,
    "UserName" character varying(100) NOT NULL,
    "Email" character varying(100) NOT NULL,
    "PasswordHash" character varying(255) NOT NULL,
    "RegistrationDate" timestamp with time zone
);
    DROP TABLE public."Customers";
       public         heap    postgres    false         �            1259    17281    Customers_CustomerID_seq    SEQUENCE     �   CREATE SEQUENCE public."Customers_CustomerID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."Customers_CustomerID_seq";
       public          postgres    false    235         �           0    0    Customers_CustomerID_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."Customers_CustomerID_seq" OWNED BY public."Customers"."CustomerID";
          public          postgres    false    234         �            1259    17426    admin    TABLE     G  CREATE TABLE public.admin (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(255) NOT NULL,
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.admin;
       public         heap    postgres    false         �            1259    17425    admin_id_seq    SEQUENCE     �   CREATE SEQUENCE public.admin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.admin_id_seq;
       public          postgres    false    245         �           0    0    admin_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.admin_id_seq OWNED BY public.admin.id;
          public          postgres    false    244         �            1259    17439    admins    TABLE     H  CREATE TABLE public.admins (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(255) NOT NULL,
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.admins;
       public         heap    postgres    false         �            1259    17438    admins_id_seq    SEQUENCE     �   CREATE SEQUENCE public.admins_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.admins_id_seq;
       public          postgres    false    247         �           0    0    admins_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.admins_id_seq OWNED BY public.admins.id;
          public          postgres    false    246         �            1259    17406    cart    TABLE       CREATE TABLE public.cart (
    cartid integer NOT NULL,
    customerid integer,
    productid integer,
    productname character varying(255),
    productdescription text,
    productimageurl character varying(255),
    productprice numeric(10,2),
    quantity integer
);
    DROP TABLE public.cart;
       public         heap    postgres    false         �            1259    17405    cart_cartid_seq    SEQUENCE     �   CREATE SEQUENCE public.cart_cartid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.cart_cartid_seq;
       public          postgres    false    243         �           0    0    cart_cartid_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.cart_cartid_seq OWNED BY public.cart.cartid;
          public          postgres    false    242         �            1259    17178 
   categories    TABLE     �   CREATE TABLE public.categories (
    categoryid integer NOT NULL,
    categoryname character varying(100) NOT NULL,
    genderid integer
);
    DROP TABLE public.categories;
       public         heap    postgres    false         �            1259    17177    categories_categoryid_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_categoryid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.categories_categoryid_seq;
       public          postgres    false    221         �           0    0    categories_categoryid_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.categories_categoryid_seq OWNED BY public.categories.categoryid;
          public          postgres    false    220         �            1259    17155    checkout    TABLE     �  CREATE TABLE public.checkout (
    checkoutid integer NOT NULL,
    customerid integer,
    cardnumber character varying(20) NOT NULL,
    expiredate date NOT NULL,
    cvc character varying(4) NOT NULL,
    fullname character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    city character varying(100) NOT NULL,
    state character varying(100) NOT NULL,
    zipcode character varying(10) NOT NULL
);
    DROP TABLE public.checkout;
       public         heap    postgres    false         �            1259    17154    checkout_checkoutid_seq    SEQUENCE     �   CREATE SEQUENCE public.checkout_checkoutid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.checkout_checkoutid_seq;
       public          postgres    false    217         �           0    0    checkout_checkoutid_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.checkout_checkoutid_seq OWNED BY public.checkout.checkoutid;
          public          postgres    false    216         �            1259    17223 	   contactus    TABLE     �   CREATE TABLE public.contactus (
    contactid integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(100) NOT NULL,
    message text NOT NULL,
    contactdate timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.contactus;
       public         heap    postgres    false         �            1259    17222    contactus_contactid_seq    SEQUENCE     �   CREATE SEQUENCE public.contactus_contactid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.contactus_contactid_seq;
       public          postgres    false    225         �           0    0    contactus_contactid_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.contactus_contactid_seq OWNED BY public.contactus.contactid;
          public          postgres    false    224         �            1259    17143 	   customers    TABLE       CREATE TABLE public.customers (
    customerid integer NOT NULL,
    username character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    passwordhash character varying(255) NOT NULL,
    registrationdate timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.customers;
       public         heap    postgres    false         �            1259    17142    customers_customerid_seq    SEQUENCE     �   CREATE SEQUENCE public.customers_customerid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.customers_customerid_seq;
       public          postgres    false    215         �           0    0    customers_customerid_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.customers_customerid_seq OWNED BY public.customers.customerid;
          public          postgres    false    214         �            1259    17387    featuredproducts    TABLE     �   CREATE TABLE public.featuredproducts (
    productid integer NOT NULL,
    name character varying(255) NOT NULL,
    description text NOT NULL,
    image character varying(255) NOT NULL,
    price numeric(10,2) NOT NULL
);
 $   DROP TABLE public.featuredproducts;
       public         heap    postgres    false         �            1259    17386    featuredproducts_productid_seq    SEQUENCE     �   CREATE SEQUENCE public.featuredproducts_productid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.featuredproducts_productid_seq;
       public          postgres    false    239         �           0    0    featuredproducts_productid_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.featuredproducts_productid_seq OWNED BY public.featuredproducts.productid;
          public          postgres    false    238         �            1259    17233    filters    TABLE     �   CREATE TABLE public.filters (
    filterid integer NOT NULL,
    filtername character varying(100),
    filtervalue character varying(100)
);
    DROP TABLE public.filters;
       public         heap    postgres    false         �            1259    17232    filters_filterid_seq    SEQUENCE     �   CREATE SEQUENCE public.filters_filterid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.filters_filterid_seq;
       public          postgres    false    227         �           0    0    filters_filterid_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.filters_filterid_seq OWNED BY public.filters.filterid;
          public          postgres    false    226         �            1259    17169    genders    TABLE     n   CREATE TABLE public.genders (
    genderid integer NOT NULL,
    gendername character varying(50) NOT NULL
);
    DROP TABLE public.genders;
       public         heap    postgres    false         �            1259    17168    genders_genderid_seq    SEQUENCE     �   CREATE SEQUENCE public.genders_genderid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.genders_genderid_seq;
       public          postgres    false    219         �           0    0    genders_genderid_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.genders_genderid_seq OWNED BY public.genders.genderid;
          public          postgres    false    218         �            1259    17270 	   inventory    TABLE     �   CREATE TABLE public.inventory (
    inventoryid integer NOT NULL,
    productid integer NOT NULL,
    quantity integer NOT NULL
);
    DROP TABLE public.inventory;
       public         heap    postgres    false         �            1259    17269    inventory_inventoryid_seq    SEQUENCE     �   CREATE SEQUENCE public.inventory_inventoryid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.inventory_inventoryid_seq;
       public          postgres    false    233         �           0    0    inventory_inventoryid_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.inventory_inventoryid_seq OWNED BY public.inventory.inventoryid;
          public          postgres    false    232         �            1259    17253    orderdetails    TABLE     �   CREATE TABLE public.orderdetails (
    orderdetailid integer NOT NULL,
    orderid integer NOT NULL,
    productid integer NOT NULL,
    quantity integer NOT NULL,
    price numeric(10,2) NOT NULL
);
     DROP TABLE public.orderdetails;
       public         heap    postgres    false         �            1259    17252    orderdetails_orderdetailid_seq    SEQUENCE     �   CREATE SEQUENCE public.orderdetails_orderdetailid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.orderdetails_orderdetailid_seq;
       public          postgres    false    231         �           0    0    orderdetails_orderdetailid_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.orderdetails_orderdetailid_seq OWNED BY public.orderdetails.orderdetailid;
          public          postgres    false    230         �            1259    17240    orders    TABLE     �   CREATE TABLE public.orders (
    orderid integer NOT NULL,
    customerid integer NOT NULL,
    orderdate timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    totalamount numeric(10,2) NOT NULL
);
    DROP TABLE public.orders;
       public         heap    postgres    false         �            1259    17239    orders_orderid_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_orderid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.orders_orderid_seq;
       public          postgres    false    229         �           0    0    orders_orderid_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.orders_orderid_seq OWNED BY public.orders.orderid;
          public          postgres    false    228         �            1259    17192    products    TABLE       CREATE TABLE public.products (
    productid integer NOT NULL,
    name character varying(255) NOT NULL,
    description text,
    price numeric(10,2) NOT NULL,
    categoryid integer,
    brand character varying(100),
    imageurl character varying(255)
);
    DROP TABLE public.products;
       public         heap    postgres    false         �            1259    17191    products_productid_seq    SEQUENCE     �   CREATE SEQUENCE public.products_productid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.products_productid_seq;
       public          postgres    false    223         �           0    0    products_productid_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.products_productid_seq OWNED BY public.products.productid;
          public          postgres    false    222         �            1259    17396 
   promotions    TABLE     $  CREATE TABLE public.promotions (
    promotionid integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    imagesrc character varying(255) NOT NULL,
    discount numeric(5,2) NOT NULL,
    price numeric(10,2) DEFAULT 0 NOT NULL,
    productid integer
);
    DROP TABLE public.promotions;
       public         heap    postgres    false         �            1259    17395    promotions_promotionid_seq    SEQUENCE     �   CREATE SEQUENCE public.promotions_promotionid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.promotions_promotionid_seq;
       public          postgres    false    241         �           0    0    promotions_promotionid_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.promotions_promotionid_seq OWNED BY public.promotions.promotionid;
          public          postgres    false    240         �           2604    17377 	   Admins id    DEFAULT     j   ALTER TABLE ONLY public."Admins" ALTER COLUMN id SET DEFAULT nextval('public."Admins_id_seq"'::regclass);
 :   ALTER TABLE public."Admins" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    236    237    237         �           2604    17285    Customers CustomerID    DEFAULT     �   ALTER TABLE ONLY public."Customers" ALTER COLUMN "CustomerID" SET DEFAULT nextval('public."Customers_CustomerID_seq"'::regclass);
 G   ALTER TABLE public."Customers" ALTER COLUMN "CustomerID" DROP DEFAULT;
       public          postgres    false    234    235    235         �           2604    17429    admin id    DEFAULT     d   ALTER TABLE ONLY public.admin ALTER COLUMN id SET DEFAULT nextval('public.admin_id_seq'::regclass);
 7   ALTER TABLE public.admin ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    245    244    245         �           2604    17442 	   admins id    DEFAULT     f   ALTER TABLE ONLY public.admins ALTER COLUMN id SET DEFAULT nextval('public.admins_id_seq'::regclass);
 8   ALTER TABLE public.admins ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    247    246    247         �           2604    17409    cart cartid    DEFAULT     j   ALTER TABLE ONLY public.cart ALTER COLUMN cartid SET DEFAULT nextval('public.cart_cartid_seq'::regclass);
 :   ALTER TABLE public.cart ALTER COLUMN cartid DROP DEFAULT;
       public          postgres    false    243    242    243         �           2604    17181    categories categoryid    DEFAULT     ~   ALTER TABLE ONLY public.categories ALTER COLUMN categoryid SET DEFAULT nextval('public.categories_categoryid_seq'::regclass);
 D   ALTER TABLE public.categories ALTER COLUMN categoryid DROP DEFAULT;
       public          postgres    false    220    221    221         �           2604    17158    checkout checkoutid    DEFAULT     z   ALTER TABLE ONLY public.checkout ALTER COLUMN checkoutid SET DEFAULT nextval('public.checkout_checkoutid_seq'::regclass);
 B   ALTER TABLE public.checkout ALTER COLUMN checkoutid DROP DEFAULT;
       public          postgres    false    216    217    217         �           2604    17226    contactus contactid    DEFAULT     z   ALTER TABLE ONLY public.contactus ALTER COLUMN contactid SET DEFAULT nextval('public.contactus_contactid_seq'::regclass);
 B   ALTER TABLE public.contactus ALTER COLUMN contactid DROP DEFAULT;
       public          postgres    false    224    225    225         �           2604    17146    customers customerid    DEFAULT     |   ALTER TABLE ONLY public.customers ALTER COLUMN customerid SET DEFAULT nextval('public.customers_customerid_seq'::regclass);
 C   ALTER TABLE public.customers ALTER COLUMN customerid DROP DEFAULT;
       public          postgres    false    214    215    215         �           2604    17390    featuredproducts productid    DEFAULT     �   ALTER TABLE ONLY public.featuredproducts ALTER COLUMN productid SET DEFAULT nextval('public.featuredproducts_productid_seq'::regclass);
 I   ALTER TABLE public.featuredproducts ALTER COLUMN productid DROP DEFAULT;
       public          postgres    false    238    239    239         �           2604    17236    filters filterid    DEFAULT     t   ALTER TABLE ONLY public.filters ALTER COLUMN filterid SET DEFAULT nextval('public.filters_filterid_seq'::regclass);
 ?   ALTER TABLE public.filters ALTER COLUMN filterid DROP DEFAULT;
       public          postgres    false    226    227    227         �           2604    17172    genders genderid    DEFAULT     t   ALTER TABLE ONLY public.genders ALTER COLUMN genderid SET DEFAULT nextval('public.genders_genderid_seq'::regclass);
 ?   ALTER TABLE public.genders ALTER COLUMN genderid DROP DEFAULT;
       public          postgres    false    218    219    219         �           2604    17273    inventory inventoryid    DEFAULT     ~   ALTER TABLE ONLY public.inventory ALTER COLUMN inventoryid SET DEFAULT nextval('public.inventory_inventoryid_seq'::regclass);
 D   ALTER TABLE public.inventory ALTER COLUMN inventoryid DROP DEFAULT;
       public          postgres    false    232    233    233         �           2604    17256    orderdetails orderdetailid    DEFAULT     �   ALTER TABLE ONLY public.orderdetails ALTER COLUMN orderdetailid SET DEFAULT nextval('public.orderdetails_orderdetailid_seq'::regclass);
 I   ALTER TABLE public.orderdetails ALTER COLUMN orderdetailid DROP DEFAULT;
       public          postgres    false    231    230    231         �           2604    17243    orders orderid    DEFAULT     p   ALTER TABLE ONLY public.orders ALTER COLUMN orderid SET DEFAULT nextval('public.orders_orderid_seq'::regclass);
 =   ALTER TABLE public.orders ALTER COLUMN orderid DROP DEFAULT;
       public          postgres    false    228    229    229         �           2604    17195    products productid    DEFAULT     x   ALTER TABLE ONLY public.products ALTER COLUMN productid SET DEFAULT nextval('public.products_productid_seq'::regclass);
 A   ALTER TABLE public.products ALTER COLUMN productid DROP DEFAULT;
       public          postgres    false    223    222    223         �           2604    17399    promotions promotionid    DEFAULT     �   ALTER TABLE ONLY public.promotions ALTER COLUMN promotionid SET DEFAULT nextval('public.promotions_promotionid_seq'::regclass);
 E   ALTER TABLE public.promotions ALTER COLUMN promotionid DROP DEFAULT;
       public          postgres    false    240    241    241         �          0    17374    Admins 
   TABLE DATA           [   COPY public."Admins" (id, username, email, password, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    237       3510.dat �          0    17282 	   Customers 
   TABLE DATA           l   COPY public."Customers" ("CustomerID", "UserName", "Email", "PasswordHash", "RegistrationDate") FROM stdin;
    public          postgres    false    235       3508.dat �          0    17426    admin 
   TABLE DATA           T   COPY public.admin (id, username, email, password, createdat, updatedat) FROM stdin;
    public          postgres    false    245       3518.dat �          0    17439    admins 
   TABLE DATA           U   COPY public.admins (id, username, email, password, createdat, updatedat) FROM stdin;
    public          postgres    false    247       3520.dat �          0    17406    cart 
   TABLE DATA           �   COPY public.cart (cartid, customerid, productid, productname, productdescription, productimageurl, productprice, quantity) FROM stdin;
    public          postgres    false    243       3516.dat �          0    17178 
   categories 
   TABLE DATA           H   COPY public.categories (categoryid, categoryname, genderid) FROM stdin;
    public          postgres    false    221       3494.dat �          0    17155    checkout 
   TABLE DATA           �   COPY public.checkout (checkoutid, customerid, cardnumber, expiredate, cvc, fullname, address, city, state, zipcode) FROM stdin;
    public          postgres    false    217       3490.dat �          0    17223 	   contactus 
   TABLE DATA           Q   COPY public.contactus (contactid, name, email, message, contactdate) FROM stdin;
    public          postgres    false    225       3498.dat �          0    17143 	   customers 
   TABLE DATA           `   COPY public.customers (customerid, username, email, passwordhash, registrationdate) FROM stdin;
    public          postgres    false    215       3488.dat �          0    17387    featuredproducts 
   TABLE DATA           V   COPY public.featuredproducts (productid, name, description, image, price) FROM stdin;
    public          postgres    false    239       3512.dat �          0    17233    filters 
   TABLE DATA           D   COPY public.filters (filterid, filtername, filtervalue) FROM stdin;
    public          postgres    false    227       3500.dat �          0    17169    genders 
   TABLE DATA           7   COPY public.genders (genderid, gendername) FROM stdin;
    public          postgres    false    219       3492.dat �          0    17270 	   inventory 
   TABLE DATA           E   COPY public.inventory (inventoryid, productid, quantity) FROM stdin;
    public          postgres    false    233       3506.dat �          0    17253    orderdetails 
   TABLE DATA           Z   COPY public.orderdetails (orderdetailid, orderid, productid, quantity, price) FROM stdin;
    public          postgres    false    231       3504.dat �          0    17240    orders 
   TABLE DATA           M   COPY public.orders (orderid, customerid, orderdate, totalamount) FROM stdin;
    public          postgres    false    229       3502.dat �          0    17192    products 
   TABLE DATA           d   COPY public.products (productid, name, description, price, categoryid, brand, imageurl) FROM stdin;
    public          postgres    false    223       3496.dat �          0    17396 
   promotions 
   TABLE DATA           k   COPY public.promotions (promotionid, title, description, imagesrc, discount, price, productid) FROM stdin;
    public          postgres    false    241       3514.dat �           0    0    Admins_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Admins_id_seq"', 1, false);
          public          postgres    false    236         �           0    0    Customers_CustomerID_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."Customers_CustomerID_seq"', 1, false);
          public          postgres    false    234         �           0    0    admin_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.admin_id_seq', 1, false);
          public          postgres    false    244         �           0    0    admins_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.admins_id_seq', 2, true);
          public          postgres    false    246         �           0    0    cart_cartid_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.cart_cartid_seq', 53, true);
          public          postgres    false    242         �           0    0    categories_categoryid_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.categories_categoryid_seq', 6, true);
          public          postgres    false    220         �           0    0    checkout_checkoutid_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.checkout_checkoutid_seq', 6, true);
          public          postgres    false    216         �           0    0    contactus_contactid_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.contactus_contactid_seq', 3, true);
          public          postgres    false    224         �           0    0    customers_customerid_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.customers_customerid_seq', 17, true);
          public          postgres    false    214         �           0    0    featuredproducts_productid_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.featuredproducts_productid_seq', 15, true);
          public          postgres    false    238         �           0    0    filters_filterid_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.filters_filterid_seq', 4, true);
          public          postgres    false    226         �           0    0    genders_genderid_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.genders_genderid_seq', 3, true);
          public          postgres    false    218         �           0    0    inventory_inventoryid_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.inventory_inventoryid_seq', 20, true);
          public          postgres    false    232         �           0    0    orderdetails_orderdetailid_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.orderdetails_orderdetailid_seq', 6, true);
          public          postgres    false    230         �           0    0    orders_orderid_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.orders_orderid_seq', 3, true);
          public          postgres    false    228         �           0    0    products_productid_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.products_productid_seq', 20, true);
          public          postgres    false    222         �           0    0    promotions_promotionid_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.promotions_promotionid_seq', 14, true);
          public          postgres    false    240         �           2606    17385    Admins Admins_email_key 
   CONSTRAINT     W   ALTER TABLE ONLY public."Admins"
    ADD CONSTRAINT "Admins_email_key" UNIQUE (email);
 E   ALTER TABLE ONLY public."Admins" DROP CONSTRAINT "Admins_email_key";
       public            postgres    false    237         �           2606    17381    Admins Admins_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Admins"
    ADD CONSTRAINT "Admins_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Admins" DROP CONSTRAINT "Admins_pkey";
       public            postgres    false    237         �           2606    17383    Admins Admins_username_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public."Admins"
    ADD CONSTRAINT "Admins_username_key" UNIQUE (username);
 H   ALTER TABLE ONLY public."Admins" DROP CONSTRAINT "Admins_username_key";
       public            postgres    false    237         �           2606    17291    Customers Customers_Email_key 
   CONSTRAINT     _   ALTER TABLE ONLY public."Customers"
    ADD CONSTRAINT "Customers_Email_key" UNIQUE ("Email");
 K   ALTER TABLE ONLY public."Customers" DROP CONSTRAINT "Customers_Email_key";
       public            postgres    false    235         �           2606    17289     Customers Customers_UserName_key 
   CONSTRAINT     e   ALTER TABLE ONLY public."Customers"
    ADD CONSTRAINT "Customers_UserName_key" UNIQUE ("UserName");
 N   ALTER TABLE ONLY public."Customers" DROP CONSTRAINT "Customers_UserName_key";
       public            postgres    false    235         �           2606    17287    Customers Customers_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."Customers"
    ADD CONSTRAINT "Customers_pkey" PRIMARY KEY ("CustomerID");
 F   ALTER TABLE ONLY public."Customers" DROP CONSTRAINT "Customers_pkey";
       public            postgres    false    235         �           2606    17437    admin admin_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.admin DROP CONSTRAINT admin_email_key;
       public            postgres    false    245         �           2606    17433    admin admin_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.admin DROP CONSTRAINT admin_pkey;
       public            postgres    false    245                    2606    17435    admin admin_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public.admin DROP CONSTRAINT admin_username_key;
       public            postgres    false    245                    2606    17450    admins admins_email_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_email_key UNIQUE (email);
 A   ALTER TABLE ONLY public.admins DROP CONSTRAINT admins_email_key;
       public            postgres    false    247                    2606    17446    admins admins_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.admins DROP CONSTRAINT admins_pkey;
       public            postgres    false    247                    2606    17448    admins admins_username_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_username_key UNIQUE (username);
 D   ALTER TABLE ONLY public.admins DROP CONSTRAINT admins_username_key;
       public            postgres    false    247         �           2606    17413    cart cart_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_pkey PRIMARY KEY (cartid);
 8   ALTER TABLE ONLY public.cart DROP CONSTRAINT cart_pkey;
       public            postgres    false    243         �           2606    17185 &   categories categories_categoryname_key 
   CONSTRAINT     i   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_categoryname_key UNIQUE (categoryname);
 P   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_categoryname_key;
       public            postgres    false    221         �           2606    17183    categories categories_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (categoryid);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    221         �           2606    17162    checkout checkout_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.checkout
    ADD CONSTRAINT checkout_pkey PRIMARY KEY (checkoutid);
 @   ALTER TABLE ONLY public.checkout DROP CONSTRAINT checkout_pkey;
       public            postgres    false    217         �           2606    17231    contactus contactus_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.contactus
    ADD CONSTRAINT contactus_pkey PRIMARY KEY (contactid);
 B   ALTER TABLE ONLY public.contactus DROP CONSTRAINT contactus_pkey;
       public            postgres    false    225         �           2606    17153    customers customers_email_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_email_key UNIQUE (email);
 G   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_email_key;
       public            postgres    false    215         �           2606    17149    customers customers_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (customerid);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
       public            postgres    false    215         �           2606    17151     customers customers_username_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_username_key UNIQUE (username);
 J   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_username_key;
       public            postgres    false    215         �           2606    17394 &   featuredproducts featuredproducts_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.featuredproducts
    ADD CONSTRAINT featuredproducts_pkey PRIMARY KEY (productid);
 P   ALTER TABLE ONLY public.featuredproducts DROP CONSTRAINT featuredproducts_pkey;
       public            postgres    false    239         �           2606    17238    filters filters_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.filters
    ADD CONSTRAINT filters_pkey PRIMARY KEY (filterid);
 >   ALTER TABLE ONLY public.filters DROP CONSTRAINT filters_pkey;
       public            postgres    false    227         �           2606    17176    genders genders_gendername_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.genders
    ADD CONSTRAINT genders_gendername_key UNIQUE (gendername);
 H   ALTER TABLE ONLY public.genders DROP CONSTRAINT genders_gendername_key;
       public            postgres    false    219         �           2606    17174    genders genders_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.genders
    ADD CONSTRAINT genders_pkey PRIMARY KEY (genderid);
 >   ALTER TABLE ONLY public.genders DROP CONSTRAINT genders_pkey;
       public            postgres    false    219         �           2606    17275    inventory inventory_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.inventory
    ADD CONSTRAINT inventory_pkey PRIMARY KEY (inventoryid);
 B   ALTER TABLE ONLY public.inventory DROP CONSTRAINT inventory_pkey;
       public            postgres    false    233         �           2606    17258    orderdetails orderdetails_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.orderdetails
    ADD CONSTRAINT orderdetails_pkey PRIMARY KEY (orderdetailid);
 H   ALTER TABLE ONLY public.orderdetails DROP CONSTRAINT orderdetails_pkey;
       public            postgres    false    231         �           2606    17246    orders orders_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (orderid);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    229         �           2606    17199    products products_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (productid);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    223         �           2606    17403    promotions promotions_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.promotions
    ADD CONSTRAINT promotions_pkey PRIMARY KEY (promotionid);
 D   ALTER TABLE ONLY public.promotions DROP CONSTRAINT promotions_pkey;
       public            postgres    false    241         
           2606    17200    products fk_category    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT fk_category FOREIGN KEY (categoryid) REFERENCES public.categories(categoryid);
 >   ALTER TABLE ONLY public.products DROP CONSTRAINT fk_category;
       public          postgres    false    223    221    3293                    2606    17414    cart fk_customer_cart    FK CONSTRAINT     �   ALTER TABLE ONLY public.cart
    ADD CONSTRAINT fk_customer_cart FOREIGN KEY (customerid) REFERENCES public.customers(customerid);
 ?   ALTER TABLE ONLY public.cart DROP CONSTRAINT fk_customer_cart;
       public          postgres    false    3281    215    243                    2606    17163    checkout fk_customer_checkout    FK CONSTRAINT     �   ALTER TABLE ONLY public.checkout
    ADD CONSTRAINT fk_customer_checkout FOREIGN KEY (customerid) REFERENCES public.customers(customerid);
 G   ALTER TABLE ONLY public.checkout DROP CONSTRAINT fk_customer_checkout;
       public          postgres    false    3281    215    217                    2606    17247    orders fk_customer_order    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fk_customer_order FOREIGN KEY (customerid) REFERENCES public.customers(customerid);
 B   ALTER TABLE ONLY public.orders DROP CONSTRAINT fk_customer_order;
       public          postgres    false    229    3281    215         	           2606    17186    categories fk_gender    FK CONSTRAINT     |   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT fk_gender FOREIGN KEY (genderid) REFERENCES public.genders(genderid);
 >   ALTER TABLE ONLY public.categories DROP CONSTRAINT fk_gender;
       public          postgres    false    219    221    3289                    2606    17259    orderdetails fk_order    FK CONSTRAINT     z   ALTER TABLE ONLY public.orderdetails
    ADD CONSTRAINT fk_order FOREIGN KEY (orderid) REFERENCES public.orders(orderid);
 ?   ALTER TABLE ONLY public.orderdetails DROP CONSTRAINT fk_order;
       public          postgres    false    3301    229    231                    2606    17419    cart fk_product_cart    FK CONSTRAINT        ALTER TABLE ONLY public.cart
    ADD CONSTRAINT fk_product_cart FOREIGN KEY (productid) REFERENCES public.products(productid);
 >   ALTER TABLE ONLY public.cart DROP CONSTRAINT fk_product_cart;
       public          postgres    false    223    3295    243                    2606    17276    inventory fk_product_inventory    FK CONSTRAINT     �   ALTER TABLE ONLY public.inventory
    ADD CONSTRAINT fk_product_inventory FOREIGN KEY (productid) REFERENCES public.products(productid);
 H   ALTER TABLE ONLY public.inventory DROP CONSTRAINT fk_product_inventory;
       public          postgres    false    233    3295    223                    2606    17264    orderdetails fk_product_order    FK CONSTRAINT     �   ALTER TABLE ONLY public.orderdetails
    ADD CONSTRAINT fk_product_order FOREIGN KEY (productid) REFERENCES public.products(productid);
 G   ALTER TABLE ONLY public.orderdetails DROP CONSTRAINT fk_product_order;
       public          postgres    false    223    3295    231                                                                                                                                                                                   3510.dat                                                                                            0000600 0004000 0002000 00000000005 14652625205 0014244 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3508.dat                                                                                            0000600 0004000 0002000 00000000005 14652625205 0014253 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3518.dat                                                                                            0000600 0004000 0002000 00000000005 14652625205 0014254 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3520.dat                                                                                            0000600 0004000 0002000 00000000307 14652625205 0014252 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	admin1	admin1@example.com	hashed_password1	2024-07-31 21:59:03.60862	2024-07-31 21:59:03.60862
2	admin2	admin2@example.com	hashed_password2	2024-07-31 21:59:03.60862	2024-07-31 21:59:03.60862
\.


                                                                                                                                                                                                                                                                                                                         3516.dat                                                                                            0000600 0004000 0002000 00000006550 14652625205 0014265 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        33	2	1	Dress	Elegant evening dress	https://images.unsplash.com/photo-1503341453927-4e8b4a16e7db	89.99	3
34	3	7	Sneakers	Trendy sneakers for everyday wear	https://images.unsplash.com/photo-1555685812-4d4052a94d72	59.99	1
35	3	6	Jacket	Warm winter jacket	https://images.unsplash.com/photo-1576014216437-14a8b5db2db6	79.99	2
36	4	7	Shirt	Casual button-up shirt	https://images.unsplash.com/photo-1534820353341-43e1d7fc979b	29.99	4
37	4	6	Hat	Stylish baseball cap	https://images.unsplash.com/photo-1506748686214-fd6d9de56c26	15.99	1
38	5	4	Sweater	Cozy knitted sweater	https://images.unsplash.com/photo-1585850380195-d19b5d6f1e0e	39.99	3
39	5	4	Scarf	Warm and soft scarf	https://images.unsplash.com/photo-1588276097894-b6c6e4a77f02	12.99	2
40	6	4	Gloves	Leather gloves for winter	https://images.unsplash.com/photo-1601913618677-d8c0f5e86855	25.99	5
31	17	4	Casual T-Shirt	Soft cotton t-shirt	https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-hipster-lambersexual-modelman-dressed-tshirt-jeans-fashion-male-isolated-studio-posing-near-grey-wall-cheerful-happy_158538-25143.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	19.99	\N
41	1	15	Dress Pants	Sophisticated dress pants for formal events.	https://img.freepik.com/free-vector/elegants-pants-jacket_603843-2546.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	79.99	1
44	1	2	Graphic T-Shirt	Eye-catching graphic T-shirt with vibrant colors.	https://img.freepik.com/free-vector/vintage-amorous-prints-template-shirts-with-romantic-inscriptions-elegant-decor-elements_1284-34534.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	29.99	1
45	1	6	Straight-Leg Jeans	Classic straight-leg jeans for versatile styling.	https://img.freepik.com/free-photo/women-legs-front-yellow-wall_23-2148784188.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	54.99	1
46	1	3	Slim Fit Shirt	Elegant slim-fit shirt for formal occasions.	https://img.freepik.com/free-photo/portrait-handsome-young-man_158595-243.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	39.99	1
47	1	6	Straight-Leg Jeans	Classic straight-leg jeans for versatile styling.	https://img.freepik.com/free-photo/women-legs-front-yellow-wall_23-2148784188.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	54.99	1
48	1	6	Straight-Leg Jeans	Classic straight-leg jeans for versatile styling.	https://img.freepik.com/free-photo/women-legs-front-yellow-wall_23-2148784188.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	54.99	1
50	1	2	Summer Dress	Light and breezy summer dress	https://img.freepik.com/free-photo/young-beautiful-smiling-female-trendy-summer-dress-sexy-carefree-blond-woman-posing-near-blue-wall-studio-model-having-fun-cheerful-happy_158538-22027.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	59.99	1
51	1	2	Summer Dress	Light and breezy summer dress	https://img.freepik.com/free-photo/young-beautiful-smiling-female-trendy-summer-dress-sexy-carefree-blond-woman-posing-near-blue-wall-studio-model-having-fun-cheerful-happy_158538-22027.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	59.99	1
52	1	3	Running Shoes	High-performance running shoes	https://img.freepik.com/free-psd/running-shoes-sneakers-transparent-background_84443-1654.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	89.99	1
53	1	3	Slim Fit Shirt	Elegant slim-fit shirt for formal occasions.	https://img.freepik.com/free-photo/portrait-handsome-young-man_158595-243.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	39.99	1
\.


                                                                                                                                                        3494.dat                                                                                            0000600 0004000 0002000 00000000107 14652625205 0014262 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Pants	1
2	Jeans	2
3	Dresses	2
4	Shoes	1
5	T-Shirts	3
6	Shirts	1
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                         3490.dat                                                                                            0000600 0004000 0002000 00000000556 14652625205 0014266 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	1	4111111111111111	2025-12-31	123	John Doe	123 Elm St	Springfield	IL	62701
2	2	4222222222222222	2024-11-30	456	Jane Smith	456 Oak St	Metropolis	NY	10001
3	\N	123	0002-12-31	123	sdasdasd	asd	asda	asd	12131
4	\N	123123	0003-12-03	123	1231asc	asdqw	asc	asda	1231231
5	\N	123123	0012-12-02	asc	asc	asf	af	asf	asf
6	\N	a213	0023-12-21	123	12312	12312	3123	123	123
\.


                                                                                                                                                  3498.dat                                                                                            0000600 0004000 0002000 00000000451 14652625205 0014270 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Alice Johnson	alice.johnson@example.com	I have a question about my recent order.	2024-07-29 17:22:50.97813
2	Bob Brown	bob.brown@example.com	Can I get more information on your return policy?	2024-07-29 17:22:50.97813
3	asd	mohammad.ali.deeb00@gmail.com	asdasdasdasd	2024-07-31 10:58:41.238
\.


                                                                                                                                                                                                                       3488.dat                                                                                            0000600 0004000 0002000 00000001611 14652625205 0014266 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	john_doe	john@example.com	hashed_password_1	2024-07-29 17:20:47.564028
2	jane_smith	jane@example.com	hashed_password_2	2024-07-29 17:20:47.564028
3	alice_johnson	alice@example.com	hashed_password_3	2024-07-29 17:20:47.564028
4	bob_brown	bob@example.com	hashed_password_4	2024-07-29 17:20:47.564028
5	carol_white	carol@example.com	hashed_password_5	2024-07-29 17:20:47.564028
6	Omarzl4	mohammad.ali.deeb00@gmail.com	$2b$10$1aeaH5zD44y4BZMyc6irkedsyCe8RxoBZCuoEs9ALjpZCfgUbEseS	2024-07-31 10:52:58.561
7	mohammad.ali.deeb00@gmail.comss	mohammad.ali.deeb00@gmail.comssss	$2b$10$23Qx5zm/FJTvOM2/VrqxCuksJsIc4001q49xheLD7GtwvgNJydmJu	2024-07-31 14:18:39.338
16	42130030	12133532@students.liu.edu.lb	$2b$10$6qR1/EpZOWdOT.Fa1eXTVemD115eyR9flZMYJc0sXB8/cYjEqbf1C	2024-07-31 16:23:34.066
17	aa	2133532@students.liu.edu.lb	$2b$10$/6uE0D6mo.SoqeF4G9b9geRFx.OJ6G93XKTTbfzcRgmQSrlbaDNAu	2024-07-31 17:08:07.138
\.


                                                                                                                       3512.dat                                                                                            0000600 0004000 0002000 00000006173 14652625205 0014262 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Basic T-Shirt	Comfortable and stylish T-shirt for everyday wear.	https://img.freepik.com/free-photo/woman-pink-crop-top-fashion-shoot_53876-108585.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	24.99
2	Graphic T-Shirt	Eye-catching graphic T-shirt with vibrant colors.	https://img.freepik.com/free-vector/vintage-amorous-prints-template-shirts-with-romantic-inscriptions-elegant-decor-elements_1284-34534.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	29.99
3	Slim Fit Shirt	Elegant slim-fit shirt for formal occasions.	https://img.freepik.com/free-photo/portrait-handsome-young-man_158595-243.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	39.99
4	Casual Button-Down Shirt	Relaxed button-down shirt for casual wear.	https://img.freepik.com/free-photo/men-shirt_1203-8253.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	34.99
5	Skinny Jeans	Trendy skinny jeans with a perfect fit.	https://img.freepik.com/free-photo/full-length-shot-active-girl-skinny-jeans-yellow-sweatshirt-raising-her-leg-blue-space_197531-15241.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	49.99
6	Straight-Leg Jeans	Classic straight-leg jeans for versatile styling.	https://img.freepik.com/free-photo/women-legs-front-yellow-wall_23-2148784188.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	54.99
7	Running Shoes	High-performance running shoes for your workout sessions.	https://img.freepik.com/free-psd/running-shoes-sneakers-transparent-background_84443-1608.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	89.99
8	Casual Sneakers	Stylish sneakers perfect for everyday activities.	https://img.freepik.com/free-photo/fashionforward-man-steps-out-blue-pants-fresh-white-sneakers_60438-3938.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	79.99
9	Chino Pants	Smart casual chino pants for a polished look.	https://img.freepik.com/premium-photo/isolated-sailor-pants-boys-with-wide-legs-button-front-closur-fashion-design-concept-ideas_655090-3137991.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	44.99
10	Cargo Pants	Durable cargo pants with ample pocket space.	https://img.freepik.com/free-psd/cargo-pants-men-with-plain-isolated-transparent-background_191095-17065.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	59.99
11	Classic T-Shirt	Simple yet essential T-shirt for all occasions.	https://img.freepik.com/free-photo/white-shirt-gentleman-street-photography_1409-6743.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	22.99
12	Denim Shirt	Stylish denim shirt with a modern twist.	https://img.freepik.com/free-photo/jeans-shirt_1203-7407.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	39.99
13	Bootcut Jeans	Bootcut jeans with a comfortable fit.	https://img.freepik.com/free-photo/trendy-fashionable-couple-isolated-white-wall_155003-36873.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	49.99
14	Slip-On Shoes	Convenient slip-on shoes for effortless style.	https://img.freepik.com/free-photo/men-white-espadrilles-slip-shoes_53876-97142.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	69.99
15	Dress Pants	Sophisticated dress pants for formal events.	https://img.freepik.com/free-vector/elegants-pants-jacket_603843-2546.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	79.99
\.


                                                                                                                                                                                                                                                                                                                                                                                                     3500.dat                                                                                            0000600 0004000 0002000 00000000104 14652625205 0014243 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Color	Red
2	Size	M
3	Material	Cotton
4	Price Range	$20 - $50
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                            3492.dat                                                                                            0000600 0004000 0002000 00000000032 14652625205 0014255 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Men
2	Women
3	Kids
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      3506.dat                                                                                            0000600 0004000 0002000 00000000253 14652625205 0014256 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	1	100
2	2	50
3	3	75
4	4	150
5	5	60
6	6	30
7	7	90
8	8	40
9	9	120
10	10	70
11	11	80
12	12	55
13	13	45
14	14	95
15	15	85
16	16	65
17	17	110
18	18	35
19	19	25
20	20	20
\.


                                                                                                                                                                                                                                                                                                                                                     3504.dat                                                                                            0000600 0004000 0002000 00000000132 14652625205 0014250 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	1	1	2	49.99
2	1	3	1	89.99
3	1	5	1	39.99
4	2	4	3	19.99
5	2	6	1	129.99
6	3	7	2	25.99
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                      3502.dat                                                                                            0000600 0004000 0002000 00000000140 14652625205 0014245 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	1	2024-07-28 10:30:00	129.97
2	2	2024-07-28 11:15:00	79.98
3	3	2024-07-28 12:00:00	49.99
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                3496.dat                                                                                            0000600 0004000 0002000 00000007704 14652625205 0014276 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Classic Jeans	Comfortable denim jeans	49.99	2	Levis	https://img.freepik.com/free-vector/set-isolated-jeans-denim-with-isolated-textile-products-made-denim-fabric-transparent-background-vector-illustration_1284-71085.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
2	Summer Dress	Light and breezy summer dress	59.99	3	Zara	https://img.freepik.com/free-photo/young-beautiful-smiling-female-trendy-summer-dress-sexy-carefree-blond-woman-posing-near-blue-wall-studio-model-having-fun-cheerful-happy_158538-22027.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
3	Running Shoes	High-performance running shoes	89.99	4	Nike	https://img.freepik.com/free-psd/running-shoes-sneakers-transparent-background_84443-1654.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
4	Casual T-Shirt	Soft cotton t-shirt	19.99	5	H&M	https://img.freepik.com/free-photo/asian-fashion-model-photography_1409-5385.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
5	Formal Shirt	Elegant formal shirt	39.99	6	Tommy Hilfiger	https://img.freepik.com/free-photo/mens-suit-photography_1409-5606.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
6	Winter Coat	Warm winter coat	129.99	1	North Face	https://img.freepik.com/free-vector/vintage-amorous-prints-template-shirts-with-romantic-inscriptions-elegant-decor-elements_1284-34534.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
8	Leather Boots	Stylish leather boots	99.99	4	Dr. Martens	https://img.freepik.com/free-photo/leather-boots_1203-7406.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
9	Summer Hat	Protective summer hat	15.99	1	H&M	https://img.freepik.com/free-photo/straw-hat-beach-sand_93675-131850.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
10	Denim Jacket	Classic denim jacket	79.99	2	Levis	https://img.freepik.com/free-photo/portrait-beautiful-brunette-woman-dressed-denim-jacket_171337-6059.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
11	Cargo Pants	Utility cargo pants	59.99	2	Carhartt	https://img.freepik.com/free-psd/cargo-pants-men-with-plain-isolated-transparent-background_191095-17058.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
12	Sports Bra	Comfortable sports bra	29.99	5	Nike	https://img.freepik.com/free-photo/woman-wearing-pink-sports-bra_53876-102242.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
13	Leather Wallet	Elegant leather wallet	39.99	4	Coach	https://img.freepik.com/free-photo/leather-bag-travel-with-headphones_23-2149434022.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
14	Swimwear	Stylish swimwear	34.99	1	Speedo	https://img.freepik.com/premium-photo/beach-scene-with-hat-sunglasses-hat_1252102-19107.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
15	Raincoat	Waterproof raincoat	49.99	1	Columbia	https://img.freepik.com/free-photo/mother-with-daughter-having-fun-jumping-puddles_1303-22777.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
16	Yoga Pants	Flexible yoga pants	29.99	5	Lululemon	https://img.freepik.com/free-photo/woman-blue-sports-bra-leggings-set_53876-125241.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
17	Sunglasses	UV-protection sunglasses	19.99	1	Ray-Ban	https://img.freepik.com/free-photo/portrait-pretty-blonde-stylish-woman-straw-hat-sunglasses_273443-2097.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
18	Leather Belt	Durable leather belt	24.99	4	Gucci	https://img.freepik.com/free-vector/men-wear-must-have-concept_1284-11280.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
19	Tank Top	Comfortable tank top	14.99	5	Uniqlo	https://img.freepik.com/free-photo/handsome-fit-man-posing-while-wearing-tank-top_23-2148700614.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
20	Blazer	Formal blazer	89.99	6	Suit Supply	https://img.freepik.com/premium-photo/womens-blazer-hanger-isolated-white-background_1022426-11265.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
7	Graphic T-Shirt	Trendy graphic tee	25.99	5	Adidas	https://img.freepik.com/free-vector/vintage-amorous-prints-template-shirts-with-romantic-inscriptions-elegant-decor-elements_1284-34534.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid
\.


                                                            3514.dat                                                                                            0000600 0004000 0002000 00000005414 14652625205 0014261 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Shoes Sale	Get 30% off on all shoes!	https://img.freepik.com/free-psd/shoes-sale-social-media-post-square-banner-template-design_505751-6073.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	0.30	19.99	1
2	Jeans Discount	Buy one pair of jeans, get another half off!	https://img.freepik.com/free-photo/top-view-jeans-with-sale-label-copy-space_23-2148670057.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	0.50	29.99	2
3	Pants Offer	Save 25% on selected pants!	https://img.freepik.com/free-photo/spring-wardrobe-switch-view_23-2150264152.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	0.25	15.99	3
4	T-Shirts Special	Get 2 t-shirts for the price of 1!	https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448791.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	0.50	25.99	4
5	Shirts Sale	20% off on all shirts!	https://img.freepik.com/free-psd/vertical-poster-fashion-collection_23-2149039583.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	0.20	35.99	5
6	Shoes Clearance	Up to 50% off on clearance shoes!	https://img.freepik.com/free-psd/shoes-sale-social-media-post-square-banner-template-design_505751-6073.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	0.50	22.99	6
7	Jeans Blowout	Extra 15% off on jeans!	https://img.freepik.com/free-photo/young-girl-holding-her-hands-her-head-white-background_176474-114413.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	0.15	18.99	7
8	Pants Mega Sale	Flat 30% off on all pants!	https://img.freepik.com/free-vector/fashion-sale-banner-collection_23-2148159045.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	0.30	27.99	8
9	T-Shirts Deal	Buy 3 t-shirts, get 1 free!	https://img.freepik.com/premium-photo/laundry-service-ironing-clothes-hygiene-cleaning-clothes-washing-machine-housekeeping_71956-48275.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	0.33	14.99	9
10	Shirts Exclusive	Buy 2 shirts, get 20% off on the third!	https://img.freepik.com/free-photo/close-up-flannel-shirt-detail_23-2149575382.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	0.20	32.99	10
11	Shoes Frenzy	Buy one, get 50% off on the second pair!	https://img.freepik.com/free-photo/close-up-male-shoes_23-2148900098.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	0.50	21.99	11
12	Jeans Offer	30% off on all new arrivals jeans!	https://img.freepik.com/free-psd/fashion-template-design_23-2150299007.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	0.30	16.99	12
13	Pants Promotion	Get 20% off on select pants!	https://img.freepik.com/free-photo/full-length-shot-casual-dressed-man_23-2148698497.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	0.20	28.99	13
14	T-Shirts Extravaganza	Buy 2 t-shirts, get the third at 50% off!	https://img.freepik.com/free-photo/stacked-t-shirts_23-2148819168.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid	0.50	30.99	14
\.


                                                                                                                                                                                                                                                    restore.sql                                                                                         0000600 0004000 0002000 00000102424 14652625205 0015376 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE clothesstore;
--
-- Name: clothesstore; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE clothesstore WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';


ALTER DATABASE clothesstore OWNER TO postgres;

\connect clothesstore

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Admins; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Admins" (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Admins" OWNER TO postgres;

--
-- Name: Admins_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Admins_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Admins_id_seq" OWNER TO postgres;

--
-- Name: Admins_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Admins_id_seq" OWNED BY public."Admins".id;


--
-- Name: Customers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Customers" (
    "CustomerID" integer NOT NULL,
    "UserName" character varying(100) NOT NULL,
    "Email" character varying(100) NOT NULL,
    "PasswordHash" character varying(255) NOT NULL,
    "RegistrationDate" timestamp with time zone
);


ALTER TABLE public."Customers" OWNER TO postgres;

--
-- Name: Customers_CustomerID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Customers_CustomerID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Customers_CustomerID_seq" OWNER TO postgres;

--
-- Name: Customers_CustomerID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Customers_CustomerID_seq" OWNED BY public."Customers"."CustomerID";


--
-- Name: admin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admin (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(255) NOT NULL,
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.admin OWNER TO postgres;

--
-- Name: admin_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admin_id_seq OWNER TO postgres;

--
-- Name: admin_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admin_id_seq OWNED BY public.admin.id;


--
-- Name: admins; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admins (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(255) NOT NULL,
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.admins OWNER TO postgres;

--
-- Name: admins_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admins_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admins_id_seq OWNER TO postgres;

--
-- Name: admins_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admins_id_seq OWNED BY public.admins.id;


--
-- Name: cart; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cart (
    cartid integer NOT NULL,
    customerid integer,
    productid integer,
    productname character varying(255),
    productdescription text,
    productimageurl character varying(255),
    productprice numeric(10,2),
    quantity integer
);


ALTER TABLE public.cart OWNER TO postgres;

--
-- Name: cart_cartid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cart_cartid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cart_cartid_seq OWNER TO postgres;

--
-- Name: cart_cartid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cart_cartid_seq OWNED BY public.cart.cartid;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    categoryid integer NOT NULL,
    categoryname character varying(100) NOT NULL,
    genderid integer
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_categoryid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_categoryid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_categoryid_seq OWNER TO postgres;

--
-- Name: categories_categoryid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_categoryid_seq OWNED BY public.categories.categoryid;


--
-- Name: checkout; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.checkout (
    checkoutid integer NOT NULL,
    customerid integer,
    cardnumber character varying(20) NOT NULL,
    expiredate date NOT NULL,
    cvc character varying(4) NOT NULL,
    fullname character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    city character varying(100) NOT NULL,
    state character varying(100) NOT NULL,
    zipcode character varying(10) NOT NULL
);


ALTER TABLE public.checkout OWNER TO postgres;

--
-- Name: checkout_checkoutid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.checkout_checkoutid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.checkout_checkoutid_seq OWNER TO postgres;

--
-- Name: checkout_checkoutid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.checkout_checkoutid_seq OWNED BY public.checkout.checkoutid;


--
-- Name: contactus; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contactus (
    contactid integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(100) NOT NULL,
    message text NOT NULL,
    contactdate timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.contactus OWNER TO postgres;

--
-- Name: contactus_contactid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.contactus_contactid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contactus_contactid_seq OWNER TO postgres;

--
-- Name: contactus_contactid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contactus_contactid_seq OWNED BY public.contactus.contactid;


--
-- Name: customers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customers (
    customerid integer NOT NULL,
    username character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    passwordhash character varying(255) NOT NULL,
    registrationdate timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.customers OWNER TO postgres;

--
-- Name: customers_customerid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customers_customerid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customers_customerid_seq OWNER TO postgres;

--
-- Name: customers_customerid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customers_customerid_seq OWNED BY public.customers.customerid;


--
-- Name: featuredproducts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.featuredproducts (
    productid integer NOT NULL,
    name character varying(255) NOT NULL,
    description text NOT NULL,
    image character varying(255) NOT NULL,
    price numeric(10,2) NOT NULL
);


ALTER TABLE public.featuredproducts OWNER TO postgres;

--
-- Name: featuredproducts_productid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.featuredproducts_productid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.featuredproducts_productid_seq OWNER TO postgres;

--
-- Name: featuredproducts_productid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.featuredproducts_productid_seq OWNED BY public.featuredproducts.productid;


--
-- Name: filters; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.filters (
    filterid integer NOT NULL,
    filtername character varying(100),
    filtervalue character varying(100)
);


ALTER TABLE public.filters OWNER TO postgres;

--
-- Name: filters_filterid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.filters_filterid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.filters_filterid_seq OWNER TO postgres;

--
-- Name: filters_filterid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.filters_filterid_seq OWNED BY public.filters.filterid;


--
-- Name: genders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.genders (
    genderid integer NOT NULL,
    gendername character varying(50) NOT NULL
);


ALTER TABLE public.genders OWNER TO postgres;

--
-- Name: genders_genderid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.genders_genderid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.genders_genderid_seq OWNER TO postgres;

--
-- Name: genders_genderid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.genders_genderid_seq OWNED BY public.genders.genderid;


--
-- Name: inventory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.inventory (
    inventoryid integer NOT NULL,
    productid integer NOT NULL,
    quantity integer NOT NULL
);


ALTER TABLE public.inventory OWNER TO postgres;

--
-- Name: inventory_inventoryid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.inventory_inventoryid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.inventory_inventoryid_seq OWNER TO postgres;

--
-- Name: inventory_inventoryid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.inventory_inventoryid_seq OWNED BY public.inventory.inventoryid;


--
-- Name: orderdetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orderdetails (
    orderdetailid integer NOT NULL,
    orderid integer NOT NULL,
    productid integer NOT NULL,
    quantity integer NOT NULL,
    price numeric(10,2) NOT NULL
);


ALTER TABLE public.orderdetails OWNER TO postgres;

--
-- Name: orderdetails_orderdetailid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orderdetails_orderdetailid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orderdetails_orderdetailid_seq OWNER TO postgres;

--
-- Name: orderdetails_orderdetailid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orderdetails_orderdetailid_seq OWNED BY public.orderdetails.orderdetailid;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    orderid integer NOT NULL,
    customerid integer NOT NULL,
    orderdate timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    totalamount numeric(10,2) NOT NULL
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: orders_orderid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_orderid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_orderid_seq OWNER TO postgres;

--
-- Name: orders_orderid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_orderid_seq OWNED BY public.orders.orderid;


--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    productid integer NOT NULL,
    name character varying(255) NOT NULL,
    description text,
    price numeric(10,2) NOT NULL,
    categoryid integer,
    brand character varying(100),
    imageurl character varying(255)
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_productid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_productid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_productid_seq OWNER TO postgres;

--
-- Name: products_productid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_productid_seq OWNED BY public.products.productid;


--
-- Name: promotions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.promotions (
    promotionid integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    imagesrc character varying(255) NOT NULL,
    discount numeric(5,2) NOT NULL,
    price numeric(10,2) DEFAULT 0 NOT NULL,
    productid integer
);


ALTER TABLE public.promotions OWNER TO postgres;

--
-- Name: promotions_promotionid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.promotions_promotionid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.promotions_promotionid_seq OWNER TO postgres;

--
-- Name: promotions_promotionid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.promotions_promotionid_seq OWNED BY public.promotions.promotionid;


--
-- Name: Admins id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Admins" ALTER COLUMN id SET DEFAULT nextval('public."Admins_id_seq"'::regclass);


--
-- Name: Customers CustomerID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Customers" ALTER COLUMN "CustomerID" SET DEFAULT nextval('public."Customers_CustomerID_seq"'::regclass);


--
-- Name: admin id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin ALTER COLUMN id SET DEFAULT nextval('public.admin_id_seq'::regclass);


--
-- Name: admins id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins ALTER COLUMN id SET DEFAULT nextval('public.admins_id_seq'::regclass);


--
-- Name: cart cartid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart ALTER COLUMN cartid SET DEFAULT nextval('public.cart_cartid_seq'::regclass);


--
-- Name: categories categoryid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN categoryid SET DEFAULT nextval('public.categories_categoryid_seq'::regclass);


--
-- Name: checkout checkoutid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.checkout ALTER COLUMN checkoutid SET DEFAULT nextval('public.checkout_checkoutid_seq'::regclass);


--
-- Name: contactus contactid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contactus ALTER COLUMN contactid SET DEFAULT nextval('public.contactus_contactid_seq'::regclass);


--
-- Name: customers customerid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers ALTER COLUMN customerid SET DEFAULT nextval('public.customers_customerid_seq'::regclass);


--
-- Name: featuredproducts productid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.featuredproducts ALTER COLUMN productid SET DEFAULT nextval('public.featuredproducts_productid_seq'::regclass);


--
-- Name: filters filterid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.filters ALTER COLUMN filterid SET DEFAULT nextval('public.filters_filterid_seq'::regclass);


--
-- Name: genders genderid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genders ALTER COLUMN genderid SET DEFAULT nextval('public.genders_genderid_seq'::regclass);


--
-- Name: inventory inventoryid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventory ALTER COLUMN inventoryid SET DEFAULT nextval('public.inventory_inventoryid_seq'::regclass);


--
-- Name: orderdetails orderdetailid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orderdetails ALTER COLUMN orderdetailid SET DEFAULT nextval('public.orderdetails_orderdetailid_seq'::regclass);


--
-- Name: orders orderid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN orderid SET DEFAULT nextval('public.orders_orderid_seq'::regclass);


--
-- Name: products productid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN productid SET DEFAULT nextval('public.products_productid_seq'::regclass);


--
-- Name: promotions promotionid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.promotions ALTER COLUMN promotionid SET DEFAULT nextval('public.promotions_promotionid_seq'::regclass);


--
-- Data for Name: Admins; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Admins" (id, username, email, password, "createdAt", "updatedAt") FROM stdin;
\.
COPY public."Admins" (id, username, email, password, "createdAt", "updatedAt") FROM '$$PATH$$/3510.dat';

--
-- Data for Name: Customers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Customers" ("CustomerID", "UserName", "Email", "PasswordHash", "RegistrationDate") FROM stdin;
\.
COPY public."Customers" ("CustomerID", "UserName", "Email", "PasswordHash", "RegistrationDate") FROM '$$PATH$$/3508.dat';

--
-- Data for Name: admin; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.admin (id, username, email, password, createdat, updatedat) FROM stdin;
\.
COPY public.admin (id, username, email, password, createdat, updatedat) FROM '$$PATH$$/3518.dat';

--
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.admins (id, username, email, password, createdat, updatedat) FROM stdin;
\.
COPY public.admins (id, username, email, password, createdat, updatedat) FROM '$$PATH$$/3520.dat';

--
-- Data for Name: cart; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cart (cartid, customerid, productid, productname, productdescription, productimageurl, productprice, quantity) FROM stdin;
\.
COPY public.cart (cartid, customerid, productid, productname, productdescription, productimageurl, productprice, quantity) FROM '$$PATH$$/3516.dat';

--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (categoryid, categoryname, genderid) FROM stdin;
\.
COPY public.categories (categoryid, categoryname, genderid) FROM '$$PATH$$/3494.dat';

--
-- Data for Name: checkout; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.checkout (checkoutid, customerid, cardnumber, expiredate, cvc, fullname, address, city, state, zipcode) FROM stdin;
\.
COPY public.checkout (checkoutid, customerid, cardnumber, expiredate, cvc, fullname, address, city, state, zipcode) FROM '$$PATH$$/3490.dat';

--
-- Data for Name: contactus; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contactus (contactid, name, email, message, contactdate) FROM stdin;
\.
COPY public.contactus (contactid, name, email, message, contactdate) FROM '$$PATH$$/3498.dat';

--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customers (customerid, username, email, passwordhash, registrationdate) FROM stdin;
\.
COPY public.customers (customerid, username, email, passwordhash, registrationdate) FROM '$$PATH$$/3488.dat';

--
-- Data for Name: featuredproducts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.featuredproducts (productid, name, description, image, price) FROM stdin;
\.
COPY public.featuredproducts (productid, name, description, image, price) FROM '$$PATH$$/3512.dat';

--
-- Data for Name: filters; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.filters (filterid, filtername, filtervalue) FROM stdin;
\.
COPY public.filters (filterid, filtername, filtervalue) FROM '$$PATH$$/3500.dat';

--
-- Data for Name: genders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.genders (genderid, gendername) FROM stdin;
\.
COPY public.genders (genderid, gendername) FROM '$$PATH$$/3492.dat';

--
-- Data for Name: inventory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.inventory (inventoryid, productid, quantity) FROM stdin;
\.
COPY public.inventory (inventoryid, productid, quantity) FROM '$$PATH$$/3506.dat';

--
-- Data for Name: orderdetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orderdetails (orderdetailid, orderid, productid, quantity, price) FROM stdin;
\.
COPY public.orderdetails (orderdetailid, orderid, productid, quantity, price) FROM '$$PATH$$/3504.dat';

--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (orderid, customerid, orderdate, totalamount) FROM stdin;
\.
COPY public.orders (orderid, customerid, orderdate, totalamount) FROM '$$PATH$$/3502.dat';

--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (productid, name, description, price, categoryid, brand, imageurl) FROM stdin;
\.
COPY public.products (productid, name, description, price, categoryid, brand, imageurl) FROM '$$PATH$$/3496.dat';

--
-- Data for Name: promotions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.promotions (promotionid, title, description, imagesrc, discount, price, productid) FROM stdin;
\.
COPY public.promotions (promotionid, title, description, imagesrc, discount, price, productid) FROM '$$PATH$$/3514.dat';

--
-- Name: Admins_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Admins_id_seq"', 1, false);


--
-- Name: Customers_CustomerID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Customers_CustomerID_seq"', 1, false);


--
-- Name: admin_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admin_id_seq', 1, false);


--
-- Name: admins_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admins_id_seq', 2, true);


--
-- Name: cart_cartid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cart_cartid_seq', 53, true);


--
-- Name: categories_categoryid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_categoryid_seq', 6, true);


--
-- Name: checkout_checkoutid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.checkout_checkoutid_seq', 6, true);


--
-- Name: contactus_contactid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contactus_contactid_seq', 3, true);


--
-- Name: customers_customerid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customers_customerid_seq', 17, true);


--
-- Name: featuredproducts_productid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.featuredproducts_productid_seq', 15, true);


--
-- Name: filters_filterid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.filters_filterid_seq', 4, true);


--
-- Name: genders_genderid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.genders_genderid_seq', 3, true);


--
-- Name: inventory_inventoryid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.inventory_inventoryid_seq', 20, true);


--
-- Name: orderdetails_orderdetailid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orderdetails_orderdetailid_seq', 6, true);


--
-- Name: orders_orderid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_orderid_seq', 3, true);


--
-- Name: products_productid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_productid_seq', 20, true);


--
-- Name: promotions_promotionid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.promotions_promotionid_seq', 14, true);


--
-- Name: Admins Admins_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Admins"
    ADD CONSTRAINT "Admins_email_key" UNIQUE (email);


--
-- Name: Admins Admins_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Admins"
    ADD CONSTRAINT "Admins_pkey" PRIMARY KEY (id);


--
-- Name: Admins Admins_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Admins"
    ADD CONSTRAINT "Admins_username_key" UNIQUE (username);


--
-- Name: Customers Customers_Email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Customers"
    ADD CONSTRAINT "Customers_Email_key" UNIQUE ("Email");


--
-- Name: Customers Customers_UserName_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Customers"
    ADD CONSTRAINT "Customers_UserName_key" UNIQUE ("UserName");


--
-- Name: Customers Customers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Customers"
    ADD CONSTRAINT "Customers_pkey" PRIMARY KEY ("CustomerID");


--
-- Name: admin admin_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_email_key UNIQUE (email);


--
-- Name: admin admin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pkey PRIMARY KEY (id);


--
-- Name: admin admin_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_username_key UNIQUE (username);


--
-- Name: admins admins_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_email_key UNIQUE (email);


--
-- Name: admins admins_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_pkey PRIMARY KEY (id);


--
-- Name: admins admins_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_username_key UNIQUE (username);


--
-- Name: cart cart_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_pkey PRIMARY KEY (cartid);


--
-- Name: categories categories_categoryname_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_categoryname_key UNIQUE (categoryname);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (categoryid);


--
-- Name: checkout checkout_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.checkout
    ADD CONSTRAINT checkout_pkey PRIMARY KEY (checkoutid);


--
-- Name: contactus contactus_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contactus
    ADD CONSTRAINT contactus_pkey PRIMARY KEY (contactid);


--
-- Name: customers customers_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_email_key UNIQUE (email);


--
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (customerid);


--
-- Name: customers customers_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_username_key UNIQUE (username);


--
-- Name: featuredproducts featuredproducts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.featuredproducts
    ADD CONSTRAINT featuredproducts_pkey PRIMARY KEY (productid);


--
-- Name: filters filters_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.filters
    ADD CONSTRAINT filters_pkey PRIMARY KEY (filterid);


--
-- Name: genders genders_gendername_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genders
    ADD CONSTRAINT genders_gendername_key UNIQUE (gendername);


--
-- Name: genders genders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genders
    ADD CONSTRAINT genders_pkey PRIMARY KEY (genderid);


--
-- Name: inventory inventory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventory
    ADD CONSTRAINT inventory_pkey PRIMARY KEY (inventoryid);


--
-- Name: orderdetails orderdetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orderdetails
    ADD CONSTRAINT orderdetails_pkey PRIMARY KEY (orderdetailid);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (orderid);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (productid);


--
-- Name: promotions promotions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.promotions
    ADD CONSTRAINT promotions_pkey PRIMARY KEY (promotionid);


--
-- Name: products fk_category; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT fk_category FOREIGN KEY (categoryid) REFERENCES public.categories(categoryid);


--
-- Name: cart fk_customer_cart; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT fk_customer_cart FOREIGN KEY (customerid) REFERENCES public.customers(customerid);


--
-- Name: checkout fk_customer_checkout; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.checkout
    ADD CONSTRAINT fk_customer_checkout FOREIGN KEY (customerid) REFERENCES public.customers(customerid);


--
-- Name: orders fk_customer_order; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fk_customer_order FOREIGN KEY (customerid) REFERENCES public.customers(customerid);


--
-- Name: categories fk_gender; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT fk_gender FOREIGN KEY (genderid) REFERENCES public.genders(genderid);


--
-- Name: orderdetails fk_order; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orderdetails
    ADD CONSTRAINT fk_order FOREIGN KEY (orderid) REFERENCES public.orders(orderid);


--
-- Name: cart fk_product_cart; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT fk_product_cart FOREIGN KEY (productid) REFERENCES public.products(productid);


--
-- Name: inventory fk_product_inventory; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventory
    ADD CONSTRAINT fk_product_inventory FOREIGN KEY (productid) REFERENCES public.products(productid);


--
-- Name: orderdetails fk_product_order; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orderdetails
    ADD CONSTRAINT fk_product_order FOREIGN KEY (productid) REFERENCES public.products(productid);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            