
# UnLeash - Social Media App

UnLeash is a photo sharing app that allows users to follow friends, post their own content, and discover new interests. 





## Documentation

The client side of the project is developed using [React js](https://legacy.reactjs.org/docs/getting-started.html)

The server side of the project is developed using [Node js](https://nodejs.org/en/docs) and [Express js](https://expressjs.com/)

The database used is [Mongo DB](https://www.mongodb.com/)



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URL`

`PORT`

`JWT_SECRET`


## Deployment

To deploy this project setup the routes and port number.

Specify the environment variables where the Mongodb URL and port number are declared.

To install all the node modules: 

```bash
  $ npm install
```

To start the client-side: 

```bash
  $ npm run start
```
To start the server-side: 

```bash
  $ npm start
```





## Database Schema

#### User Databse :

| Content             | Type                                                                |
| ----------------- | ------------------------------------------------------------------ |
| FirstName | string |
| LastName | string |
| Email Id | string |
| Password | string |
| PicturePath | string |
| Location | string |
| Occupation | string |
| impression | Number |
| profileViews | Number |



#### Post Databse :

| Content             | Type                                                                |
| ----------------- | ------------------------------------------------------------------ |
| UserId | string |
| FirstName | string |
| LastName | string |
| Location | string |
| description | string |
| picturePath | String |
| UserPicturePath | String |
| Likes | Number |



