/**
 * A utility class for performing various operations with Date objects.
 */
export class DateUtils {
    /**
     * Adds a specified number of days to a given date.
     *
     * @param {Date} date - The initial date to which days will be added.
     * @param {number} days - The number of days to add to the given date.
     * @return {Date} A new Date object representing the resulting date after adding the specified number of days.
     */
    public static addDays(date: Date, days: number): Date {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    /**
     * Subtracts a specified number of days from the given date.
     *
     * @param {Date} date - The date from which days will be subtracted.
     * @param {number} days - The number of days to subtract from the date.
     * @return {Date} The new date resulting from the subtraction of the days.
     */
    public static subtractDays(date: Date, days: number): Date {
        const result = new Date(date);
        result.setDate(result.getDate() - days);
        return result;
    }

    /**
     * Determines the first day of the month for a given date.
     *
     * @param {Date} date - The date from which the first day of the month will be calculated.
     * @return {Date} A Date object representing the first day of the month at 00:00:00.
     */
    public static getFirstDayOfMonth(date: Date): Date {
        return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
    }

    /**
     * Returns the last day of the month for the provided date, including the time set to the end of the day.
     *
     * @param {Date} date - The date for which the last day of the month is to be determined.
     * @return {Date} A Date object representing the last day of the month, including the time set to 23:59:59.999.
     */
    public static getLastDayOfMonth(date: Date): Date {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999);
    }

    /**
     * Returns a new Date object set to the first hour (00:00:00.000) of the given date.
     *
     * @param {Date} date - The input date for which to get the first hour of the day.
     * @return {Date} A new Date object set to the start of the given date.
     */
    public static getFirstHourOfDay(date: Date): Date {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
    }

    /**
     * Returns a Date object representing the last hour of the specified day.
     *
     * @param {Date} date - The input date for which the last hour of the day is calculated.
     * @return {Date} A new Date object set to 23:59:59.999 of the same day.
     */
    public static getLastHourOfDay(date: Date): Date {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
    }

    /**
     * Checks if a given date is within a specified start and end date range, inclusive.
     *
     * @param {Date} date - The date to check.
     * @param {Date} startDate - The start date of the range.
     * @param {Date} endDate - The end date of the range.
     * @return {boolean} Returns true if the date is within the range, otherwise false.
     */
    public static isWithinDateRange(date: Date, startDate: Date, endDate: Date): boolean {
        return date >= startDate && date <= endDate;
    }

    /**
     * Adds a specified number of seconds to a given date.
     *
     * @param {Date} date - The initial date to which seconds will be added.
     * @param {number} seconds - The number of seconds to add to the date.
     * @return {Date} A new Date object with the specified seconds added.
     */
    public static addSeconds(date: Date, seconds: number): Date {
        let result = new Date(date);
        result.setSeconds(result.getSeconds() + seconds);
        return result;
    }

    /**
     * Subtracts the specified number of seconds from the given date.
     *
     * @param {Date} date - The input date from which seconds will be subtracted.
     * @param {number} seconds - The number of seconds to subtract.
     * @return {Date} A new Date object with the specified number of seconds subtracted.
     */
    public static subtractSeconds(date: Date, seconds: number): Date {
        let result = new Date(date);
        result.setSeconds(result.getSeconds() - seconds);
        return result;
    }

    /**
     * Determines if the given date is after the specified comparison date.
     *
     * @param {Date} date - The date to check.
     * @param {Date} comparisonDate - The date to compare against.
     * @return {boolean} Returns true if the date is after the comparison date, otherwise false.
     */
    public static isAfter(date: Date, comparisonDate: Date): boolean {
        return date > comparisonDate;
    }

    /**
     * Determines if a given date occurs before another specified date.
     *
     * @param {Date} date - The date to be compared.
     * @param {Date} comparisonDate - The date to compare against.
     * @return {boolean} True if the first date occurs before the second date, false otherwise.
     */
    public static isBefore(date: Date, comparisonDate: Date): boolean {
        return date < comparisonDate;
    }

    /**
     * Compares two Date objects to determine if they are equal.
     *
     * @param {Date} date1 - The first date to compare.
     * @param {Date} date2 - The second date to compare.
     * @return {boolean} - Returns true if the two dates are equal, otherwise false.
     */
    public static isEqual(date1: Date, date2: Date): boolean {
        return date1.getTime() === date2.getTime();
    }
}
