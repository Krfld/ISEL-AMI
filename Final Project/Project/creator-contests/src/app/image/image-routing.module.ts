import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagePage } from './image.page';

const routes: Routes = [
  {
    path: 'image',
    component: ImagePage,
    children: [
      {
        path: 'open',
        loadChildren: () => import('../open/open.module').then(m => m.OpenPageModule)
      },
      {
        path: 'vote',
        loadChildren: () => import('../vote/vote.module').then(m => m.VotePageModule)
      },
      {
        path: 'winners',
        loadChildren: () => import('../winners/winners.module').then(m => m.WinnersPageModule)
      },
      {
        path: '',
        redirectTo: '/image/open',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagePageRoutingModule { }
