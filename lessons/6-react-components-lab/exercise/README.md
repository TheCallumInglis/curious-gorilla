# ![React Components Lab - Exercise](./assets/hero.png)

## Overview

In this lab, you'll build a weather forecast page that **re-uses a single component** to display multiple days' worth of weather forecasts. You will only need to work with two components to complete this exercise, `src/App.jsx` and `src/WeatherForecast.jsx`. The `<App/>` component will act as our root, while the `<WeatherForecast />` component will be used within `src/App.jsx` to dynamically generate a list of forecasts.

Your app should adhere to the following component hierarchy diagram:

<br>

![Component hierarchy diagram](./assets/chd-core.png)

> 💡 When content is dynamically generated, we only include the component being 'duplicated' **once** in a component hierarchy diagram.

## Starter code

First we'll need some weather data. Copy the following `weatherForecasts` array into your `src/App.jsx` file:

```js
const weatherForecasts = [
  {
    day: 'Mon',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];
```

## WeatherForecast HTML

Each instance of the `WeatherForecast` component should have the JSX equivalent of the following HTML structure:

```html
<div className="weather">
  <h2>Day of the Week</h2>
  <img src="" alt="" />
  <p><span>conditions: </span>current weather conditions</p>
  <p><span>time: </span>time of day</p>
</div>
```

## App.jsx starter code

At the `App.jsx` level, add a `<section>` tag that will surround all of the `WeatherForecast` elements. We'll need it for the CSS.

```jsx
<>
  <h1>Local Weather</h1>
  <section>
    // Weather data here
  </section>
</>
```

## WeatherForecast starter CSS

Create a `WeatherForecast.css` file and add the following style rules to it:

```css
section {
  display: flex;
}

section .weather {
  border: 1px solid #ccc;
  flex: 1;
  padding: 10px;
  text-align: center;
}

.weather span {
  font-weight: bold;
}
```

> Be sure to import this stylesheet at the top of your `WeatherForecast` component file!

## Main Objective

In this lab, you will create a new React app that displays a series of `WeatherForecast` components, which will be used to display each forecast.

## Level Up

React components can almost always be broken down into even smaller, more modular components!

Try creating the following additional components:

- `WeatherIcon` - contains only the `<img>`
- `WeatherData` - contains both the day, conditions, and time

This version would have the following component tree:

<br>

![Component hierarchy diagram](./assets/chd-level-up.png)
