import { Component } from '@angular/core';
import { AsanaService } from '../asana.service';

@Component({
  selector: 'app-asana',
  templateUrl: './asana.component.html',
  styleUrls: ['./asana.component.css']
})
export class AsanaComponent {
  Asana ={
    name:'',
    assignee:'',
    dueDate:'',
    description:''
}
  constructor(private asanaService:AsanaService){}

  formSubmit(){
    if(this.Asana.name.trim()=='' || this.Asana.name==null){
      const taskName=document.getElementById("name");
      if(taskName){
        taskName.style.border="2px solid red";
      }
      return;
    }
    if(this.Asana.assignee.trim()=='' || this.Asana.assignee==null){
      const Assignee = document.getElementById("assignee");
      if(Assignee){
        Assignee.style.border="2px solid red";
      }
      return;
    }
    if(this.Asana.dueDate.trim()=="" ||this.Asana.dueDate==null){
      const DueDate = document.getElementById("date");
      if(DueDate){
        DueDate.style.border="2px solid red";
      }
      return;
    }
    if(this.Asana.description.trim()=='' || this.Asana.description==null){
      const Description = document.getElementById('description');
      if(Description){
        Description.style.border="2px solid red";
      }
      return;
    }
    this.asanaService.createTask(this.Asana).subscribe(
      (data)=>{
        this.Asana ={
          name:'',
          assignee:'',
          dueDate:'',
          description:''
      }
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    ) 
  }

}
