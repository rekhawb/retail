# Internet Retail

#### Welcome!  You can find below video walkthrough guidelines to create schema, seed the database and work on CRUD operations.

## CLICK on the images below to play video
************************************************************************************************************************************************
************************************************************************************************************************************************

## - Create Database Schema
************************************************************************************************************************************************

[![Create Schema](https://raw.githubusercontent.com/rekhawb/retail/71e097a2a72887dd316aa1119be0ae2e17f2237c/images/1.PNG)](https://drive.google.com/file/d/1muwPW_05DScJ6J6yKJ7bDpSpSTccFIGP/view)
************************************************************************************************************************************************

## - Create tables
************************************************************************************************************************************************

[![Create tables](https://raw.githubusercontent.com/rekhawb/retail/71e097a2a72887dd316aa1119be0ae2e17f2237c/images/2.PNG)](https://drive.google.com/file/d/1KSmWyx6-QHpWi9yr1pI28QZs7CkLKct1/view)
************************************************************************************************************************************************
## - Seed database
************************************************************************************************************************************************
[![seed database](https://raw.githubusercontent.com/rekhawb/retail/71e097a2a72887dd316aa1119be0ae2e17f2237c/images/3.PNG)](https://drive.google.com/file/d/1-pY4jh1ttbWputQMgfbO9sLvbolv8D8f/view)
************************************************************************************************************************************************
## - READ Data
************************************************************************************************************************************************
[![get data](https://raw.githubusercontent.com/rekhawb/retail/71e097a2a72887dd316aa1119be0ae2e17f2237c/images/4.PNG)](https://drive.google.com/file/d/11B2TgZ27_FcKkn2EDYRFkvIMRqfA2fpt/view)
************************************************************************************************************************************************
## - Create Data
************************************************************************************************************************************************
[![post data](https://raw.githubusercontent.com/rekhawb/retail/71e097a2a72887dd316aa1119be0ae2e17f2237c/images/5.PNG)](https://drive.google.com/file/d/1L-lYywgp2_os80xa6xNNv1JcWhTjFJMJ/view)
************************************************************************************************************************************************
## - Update Data
************************************************************************************************************************************************
[![put data](https://raw.githubusercontent.com/rekhawb/retail/71e097a2a72887dd316aa1119be0ae2e17f2237c/images/6.PNG)](https://drive.google.com/file/d/1sJ9XsaySa-fe206xmNuPTWPRPZg9qqMc/view)
************************************************************************************************************************************************
## - Delete Data
#### - please note  that you cannot delete a category if there are products associated to the category. Either update the product to a different category or delete all the products under the category and then delete the category. All these steps have been demonstrated in the video below
************************************************************************************************************************************************
[![delete data](https://raw.githubusercontent.com/rekhawb/retail/71e097a2a72887dd316aa1119be0ae2e17f2237c/images/7.PNG)](https://drive.google.com/file/d/1zIARC5KKXSdXXlvd5cY4EVsiF-zoQ4KI/view)
## - Delete Data - Setting the parent reference as NULL in the child
#### - as opposed to above method of warning the user that a category cannot be deleted unless you update the products with a different category or delete the products under the category, the category can be set to NULL in the child whenever a category is deleted and then the product can be  updated to a different category  at a later point
************************************************************************************************************************************************
To perform this, modify the code in the model as follows

![alt text](images\8.PNG)

************************************************************************************************************************************************
[![delete data NULL](images\9.PNG)](https://drive.google.com/file/d/1cfsFDPNlh1l1IbNK2UFbDfU8O6uWFoss/view)



