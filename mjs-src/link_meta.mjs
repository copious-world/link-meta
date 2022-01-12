
import {Blog_type} from './blog_type.mjs'
//
export class Link_meta extends Blog_type {
    constructor() {
        super()
        this._presentation = ""
		this._links = []
		this._link_map = {}
		this._reverse_link_map = {}
        //
		this._checkers["presentation"] = (val) => { return true }
		this._checkers["links"] = (val) => { return true }
		this._checkers["link_map"] = (val) => { return true }
		this._checkers["reverse_link_map"] = (val) => { return true }
    }
    //
    
    type_check(key,value) {
        let truthy_check = this._checkers[key]
        return truthy_check(value)
    }
    //
    set_from_map(map_obj) {
        for ( let mky in map_obj ) {
            let ky = '_' + mky
            if ( ky in this._checkers ) {
                let value = map_obj[ky]
                if ( this.type_check(mky,value) ) {
                    self[ky] = value
                }
            }
        }
    }


    set_all(presentation,links,link_map,reverse_link_map) {
		if ( this.type_check('presentation',presentation) ) { this._presentation = presentation }
		if ( this.type_check('links',links) ) { this._links = links }
		if ( this.type_check('link_map',link_map) ) { this._link_map = link_map }
		if ( this.type_check('reverse_link_map',reverse_link_map) ) { this._reverse_link_map = reverse_link_map }
    }


    set presentation(val) {
        // typecheck <string|<media-specifier>>
        this._presentation = val
        //
    }

    get presentation() {
        return this._presentation
    }


    set links(val) {
        // typecheck ["<string|<URL>>"]
        this._links = val
        //
    }

    get links() {
        return this._links
    }


    push_links(val) {
        this._links.push(val)
    }

    pop_links() {
        return this._links.pop()
    }


    set link_map(val) {
        // typecheck {"<token>":"<string|<URL>>"}
        this._link_map = val
        //
    }

    get link_map() {
        return this._link_map
    }


    set_link_map(key,val) {
        this._link_map[key] = val
    }

    get_link_map(key) {
        return this._link_map[key]
    }

    del_link_map(key) {
        if ( this._link_map[key] !== undefined ) {
            delete this._link_map[key]
            return true
        }
        return false
    }


    set reverse_link_map(val) {
        // typecheck {"<string|<URL>>":"<token>"}
        this._reverse_link_map = val
        //
    }

    get reverse_link_map() {
        return this._reverse_link_map
    }


    set_reverse_link_map(key,val) {
        this._reverse_link_map[key] = val
    }

    get_reverse_link_map(key) {
        return this._reverse_link_map[key]
    }

    del_reverse_link_map(key) {
        if ( this._reverse_link_map[key] !== undefined ) {
            delete this._reverse_link_map[key]
            return true
        }
        return false
    }

}
//
