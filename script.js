let items = {
    'Edible': [ {
        name: 'Organic Raw Hide',
        price: 5.99,
        img: 'https://s7d1.scene7.com/is/image/PETCO/1376098-left-1'
    }, {
        name: 'Natural Treats',
        price: 8.99,
        img: 'http://pamperedpawgifts.com/ppgwp/wp-content/uploads/2017/03/Gourmet-Dog-Treats-Peanut-Butter-Bunnnies.jpg'
    }, {
        name: 'Holistic Kibble',
        price: 28.99,
        img: 'https://wiggleless.com/wp-content/uploads/2017/06/5-best-way-to-store-dog-food-this-summer.jpg'
    }, {
        name: 'Organic Freeze Dried',
        price: 25.99,
        img: 'http://www.freshisbest.com/assets/resources/freeze-dried-cat-food-chicken-recipe-detail.jpg'
    } ],
    'Non Edible': [ {
        name: 'BlinkBeep&#8482; Fetch Toys',
        price: 19.99,
        img: 'https://www.thepetwarehouse.co.uk/images/happy-pet-happy-pet-fling-n-fetch-ball-launcher-dog-toy-p901-7514_zoom.jpg'
    }, {
        name: 'BPA Free Tug Toys',
        price: 9.99,
        img: 'https://cdn3.volusion.com/czame.dsotk/v/vspfiles/photos/0074224H-2.jpg?1487076435'
    }, {
        name: 'DuraBeds&#8482;',
        price: 59.99,
        img: 'http://www.coolpetproducts.com/storage/post-images/nice-fancy-dog-bed.jpg?__SQUARESPACE_CACHEVERSION=1300049289042'
    } ]
};

let createShopItemList = ( ( list ) => {
    let div = null;
    let ul = null;
    let li = null;
    for ( let key in list ) {
        ul = document.createElement( 'ul' );
        li = document.createElement( 'li' );
        li.innerHTML = key;
        ul.id = key;
        document.getElementById( 'shop' )
            .appendChild( ul );
        document.getElementById( key )
            .appendChild( li );
        ul = document.createElement( 'ul' );
        ul.id = key + 'inner';
        document.getElementById( key )
            .appendChild( ul );
        for ( let i = 0; i < list[ key ].length; i++ ) {
            div = document.createElement( 'div' );
            div.innerHTML = list[ key ][ i ].name;
            document.getElementById( key + 'inner' )
                .appendChild( div );
        }
    }
} );

createShopItemList( items );
