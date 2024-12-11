# Custom Utils Library

This library provides utility functions for `String` and `Number` object manipulations.

## Importing

You can import the utility functions as follows:

```typescript
import { NumberUtils } from '@georgestav/javascript-utilities';
import { StringUtils } from '@georgestav/javascript-utilities';
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

## Full Methods List
### Instance Methods

| Method | Description |
| --- | --- |
| `capitalizeFirstLetter` | Capitalizes the first letter of the string. |
| `sanitize` | Removes special characters and formats the string. |
| `isEmpty` | Checks if the string is empty or contains only whitespace. |
| `reverse` | Reverses the string. |
| `truncate` | Truncates the string to a specified length. |
| `wordCount` | Counts the number of words in the string. |
| `toValue` | Returns the primitive string value of the instance. |
| `equals` | Compares the instance string to another string for equality. |
| `compareTo` | Lexicographically compares the instance string with another string. |
| `startsWith` | Checks if the instance string starts with a given prefix. |
| `endsWith` | Checks if the instance string ends with a given suffix. |
### Static Methods

| Method | Description |
| --- | --- |
| `capitalizeFirstLetter` | Capacitilize the first letter of any string. |
| `sanitize` | Removes special characters and spaces, returning a sanitized string. |
| `isEmpty` / `isNotEmpty` | Check if a string is empty or not. |
| `toCamelCase` | Converts a string to camelCase. |
| `toKebabCase` | Converts a string to kebab-case. |
| `removeSpaces` | Removes all spaces from a string. |
| `truncate` | Truncates a string to a specified length. |
| `reverse` | Reverses a string completely. |
| `wordCount` | Counts the number of detected words within a string. |
| `isAlphanumeric` | Checks if a string contains only alphanumeric characters. |
| `equals` | Compares if two strings are equal, optionally case-insensitively. |
| `compareTo` | Lexicographically compares two strings. |
| `startsWith` | Checks if a string starts with a given prefix. |
| `endsWith` | Checks if a string ends with a given suffix. |

## NumberUtils Class
NumberUtils is a utility class providing numeric operations and helper methods.

### Static Methods

| Method | Description |
| --- | --- |
| `isEven` | Checks if a number is even. |
| `isOdd` | Checks if a number is odd. |
| `clamp` | Clamps a number within a specified range. |
| `toFixed` | Rounds a number to a specified decimal place and returns a string. |
| `random` | Returns a random number between a specified range (inclusive). |
| `toPercentage` | Converts a number to a percentage string. |
| `factorial` | Computes the factorial of a non-negative integer. |
| `isPrime` | Checks if a number is a prime number. |

## Contributing
Contributions are welcomed! Whether it's improving existing methods, fixing bugs, or suggesting new utilities, feel free to:
1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request!

Please ensure all contributions follow the coding standards and include appropriate test coverage.
## License
This library is licensed under the **MIT License**. See the [LICENSE]() file for details.
## Feedback
If you have suggestions, questions, or issues, feel free to report them on the [GitHub Issues]() page.
