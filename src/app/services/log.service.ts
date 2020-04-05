import { Injectable } from '@angular/core';

import { Log } from '../models/log';

@Injectable()
export class LogService {
  logs: Log[];

  constructor() {
     this.logs = [
       {
         id: '1',
         text: 'Generated components',
         date: new Date('04/05/2020 11:15:30'),
       },
       {
         id: '2',
         text: 'Added Bootstrap',
         date: new Date('04/06/2020 11:15:30'),
       },
       {
         id: '3',
         text: 'Added logs component',
         date: new Date('04/07/2020 11:15:30'),
       },
     ];
  }

  getLogs() {
    return this.logs;
  }
}
