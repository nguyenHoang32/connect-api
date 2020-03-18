import React from 'react';
import { Button, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
class ProductItem extends React.Component{
    render(){
        const { product, index } = this.props;
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.status ? <Badge color="info">Còn hàng</Badge> : <Badge color="secondary">Hết hàng</Badge>}</td>
                <td>
                <Button
                color="warning">
                    <Link to={"/product/" + product.id + "/edit"}>
                        Chỉnh sửa
                    </Link>  
                </Button>
                <Button 
                color="primary"
                onClick={() => this.props.deleteProduct(product.id)}>
                Xóa
                </Button>
                </td>
            </tr>
        )
    }
}
export default ProductItem;