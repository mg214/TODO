export interface Message {
  unseen: 0,
  message: [
    {
      messageId: number,
      content: {
        type: string,
        inviter: {
          avatar: string,
          firstName: string,
          lastName: string
        },
        list: {
          listId: number,
          title: string,
          themeId: number,
          participants: string[],
          completed: false
        },
        acceptUrl: string,
        accepted: boolean
      },
      date: number,
      seen: boolean
    }
  ]
}
