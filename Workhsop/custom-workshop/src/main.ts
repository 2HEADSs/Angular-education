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

const subject$$ = new Subject()

let observable$ = new Observable(observer => {
  let counter = 0;

  const id = setInterval(() => {
    observer.next(counter++)
  }, 1000);

  return () => {
    clearInterval(id)
  }
});

observable$.subscribe(subject$$)


const firstSubscription = observable$.subscribe({
  next: (value) => { console.log('firstSubscription ' + value); },
  complete: () => console.log('complete firstSubscription'),
})


const subjectSubscribe= subject$$.subscribe({
  next: (value) => { console.log('SUBject1.1 ' + value); },
  complete: () => console.log('complete SUBject1.1'),
})


setTimeout(() => {
  firstSubscription.unsubscribe()

  subjectSubscribe.unsubscribe()
   
  const secondSubstription = observable$.pipe(take(3)).subscribe({
    next: (value) => {
      console.log('secondSubstription ' + value);
    },
    complete: () => console.log('complete secondSubstription'),
  });

   subject$$.pipe(take(3)).subscribe({
    next: (value) => {
      console.log('SUBject2.1 ' + value);
    },
    complete: () => console.log('complete SUBject2.1'),
  });


}, 2000)
