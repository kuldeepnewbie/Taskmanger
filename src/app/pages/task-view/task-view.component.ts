import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists:any;
  tasks:any;
  constructor(private taskService:TaskService, private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.params.subscribe((params:Params)=>{
      console.log(params)
      this.taskService.getTasks(params['listId']).subscribe((tasks:any)=>{
        this.tasks = tasks;
        console.log(this.tasks)
      })
    });

    this.taskService.getLists().subscribe((lists:any) =>{
      this.lists = lists;
    })
  }

}
