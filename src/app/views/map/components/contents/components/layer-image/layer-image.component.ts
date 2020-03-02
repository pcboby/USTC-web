import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layer-image',
  templateUrl: './layer-image.component.html',
  styleUrls: ['./layer-image.component.css']
})
export class LayerImageComponent implements OnInit {

  selected = null;

  dataset = [{
    id: '1',
    title: '影像1',
    image: '/assets/download/img.png'
  }, {
    id: '2',
    title: '影像2',
    image: '/assets/download/img.png'
  }, {
    id: '3',
    title: '影像3',
    image: '/assets/download/img.png'
  }, {
    id: '4',
    title: '影像4',
    image: '/assets/download/img.png'
  }, {
    id: '5',
    title: '影像5',
    image: '/assets/download/img.png'
  }];

  constructor() { }

  ngOnInit() {
  }

  toggle(val) {
    this.selected = this.selected === val ? null : val;
  }


}
