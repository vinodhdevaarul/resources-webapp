import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

import { RouterModule, Routes } from '@angular/router';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ProjectDeleteComponent } from './project-delete/project-delete.component';
import { ResourceCreateComponent } from './resource-create/resource-create.component';
import { ResourceUpdateComponent } from './resource-update/resource-update.component';
import { ResourceDeleteComponent } from './resource-delete/resource-delete.component';
import { MappingCreateComponent } from './mapping-create/mapping-create.component';
import { MappingUpdateComponent } from './mapping-update/mapping-update.component';
import { MappingDeleteComponent } from './mapping-delete/mapping-delete.component';
import { SkillCreateComponent } from './skill-create/skill-create.component';
import { SkillUpdateComponent } from './skill-update/skill-update.component';
import { SkillDeleteComponent } from './skill-delete/skill-delete.component';


const routes: Routes = [
  {path:'project-create', component: ProjectCreateComponent},
  {path:'project-update', component: ProjectUpdateComponent},
  {path:'project-delete', component: ProjectDeleteComponent},
  {path:'resource-create', component: ResourceCreateComponent},
  {path:'resource-update', component: ResourceUpdateComponent},
  {path:'resource-delete', component: ResourceDeleteComponent},
  {path:'mapping-create', component: MappingCreateComponent},
  {path:'mapping-update', component: MappingUpdateComponent},
  {path:'mapping-delete', component: MappingDeleteComponent},
  {path:'skill-create', component: SkillCreateComponent},
  {path:'skill-update', component: SkillUpdateComponent},
  {path:'skill-delete', component: SkillDeleteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectCreateComponent,
    ProjectUpdateComponent,
    ProjectDeleteComponent,
    ResourceCreateComponent,
    ResourceUpdateComponent,
    ResourceDeleteComponent,
    MappingCreateComponent,
    MappingUpdateComponent,
    MappingDeleteComponent,
    SkillCreateComponent,
    SkillUpdateComponent,
    SkillDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }