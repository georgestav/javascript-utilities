import {DateUtils} from "./DateUtils";

export * from "./DateUtils";

declare global {
    interface Date {
        /**
         * Adds the specified number of days to the current date and returns the resulting date.
         *
         * @param {number} days - The number of days to add to the current date. Can be a positive or negative value.
         * @return {Date} The new date after adding the specified number of days.
         */
        addDays(days: number): Date;

        /**
         * Subtracts a specified number of days from the current date instance.
         *
         * @param {number} days - The number of days to subtract.
         * @return {Date} A new Date object reflecting the updated date after the subtraction.
         */
        subtractDays(days: number): Date;

        /**
         * Returns the first day of the current month as a Date object.
         *
         * @return {Date} The first day of the current month.
         */
        getFirstDayOfMonth(): Date;

        /**
         * Returns the last day of the current month as a Date object.
         * The method calculates the last day based on the current date and time.
         *
         * @return {Date} The last day of the month.
         */
        getLastDayOfMonth(): Date;

        /**
         * Retrieves the first hour of the current day as a Date object.
         *
         * @return {Date} A Date object representing the first hour (00:00:00) of the current day.
         */
        getFirstHourOfDay(): Date;

        /**
         * Returns the last hour (23:00) of the current day as a Date object.
         *
         * @return {Date} The Date object representing the last hour of the current day.
         */
        getLastHourOfDay(): Date;

        /**
         * Checks if the current date falls within a specified start and end date range.
         *
         * @param {Date} startDate - The starting date of the range.
         * @param {Date} endDate - The ending date of the range.
         * @return {boolean} Returns true if the current date is within the given date range, otherwise false.
         */
        isWithinDateRange(startDate: Date, endDate: Date): boolean;

        /**
         * Adds the specified number of seconds to the current date and time.
         *
         * @param {number} seconds - The number of seconds to add. Can be positive or negative.
         * @return {Date} A new Date object with the added seconds applied.
         */
        addSeconds(seconds: number): Date;

        /**
         * Subtracts the specified number of seconds from the current date and time.
         *
         * @param {number} seconds - The number of seconds to subtract.
         * @return {Date} The new date and time after subtracting the specified seconds.
         */
        subtractSeconds(seconds: number): Date;

        /**
         * Checks if the current date instance is after the specified comparison date.
         *
         * @param {Date} comparisonDate - The date to compare against the current date instance.
         * @return {boolean} - Returns true if the current date instance is after the comparison date, otherwise false.
         */
        isAfter(comparisonDate: Date): boolean;

        /**
         * Determines if the current date instance is before the specified comparison date.
         *
         * @param {Date} comparisonDate - The date to compare against the current date instance.
         * @return {boolean} True if the current date is before the comparison date, otherwise false.
         */
        isBefore(comparisonDate: Date): boolean;

        /**
         * Compares the instance date with the specified date to determine if they are equal.
         *
         * @param {Date} comparisonDate - The date to compare with the instance date.
         * @return {boolean} Returns true if the two dates are equal, otherwise false.
         */
        isEqual(comparisonDate: Date): boolean;
    }
}

Date.prototype.addDays = function (days: number): Date {
    return DateUtils.addDays(this, days);
}

Date.prototype.subtractDays = function (days: number): Date {
    return DateUtils.subtractDays(this, days);
}

Date.prototype.getFirstDayOfMonth = function (): Date {
    return DateUtils.getFirstDayOfMonth(this);
}

Date.prototype.getLastDayOfMonth = function (): Date {
    return DateUtils.getLastDayOfMonth(this);
}

Date.prototype.getFirstHourOfDay = function (): Date {
    return DateUtils.getFirstHourOfDay(this);
}

Date.prototype.getLastHourOfDay = function (): Date {
    return DateUtils.getLastHourOfDay(this);
}

Date.prototype.isWithinDateRange = function (startDate: Date, endDate: Date): boolean {
    return DateUtils.isWithinDateRange(this, startDate, endDate);
}

Date.prototype.addSeconds = function (seconds: number): Date {
    return DateUtils.addSeconds(this, seconds);
}
Date.prototype.subtractSeconds = function (seconds: number): Date {
    return DateUtils.subtractSeconds(this, seconds);
}
Date.prototype.isAfter = function (comparisonDate: Date): boolean {
    return DateUtils.isAfter(this, comparisonDate);
}
Date.prototype.isBefore = function (comparisonDate: Date): boolean {
    return DateUtils.isBefore(this, comparisonDate);
}
Date.prototype.isEqual = function (comparisonDate: Date): boolean {
    return DateUtils.isEqual(this, comparisonDate);
}