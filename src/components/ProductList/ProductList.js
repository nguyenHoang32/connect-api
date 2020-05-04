import React from "react";
import { connect } from "react-redux";

import ProductItem from "../ProductItem/ProductItem";
import {
  actFetchProductsRequest,
  actDeleteProductRequest,
} from "../../action/index";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
class ProductList extends React.Component {
  render() {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Tên sản phẩm</TableCell>
              <TableCell align="center">Giá</TableCell>
              <TableCell align="center">Số lượng</TableCell>
              <TableCell align="center">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{this.showProductItem()}</TableBody>
        </Table>
      </TableContainer>
    );
  }
  componentDidMount = () => {
    this.props.actFetchProductsRequest();
  };
  showProductItem = () => {
    let result = null;
    const { products, searchValue } = this.props;
    if (searchValue !== "") {
      result = products
        .filter((product) => product.name.includes(searchValue))
        .map((productSearch, index) => (
          <ProductItem
            key={index}
            product={productSearch}
            index={index}
            deleteProduct={this.deleteProduct}
          />
        ));
    } else {
      result = products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          index={index}
          deleteProduct={this.deleteProduct}
        />
      ));
    }
    
    return result;
  };
  deleteProduct = (id) => {
    this.props.actDeleteProductRequest(id);
  };
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    searchValue: state.searchValue,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    actFetchProductsRequest: () => {
      dispatch(actFetchProductsRequest());
    },
    actDeleteProductRequest: (id) => {
      dispatch(actDeleteProductRequest(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
