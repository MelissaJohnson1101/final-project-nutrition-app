import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, FORM_DIRECTIVES} from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [ROUTER_PROVIDERS, ROUTER_DIRECTIVES, FORM_DIRECTIVES, HTTP_PROVIDERS]);



