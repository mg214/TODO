import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { List } from '../interface/list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryListService implements InMemoryDbService   {
// tslint:disable-next-line: typedef
createDb() {
  const lists: List[] = [{
      listId: 0,
      title: 'list1',
      themeId: 0,
      participants: [
        'test1', 'test2'
      ],
      completed: false
    },
    {
      listId: 1,
      title: 'list2',
      themeId: 0,
      participants: [
        'test1'
      ],
      completed: false
    }
  ];

  return {lists};
}
  constructor() { }
}
