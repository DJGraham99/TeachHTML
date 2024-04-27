function run(){
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let htmlCode2 = document.getElementById("html-code-list").value;
    let cssCode2 = document.getElementById("css-code-list").value;
    let htmlCode3 = document.getElementById("html-code-listo").value;
    let cssCode3 = document.getElementById("css-code-listo").value;
    // let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");
    let output2 = document.getElementById("output-list");
    let output3 = document.getElementById("output-listo");


    output.contentDocument.body.innerHTML = htmlCode+"<style>"+cssCode +"</style>";
    output2.contentDocument.body.innerHTML = htmlCode2+"<style>"+cssCode2 +"</style>";
    output3.contentDocument.body.innerHTML = htmlCode3+"<style>"+cssCode3 +"</style>";
    // output.contentWindow.eval(jsCode);
}