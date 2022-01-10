# link-package

 Definition of a blog media type.

## Scope 

A **Link Package** is a data type, a kind of blog media type.

This document serves the purpose of defining a **Link Package** and a means by which it may be introduced into programming languages for use.

This repository may include code and methods for including the package in dependent programs.

## Method of Description

A blog media type is a type of media along with a meta description of the media rendered/stored as a type.

A link-package is an instance of a blog-type

## Definition Origination

Definitions are cast in the **dfon** format. This is a format defined in a project, **dfon2json**. 

## *definition:* blog\_type 

```
Def:> file(def-${typename})       // def-blog_type.json
typename : blog_type
fields : #{
    creator :   <string|<UCWID>>
    email :     <string|<e-mail>[5,256]>
    title :     <string|[1,256]>
    subject :   <string|[1,256]>
    keys : [<token>]
    txt_full :  <string>
}
inherit : none
role : base

```

## *definition:* link\_package 

The following is the **dfon** definition of a the *link-package* blog media type:


```
Def:> file(def-${typename})       // def-link_package.json
typename : link_package
fields : #{
    presentation : <string|<media-specifier>>
    links : [<string|<URL>>]
    link_map : { <token> : <string|<URL>> }             // A token provides an binding hint... instantiators use for injesting a link package
    reverse_link_map : { <string|<URL>> : <token> }     // link package managers may search for a token in a binding given a link as a key...
}
inherit : blog_type
role : impl



```


## NPM Installation

```
npm install link-package
```

### <u>use</u>

Use in a node.js JavaScript program.

```
// Import the link package class
const Link_package = require('link-package')

// create a new instance of the class (default values)
let a_link_package = new Link_package()

// Set specific fields
a_link_package.set_from_map({
	"creator" : "the creator person",
	"email" : "creator@create.org"
})


// set values throught the code

a_link_package.title = "My Latest Opus"

// get values throughout the code 
let edit_title = a_link_package.title

// set a map value

a_link_package.set_link_map("that_link_id","https://linked.to/this/stuff")

// get a map value 
let what_is_that_url = a_link_package.get_link_map("that_link_id")

// delete key-value pair
a_link_package.del_link_map("that_link_id")

// Array operations

a_link_package.push_links("https://linked.to/this/stuff")
a_link_package.pop_links()


```


