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
| icon   |                 null      | It can be a single emoji or an array of emojis to use instead of the default stars

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

### Using custom icons

```javascript
// The below will generate 5 emojis
stary.show({ number: 5, size: 20, icon: '💩' });

// The below will show the emojis in the array order 
stary.show({ number: 5, size: 20, icon: ['☹️', '🙁', '😐', '🙂', '😃'] });


```

-----

### Using callbacks and getting updated rate real time in React

It's possible to use a callback when calling the init function.
It will be called everytime a star is clicked.

in the example below the callback is used to keep track of the current rating without having to call getRate multiple times.

```javascript
import stary from 'stary';

function MyComponent() {
  // set the initial rate state with the useState hook
  const [rate, setRate] = useState(stary.getRate());

  // initialize the star ratings with setRate as the callback
  useEffect(() => {
    document.getElementById('stars').innerHTML = stary.show({ color: '#ffc600' });
    stary.init(setRate);
  }, []);

  return (
    <div>    
      <p>Current rating: {rate}</p>
      <div id="stars"></div>
      ...
```

-----