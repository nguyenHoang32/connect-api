import React from 'react';
import { Button, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actEditProduct } from '../../action/index';

class ProductItem extends React.Component {
    onCLick = () => {
        actEditProduct(this.props.product)
    }
    render() {
        const { product, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.status ? <Badge color="info">Còn hàng</Badge> : <Badge color="secondary">Hết hàng</Badge>}</td>
                <td>
                    <Button
                        color="warning">
                        <Link to={"/product/" + product.id + "/edit"}
                        onClick={this.onCLick}>
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
const mapDispatchToProps = (dispatch, props) => {
    return{
        actEditProduct: product => {
            dispatch(actEditProduct(product))
        }
    }
}
export default connect(null, mapDispatchToProps)(ProductItem);