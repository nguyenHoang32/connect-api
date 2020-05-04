import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import callApi from "../../uliti/callApi";
import {
  actEditProduct,
  actAddProductRequest,
  actUpdateProductRequest,
} from "../../action/index";
import {
  FormGroup,
  FormLabel,
  InputAdornment,
  Input,
  withStyles,
  Button,
  Container
} from "@material-ui/core";
import styles from "./styles.js";
class ProductForm extends React.Component {
  state = {
    name: "",
    price: undefined,
    quantity: undefined,
    id: undefined,
  };
  componentDidMount = () => {
    const { match } = this.props;
    if (match) {
      callApi(`products/${match.params.id}`, "GET", null).then((res) => {
        const editProduct = res.data;
        this.setState({
          name: editProduct.name,
          price: editProduct.price,
          quantity: editProduct.quantity,
          id: match.params.id,
        });
      });
    }
  };
  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    let product = this.state;
    product["price"] = Number(product["price"]);
    product["quantity"] = Number(product["quantity"]);
    if (this.state.id) {
      this.props.actUpdateProductRequest(product);
      this.setState({
        name: "",
        price: "",
        quantity: undefined,
        id: undefined,
      });
      this.props.history.goBack();
    } else {
      this.props.actAddProductRequest(this.state);
      this.setState({
        name: "",
        price: undefined,
        quantity: undefined,
        id: undefined,
      });
      this.props.history.goBack();
    }
  };
  render() {
    const { classes } = this.props;
    const { name, price, quantity, id } = this.state;
    return (
      <Container>

      
      <form onSubmit={this.onSubmit} className={classes.form}>
        {id === undefined ? <h1>THÊM SẢN PHẨM</h1> : <h1>CHỈNH SỬA SẢN PHẨM</h1>}
        <FormGroup>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.onChange}
            required
          />
        </FormGroup>
        <FormGroup></FormGroup>
        <FormGroup>
          <FormLabel htmlFor="price">Price</FormLabel>
          <Input
            id="price"
            name="price"
            type="number"
            value={price || ""}
            onChange={this.onChange}
            endAdornment={<InputAdornment position="end">vnđ</InputAdornment>}
            onKeyDown={(e) => e.keyCode !== 69}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="quantity">Quantity</FormLabel>
          <Input
            id="quantity"
            type="number"
            name="quantity"
            value={quantity || ""}
            onChange={this.onChange}
            onKeyDown={(e) => e.keyCode !== 69}
            required
          />
        </FormGroup>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.btn}
        >
          {id === undefined ? 'Thêm' : 'Cập nhập'}
        </Button>
      </form>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditing,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    actAddProductRequest: (product) => {
      dispatch(actAddProductRequest(product));
    },
    actEditProduct: (product) => {
      dispatch(actEditProduct(product));
    },
    actUpdateProductRequest: (product) => {
      dispatch(actUpdateProductRequest(product));
    },
  };
};
// export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductForm);
