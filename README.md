# react-datetime-range-picker

This is a datetime range picker based off of [react-datetime](https://github.com/YouCanBookMe/react-datetime). It is highly customizable and isn't dependent on jQuery (but it does require Moment).

## Installation

```sh
> npm install --save react-datetime react-datetime-range-picker
```


## Usage

```javascript
import DatetimeRangePicker from 'react-datetime-range-picker';

...

  render() {
    return (
      <DatetimeRangePicker
        onChange={this.handler} />
    );
  }

...

```

## Options

Almost all the props available for [react-datetime](https://github.com/YouCanBookMe/react-datetime) are available for use here too.

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | `Date` | `new Date()` | This sets a value for the start date |
| endDate | `Date` | `new Date()` | This sets a value for the end date |
| dateFormat | `Boolean` or `String` | `true` | Defines the format for the date. It accepts any `Moment` date format (not in localized format). If `true` the date will be displayed using the defaults for the current `locale`. If `false` the datepicker is disabled and the component can be used as timepicker. |
| timeFormat | `Boolean` or `String` | `true` | Defines the format for the time. It accepts any `Moment` time format (not in localized format). If `true` the time will be displayed using the defaults for the current `locale`. If `false` the timepicker is disabled and the component can be used as datepicker. |
| utc | `boolean` | `false` | When true, start and end time values will be interpreted as UTC. Otherwise they will default to the user's local timezone. |
| locale | `String` | `null` | Manually set the locale |
| input | `Boolean` | `false` | This defines whether or not to allow user to manually edit date via input field. |
| inline | `Boolean` | `false` | If set to true will render start date and end date with calender without input fields |
| onBlur | `Function` | `() => {}` | This callback is triggered when user clicks outside the datetime range picker. The callback receives an object with the selected start and date date as only parameter. |
| onFocus | `Function` | `() => {}` | This callback is triggered when user clicks anywhere inside the outermost element of the picker |
| onChange | `Function` | `() => {}` | This callback is triggered everytime a user selects a start date or an end date from the picker |
| viewMode | `String` | `days` | This defines the default view to display when the pickers are shown. (`'years'`, `'months'`, `'days'`, `'time'`). |
| closeOnTab | `Boolean` | `true` | When `true` and the input is focused, pressing the tab key will close the datepicker. |
| className | `String` | `''` | CSS class(es) for the outermost markup element. |
| inputProps | `Object` | `undefined` | Defines additional attributes for the input element of the component. For example: placeholder, disabled, required, name and className (className sets the class attribute for the input element). This applies to both the start and end datetime inputs |
| closeOnSelect | `Boolean` | `false` | When true, once the day has been selected, the datepicker will be automatically closed. This is useful when using this as a date range picker instead of datetime range picker |
| isValidEndDate | `Function` | `() => true` | Define the dates that can be selected in the end date picker. The function receives `(currentDate, selectedDate)` and shall return a `true` or `false` whether the `currentDate` is valid or not. |
| isValidStartDate | `Function` | `() => true` | Define the dates that can be selected in the start date picker. The function receives (currentDate, selectedDate) and shall return a `true` or `false` whether the `currentDate` is valid or not. |
| onEndDateBlur | `Function` | `() => {}` | Callback is triggered when user clicks outside the end date input. The callback receives the selected `moment` object as only parameter, if the date in the input is valid. If the date in the input is not valid, the callback returned. |
| onEndDateFocus | `Function` | `() => {}` | Callback trigger for when the user opens the end date datepicker. |
| onEndDateChange | `Function` | `() => {}` | This callback is triggered everytime the end date changes. It receives the selected `date` as the only parameter. |
| onStartDateBlur | `Function` | `() => {}` | This callback is trigger when user clicks outside of the start date input. The callback receives the selected start date as the a parameter |
| onStartDateFocus | `Function` | `() => {}` | Callback trigger for when the user opens the end date datepicker. |
| onStartDateChange | `Function` | `() => {}` | Callback trigger for when start date changes. This callback receives selected `moment` object as a parameter. |
| pickerClassName | `String` | `''` | CSS class to attach to outer `div` that wraps the individual pickers. This class is applied to both the start and end pickers. This is particular useful if you want to add `col-*` |
| startTimeConstraints | `Object` | `null` | Add some constraints to the start timepicker. It accepts an object with the format `{ hours: { min: 9, max: 15, step: 2 }}`, this example means the hours can't be lower than `9` and higher than `15`, and it will change adding or subtracting 2 hours everytime the buttons are clicked. The constraints can be added to the `hours`, `minutes`, `seconds` and `milliseconds`. |
| endTimeConstraints | `Object` | `null` | Add some constraints to the end timepicker. It accepts an object with the format `{ hours: { min: 9, max: 15, step: 2 }}`, this example means the hours can't be lower than `9` and higher than `15`, and it will change adding or subtracting 2 hours everytime the buttons are clicked. The constraints can be added to the `hours`, `minutes`, `seconds` and `milliseconds`. |

**NB:** You can read more about customization of the individual datepickers [here](https://github.com/YouCanBookMe/react-datetime#customize-the-appearance)



## Maintainers

Samuel Amoah ([snamoah](https://github.com/snamoah))
