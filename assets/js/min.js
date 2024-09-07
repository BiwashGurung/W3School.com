const htmlCode =    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>HTML Tutorial</title>
    </head>
    <body>

        <h1>This is a heading</h1>
        <p>This is a paragraph.</p>
        
    </body>
    </html>

`
let htmlCodeEl = document.getElementById("htmlCode").innerText = htmlCode

const cssCode =    `body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
}

`
let cssCodeEl = document.getElementById("cssCode").innerText = cssCode


const jsCode =    `<button onclick="myFunction()">Click Me!</button>

<script>
function myFunction() {
  let x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}
</script>
  
  `
  let jsCodeEl = document.getElementById("jsCode").innerText = jsCode
   


  const pyCode =    `if 5 > 2:
  print("Five is greater than two!")
  
  `
  let pyCodeEl = document.getElementById("pyCode").innerText = pyCode

  
  const sqlCode =    `SELECT * FROM Customers
WHERE Country='Mexico';
  
  `
  let sqlCodeEl = document.getElementById("sqlCode").innerText = sqlCode
   