# Custom Utils Library

This library provides utility functions for `String` and `Number` object manipulations.

## Importing

You can import the utility functions as follows:

```typescript
import {NumberUtils} from '@georgestav/javascript-utilities';
import {StringUtils} from '@georgestav/javascript-utilities';
import {DateUtils} from '@georgestav/javascript-utilities';
```

## Usage

After importing the functions, you can use them like this:

```typescript
let str = "hello world";
let result = StringUtils.capitalizeFirstLetter(str); // Results in 'Hello world'

let num = 5;
let isEven = NumberUtils.isEven(num); // Results in false
```

You can also use the prototype methods directly on string or number instances:

```typescript
let str = "hello world";
str = str.capitalizeFirstLetter(); // Transforms str to 'Hello world'

let num = 5;
let isEven = num.isEven(); // Results in false
```

## String Utils class

### Instance Methods

| Method                  | Description                                                         |
|-------------------------|---------------------------------------------------------------------|
| `capitalizeFirstLetter` | Capitalizes the first letter of the string.                         |
| `sanitize`              | Removes special characters and formats the string.                  |
| `isEmpty`               | Checks if the string is empty or contains only whitespace.          |
| `reverse`               | Reverses the string.                                                |
| `truncate`              | Truncates the string to a specified length.                         |
| `wordCount`             | Counts the number of words in the string.                           |
| `toValue`               | Returns the primitive string value of the instance.                 |
| `equals`                | Compares the instance string to another string for equality.        |
| `compareTo`             | Lexicographically compares the instance string with another string. |
| `startsWith`            | Checks if the instance string starts with a given prefix.           |
| `endsWith`              | Checks if the instance string ends with a given suffix.             |

### Static Methods

| Method                   | Description                                                          |
|--------------------------|----------------------------------------------------------------------|
| `capitalizeFirstLetter`  | Capacitilize the first letter of any string.                         |
| `sanitize`               | Removes special characters and spaces, returning a sanitized string. |
| `isEmpty` / `isNotEmpty` | Check if a string is empty or not.                                   |
| `toCamelCase`            | Converts a string to camelCase.                                      |
| `toKebabCase`            | Converts a string to kebab-case.                                     |
| `removeSpaces`           | Removes all spaces from a string.                                    |
| `truncate`               | Truncates a string to a specified length.                            |
| `reverse`                | Reverses a string completely.                                        |
| `wordCount`              | Counts the number of detected words within a string.                 |
| `isAlphanumeric`         | Checks if a string contains only alphanumeric characters.            |
| `equals`                 | Compares if two strings are equal, optionally case-insensitively.    |
| `compareTo`              | Lexicographically compares two strings.                              |
| `startsWith`             | Checks if a string starts with a given prefix.                       |
| `endsWith`               | Checks if a string ends with a given suffix.                         |

## NumberUtils Class

NumberUtils is a utility class providing numeric operations and helper methods.

### Static Methods

| Method   | Description                                                 |
|----------|-------------------------------------------------------------|
| `isEven` | Checks if a number is even.                                 |
| `max`    | Compares number to a given number and returns the biggest.  |
| `min`    | Compares number to a given number and returns the smallest. |

## DateUtils Class

The `DateUtils` class provides utility functions for working with `Date` objects.

### Static Methods

| Method                                        | Description                                                               |
|-----------------------------------------------|---------------------------------------------------------------------------|
| `addDays(date, days)`                         | Adds a specified number of days to a date and returns the resulting date. |
| `subtractDays(date, days)`                    | Subtracts a specified number of days from a date.                         |
| `getFirstDayOfMonth(date)`                    | Returns the first day of the month for the given date.                    |
| `getLastDayOfMonth(date)`                     | Returns the last day of the month for the given date.                     |
| `getFirstHourOfDay(date)`                     | Returns a new `Date` object set to the beginning of the given day.        |
| `getLastHourOfDay(date)`                      | Returns a new `Date` object set to the end of the given day.              |
| `isWithinDateRange(date, startDate, endDate)` | Checks if a date is within a specified date range.                        |
| `addSeconds(date, seconds)`                   | Adds the specified number of seconds to the given date.                   |
| `subtractSeconds(date, seconds)`              | Subtracts the specified number of seconds from the given date.            |
| `isAfter(date, comparisonDate)`               | Checks if the first date is after the second date.                        |
| `isBefore(date, comparisonDate)`              | Checks if the first date is before the second date.                       |
| `isEqual(date1, date2)`                       | Compares two dates for equality.                                          |

### Instance Methods

By extending the `Date` prototype, you can call these methods directly on `Date` instances:

| Method                                  | Description                                                           |
|-----------------------------------------|-----------------------------------------------------------------------|
| `addDays(days)`                         | Adds a specified number of days to the current date.                  |
| `subtractDays(days)`                    | Subtracts a specified number of days from the current date.           |
| `getFirstDayOfMonth()`                  | Returns the first day of the month for the current date.              |
| `getLastDayOfMonth()`                   | Returns the last day of the month for the current date.               |
| `getFirstHourOfDay()`                   | Returns the first hour of the current day.                            |
| `getLastHourOfDay()`                    | Returns the last hour of the current day.                             |
| `isWithinDateRange(startDate, endDate)` | Checks if the current date is within a specific date range.           |
| `addSeconds(seconds)`                   | Adds the specified number of seconds to the current date.             |
| `subtractSeconds(seconds)`              | Subtracts the specified number of seconds from the current date.      |
| `isAfter(comparisonDate)`               | Checks if the current date is after the specified comparison date.    |
| `isBefore(comparisonDate)`              | Checks if the current date is before the specified comparison date.   |
| `isEqual(comparisonDate)`               | Checks if the current date is equal to the specified comparison date. |

## Contributing

Contributions are welcomed! Whether it's improving existing methods, fixing bugs, or suggesting new utilities, feel free
to:

1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request!

Please ensure all contributions follow the coding standards and include appropriate test coverage.

## License

This library is licensed under the **MIT License**. See the [LICENSE]() file for details.

## Feedback

If you have suggestions, questions, or issues, feel free to report them on the [GitHub Issues]() page.
