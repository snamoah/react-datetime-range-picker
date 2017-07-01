import React, { Component } from 'react';
import moment from 'moment';
import Datetime from 'react-datetime';

// import style
import './style.css';

class DatetimeRangePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: moment(),
      end: moment(),
    }
  }

  getInputProps() {
    const inputReadOnlyStyle = {
      backgroundColor: 'white',
      border: '1px solid #e2e2e2',
      cursor: 'pointer',
    };

    return this.props.input
      ? this.props.inputProps
      : {
        input: true,
        inputProps: {
          ...this.props.inputProps,     // merge inputProps with default
          readOnly: true,
          style: inputReadOnlyStyle,
        },
      };
  }

  calcBaseProps() {
    return {
      utc: this.props.utc,
      locale: this.props.locale,
      input: !this.props.inline,
      viewMode: this.props.viewMode,
      dateFormat: this.props.dateFormat,
      timeFormat: this.props.timeFormat,
      closeOnTab: this.props.closeOnTab,
      className: this.props.pickerClassName,
      closeOnSelect: this.props.closeOnSelect,
    };
  }


  calcStartTimeProps() {
    const baseProps = this.calcBaseProps();
    const inputProps = this.getInputProps();

    return {
      ...baseProps,
      ...inputProps,
      defaultValue: this.props.startDate,
      timeConstraints: this.startTimeConstraints,
      onFocus: this.props.onStartDateFocus,
    };
  }

  calcEndTimeProps() {
    const baseProps = this.calcBaseProps();
    const inputProps = this.getInputProps();

    return {
      ...baseProps,
      ...inputProps,
      defaultValue: this.props.endDate,
      onFocus: this.props.onEndDateFocus,
      timeConstraints: this.props.endTimeConstraints,
    };
  }

  validateMinDate(date) {
    return this.state.start.isSameOrBefore(date, 'day');
  }

  isValidEndDate(date) {
    return this.validateMinDate(date) && this.props.isValidEndDate(date);
  }

  renderDay(props, currentDate, selectedDate) {
    const { start, end } = this.state;
    const date = moment(props.key, 'M_D');
    const { className, ...rest } = props;

    // style all dates in range
    let classes = date.isBetween(start, end, 'day')
      ? `${props.className} in-selecting-range` : props.className;

    // add rdtActive to selected startdate in enddate picker
    classes = date.isSame(start, 'day') ? `${classes} rdtActive` : classes;

    return (
      <td {...rest}
        className={classes}>
        {currentDate.date()}
      </td>
    );
  }


  onStartDateChange(moment) {
    this.setState({ start: moment }, () => {
      this.props.onChange(this.propsToPass());
      this.props.onStartDateChange(this.propsToPass().start);
    });
  }

  onEndDateChange(moment) {
    this.setState({ end: moment }, () => {
      this.props.onChange(this.propsToPass());
      this.props.onEndDateChange(this.propsToPass().end);
    });
  }

  propsToPass() {
    return {
      start: this.state.start.toDate(),
      end: this.state.end.toDate(),
    };
  }

  render() {
    const startProps = this.calcStartTimeProps();
    const endProps = this.calcEndTimeProps();

    return (
      <div className={this.props.className}>
        <Datetime
          {...startProps}
          isValidDate={this.props.isValidStartDate}
          onChange={this.onStartDateChange.bind(this)}
          renderDay={this.renderDay.bind(this)} />

        <Datetime
          {...endProps}
          isValidDate={this.isValidEndDate.bind(this)}
          onChange={this.onEndDateChange.bind(this)}
          renderDay={this.renderDay.bind(this)} />
      </div>
    );
  }
}

DatetimeRangePicker.defaultProps = {
  utc: false,
  locale: null,
  input: false,   // This defines whether or not to to edit date manually via input
  inline: false,  // This defines whether or not to show input field
  className: '',
  viewMode: 'days',
  dateFormat: true,
  timeFormat: true,
  closeOnTab: true,
  // onBlur: () => {},
  // onFocus: () => {},
  onChange: () => {},
  pickerClassName: '',
  endDate: new Date(),
  closeOnSelect: false,
  inputProps: undefined,
  startDate: new Date(),
  // onEndDateBlur: () => {},
  endTimeConstraints: null,
  // onEndDateFocus: () => {},
  isValidStartDate: () => true,
  isValidEndDate: () => true,
  // onStartDateBlur: () => {},
  onEndDateChange: () => {},    // This is called after onChange
  // onStartDateFocus: () => {},
  startTimeConstraints: null,
  onStartDateChange: () => {},  // This is called after onChange
};


export default DatetimeRangePicker;


