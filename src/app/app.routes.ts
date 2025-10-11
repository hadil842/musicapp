import { Routes } from '@angular/router';
import { Logincomponent } from './logincomponent/logincomponent';
import { Maincomponent } from './maincomponent/maincomponent';
import { New } from './new/new';

export const routes: Routes = [{path:'login',component:Logincomponent},{path:'home',component:Maincomponent},{path:'new',component:New}];
