## Commands

`stary.show(config)` - returns Html content for stars

`stary.init()` - enables rate change on clicking on a star

`stary.getRate()` -  gets current rate as an integer number

-----

## Config options

| Name   | Default Value             | Description                |
|--------|:--------------------------|:---------------------------|
| number |                 5         | max number of stars/rating |
| size   |                 25        | width in pixels of each star |
| rating |                 0         | initial rating |
| color  |                 '#000000' | color of each star, any valid CSS color  |
| margin |                 2         | side margin of each star in pixels |
| hover  |                 true      | highlight stars on hover |

-----

## Usage

```javascript
import stary from 'stary';

const starsContainer = document.getElementById('stars');

// include stary in the DOM
starsContainer.innerHTML = stary.show({ number: 5, size: 20, color: '#ffc600' });

// add click events to your stars
stary.init();

// get current rate
let rate = stary.getRate();
```

-----