# fastify-otps
one time password share platform using fastify framework  

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
* Node JS
* Fastify framework 
* Mongodb(luxary)
* Redis(luxary)

###To setup and run the project:

* Install dependencies(only first time)
```
npm install -d
```
* Run project
```
node server.js
```
