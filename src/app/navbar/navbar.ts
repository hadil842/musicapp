import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
   constructor(private router: Router){}
     gotologin():void{
      this.router.navigate(['/login']);
     }
     gotomain():void{
      this.router.navigate(['/home']);
     }
    gotonew():void{
      this.router.navigate(['/new']);
     }
}
