const serviceWorker = () => {
    // Check for browser support of service worker
    if ('serviceWorker' in navigator) {     
        const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
        navigator.serviceWorker.register(swUrl)
        .then((registration) => {
        // Successful registration
        // console.log('Hooray. Registration successful, scope is:', registration);
        }).catch((err) => {
        // Failed registration, service worker won’t be installed
        // console.log('Whoops. Service worker registration failed, error:', err);
        })
   }
}
  
export default serviceWorker;
  