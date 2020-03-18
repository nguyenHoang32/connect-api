import React from 'react';
import { Link } from 'react-router-dom';
import ProductForm from '../../components/ProductForm/ProductForm';
class ProductActionPage extends React.Component{
    render(){
        return(
            <div>
                <ProductForm 
                history={this.props.history}
                match={this.props.match}
                />
                <Link to="/products">
                    Trở lại
                </Link>
            </div>
        )
    }
}
export default ProductActionPage;