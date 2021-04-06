# Mayura
We are making a simple banking system where a user can check his account details and transactions history. On top of this, providing him with a way to transact with other users.

## Built With: 
### 1. Node.js as Backend
Event-driven, non-blocking architecture in Node.js facilitates concurrency(handles > 10,000 concurrent requests) and is good with an application where no heavy computation is required.

Assumption: Since no direct CPU intensive task is included in the requirement, preferring Node.js based on my familiarity with the framework.

Postman APIs: https://www.getpostman.com/collections/616de2ffcf6a01178351
### 2. MySql as Database
Banking companies are using both SQL based and NoSql based databases depending upon the use case. 

Assumptions: In this simple application where user accounts, transactions, credit history are all inter-related, I'm going with SQL database MySql.

Schema: 

![alt text](https://github.com/VikasChoudhary2096/mean-blog/blob/main/er.png)

### 3. Angular as Frontend
Based on familiarity.(in-complete)

## Tasks:
- [x] 1.  Project Setup
- [x] 2.  JWT Based Auth using bcrypt, jsonwebtoken.(login/signup) 
- [x] 3.  Account verification API.
- [x] 4.  Initiate a transaction
- [x] 5.  Transaction history PDF creation


## Setup

```
cd backend
$ npm install
$ npm start

```