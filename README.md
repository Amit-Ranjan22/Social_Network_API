# 🧮 Social_Network_API

## ✍️ User Story

---

```md
AS A social media startup
I WANT: an API for my social network
that uses a NoSQL database
SO THAT: my website can handle large
amounts of unstructured data.
```

## 🤝 Acceptance Criteria

```md
GIVEN a social network API
WHEN: I enter the command to invoke the application
THEN: my server is started and the Mongoose models are synced to the MongoDB database
WHEN: I open API GET routes in Insomnia for users and thoughts
THEN: the data for each of these routes is displayed in a formatted JSON
WHEN: I test API POST, PUT, and DELETE routes in Insomnia
THEN: I am able to successfully create, update, and delete users and thoughts in my database
WHEN: I test API POST and DELETE routes in Insomnia
THEN: I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## 🖼️ Mock Up

The following animations show examples of the application's API routes being tested in Insomnia.

The following animation shows GET routes to return all users and all thoughts being tested in Insomnia:

![Demo of GET routes to return all users and all thoughts being tested in Insomnia.](./Assets/18-nosql-homework-demo-01.gif)

The following animation shows GET routes to return a single user and a single thought being tested in Insomnia:

![Demo that shows GET routes to return a single user and a single thought being tested in Insomnia.](./Assets/18-nosql-homework-demo-02.gif)

The following animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia:

![Demo that shows the POST, PUT, and DELETE routes for users being tested in Insomnia.](./Assets/18-nosql-homework-demo-03.gif)

The following animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:

![Demo that shows the POST and DELETE routes for a user’s friend list being tested in Insomnia.](./Assets/18-nosql-homework-demo-04.gif)

## Bonus Feature

As a bonus feature, this application deletes a user's associated thoughts when the user is deleted.

## 🏃‍♂️ Getting Started

Have MongoDB installed on your machine. Use the [MongoDB installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb) to install MongoDB locally.

Use the following guidelines to set up your models and API routes:

### Models

**User**:

- `username`

  - String
  - Unique
  - Required
  - Trimmed

- `email`

  - String
  - Required
  - Unique
  - Must match a valid email address (look into Mongoose's matching validation)

- `thoughts`

  - Array of `_id` values referencing the `Thought` model

- `friends`
  - Array of `_id` values referencing the `User` model (self-reference)

**Schema Settings**:

Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.

---

**Thought**:

- `thoughtText`

  - String
  - Required
  - Must be between 1 and 280 characters

- `createdAt`

  - Date
  - Set default value to the current timestamp
  - Use a getter method to format the timestamp on query

- `username` (The user that created this thought)

  - String
  - Required

- `reactions` (These are like replies)
  - Array of nested documents created with the `reactionSchema`

**Schema Settings**:

Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

---

**Reaction** (SCHEMA ONLY)

- `reactionId`

  - Use Mongoose's ObjectId data type
  - Default value is set to a new ObjectId

- `reactionBody`

  - String
  - Required
  - 280 character maximum

- `username`

  - String
  - Required

- `createdAt`
  - Date
  - Set default value to the current timestamp
  - Use a getter method to format the timestamp on query

**Schema Settings**:

This is not a model, but rather used as the `reaction` field's sub-document schema in the `Thought` model.

### API Routes

**`/api/users`**

- `GET` all users

- `GET` a single user by its `_id` and populated thought and friend data

- `POST` a new user:

```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

- `PUT` to update a user by its `_id`

- `DELETE` to remove user by its `_id`

**`/api/users/:userId/friends/:friendId`**

- `POST` to add a new friend to a user's friend list

- `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

- `GET` to get all thoughts

- `GET` to get a single thought by its `_id`

- `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

- `PUT` to update a thought by its `_id`

- `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

- `POST` to create a reaction stored in a single thought's `reactions` array field

- `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

## 🖼️ Gif from Insomnia Core for the created application

The following animations show examples of the application's API routes being tested in Insomnia.

![Demo of routes to return all users, update user, add a friend and delete a friend all being tested in Insomnia.](./Assets/social-network-api-part1.gif)

![Demo of routes to create thought, get all thoughts, update thought, delete thought, add reaction & delete a user, all being tested in Insomnia.](./Assets/social-network-api-part2.gif)

## 🧪 Tests

---

```
There are no test used for this application.
```

---

## 💾 Installation & Usage

---

To install this application, clone the repository to your local directory by using following link:

- https://github.com/Amit-Ranjan22/Social_Network_API.git

Once downloaded, you can install its dependencies by navigating to the
Social_Network_API directory on your local machine and issuing the following command:

- npm install

This command will install the following dependencies:

- express
- mongoose

After installing all the dependencies, from your terminal, run the following command:

- npm start

Now you can go to the Insomnia core to test all the routes.

---

## 🔌 Link to the walk-through video of the application on Insomnia

- Google Drive Link to Part-1 of the walk-through video : [Social_Network_API
  ](https://drive.google.com/file/d/1BYiqIjsq2ycQQeIx7pjTTOeMVfWwpbil/view)

- Google Drive Link to Part-2 of the walk-through video : [Social_Network_API
  ](https://drive.google.com/file/d/1tnZUx5DtN2dlRrt22QEQ23XMNEfCroxL/view)

---

## 🔌 Link to the Git-Hub repository

---

- GitHub Link: [
  Social_Network_API](https://github.com/Amit-Ranjan22/Social_Network_API.git)

---

<h2 id='contribution'>🧑‍🤝‍🧑 Contribution</h2>

    Amitabh Ranjan

---

<h2 id='questions'>❓ Questions</h2>

<h3>For any question you can reach me at:</h3>

---

<h3>😺GitHub: <a href='https://github.com/Amit-Ranjan22'>Amit-Ranjan22</a></h3>

<h3>📩 Email: <a href='https://mail.google.com/'>amitabh.march22@gmail</a></h3>

---

## ©️ License & Copyright

Licensed under the [MIT License](License-Copyright/LICENSE).
