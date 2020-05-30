import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ManagementCostSharedModule } from 'app/shared/shared.module';
import { ToolComponent } from './tool.component';
import { ToolDetailComponent } from './tool-detail.component';
import { ToolUpdateComponent } from './tool-update.component';
import { ToolDeleteDialogComponent } from './tool-delete-dialog.component';
import { toolRoute } from './tool.route';

@NgModule({
  imports: [ManagementCostSharedModule, RouterModule.forChild(toolRoute)],
  declarations: [ToolComponent, ToolDetailComponent, ToolUpdateComponent, ToolDeleteDialogComponent],
  entryComponents: [ToolDeleteDialogComponent],
})
export class ManagementCostToolModule {}
