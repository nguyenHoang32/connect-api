import React from 'react';
import callApi from '../../uliti/callApi';
class ProductForm extends React.Component{
    state = {
        name: '',
        price: 0,
        status: false,
    }
    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [name]: value
        })
        
    }
    onSubmit = (e) => {
        e.preventDefault();
        let newProduct = this.state;
        newProduct['price'] = Number(newProduct['price']);
        callApi('products', 'POST', newProduct).then(() => console.log('DONE'));
        this.setState({
            name: '',
            price: 0,
            status: false,
        })
        
    }
    render(){
        const { name, price, status } = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                    Tên:
                    <input 
                    type="text" 
                    placeholder="Nhập tên sản phẩm" 
                    name="name"
                    value={name}
                    onChange={this.onChange}               
                    />
                    Giá tiền
                    <input
                    type="number" 
                    name="price"
                    value={price}
                    onChange={this.onChange}
                    />
                    Trạng thái:
                    <input 
                    type="checkbox"
                    name="status"
                    checked={status}
                    onChange={this.onChange} />
                    Còn hàng                   
                    <button type="submit">
                        Thêm
                    </button>
                </form>
        )
    }
}
export default ProductForm;