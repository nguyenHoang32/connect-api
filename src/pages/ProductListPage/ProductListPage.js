import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import ProductList from '../../components/ProductList/ProductList';
class ProductListPage extends React.Component {
    render() {
        return (
            <div>
                <Button color="primary">
                    <Link to='/product/add' style={{color: 'white'}}>Thêm</Link>
                </Button>
                <ProductList />
            </div>
        )
    }
}
export default ProductListPage;