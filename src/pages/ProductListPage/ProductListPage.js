import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
class ProductListPage extends React.Component {
    render() {
        return (
            <div>
                <Link to='/product/add'>Thêm</Link>
                <ProductList />
            </div>
        )
    }
}
export default ProductListPage;