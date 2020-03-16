import React from 'react';
import { connect } from 'react-redux';
import callApi from '../../uliti/callApi'
import ProductItem from '../ProductItem/ProductItem';
class ProductList extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            products: []
        }
    }
    componentDidMount = () => {
        callApi('products').then(res => this.setState({
            products: res.data
        }))
    }
    render() {
        // const { products } = this.props;

        const products = this.state.products;
        return (
            <div>
                <table>
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
                </table>
            </div>
        )
    }
    showProductItem = (products) => {
        let result = null;
        result = products.map((product, index) => (
            <ProductItem key={index} product={product} index={index} />
        ))
        return result;
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(null, null)(ProductList);