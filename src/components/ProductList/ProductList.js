import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import ProductItem from '../ProductItem/ProductItem';
import { actFetchProductsRequest, actDeleteProductRequest } from '../../action/index';
class ProductList extends React.Component {
    render() {
        const products = this.props.products;
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>ID</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showProductItem(products)}
                    </tbody>
                </Table>
            </div>
        )
    }
    componentDidMount = () => {
        this.props.actFetchProductsRequest();
    }
    showProductItem = (products) => {
        let result = null;
        result = products.map((product, index) => (
            <ProductItem 
            key={index} 
            product={product} 
            index={index} 
            deleteProduct={this.deleteProduct}
            />
        ))
        return result;
    }
    deleteProduct = (id) => {
        this.props.actDeleteProductRequest(id)
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actFetchProductsRequest: () => {
            dispatch(actFetchProductsRequest())
        },
        actDeleteProductRequest : (id) => {
            dispatch(actDeleteProductRequest(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);