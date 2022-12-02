// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Observable, Subject, take } from "rxjs";

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

const subject = new Subject()

let observable$ = new Observable(observer => {
  let counter = 1;

  const id = setInterval(() => {
    observer.next(counter++)
  }, 1000);

  return () => {
    clearInterval(id)
  }
});

observable$.subscribe(subject)



const firstSubscription = observable$.subscribe({
  next: (value) => { console.log('firstSubscription' + value); },
  complete: () => console.log('complete firstSubscription'),
})


const subjectSubscribe= subject.subscribe({
  next: (value) => { console.log('subjectSubscribe' + value); },
  complete: () => console.log('complete subjectSubscribe'),
})


setTimeout(() => {
  firstSubscription.unsubscribe()
  subjectSubscribe.unsubscribe()
  const secondSubstription = observable$.pipe(take(3)).subscribe({
    next: (value) => {
      console.log('secondSubstription' + value);
    },
    complete: () => console.log('complete secondSubstription'),
  });
}, 2000)
