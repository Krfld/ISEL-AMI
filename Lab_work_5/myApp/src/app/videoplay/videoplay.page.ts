import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { VIDEOS } from '../Videos';

@Component({
  selector: 'app-videoplay',
  templateUrl: './videoplay.page.html',
  styleUrls: ['./videoplay.page.scss'],
})
export class VideoplayPage implements OnInit {
  id = null;
  vids = VIDEOS;

  constructor(public sanitizer: DomSanitizer, private activatedRoute:
    ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('sid');
    console.log("details " + this.id);
  }

  getURL(): string {
    let vid = this.vids.filter(v => v.id == this.id);
    console.log(vid[0].url);
    return vid[0].url;
  }

}
