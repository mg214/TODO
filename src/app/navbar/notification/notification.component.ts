import { Component, OnInit } from '@angular/core';
import { Message } from '../../interface/message';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  myLists: number[] = [];
  msgs: Message[] = [];
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.getMsg();
  }
  getMsg(): void{
    this.messageService.getMsg()
      .subscribe(msgs => this.msgs = msgs);
  }

  rejectShared(msg: Message): void{
    // TODO: delete the msg
    this.msgs = this.msgs.filter(m => m !== msg);
    this.messageService.deleteMsg(msg).subscribe();
  }
  acceptShared(listId: number, index: number): void{
    this.myLists.push(listId);
    this.msgs[index].content.accepted = true;
    // TODO: add the list to mine and update the participants of list
  }
}


