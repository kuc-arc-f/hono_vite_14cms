
import { marked } from 'marked';
import MicroModal from 'micromodal';
console.log("#Test11.client.ts");

const Test11 = {  
    /**/
    initProc: function() {
        MicroModal.init();
        //console.log("init");
        //btn
        const button = document.querySelector('#test11');
        button?.addEventListener('click', async () => {
console.log("test11=");
            MicroModal.show('modal-1');
        }); 
    },
}
Test11.initProc();

