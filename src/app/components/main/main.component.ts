import { MessagingService } from './../../services/messaging/messaging.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService} from 'ng2-translate';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  message;
  constructor(private _translateService: TranslateService,
              private _messagingService: MessagingService,
             private _metaService: Meta,
             private _titleService: Title
            ) { }

  ngOnInit() {
    this._metaService.updateTag({
      property: 'og:image',
      content: 'https://cdn01.vulcanpost.com/wp-uploads/2017/04/141016-stockmarket-stock.jpg'
    });
    this._metaService.updateTag({
      property: 'og:image:secure_url',
      content: 'https://cdn01.vulcanpost.com/wp-uploads/2017/04/141016-stockmarket-stock.jpg'
    });

    this._messagingService.getPermission();
    this._messagingService.receiveMessage();
    this.message = this._messagingService.currentMessage;
  //  console.log(this._translateService.setTranslation('cn, {
  //    HELLO: 'hello {{aaaa}}'
  //  });
  }

}
