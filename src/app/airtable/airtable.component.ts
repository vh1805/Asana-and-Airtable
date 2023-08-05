import { Component, OnInit } from '@angular/core';
import { AsanaService } from '../asana.service';

@Component({
  selector: 'app-airtable',
  templateUrl: './airtable.component.html',
  styleUrls: ['./airtable.component.css']
})
export class AirtableComponent implements OnInit {
  Asanas = [
    {
      name: 'Update Website features',
      assignee: 'John Wick',
      dueDate: '2023-08-07',
      description: 'Hey, You have to create one API before due Date and give me a update time to time about your work'
    }
  ]
  pageSize=5;
  currentPage=1;

  constructor(private asanaService:AsanaService){}
  ngOnInit(): void {
    this.asanaService.getAllAsanas().subscribe(
      (data:any)=>{
        this.Asanas=data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
