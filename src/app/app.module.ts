import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { LinkComponent } from './link/link.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FreshNewsComponent } from './fresh-news/fresh-news.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { ArticleComponent } from './article/article.component';
import { MostImportantNewsComponent } from './most-important-news/most-important-news.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { SearchComponent } from './search/search.component';
import { Page404Component } from './page404/page404.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

const routes: Routes = [
  { path: "main", component: MainPageComponent },
  { path: "",   redirectTo: '/main', pathMatch: 'full' },
  { path: "article-page", component: ArticlePageComponent },
  { path: "**", component: Page404Component }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    LinkComponent,
    FooterComponent,
    HeaderComponent,
    FreshNewsComponent,
    MainSectionComponent,
    ArticleComponent,
    MostImportantNewsComponent,
    ArticlesListComponent,
    SearchComponent,
    ArticlePageComponent,
    Page404Component,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
