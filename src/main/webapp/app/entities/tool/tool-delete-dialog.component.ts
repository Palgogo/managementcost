import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ITool } from 'app/shared/model/tool.model';
import { ToolService } from './tool.service';

@Component({
  templateUrl: './tool-delete-dialog.component.html',
})
export class ToolDeleteDialogComponent {
  tool?: ITool;

  constructor(protected toolService: ToolService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.toolService.delete(id).subscribe(() => {
      this.eventManager.broadcast('toolListModification');
      this.activeModal.close();
    });
  }
}
