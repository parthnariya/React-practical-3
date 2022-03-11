import React from "react";
import { HeaderStyle , DateStyleClass, DateStyle, MonthAndYear,MonthStyle,YearStyle,DayStyleClass } from "../../styled/Header.styled";
import { date, day, month, year } from "../../utils/date-values";


const Header = (props) => {
  

  return (
    <>
      <HeaderStyle>
        <DateStyleClass>
          <DateStyle>{date}</DateStyle>
          <MonthAndYear>
            <MonthStyle>{month}</MonthStyle>
            <YearStyle>{year}</YearStyle>
          </MonthAndYear>
        </DateStyleClass>
        <DayStyleClass>{day}</DayStyleClass>
      </HeaderStyle>
    </>
  );
};

export default Header;
