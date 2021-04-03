# Mayura
We are making a simple banking system where a user can check his account details and transactions history. On top of this, providing him with a way to transact with other users.

## Built With: 
### 1. Node.js as Backend
Event-driven, non-blocking architecture in Node.js facilitates concurrency(handles > 10,000 concurrent requests) and is good with an application where no heavy computation is required.

Assumption: Since no direct CPU intensive task is included in the requirement, preferring Node.js based on my familiarity with the framework.
### 2. MySql as Database
Banking companies are using both SQL based and NoSql based databases depending upon the use case. 

Assumptions: In this simple application where user accounts, transactions, credit history are all inter-related, I'm going with SQL database MySql.
### 3. Angular as Frontend
Based on familiarity.

## Tasks:
- [ ] 1.  Project Setup, working angular, node app.
- [ ] 2.  JWT based auth using Passport.js Strategy
- [ ] 3. Account verification API.
- [ ] 4. Account Info API.
- [ ] 5. Transaction feature.
- [ ] 6. Transaction history PDF
