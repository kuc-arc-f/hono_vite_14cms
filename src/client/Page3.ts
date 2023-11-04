
console.log("#Page3.client.ts");
//
import { h, Component, render } from 'preact';
import htm from 'htm';

const html = htm.bind(h);
const elem = document.getElementById("root");

const li = [];
const data = ['hoge1', 'hoge2', 'hoge3'];
for (var i in data) {
    li.push(html`<h1>Hello[ ${data[i]}]  - 000</h1>`);
};
render(li, elem);
//
const li2 = [];
li2.push(html`<h1 class="text-3xl">li_2</h1>`);
li2.push(html`<hr class="my-2" />`);
for (var i in data) {
    li2.push(html`<h1>li2-Hello[ ${data[i]}]  - 111</h1>`);
};
li2.push(html`<hr class="my-2" />`);
render(li2, document.getElementById("root2"));
