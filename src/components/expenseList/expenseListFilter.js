import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../../action/filters';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class  ExpenseListFilter extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    state = {
        calendarFocused:null
    }

    onDatesChange = ({startDate , endDate}) =>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) =>{
        this.setState(()=>({calendarFocused}))
    }

    render(){
        return(
            <div className="filter-box">
            <input type="text" className="form-control" value={this.props.filters.text} onChange = {(e) => {
                this.props.dispatch(setTextFilter(e.target.value));
            // console.log(e.target.value);
            }} />
            <select className="form-control" value = {this.props.filters.sortBy} onChange = {(e) => {
                if(e.target.value === 'date'){
                    this.props.dispatch(sortByDate())
                }
                else{
                    this.props.dispatch(sortByAmount());
                }
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker
                startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                endDate = {this.props.filters.endDate}
                onDatesChange = {this.onDatesChange}
                focusedInput ={this.state.calendarFocused}
                onFocusChange = {this.onFocusChange}
                numberOfMonths ={1}
                isOutsideRange ={()=>false}
                showClearDates ={true}
            />
        </div>
        )
    }
}

// const ExpenseListFilter = (props)=>{
//     return(
       
//     )
// }

const mapStateToProps = (state) =>{
    return{
        filters : state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilter);

