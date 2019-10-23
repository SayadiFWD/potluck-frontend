# potluck-backend

==================== LOGIN && REGISTER ENDPOINTS START HERE =======================

**Register a user**
method url: **/api/auth/register**

http method: **[POST]**

**Body**

| name      | type   | required | description                         |  
| --------  | ------ | ------- | ----------------------------------   |
| username  | String | Yes      | Must be unique/ Must be <= 255 char |
| password  | String | Yes      |  Must be <= 255 char                |    
| email     | String | No       | Must be unique/ Must be <= 255 char |    

**Example**
```
{
    username: 'Bobby',
    password: 'password',
    email: 'b@b'
}
```

**Response** 200 (created)


=========================================================================

**Login a user**
method url: **/api/auth/login**

http method: **[POST]**

**Body**

| name     | type   | required | description                         | 
| -------- | ------ | -------- | ---------------------------------   |
| username | String | Yes      | Must be unique/ Must be >= 255 char |
| password | String | Yes      | Must be <= 255 char                 |

**Example**
```
{
    username: 'Bobby',
    password: 'password'
}
```

**Response** 200 (ok)

```
{
token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJlbWFpbCI6ImJwb2x0bEBnbWFpbC5jb20iLCJpYXQiOjE1NTU5NzAyMjMsImV4cCI6MTU1NjA1NjYyM30.lWi9hhalGt2ftr4Ju_jP12dCavZgXAMwABGYPzltwr8'
}
```

400 (Unauthorized) **Example response**
```
{ 
error: 'please provide credentials'
}
```

========================== USERS ENDPOINTS START HERE ============================

**GET a user** 
method url: **/api/users**

http method: **[GET]**

**Body**

| name      | type   | required | description                         |  
| --------  | ------ | ------- | ----------------------------------   |
| username  | String | Yes      | Must be unique/ Must be <= 255 char |
| password  | String | Yes      | Must be unique/ Must be <= 255 char |    | email     | String | No       | Must be unique/ Must be <= 255 char |        

**Example**
```
{
    username: 'Abby',
    password: 'password',
    email: 'a@a'
}
```

**Response** 200 

==============================================

**GET a user with ID** 
method url: **/api/users/:id**

http method: **[GET]**

**Body**

| name      | type   | required | description                         |  
| --------  | ------ | ------- | ----------------------------------   |
| username  | String | Yes      | Must be unique/ Must be <= 255 char |
| password  | String | Yes      | Must be unique/ Must be <= 255 char |    | email     | String | No       | Must be unique/ Must be <= 255 char |        

**Example**
```
{
    username: 'Alex',
    password: 'password',
    email: 'a@a'
}
```

**Response** 200 

============================================

**PUT a user** 
method url: **/api/users/:id**

http method: **[PUT]**

**Body**

| name      | type   | required | description                         |  
| --------  | ------ | ------- | ----------------------------------   |
| username  | String | Yes      | Must be unique/ Must be <= 255 char |
| password  | String | Yes      | Must be unique/ Must be <= 255 char |    | email     | String | No       | Must be unique/ Must be <= 255 char |        

**Example**
```
{
    username: 'Abby',
    password: 'password',
    email: 'a@a'
}
```

**Response** 200 (user updated)

=============================================

**DELETE a user** 
method url: **/api/users/:id**

http method: **[DELETE]**

**Body**

| name      | type   | required | description                         |  
| --------  | ------ | ------- | ----------------------------------   |
| username  | String | Yes      | Must be unique/ Must be <= 255 char |
| password  | String | Yes      | Must be unique/ Must be <= 255 char |    | email     | String | No       | Must be unique/ Must be <= 255 char |         

**Example**
```
{
    username: 'Abby',
    password: 'password',
    email: 'a@a'
}
```

**Response** 200 (user deleted)

===============================================

**GET a user with events!!** 
method url: **/api/users/:id/events**

http method: **[GET]**

**Body**

| name      | type   | required | description                         |  
| --------  | ------ | -------  |  ------------------------------     |
| username  | String | Yes      | Must be unique/ Must be <= 255 char |
| password  | String | Yes      | Must be unique/ Must be <= 255 char |    | email     | String | No       | Must be unique/ Must be <= 255 char |         


| name       | type    | required | description 
| ---------- | ------  | -------- | ------------------------------------ |
| event_name | String  | No       | Must be unique/ Must be <= 255 char  |
| time       | String  | No       | Must be unique/ Must be <= 255 char  |
| location   | String  | No       | Must be unique/ Must be <= 255 char  |
| dates      | String  | No       | Must be unique/ Must be <= 255 char  |
| guests     | String  | No       | Must be unique/ Must be <= 255 char  |
| users_id   | String  | NO       | Must be unique/ Must be <= 255 char  |



**Example**
```

{
  "id": 1,
  "username": Noah W,
  "password": password,
   "email": 'a@a'
  "events": [
    {
      "id": 9,
      "event_name": "potluck at the park",
      "time": "5:00pm",
      "location": "NYC Center Park",
      "dates": "9-18-19",
      "guests": "Bob, steve, Smith, Sam",
      "users_id": 1
    }
  ]
}

```

**Response** 200 


========================== EVENTS ENDPOINTS START HERE ===========================

**POST a user with ID** 
method url: **/api/events/:id**

http method: **[POST]**

**Body**

| name       | type    | required | description 
| ---------- | ------  | -------- | ------------------------------------ |
| event_name | String  | No       | Must be unique/ Must be <= 255 char  |
| time       | String  | No       | Must be unique/ Must be <= 255 char  |
| location   | String  | No       | Must be unique/ Must be <= 255 char  |
| dates      | String  | No       | Must be unique/ Must be <= 255 char  |
| guests     | String  | No       | Must be unique/ Must be <= 255 char  |
| users_id   | String  | NO       | Must be unique/ Must be <= 255 char  |



**Example**
```
{
    "id": 9,
    "event_name": "potluck at the park",
    "time": "5:00pm",
    "location": "NYC Center Park",
    "dates": "9-18-19",
    "guests": "Bob, steve, Smith, Sam",
    "users_id": 1
}

```

**Response** 200 (event was created successfully)

======================================================

**GET events** 
method url: **/api/events**

http method: **[GET]**

**Body**

| name       | type    | required | description 
| ---------- | ------  | -------- | ------------------------------------ |
| event_name | String  | No       | Must be unique/ Must be <= 255 char  |
| time       | String  | No       | Must be unique/ Must be <= 255 char  |
| location   | String  | No       | Must be unique/ Must be <= 255 char  |
| dates      | String  | No       | Must be unique/ Must be <= 255 char  |
| guests     | String  | No       | Must be unique/ Must be <= 255 char  |
| users_id   | String  | NO       | Must be unique/ Must be <= 255 char  |



**Example**
```
{
    "id": 9,
    "event_name": "potluck at the park",
    "time": "5:00pm",
    "location": "NYC Center Park",
    "dates": "9-18-19",
    "guests": "Bob, steve, Smith, Sam",
    "users_id": 1
}

```

**Response** 200 

======================================================

**GET events with ID** 
method url: **/api/events/:id**

http method: **[GET]**

**Body**

| name       | type    | required | description 
| ---------- | ------  | -------- | ------------------------------------ |
| event_name | String  | No       | Must be unique/ Must be <= 255 char  |
| time       | String  | No       | Must be unique/ Must be <= 255 char  |
| location   | String  | No       | Must be unique/ Must be <= 255 char  |
| dates      | String  | No       | Must be unique/ Must be <= 255 char  |
| guests     | String  | No       | Must be unique/ Must be <= 255 char  |
| users_id   | String  | NO       | Must be unique/ Must be <= 255 char  |



**Example**
```
{
    "id": 9,
    "event_name": "potluck at the park",
    "time": "5:00pm",
    "location": "NYC Center Park",
    "dates": "9-18-19",
    "guests": "Bob, steve, Smith, Sam",
    "users_id": 1
}

```

**Response** 200 

======================================================

**PUT events** 
method url: **/api/events/:id**

http method: **[PUT]**

**Body**

| name       | type    | required | description 
| ---------- | ------  | -------- | ------------------------------------ |
| event_name | String  | No       | Must be unique/ Must be <= 255 char  |
| time       | String  | No       | Must be unique/ Must be <= 255 char  |
| location   | String  | No       | Must be unique/ Must be <= 255 char  |
| dates      | String  | No       | Must be unique/ Must be <= 255 char  |
| guests     | String  | No       | Must be unique/ Must be <= 255 char  |
| users_id   | String  | NO       | Must be unique/ Must be <= 255 char  |



**Example**
```
{
    "id": 9,
    "event_name": "potluck at the park",
    "time": "5:00pm",
    "location": "NYC Center Park",
    "dates": "9-18-19",
    "guests": "Bob, steve, Smith, Sam",
    "users_id": 1
}

```

**Response** 200 

======================================================

**DELETE events** 
method url: **/api/events/:id**

http method: **[DELETE]**

**Body**

| name       | type    | required | description 
| ---------- | ------  | -------- | ------------------------------------ |
| event_name | String  | No       | Must be unique/ Must be <= 255 char  |
| time       | String  | No       | Must be unique/ Must be <= 255 char  |
| location   | String  | No       | Must be unique/ Must be <= 255 char  |
| dates      | String  | No       | Must be unique/ Must be <= 255 char  |
| guests     | String  | No       | Must be unique/ Must be <= 255 char  |
| users_id   | String  | NO       | Must be unique/ Must be <= 255 char  |



**Example**
```
{
    "id": 9,
    "event_name": "potluck at the park",
    "time": "5:00pm",
    "location": "NYC Center Park",
    "dates": "9-18-19",
    "guests": "Bob, steve, Smith, Sam",
    "users_id": 1
}

```

**Response** 200 (event deleted successfully)


========================== FOODS START HERE =============================

**POST foods** 
method url: **/api/foods**

http method: **[POST]**

**Body**

| name       | type    | required | description 
| ---------- | ------  | -------- | ---------------------         |
| food_item  | String  | Yes      |  Must be <= 255 char          |
| events_id  | integer | Yes      |  Must be <= 255 char          |
| completed  | boolean | Yes      |  No requirement in this felid | 

**Example**
```
{
	"food_item": "pizza3",
	"events_id": 1,
  "completed": true 
}

```

**Response** 200 (events was created successfully)

=======================================================

**GET foods** 
method url: **/api/foods**

http method: **[GET]**

**Body**

| name       | type    | required | description 
| ---------- | ------  | -------- | ---------------------------   |
| food_item  | String  | Yes      |  Must be <= 255 char          |
| events_id  | integer | Yes      |  Must be <= 255 char          |
| completed  | boolean | Yes      |  No requirement in this felid | 

**Example**
```
{
	"food_item": "pizza3",
	"events_id": 1, 
  "completed": true 
}

```

**Response** 200 

=======================================================

**PUT foods** 
method url: **/api/foods/:id**

http method: **[PUT]**

**Body**

| name       | type    | required | description 
| ---------- | ------  | -------- | --------------------------    |
| food_item  | String  | Yes      |  Must be <= 255 char          |
| events_id  | integer | Yes      |  Must be <= 255 char          |
| completed  | boolean | Yes      |  No requirement in this felid | 

**Example**
```
{
	"food_item": "pizza3",
	"events_id": 1
  "completed": false 
}

```

**Response** 200 

=======================================================

**DELETE foods** 
method url: **/api/foods/:id**

http method: **[DELETE]**

**Body**

| name       | type    | required | description 
| ---------- | ------  | -------- | ---------------------------   |
| food_item  | String  | Yes      |  Must be <= 255 char          |
| events_id  | integer | Yes      |  Must be <= 255 char          |
| completed  | boolean | Yes      |  No requirement in this felid | 

**Example**
```
{
	"food_item": "pizza3",
	"events_id": 1
  "completed": true 
}

```

**Response** 200 (event deleted successfully )

===============================================

**GET a type of food with events!!** 
method url: **/api/foods/:id/events**

http method: **[GET]**

**Body**         

| name       | type    | required | description 
| ---------- | ------  | -------- | ------------------------------------ |
| event_name | String  | No       | Must be unique/ Must be <= 255 char  |
| time       | String  | No       | Must be unique/ Must be <= 255 char  |
| location   | String  | No       | Must be unique/ Must be <= 255 char  |
| dates      | String  | No       | Must be unique/ Must be <= 255 char  |
| guests     | String  | No       | Must be unique/ Must be <= 255 char  |
| users_id   | String  | NO       | Must be unique/ Must be <= 255 char  |


| name       | type    | required | description 
| ---------- | ------  | -------- | ---------------------------   |
| food_item  | String  | Yes      |  Must be <= 255 char          |
| events_id  | integer | Yes      |  Must be <= 255 char          |
| completed  | boolean | Yes      |  No requirement in this felid |              

**Example**
```

{
  "id": 1,
  "event_name": "Food at NYC park",
  "time": "5:00pm",
  "location": "NYC Center Park",
  "dates": "9-18-19",
  "guests": "Bob, Steve, Smith, Sam",
  "users_id": 1,
  "food": [
    {
      "id": 1,
      "food_item": "pizza",
      "events_id": 1, 
      "completed": false
    }
  ]
}


```

**Response** 200 

1) Design State of the App (what slices of state is needed)


2) Design the types of actions the state might suffer
3) Create one reducer function per slice of state
4) Combine all reducers
5) use create store to create redux store
6) inject the redux store into the app
7) design action creators
8) export
9) plug