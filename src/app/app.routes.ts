import { Routes } from '@angular/router';
import { Logincomponent } from './logincomponent/logincomponent';
import { Maincomponent } from './maincomponent/maincomponent';
import { Homecomponenet } from './homecomponenet/homecomponenet';
import { Library } from './library/library';

export const routes: Routes = [{path:'login',component:Logincomponent},{path:'search',component:Maincomponent},{path:'home',component:Homecomponenet}
    ,{path:'library',component:Library}
];
