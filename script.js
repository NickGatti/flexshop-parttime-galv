let items = {
    'Edible': [ {
        name: 'Organic Raw Hide'
    }, {
        name: 'Natural Treats'
    }, {
        name: 'Holistic Kibble'
    }, {
        name: 'Organic Freeze Dried'
    } ],
    'Non Edible': [ {
        name: 'BlinkBeep&#8482; Fetch Toys'
    }, {
        name: 'BPA Free Tug Toys'
    }, {
        name: 'Tear Free Beds'
    } ]
}

let createShopItemList = ( ( list ) => {
    let div = null
    let ul = null
    let li = null
    for ( let key in list ) {
        ul = document.createElement( 'ul' )
        li = document.createElement( 'li' )
        li.innerHTML = key
        ul.id = key
        document.getElementById( 'shop' )
            .appendChild( ul )
        document.getElementById( key )
            .appendChild( li )
        ul = document.createElement( 'ul' )
        ul.id = key + 'inner'
        document.getElementById( key )
            .appendChild( ul )
        for ( let i = 0; i < list[ key ].length; i++ ) {
            div = document.createElement( 'div' )
            div.innerHTML = list[ key ][ i ].name
            document.getElementById( key + 'inner' )
                .appendChild( div )
        }
    }
} )

createShopItemList( items )
