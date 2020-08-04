# Survey UI

React JS project that uses react redux, react router, [TailwindCSS](https://tailwindcss.com/), axios

**Live demo** Hosted on heroku
[https://lyubo-survey-ui.herokuapp.com/](https://lyubo-survey-ui.herokuapp.com/)

## Project dependency

[Project Backend](https://github.com/lyubo-velikoff/survey-backend) - using nodejs express, express-validator, sequelize, postgres, jest, supertest


## Project sections

- [How to install](#Install)
- [Start](#Start)
- [List of pages](#Pages)
- [Redux overview](#Redux)
- [TailwindCSS overview](#Tailwind)

## Install

```
npm install
```

## Start

```
npm start
```

## Pages

**Available pages**

- Home /
- Login /login
- Manage /manage
- Reports /reports
- Notfound /any/page/404

## Redux

**Actions and reducers**
- Answer
- Question
- Report
- General

To check a list of actions and reducers check out **./src/store/**

## Tailwind

Currently it's default tailwind css with only 1 color addition "dark"

```
{
    ...,
    theme: {
        ...,
        colors: {
            ...,
            dark: '#181818',
        }
    },
    ...,
}
```

To configure tailwind styles / themes / breakpoints check out **tailwind.config.js**