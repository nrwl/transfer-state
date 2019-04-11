import { enableProdMode } from '@angular/core';

if (process.env.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
