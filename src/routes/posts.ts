//import { Hono } from "hono";
import type { Database } from '@cloudflare/d1'
import LibPagenate from '../lib/LibPagenate';
const perPage: number = 10;
//
interface Env {
    DB: Database
}
const retObj = {ret: "NG", data: [], message: "Error, Internal Server Error"};

const Router = {
    /**
     * route
     * @param
     *
     * @return
     */ 
    test1: async function(DB)
    {
        try{    
            const result = await DB.prepare(`SELECT * FROM Task ORDER BY id DESC`).all();
    console.log(result.results);
            if(result.results.length < 1) {
                console.error("Error, results.length < 1");
                return Response.json({ret: "OK", data: []});
            }
            return Response.json({ret: "OK", data: result.results});
        } catch (e) {
            console.error(e);
            return Response.json(retObj);
        } 
    },   
    /**
     * route
     * @param
     *
     * @return
     */ 
    test10: async function(c, DB)
    {
        try{    
            const result = await DB.prepare(`SELECT * FROM Task ORDER BY id DESC`).all();
    console.log(result.results);
            if(result.results.length < 1) {
                console.error("Error, results.length < 1");
                return Response.json({ret: "OK", data: []});
            }
            return result.results;
        } catch (e) {
            console.error(e);
            return [];
        } 
    },
    /**
     *
     * @param
     *
     * @return
     */ 
    get_list: async function(c, DB)
    {
console.log("#get_list");
        try{    
            const result = await DB.prepare(`SELECT * FROM Post ORDER BY id DESC`).all();
console.log(result.results);
            if(result.results.length < 1) {
                console.error("Error, results.length < 1");
                return [];
            }
            return result.results;
        } catch (e) {
            console.error(e);
            return [];
        } 
    },
    /**
     *
     * @param
     *
     * @return
     */ 
    get_list_page: async function(c, DB, page)
    {
console.log("#get_list");
        try{    
            const pinfo = LibPagenate.getPageStart(page, perPage);
console.log(pinfo);
            const sql = `
            SELECT * FROM Post ORDER BY id DESC
            LIMIT ${pinfo.end}
            OFFSET ${pinfo.start};
            `;
console.log(sql);
            const result = await DB.prepare(sql).all();
//console.log(result.results);
            if(result.results.length < 1) {
                console.error("Error, results.length < 1");
                return [];
            }
            return result.results;
        } catch (e) {
            console.error(e);
            return [];
        } 
    },     
    /**
     *
     * @param
     *
     * @return
     */    
    get: async function(c, DB, id)
    {
        //console.log("#get");
        try{    
            const sql = `SELECT * FROM Post WHERE id = ${id}`;            
            const result = await DB.prepare(sql).all();
            //console.log(result.results);
            if(result.results.length < 1) {
                console.error("Error, results.length < 1");
                return {};
            }
            return result.results[0];
        } catch (e) {
            console.error(e);
            return {};
        } 
    },    
    /**
     * 
     * @param
     *
     * @return
     */    
    create: async function(body, DB)
    {
        try{    
//console.log(body);
            if (body) {
                const sql = `
                INSERT INTO Post ( title, content)
                VALUES('${body.title}', '${body.content}');
                `;
                //console.log(sql);
                await DB.prepare(sql).run();
            }
            return {ret: "OK", data: body};
        } catch (e) {
            console.error(e);
            return [];
        } 
    },
    /**
     * 
     * @param
     *
     * @return
     */    
    delete: async function(body, DB)
    {
        try{    
console.log(body);
            if (body) {
                const sql = `
                DELETE FROM Post WHERE id= ${body.id};
                `;
console.log(sql);
                await DB.prepare(sql).run();
            }
            return {ret: "OK", data: body};
        } catch (e) {
            console.error(e);
            return {ret: "NG", data: body};
        } 
    },
    /**
     * 
     * @param
     *
     * @return
     */    
    update: async function(body, DB)
    {
        try{    
console.log(body);
            if (body) {
                const sql = `
                UPDATE Post 
                SET title = '${body.title}', content='${body.content}'
                WHERE id = ${body.id}
                `;
console.log(sql);
                await DB.prepare(sql).run();
            }
            return {ret: "OK", data: body};
        } catch (e) {
            console.error(e);
            return [];
        } 
    },
}
export default Router;