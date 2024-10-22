import { Component } from '@angular/core';
import { AppServiceTsService } from './app-service.ts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData: any = [];
  listOfColumns: any[] = [
    {
      name: 'UserId',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.userId - b.userId,
      sortDirections: ['ascend', 'descend', null]
    },
    {
      name: 'Id',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.id - b.id,
      sortDirections: ['ascend', 'descend', null]
    },
    {
      name: 'Title'
    },
    {
      name: 'Body'
    }
  ];
  dataCount: any = 0;
  constructor(private appService: AppServiceTsService) {}

  ngOnInit() {
    this.appService.getUsers().subscribe((res:any)=>{
      console.log('user data...',res);
      this.userData = res;
      this.dataCount = res.length;
    })
  }
  title = 'neosoft-project';
}

//sumit.munot@neosofftech.com
