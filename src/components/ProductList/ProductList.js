import React from "react";
import { connect } from "react-redux";

import ProductItem from "../ProductItem/ProductItem";
import {
  actFetchProductsRequest,
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
import CircularProgress from '@material-ui/core/CircularProgress';
class ProductList extends React.Component {
  state = {
    isProgress: true
  }
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
          <TableBody>
          
          <React.Fragment>{this.state.isProgress ? <CircularProgress /> : ''}</React.Fragment>
          
          {this.showProductItem()}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  componentDidMount = () => {
    
   setTimeout(() => {
    this.props.actFetchProductsRequest();
      this.setState({
        isProgress: false
      });
     
   }, 1500)
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
          />
        ));
    } else {
      result = products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          index={index}
        />
      ));
    }
    
    return result;
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
