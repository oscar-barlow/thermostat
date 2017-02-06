# Thermostat

## Brief
Make a single-page app in Javascript that allows you to 'control' the
room temperature, and uses the OpenWeather API to show ambient temperature in
a city of your choosing. If you enter high-usage mode, the temperature displays
in red; if you're in low-usage mode, it goes to a dark green.

This app was written in 4 days with no prior knowledge of JavaScript.

## How to Install
Clone this repository to your local machine. All dependencies should be
included, and no further setup needed.

## Getting Started
Open `thermostat.html` in your browser. Common-sense thermostat controls are
visible on the page.

## Approach
The app was TDD'd using [Jasmine](https://jasmine.github.io/). To run tests,
open `SpecRunner.html` in your browser.

The thermostat app consists of one class: the `Thermostat` class, which is
responsible for:

* Holding data about its current temperature;
* Holding data about whether or not energy-saving mode is on;

The class is constructed using the constructor/prototype pattern. It has
methods for returning and updating its temperature and turning energy saving
mode on and off.

To get temperature from the OpenWeather API without refreshing the page, an
AJAX request is made using jQuery. jQuery has also been used to asynchronously
update the class of the temperature display and so change the text colour.

To avoid using 'magic numbers', several constants have been declared in the
class so that it would be clear to a future developer, e.g.

```javascript
const MAXIMUM_TEMPERATURE = 32;
```

## Future Development
As mentioned, this app consists of one sole class at present. It is reasonable
to keep the data and functions related to temperature management in the
thermostat class; however, it would be a sensible refactor to split the city
temperature into a separate class.

Additionally, jQuery is not really justified for the two minor functions for
which it is used in this app. Using vanilla JavaScript to make the OpenWeather
API request and change display text class would be slightly better.
