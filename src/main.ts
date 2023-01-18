import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ApplicationModule } from './application/application.module';

platformBrowserDynamic().bootstrapModule(ApplicationModule)
  .catch(err => console.error(err));
