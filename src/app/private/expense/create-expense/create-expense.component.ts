import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Expense, ExpenseService }  from "../../services";

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css']
})
export class CreateExpenseComponent implements OnInit {
  
  
  constructor(
    private expenseService: ExpenseService,
    private router: Router
  ) {}
  expense = new Expense();
  ngOnInit() {
  }
  createExpense(){
    this.expenseService.createExpenses(this.expense).subscribe(result => {
      this.expense = result;
      this.router.navigate(['/app/expense']);
    });
  }
}