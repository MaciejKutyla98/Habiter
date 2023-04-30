import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_NAMED_OPTIONS, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from './enviroment';

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FeaturesModule,
    SharedModule,
    StoreModule.forRoot({}, {}),
    GraphQLModule,
    HttpClientModule,
    ApolloModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://habiter-api-habiter-376110-rjokco7vaa-uc.a.run.app/graphql'
          })
        }
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
