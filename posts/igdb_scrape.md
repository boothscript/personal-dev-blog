# Using Data from Twitch and Amazon to Populate a DB for a Video Game Review Site Project

For our latest group assignment we were tasked with creating a game review site in just 3 days. The vague brief and tight timeline were designed to give us a taste of the poorly defined projects often found in the "real world".

As the group began to write the specification for the full stack MERN app, it was clear we would need a good amount of dummy data to show the app in all of its glory when presentation time came along. As the shape of the data would infer the collection model as well as the front end components this was a high priority task which I took on. My plan was a simple one, to find an api that served up video game data and fetch a suitable enough amount of data fo us to use in our app. I estimated it would take me less than an hour to have the data ready to populate our db. I would soon learn that this was a gross underestimate.

## Signing up to IGDB

A quick google lead me to Twitch's video game database, IGDB. It ws a vast collection of titles and data and combined with a generous usage policy, I didn't look any further. In order to use the service I would need a Twitch account to generate a Client ID and a Client Secret.

Unfortunately I made this a lot harder than it needed to be. When creating a Client Secret I was asked to provide an OAuth Redirect URL. It stated below the field that for local testing I could use `http://localhost` but unfortunately when I copied and pasted the url I unknowingly included a leading space which resulting in the form validation telling me I couldn't use localhost as a url.

After a good of hour of going round the houses on the twitch dev forums and even contemplating building the necessary endpoint I finally realized my mistake and could move on :-). I won't be making that mistake any time soon. Also note to future self: make sure you trim all whitespace before input validation.

## Fetching an oAuth Token

After finally getting my credentials, fetching an access token was much easier. I installed node-fetch and dotenev and added my `CLIENT_ID` and `CLIENT_SECRET` to my `.env`.

```bash
$ npm i node-fetch dotenv
```

```javascript
// dummyDataCreator.js
const fetch = require("fetch-node");
require(dotenv).config();
```

I then sent a request to Twitch's oAuth token endpoint as specified in the IGDB docs.

```javascript
// dummyDataCreator.js
const getAuthToken = async () => {
  const baseurl = "https://id.twitch.tv/oauth2/";
  const endpoint = "token";
  const query = `?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=client_credentials`;
  const url = baseurl + endpoint + query;
  return await fetch(url, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => data.access_token)
    .catch((err) => {
      throw new Error(`Unable to get auth token from twitch: ${err}`);
    });
};
```

## Getting Data from the API

When starting to query the api, I made the mistake of assuming that this api would be like all the others I had previously come across. At the time of writing I now realized if I had just read the docs from the start I could of avoided a lot of head scratching.

The api expects the queries to be placed in the body of a POST request. Also all fields must be specified to be returned. This can be done with a wildcard to get back all fields, but this did stump me for while.

```javascript
// example request
fetch("https://api.igdb.com/v4/games", {
  method: "Post",
  headers: {
    "Client-ID": clientId,
    Authorization: `Bearer ${authToken}`,
    Accept: "application/json",
  },
  body: `fields name,rating,summary; limit 3;`,
});
```

```javascript
// returns json:
[
  { id: 70, name: "Terra Nova: Strike Force Centauri", rating: 70 },
  { id: 40104, name: "Dogou Souken" },
  { id: 51663, name: "The Firemen 2: Pete & Danny" },
];
```

As you can see, not every game has all fields meaning the second and third objects do not have a `rating` property.

## wrangling the data

After the data was pulled from api I rebuilt the each game object, pruning unnecessary properties and editing others. Img urls were modified to point to the necessary optimized images. As not all fields were guaranteed to be returned, I used optional chaining when access the game properties.

```javascript
// building the object
.then((data) =>
    data.map((game) => {
      return {
        ...game,
        cover: reformatImgUrl(game.cover?.url, "t_cover_big"),
        screenshots: game.screenshots?.map((shot) =>
          reformatImgUrl(shot.url, "t_screenshot_big")
        ),
        genres: game.genres?.map((genre) => genre.name),
        involved_companies: game.involved_companies?.map(
          (company) => company.company.name
        ),
        release_dates: game.release_dates?.map((release) => ({
          timestamp: release.date,
          human: release.human,
        })),
      };
    })
  )
```

<!-- I don't think i need to include this...
```javascript
// before (135 lines)
{
    "id": 117,
    "cover": {
      "id": 102434,
      "url": "//images.igdb.com/igdb/image/upload/t_thumb/co271e.jpg"
    },
    "follows": 220,
    "genres": [
      {
        "id": 8,
        "name": "Platform"
      },
      {
        "id": 9,
        "name": "Puzzle"
      },
      {
        "id": 31,
        "name": "Adventure"
      }
    ],
    "hypes": 63,
    "involved_companies": [
      {
        "id": 36389,
        "company": {
          "id": 44,
          "name": "Team Ico"
        }
      },
      {
        "id": 39363,
        "company": {
          "id": 10100,
          "name": "Sony Interactive Entertainment"
        }
      },
      {
        "id": 51596,
        "company": {
          "id": 10692,
          "name": "SIE Japan Studio"
        }
      },
      {
        "id": 51597,
        "company": {
          "id": 13071,
          "name": "genDESIGN"
        }
      }
    ],
    "name": "The Last Guardian",
    "rating": 84.3076635623741,
    "release_dates": [
      {
        "id": 88630,
        "category": 0,
        "created_at": 1499040000,
        "date": 1481068800,
        "game": 117,
        "human": "Dec 07, 2016",
        "m": 12,
        "platform": 48,
        "region": 3,
        "updated_at": 1499040000,
        "y": 2016,
        "checksum": "1e09e7a1-1a6a-e20b-b979-18c123c5ddff"
      },
      {
        "id": 88631,
        "category": 0,
        "created_at": 1499040000,
        "date": 1480982400,
        "game": 117,
        "human": "Dec 06, 2016",
        "m": 12,
        "platform": 48,
        "region": 5,
        "updated_at": 1499040000,
        "y": 2016,
        "checksum": "8ea8db7b-fd8a-67bb-05a0-62efb9700a4a"
      },
      {
        "id": 106239,
        "category": 0,
        "created_at": 1501718400,
        "date": 1481241600,
        "game": 117,
        "human": "Dec 09, 2016",
        "m": 12,
        "platform": 48,
        "region": 1,
        "updated_at": 1501804800,
        "y": 2016,
        "checksum": "1f0920c9-14a0-8ebd-b75c-dd0c5598126e"
      },
      {
        "id": 106240,
        "category": 0,
        "created_at": 1501718400,
        "date": 1480982400,
        "game": 117,
        "human": "Dec 06, 2016",
        "m": 12,
        "platform": 48,
        "region": 2,
        "updated_at": 1501804800,
        "y": 2016,
        "checksum": "8d53f2f7-68aa-3ba4-8052-04183d8032ab"
      }
    ],
    "screenshots": [
      {
        "id": 10723,
        "url": "//images.igdb.com/igdb/image/upload/t_thumb/bho8tfo2pdgujp4ttqt7.jpg"
      },
      {
        "id": 10724,
        "url": "//images.igdb.com/igdb/image/upload/t_thumb/cum87g1wfqatilogse9w.jpg"
      },
      {
        "id": 10725,
        "url": "//images.igdb.com/igdb/image/upload/t_thumb/areqpejmeyztpfljmvhe.jpg"
      },
      {
        "id": 10726,
        "url": "//images.igdb.com/igdb/image/upload/t_thumb/lfwn1xpd9sronyfh5mor.jpg"
      },
      {
        "id": 10727,
        "url": "//images.igdb.com/igdb/image/upload/t_thumb/r6u7mvvwsgclnp4dasba.jpg"
      }
    ],
    "summary": "In a strange and mystical land, a young boy discovers a mysterious creature with which he forms a deep, unbreakable bond. The unlikely pair must rely on each other to journey through towering, treacherous ruins filled with unknown dangers. Experience the journey of a lifetime in this touching, emotional story of friendship and trust."
  },
```

```javascript
// after (44 lines)
{
    "id": 117,
    "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co271e.jpg",
    "follows": 220,
    "genres": [
      "Platform",
      "Puzzle",
      "Adventure"
    ],
    "hypes": 63,
    "involved_companies": [
      "Team Ico",
      "Sony Interactive Entertainment",
      "SIE Japan Studio",
      "genDESIGN"
    ],
    "name": "The Last Guardian",
    "rating": 84.3076635623741,
    "release_dates": [
      {
        "timestamp": 1481068800,
        "human": "Dec 07, 2016"
      },
      {
        "timestamp": 1480982400,
        "human": "Dec 06, 2016"
      },
      {
        "timestamp": 1481241600,
        "human": "Dec 09, 2016"
      },
      {
        "timestamp": 1480982400,
        "human": "Dec 06, 2016"
      }
    ],
    "screenshots": [
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/bho8tfo2pdgujp4ttqt7.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/cum87g1wfqatilogse9w.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/areqpejmeyztpfljmvhe.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/lfwn1xpd9sronyfh5mor.jpg",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/r6u7mvvwsgclnp4dasba.jpg"
    ],
    "summary": "In a strange and mystical land, a young boy discovers a mysterious creature with which he forms a deep, unbreakable bond. The unlikely pair must rely on each other to journey through towering, treacherous ruins filled with unknown dangers. Experience the journey of a lifetime in this touching, emotional story of friendship and trust."
  },
``` -->

## Adding Reviews

When creating the components to leave a review, I wanted to add some review data purely for demo purposes. In reality reviews would be its own service with CRUD endpoints but due to time restrictions this wasn't possible.

To get the dummy data I found a university's repo of scraped amazon reviews. I then used a `Math.random` to add reviews to each video game object.

```javascript
const insertDummyReviews = () => {
  try {
    const numberOfReviews = Math.floor(Math.random() * 20 + 1);
    const reviewList = [];
    let i = 0;
    while (i < numberOfReviews) {
      reviewList.push(
        dummyReviews[Math.floor(Math.random() * dummyReviews.length)]
      );
      i++;
    }
  } catch (err) {
    throw new Error(`Unable to insert Dummy Review Data: ${err}`);
  }

  return reviewList;
};
```

## Populating the Database

With the data created all that was left to do was to populate the db. We were using Mongo Atlas to store the data and mongoose to connect to it. I was using mongoose and Atlas for the first time and they were both intuitive to use. After configuring the access options in Atlas I built a schema for the data.

```javascript
const mongoose = require("mongoose");

const Game = new mongoose.Schema({
  id: { type: String, required: true },
  cover: String,
  genres: [{ type: String }],
  involved_companies: [{ type: String }],
  name: String,
  rating: Number,
  release_dates: [{ timestamp: Number, human: String }],
  screenshots: [{ type: String }],
  summary: String,
  reviews: Array,
});

module.exports = mongoose.model("games", Game);
```

## Conclusion

This certainly isn't the first time I underestimated a task and the nature of the project did make me wonder if my time could be spent better else where. That being said that, once I was able to overcome the initial hurdles I was able to achieve my goals and learn something in the process. Knowing that apis can range in complexity will alow me to better estimate future tasks although as my experience grows I would like to think it would become less a problem.

Oh look, there I go again... Perhaps I haven't learned anything at all. 🤷‍♂️

```javascript
// dummyDataCreator.js

const fs = require("fs");
const fetch = require("node-fetch");
require("dotenv").config();

const getVideoGames = async (numberOfEntries = 20, options) => {
  const baseurl = "https://api.igdb.com/v4/";
  const endpoint = "games";
  const url = baseurl + endpoint;
  console.log(`Fetching video game data from endpoint: ${url}`);
  const data = await fetch(url, {
    method: "POST",
    headers: {
      "Client-ID": process.env.CLIENT_ID,
      Authorization: `Bearer ${await getAuthToken()}`,
      Accept: "application/json",
    },
    body: `fields name,rating,cover.url,follows,hypes,genres.name,screenshots.url,summary,involved_companies.company.name,release_dates.*;where release_dates.platform = 48 & hypes > 20;limit ${numberOfEntries};`,
  })
    .then((res) => res.json())
    .then((data) =>
      data.map((game) => {
        return {
          ...game,
          cover: reformatImgUrl(game.cover?.url, "t_cover_big"),
          screenshots: game.screenshots?.map((shot) =>
            reformatImgUrl(shot.url, "t_screenshot_big")
          ),
          genres: game.genres?.map((genre) => genre.name),
          involved_companies: game.involved_companies?.map(
            (company) => company.company.name
          ),
          release_dates: game.release_dates?.map((release) => ({
            timestamp: release.date,
            human: release.human,
          })),
          reviews: options?.dummyReviews
            ? insertDummyReviews(options?.dummyReviews)
            : null,
        };
      })
    )
    .catch((err) => {
      throw new Error(`Unable to get video game data: ${err}`);
    });

  return data;
};

const getAuthToken = async () => {
  const baseurl = "https://id.twitch.tv/oauth2/";
  const endpoint = "token";
  const query = `?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=client_credentials`;
  const url = baseurl + endpoint + query;
  return await fetch(url, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => data.access_token)
    .catch((err) => {
      throw new Error(`Unable to get auth token from twitch: ${err}`);
    });
};

const reformatImgUrl = (url, to, from = "t_thumb") => {
  if (!url) return null;
  return "https:" + url.replace(from, to);
};

const insertDummyReviews = () => {
  try {
    const numberOfReviews = Math.floor(Math.random() * 20 + 1);
    const reviewList = [];
    let i = 0;
    while (i < numberOfReviews) {
      reviewList.push(
        dummyReviews[Math.floor(Math.random() * dummyReviews.length)]
      );
      i++;
    }
  } catch (err) {
    throw new Error(`Unable to insert Dummy Review Data: ${err}`);
  }

  return reviewList;
};

module.exports = { getVideoGame };
```
