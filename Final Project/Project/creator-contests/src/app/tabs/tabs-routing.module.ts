import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'image',
        loadChildren: () => import('../image/image.module').then(m => m.ImagePageModule)
      },
      {
        path: 'video',
        loadChildren: () => import('../video/video.module').then(m => m.VideoPageModule)
      },
      {
        path: 'music',
        loadChildren: () => import('../music/music.module').then(m => m.MusicPageModule)
      },
      {
        path: 'text',
        loadChildren: () => import('../text/text.module').then(m => m.TextPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/image',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/image',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
