import { Message } from '../interface/message';

export const MSGS: Message[] = [{
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
            0
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
            0
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
