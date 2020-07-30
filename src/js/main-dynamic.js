const getLarry = () => import('./larry');

(() => {
    setTimeout(() => {
        const getLarry = () => import('./larry');
        getLarry().then((larryModule) => {
            const larry = new larryModule.Larry();
            
            larry.initialize();

            larry.sayHello();
        });
      }, 2000);
})();