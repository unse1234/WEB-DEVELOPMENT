let ul=React.createElement("ul",null,
    React.createElement("a", { href: "#about" }, "About Me"),
    React.createElement("a", { href: "#portfolio" }, "Portfolio"),
    React.createElement("a", { href: "#services" }, "Services"),
    React.createElement("a", { href: "#blog" }, "Blog")
);

let bookCall=React.createElement("a", { href: "#book-call", id: "book-call" }, "Book a Call");


let nav=React.createElement("nav",null,ul,bookCall);


export default nav;