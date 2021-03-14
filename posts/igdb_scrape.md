# Using Data from Twitch and Amazon to Populate a DB for a Video Game Review Site Project

## intro

- given vague brief to create video game review site
- assumed i could pull data from api and would take an hour
- i was wrong it took a lot longer

## signing up to idgb

- chose twitch api as the license suited the project
- getting client credentials proved difficult because of a silly mistake

## getting auth token

- never used oAuth before
- created a fetch request tha got token

## getting data from api

- api didn't work quite how i expected
- had to use query language to get all the info in one request
- getting the video games i wanted was a little tricky

## wrangling the data

- changing image urls
- not all fields returned data
- selecting the data we needed

## add the reviews

- found a collection of scraped reviews from amazon
- file was json but separated by line
- used multi caret to add commas
- used randomness to populate

## populating the db

- created a schema
- connect the db
- run
