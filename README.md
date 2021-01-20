# fastify-otps
one time password share platform using fastify framework. mainly support-center/NOC/DC  will be its main stakeholder.  

## Primary Goal
* Share secrect using this app generated link.
* Any one(shared person) can view this secret using this link
  * Next OTP based varification will be added
* Link will destroy itself after click

## Secondary Goal
* Admin panel
* Link history : summary/ for reporting
* Email integration : Can share link using platform
* OTP share via email. 

### Technical details
tech stack will be used(may be):
* Node JS(for fun)
* Fastify framework (faster node framework)
* Mongodb(luxary)
* Redis(luxary)

### To setup and run the project:

* Install dependencies(only first time)
```
npm install -d
```
* Run project
```
node server.js
```
