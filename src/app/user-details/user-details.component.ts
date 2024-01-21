import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'siemes-app-user-details',
  standalone: true,
  imports: [MatTableModule,MatIconModule,MatButtonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
  constructor(private shareData: ShareDataService){}
  ngOnInit(): void {
    this.shareData.getUserData().subscribe(data=>{
      if(data){
        this.userDetails = data;
      }
    })
  }

  displayedColumns = ['username', 'email','address',"action"];
  userDetails = [
    {username: 'Beach 1', email: "1@gmail.com",address:"",action:""},
    {username: 'Beach 2', email: "2@gmail.com",address:"",action:""},
    {username: 'Beach 3', email: "3@gmail.com",address:"",action:""},
  ];
  removeRow(rowDetails:any){
    this.userDetails = this.userDetails.filter(user=> user.username !== rowDetails.username && user.email !== rowDetails.email)
    this.shareData.setUserData(this.userDetails)  
  }

}
