import { Component, OnInit, HostBinding } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  get loading() {
    return this.spinner.loading;
  }
  set loading(val) {
    this.spinner.loading = val;
  }

  get loadingText() {
    return this.spinner.loadingText;
  }

  @HostBinding('style.display')
  get display() {
    return this.loading ? '' : 'none';
  }

  constructor(private spinner: SpinnerService) {}

  ngOnInit() {}
}
