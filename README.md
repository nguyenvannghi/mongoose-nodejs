# mongoose-nodejs
Setup MongoDB with Mongoose in Express and deploy on Zeit

### Get users: 
```
https://mongoose-nodejs.nghiweb.now.sh/api/v1/users/
```

### Get user detail:
```
https://mongoose-nodejs.nghiweb.now.sh/api/v1/users/:id
```

### Create user:
```
https://mongoose-nodejs.nghiweb.now.sh/api/v1/users/

Body:
{
	"name": "John Clare",
	"email": "johnclare@gmail.com",
	"age": 34
}
```

### Update user:
```
https://mongoose-nodejs.nghiweb.now.sh/api/v1/users/:id

Body:
{
	"name": "John Clare",
	"email": "johnclare@gmail.com",
	"age": 34
}
```
