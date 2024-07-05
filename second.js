import React from 'react';
import { Component} from 'react';
class ExpenseEntryItem extends React.Component{
    render(){
       return(
            <div>
             <div><b>Item:</b><em>Mangojuice</em></div>
              <div><b>Amount:</b><em>30.00</em></div>
            <div><b>spenddata:</b><em>2024-07-01</em></div>
            <div><b>category:</b><em>FOOd</em></div>
            </div>
        );
    }    
}
export default ExpenseEntryItem;
