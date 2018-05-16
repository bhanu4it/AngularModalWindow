import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CanvasWhiteboardComponent } from 'ng2-canvas-whiteboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [CanvasWhiteboardComponent],
})
export class AppComponent {
  title = 'app';
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
