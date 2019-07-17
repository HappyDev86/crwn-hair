import React from 'react';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor () {
        super();

        this.state = {
            sections: [
                {
                    title: 'lace wigs',
                    imageUrl: 'https://i.shgcdn.com/b6376382-a9e7-4f86-bdaf-86aaa1d1c905/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
                    id: 1
                },
                {
                    title: 'hair extensions',
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71et1ZmxIUL._SY355_.jpg',
                    id: 2
                },
                {
                    title: 'hair pieces',
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71j5HU2oBgL._SY355_.jpg',
                    id: 3
                },
                {
                    title: 'accesories',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCICYeijY4ZaHQ0ZzoNyewhktTVbMFBTiG_9k5UedfBpMoGo7nqQ',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'hair care',
                    imageUrl: 'https://cdn.shopify.com/s/files/1/0390/2985/products/Website-image_O_M-shampoo-_-conditioner-_-mask_600x.jpg?v=1536165016',
                    size: 'large',
                    id: 5
                }
            ]
        }

    }

    render () {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ title, imageUrl, id, size}) => 
                    <MenuItem  key={id} title={title} imageUrl={imageUrl} size={size} />
                )}                
            </div>
        )
    }
}


export default Directory;