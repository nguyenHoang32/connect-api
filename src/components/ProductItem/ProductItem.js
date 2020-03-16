import React from 'react';
class ProductItem extends React.Component{
    render(){
        const { product, index } = this.props;
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.status ? 'Còn hàng' : 'Hết hàng'}</td>
                <td>Chỉnh sửa, xóa</td>
            </tr>
        )
    }
}
export default ProductItem;