import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { LayoutService } from '../../_metronic/core/';
import KTLayoutExamples from '../../../assets/js/layout/extended/examples';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent implements OnInit, AfterViewInit {
  model: any;
  @ViewChild('form', { static: true }) form: NgForm;
  activeTabId = 1;
  constructor(private layout: LayoutService, private el: ElementRef) {}

  ngOnInit(): void {
    this.model = this.layout.getConfig();
  }

  setActiveTab(tabId: number) {
    this.activeTabId = tabId;
  }

  getActiveTabCSSClass(tabId: number) {
    if (tabId !== this.activeTabId) {
      return '';
    }

    return 'active';
    }

    onNavigate(id) {
        if (id == 1) {
            window.open("https://app.tagget.io/login");
        } else if (id == 2) {
            window.open("https://app.videlligence.com/");
        } else if (id == 3) {
            window.open("https://app.viddictive.com/");
        } else if (id == 4) {
            window.open("https://app.storie.co/Account/Login");
        } else if (id == 5) {
            window.open("https://app.speaq.io/Account/Login?ReturnUrl=%2F");
        } else if (id == 6) {
            window.open("https://socicakeapp.com/");
        } else if (id == 7) {
            window.open("https://app.uduala.com/auth/login");
        } else if (id == 8) {
            window.open("https://app.listgrow.io/login");
        } else if (id == 9) {
            window.open("https://app.designbundle.io/auth");
        } else if (id == 10) {
            window.open("https://agencyblitz.productdyno.com/login");
        } else if (id == 11) {
            window.open("http://app.vragency360.com/signin");
        } else if (id == 12) {
            window.open("https://app.upreachr.com/login");
        } else if (id == 13) {
            window.open("https://app.videract.com/login");
        } else if (id == 14) {
            window.open("https://app.botleads.net/signin");
        } else if (id == 15) {
            window.open("https://app.fxvisualclips.com/login");
        } else if (id == 16) {
            window.open("https://app.fxfunnel.io/login");
        } else if (id == 17) {
            window.open("https://app.videoz.agency/signin");
        } else if (id == 18) {
            window.open("https://app.videomaticapp.com/signin");
        }
    }

  resetPreview(): void {
    this.layout.refreshConfigToDefault();
  }

  submitPreview(): void {
    this.layout.setConfig(this.model);
    location.reload();
  }

  ngAfterViewInit() {
    // init code preview examples
    // see /src/assets/js/layout/extended/examples.js
    const elements = this.el.nativeElement.querySelectorAll('.example');
    KTLayoutExamples.init(elements);
  }
}
