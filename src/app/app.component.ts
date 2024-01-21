import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ShareDataService } from './share-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,MatButtonModule,MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router:Router,private shareData: ShareDataService){}
  buttons = this.shareData.getButtonStatus();
  title = 'SIEMENS_TEST';
  selectRoute(btn:any){
    this.shareData.tabButtonStatusChange(btn);
    this.router.navigateByUrl(btn.route);
  }
}
