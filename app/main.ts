import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

bootstrap(AppComponent, [ROUTER_PROVIDERS, ROUTER_DIRECTIVES]);