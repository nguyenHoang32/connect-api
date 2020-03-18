import React from 'react';
import callApi from '../../uliti/callApi';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
class ProductForm extends React.Component {
    state = {
        name: '',
        price: '',
        status: false,
        id: undefined
    }
    componentDidMount = () => {
        const { match } = this.props;
        if(match){
            callApi(`products/${match.params.id}`).then((res) => {
                const editProduct = res.data;
                this.setState({
                    name: editProduct.name,
                    price: editProduct.price,
                    status: editProduct.status,
                    id: match.params.id
                })
            })
        }
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
        let product = this.state;
        product['price'] = Number(product['price']);
        if(this.state.id){
            callApi(`products/${this.state.id}`, 'PUT', product).then(() => this.props.history.goBack());
            this.setState({
                name: '',
                price: '',
                status: false,
                id: undefined
            })
        }
        else{
            callApi('products', 'POST', product).then(() => {
                this.props.history.goBack()
            });
            this.setState({
                name: '',
                price: '',
                status: false,
            })
        }
    }
    render() {
        const { name, price, status } = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    Tên:
                        <Input
                        type="text"
                        placeholder="Nhập tên sản phẩm"
                        name="name"
                        value={name}
                        onChange={this.onChange}
                    />
                </FormGroup>
                <FormGroup>
                    Giá tiền
                        <Input
                        type="number"
                        name="price"
                        value={price}
                        onChange={this.onChange}
                    />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input
                            type="checkbox"
                            name="status"
                            checked={status}
                            onChange={this.onChange} />
                        Còn hàng
                        </Label>
                </FormGroup>
                <Button
                    type="submit"
                    color="success">
                    Thêm
                    </Button>
            </Form>
        )
    }
}
export default ProductForm;