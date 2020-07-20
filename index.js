const nunjucks = require("nunjucks")

let source = `
<h1>Header</h1>
<p>Paragraph stuff.</p>

Field: {{ data }

`

nunjucks.renderString(source, {
    data: "some data"
}, (err, res) => {
    console.log("done")
    if (err) {
        console.log("err.name:", err.name)
        console.log("err.message:", err.message)
        console.log("err.colno:", err.colno) // undefined
        console.log("err.lineno:", err.lineno) // undefined
        // Line number and Col number are undefined, even though
        // they are present in err.message
    }
    console.log("result:", res)
})