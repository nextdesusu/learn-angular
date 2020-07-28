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
    ArticlesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
