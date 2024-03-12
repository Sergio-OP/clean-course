type Size = ''|'S'|'M'|'L';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){}

    toString() {
        // No DRY
        // if (this.name.length <= 0) throw Error('name is empty');
        // if (this.price <= 0) throw Error('price is zero');
        // if (this.size.length <= 0) throw Error('size is empty');

        for( const key in this ) {
            switch( typeof this[key]) {
                case 'string':
                    if ( (<string><unknown>this[key]).length <= 0 ) throw Error('${ key } is empty');
                    break;
                case 'number':
                    if ( (<number><unknown>this[key]) <= 0 ) throw Error('${ key } is zero');
            }
        }

        return '${ this.name }, ${ this.price }, ${ this.size }';
    }

    isProductReady(): boolean{
        for( const key in this ) {
            switch( typeof this[key]) {
                case 'string':
                    if ( (<string><unknown>this[key]).length <= 0 ) throw Error('${ key } is empty');
                    return false;
                case 'number':
                    if ( (<number><unknown>this[key]) <= 0 ) throw Error('${ key } is zero')
                        return false;
                default:
                    throw Error('$type of this [key] is not supported')
            }
        }
        return true;
    }
}

(()=> {
    const bluePants = new Product('Blue Large Pants',20, 'M')
}
)();