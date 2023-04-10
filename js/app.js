 // Confirmamos si se puede usar el service worker
 if (navigator.serviceWorker){
     navigator.serviceWorker.register('/sw.js');
 }