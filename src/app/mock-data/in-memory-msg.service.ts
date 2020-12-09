import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Message } from '../interface/message';

@Injectable({
  providedIn: 'root',
})
export class InMemoryMsgService implements InMemoryDbService  {
  // tslint:disable-next-line: typedef
  createDb() {
    const msgs: Message[] = [{
      unseen: 0,
      message: [
        {
          messageId: 0,
          content: {
            type: 'invitation',
            inviter: {
              avatar: '../../../assets/img/1555998591196.jpg',
              firstName: 'Tim',
              lastName: 'string'
            },
            list: {
              listId: 0,
              title: 'string',
              themeId: 0,
              participants: [
                'test2', 'test1'
              ],
              completed: false
            },
            acceptUrl: 'string',
            accepted: false
          },
          date:  Date.now(),
          seen: false
        }
      ]
    },
    { unseen: 0,
      message: [
        {
          messageId: 1,
          content: {
            type: 'invitation',
            inviter: {
              avatar: '../../../assets/img/1555998591196.jpg',
              firstName: 'Ken',
              lastName: 'string'
            },
            list: {
              listId: 1,
              title: 'string',
              themeId: 0,
              participants: [
                'test2'
              ],
              completed: false
            },
            acceptUrl: 'string',
            accepted: false
          },
          date:  Date.now(),
          seen: false
        }
      ]
    }
    ];

    return {msgs};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
 /* genId(heroes: Message[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }*/
}
