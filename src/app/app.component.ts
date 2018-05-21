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
  private imgUrl: any;
  private shouldDownloadDrawing:boolean = true;
  title = 'app';
  modalRef: BsModalRef;
  size = 20;

  canvasOptions = {
    drawButtonEnabled: true,
    drawButtonClass: 'drawButtonClass',
    drawButtonText: 'Draw',
    clearButtonEnabled: true,
    clearButtonClass: 'clearButtonClass',
    clearButtonText: 'Clear',
    undoButtonText: 'Undo',
    undoButtonEnabled: true,
    redoButtonText: 'Redo',
    redoButtonEnabled: true,
    colorPickerEnabled: true,
    saveDataButtonEnabled: true,
    saveDataButtonText: 'Done',
    lineWidth: this.size,
    shouldDownloadDrawing: false
};
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  onCanvasSave(event:any){
    this.imgUrl = event;
    this.modalRef.hide();
    this.shouldDownloadDrawing = false; 
  }


}
