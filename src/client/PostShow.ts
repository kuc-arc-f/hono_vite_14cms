
//import { marked } from 'marked';
//
const PostShow = {
    /**
     *
     * @param
     *
     * @return
     */  
    delete : async function(id: string)
    {
        try{
            let ret = false;
            const item = {
                api_key: "",
                //@ts-ignore
                id: Number(id),
            }
//console.log("title=", titleValue);
            const body = JSON.stringify(item);		
            const res = await fetch("/api/posts/delete", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},      
                body: body
            });
            const json = await res.json()
console.log(json);   
            if (res.status !== 200) {
                console.error("error, status <> 200");
                throw new Error(await res.text());
            }
            if (json.ret !==  "OK") {
                console.error("Error, json.ret <> OK");
                return ret;
            }
            ret = true;
            return ret;
        } catch (e) {
            console.error("Error, delete");
            console.error(e);
            throw new Error('Error , delete');
        }
    },
    /**
     *
     * @param
     *
     * @return
     */  
    startProc :async function ()
    {
        try{
            console.log("#startProc");
            //id
            const id = (<HTMLInputElement>document.querySelector("#item_id")).value;
console.log("id=", id);
            const md = (<HTMLInputElement>document.querySelector("#item_content")).value;
//console.log(md);
            const contentElem = (<HTMLInputElement>document.querySelector("#post_item"));
            contentElem.innerHTML = md;
            /*
            */
        } catch (e) {
            console.error(e);
        }    
    },
}
PostShow.startProc();
