import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import callApi from '../../uliti/callApi'
import ProductItem from '../ProductItem/ProductItem';
class ProductList extends React.Component {
    state = {
        products: []
    }
    render() {
        const products = this.state.products;
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
        callApi('products').then(res => {
            this.setState({
                products: res.data
            });
            
        })
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
        callApi(`products/${id}`, 'DELETE').then(res => {
            if(res.status === 200){
                const products = this.state.products;
                const index = products.findIndex((product, index) => {
                    return product.id === id
                });
                products.splice(index, 1);
                this.setState({
                    products
                })
            }
        });
    }
}
    
// const mapStateToProps = state => {
//     return {
//         products: state.products
//     }
// }
export default connect(null, null)(ProductList);