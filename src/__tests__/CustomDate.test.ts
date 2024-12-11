import {DateUtils} from "../CustomDate";

describe('DateUtils', () => {
    let testDate: Date;

    beforeEach(() => {
        // This is a specific date and time set up for testing
        testDate = new Date(2022, 1, 1, 12, 0, 0, 0); // Feb 1, 2022 at 12:00:00
    });

    test('addDays', () => {
        let result = DateUtils.addDays(testDate, 5);
        expect(result.getDate()).toBe(6); // as we are adding 5 days to 1st Feb.
    });

    test('addDays with Invalid Date', () => {
        let invalidDate = new Date("Not a date"); // This will produce an Invalid Date in JavaScript
        let result = DateUtils.addDays(invalidDate, 5);
        expect(result.toString()).toBe('Invalid Date');
    });

    test('subtractDays', () => {
        let result = DateUtils.subtractDays(testDate, 1);
        expect(result.getDate()).toBe(31); // as we are subtracting 1 day from 1st Feb.
    });

    test('getFirstDayOfMonth', () => {
        let result = DateUtils.getFirstDayOfMonth(testDate);
        expect(result.getDate()).toBe(1);
        expect(result.getMonth()).toBe(testDate.getMonth());
        expect(result.getFullYear()).toBe(testDate.getFullYear());
    });

    test('getLastDayOfMonth', () => {
        let result = DateUtils.getLastDayOfMonth(testDate);
        expect(result.getDate()).toBe(28); // as Feb 2022 has 28 days
    });

    test('getFirstHourOfDay', () => {
        let result = DateUtils.getFirstHourOfDay(testDate);
        expect(result.getHours()).toBe(0);
    });

    test('getLastHourOfDay', () => {
        let result = DateUtils.getLastHourOfDay(testDate);
        expect(result.getHours()).toBe(23);
    });

    test('isWithinDateRange', () => {
        let startDate = new Date(2022, 0, 31, 0, 0, 0, 0); // Jan 31, 2022 at 00:00:00
        let endDate = new Date(2022, 1, 2, 23, 59, 59, 999); // Feb 2, 2022 at 23:59:59.999
        expect(DateUtils.isWithinDateRange(testDate, startDate, endDate)).toBe(true); // testDate is within this range
    });

    test('addSeconds', () => {
        let result = DateUtils.addSeconds(testDate, 30);
        expect(result.getSeconds()).toBe(30);
    });

    test('subtractSeconds', () => {
        let result = DateUtils.subtractSeconds(testDate, 60); // subtracts a minute
        expect(result.getMinutes()).toBe(59);
    });

    test('isAfter', () => {
        let comparisonDate = new Date(2022, 0, 31, 23, 59, 59, 999); // Jan 31, 2022 at 23:59:59.999
        expect(DateUtils.isAfter(testDate, comparisonDate)).toBe(true); // testDate is after comparisonDate
    });

    test('isBefore', () => {
        let comparisonDate = new Date(2022, 1, 2, 0, 0, 0, 0); // Feb 2, 2022 at 00:00:00
        expect(DateUtils.isBefore(testDate, comparisonDate)).toBe(true); // testDate is before comparisonDate
    });

    test('isEqual', () => {
        let comparisonDate = new Date(testDate.getTime()); // exact copy of testDate
        expect(DateUtils.isEqual(testDate, comparisonDate)).toBe(true); // testDate is equal to comparisonDate
    });

    test('addDays with negative number', () => {
        let result = DateUtils.addDays(testDate, -5);
        expect(result.getDate()).toBe(27); // Jan 27, 2022 as we are subtracting 5 days from Feb 1
    });

    test('addDays with zero', () => {
        let result = DateUtils.addDays(testDate, 0);
        expect(result.getDate()).toBe(testDate.getDate()); // should remain the same
    });

    test('addDays with large number', () => {
        let result = DateUtils.addDays(testDate, 365);
        expect(result.getFullYear()).toBe(testDate.getFullYear() + 1); // should add a year
    });

    test('isWithinDateRange at boundaries', () => {
        let exactStartDate = DateUtils.getFirstDayOfMonth(testDate);
        let exactEndDate = DateUtils.getLastDayOfMonth(testDate);
        expect(DateUtils.isWithinDateRange(exactStartDate, exactStartDate, exactEndDate)).toBe(true);
        expect(DateUtils.isWithinDateRange(exactEndDate, exactStartDate, exactEndDate)).toBe(true);
    });

    test('subtractSeconds and addSeconds with 60', () => {
        let resultAdd = DateUtils.addSeconds(testDate, 60);
        expect(resultAdd.getMinutes()).toBe((testDate.getMinutes() + 1) % 60);
        let resultSubtract = DateUtils.subtractSeconds(testDate, 60);
        expect(resultSubtract.getMinutes()).toBe(testDate.getMinutes() ? testDate.getMinutes() - 1 : 59);
    });
});