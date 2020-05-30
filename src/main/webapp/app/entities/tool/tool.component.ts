import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ITool } from 'app/shared/model/tool.model';
import { ToolService } from './tool.service';
import { ToolDeleteDialogComponent } from './tool-delete-dialog.component';

@Component({
  selector: 'jhi-tool',
  templateUrl: './tool.component.html',
})
export class ToolComponent implements OnInit, OnDestroy {
  tools?: ITool[];
  eventSubscriber?: Subscription;

  constructor(protected toolService: ToolService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.toolService.query().subscribe((res: HttpResponse<ITool[]>) => (this.tools = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInTools();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: ITool): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInTools(): void {
    this.eventSubscriber = this.eventManager.subscribe('toolListModification', () => this.loadAll());
  }

  delete(tool: ITool): void {
    const modalRef = this.modalService.open(ToolDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.tool = tool;
  }
}
