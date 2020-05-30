import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'company',
        loadChildren: () => import('./company/company.module').then(m => m.ManagementCostCompanyModule),
      },
      {
        path: 'tool',
        loadChildren: () => import('./tool/tool.module').then(m => m.ManagementCostToolModule),
      },
      {
        path: 'expense',
        loadChildren: () => import('./expense/expense.module').then(m => m.ManagementCostExpenseModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class ManagementCostEntityModule {}
