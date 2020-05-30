import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ITool, Tool } from 'app/shared/model/tool.model';
import { ToolService } from './tool.service';
import { ToolComponent } from './tool.component';
import { ToolDetailComponent } from './tool-detail.component';
import { ToolUpdateComponent } from './tool-update.component';

@Injectable({ providedIn: 'root' })
export class ToolResolve implements Resolve<ITool> {
  constructor(private service: ToolService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ITool> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((tool: HttpResponse<Tool>) => {
          if (tool.body) {
            return of(tool.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Tool());
  }
}

export const toolRoute: Routes = [
  {
    path: '',
    component: ToolComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Tools',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ToolDetailComponent,
    resolve: {
      tool: ToolResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Tools',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ToolUpdateComponent,
    resolve: {
      tool: ToolResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Tools',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ToolUpdateComponent,
    resolve: {
      tool: ToolResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Tools',
    },
    canActivate: [UserRouteAccessService],
  },
];
