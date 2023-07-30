import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListInterface } from '../../models/list.interface';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {
  constructor(private taskService:TaskService, private router:Router) { }
  ngOnInit(): void {
  }

  createList(title:string){
    this.taskService.createList(title).subscribe((list:any) =>{
      console.log(list,'djashdkj');
      // now we navigate to /lists/response._id
      this.router.navigate(['/lists', list._id])
    })
  }

}

