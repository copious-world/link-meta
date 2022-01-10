class Blog_type {
    constructor() {
        this._checkers = {}
        this._creator = ""
		this._email = ""
		this._title = ""
		this._subject = ""
		this._keys = []
		this._txt_full = ""
        //
		this._checkers["creator"] = (val) => { return true }
		this._checkers["email"] = (val) => { return true }
		this._checkers["title"] = (val) => { return true }
		this._checkers["subject"] = (val) => { return true }
		this._checkers["keys"] = (val) => { return true }
		this._checkers["txt_full"] = (val) => { return true }
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


    set_all(creator,email,title,subject,keys,txt_full) {
		if ( this.type_check('creator',creator) ) { this._creator = creator }
		if ( this.type_check('email',email) ) { this._email = email }
		if ( this.type_check('title',title) ) { this._title = title }
		if ( this.type_check('subject',subject) ) { this._subject = subject }
		if ( this.type_check('keys',keys) ) { this._keys = keys }
		if ( this.type_check('txt_full',txt_full) ) { this._txt_full = txt_full }
    }


    set creator(val) {
        // typecheck <string|<UCWID>>
        this._creator = val
        //
    }

    get creator() {
        return this._creator
    }


    set email(val) {
        // typecheck <string|<e-mail>[5,256]>
        this._email = val
        //
    }

    get email() {
        return this._email
    }


    set title(val) {
        // typecheck <string|[1,256]>
        this._title = val
        //
    }

    get title() {
        return this._title
    }


    set subject(val) {
        // typecheck <string|[1,256]>
        this._subject = val
        //
    }

    get subject() {
        return this._subject
    }


    set keys(val) {
        // typecheck ["<token>"]
        this._keys = val
        //
    }

    get keys() {
        return this._keys
    }


    push_keys(val) {
        this._keys.push(val)
    }

    pop_keys() {
        return this._keys.pop()
    }


    set txt_full(val) {
        // typecheck <string>
        this._txt_full = val
        //
    }

    get txt_full() {
        return this._txt_full
    }

}
module.exports.Blog_type = Blog_type
