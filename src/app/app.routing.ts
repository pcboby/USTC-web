import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ErrorComponent, LayoutComponent, LayoutMiniComponent } from './core/components';

const routes: Routes = [
  // ----------------------------------------------------------------------------
  {
    path: '',
    redirectTo: 'map/dashboard',
    pathMatch: 'full'
  },
  // ----------------------------------------------------------------------------
  {
    path: 'map',
    redirectTo: 'map/dashboard',
    pathMatch: 'full'
  },
  // ----------------------------------------------------------------------------
  {
    path: 'error/:code',
    component: LayoutMiniComponent,
    children: [
      {
        path: '',
        component: ErrorComponent
      }
    ]
  },
  // ----------------------------------------------------------------------------
  {
    path: 'login',
    component: LayoutMiniComponent,
    data: {
      type: 'login',
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
      }
    ]
  },
  // ----------------------------------------------------------------------------
  {
    path: 'UI',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/ui/ui.module').then(m => m.UiModule)
      }
    ]
  },
  // ----------------------------------------------------------------------------
  {
    path: 'map/:sub',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/map/map.module').then(m => m.MapModule)
      }
    ]
  },
  // ----------------------------------------------------------------------------
  {
    path: 'system',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/system/system.module').then(m => m.SystemModule)
      }
    ]
  },
  // ----------------------------------------------------------------------------
  {
    path: '**', // 路由判定
    redirectTo: 'error/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRouting {}
