import * as olo from '@onlabsorg/olojs/browser';
window.olo = olo;

import Wiki from '@onlabsorg/olowiki/src/wiki';

document.addEventListener("DOMContentLoaded", async () => {
    
    // Create and initialize the home store
    const homeStore = new olo.BrowserStore('zion_home_store');
    if ((await homeStore.list('/')).length === 0) {
        await initHomeStore(homeStore);
    }
    
    olo.zion = await Wiki('#app', { 
        
        appName: "Zion",
        
        routes: {
            '/'      : new olo.HTTPStore(location.origin + "/", {extension:".olo"}),
            '/home/' : homeStore,
            'http:/' : new olo.HTTPStore('http:/'),
            'https:/': new olo.HTTPStore('https:/'),
            'temp:/' : new olo.MemoryStore()
        },
        
        context: {
            __zion__: {
                version: require("../package.json").version
            }
        },
        
        homePath: "/home/index",
        
        helpPath: "/help/index",
        
        treeRoot: "/home"
    });
});


async function initHomeStore (store) {
    for (let docPath of ['index']) {
        const req = await fetch(`home-template/${docPath}.olo`);
        const source = await req.text();
        await store.write(docPath, source);
    }
}
