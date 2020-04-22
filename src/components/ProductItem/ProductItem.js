import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { actEditProduct } from "../../action/index";
import { TableRow, TableCell, ButtonGroup, Button } from "@material-ui/core";

class ProductItem extends React.Component {
  onClick = () => {
    actEditProduct(this.props.product);
  };
  render() {
    const { product, index } = this.props;
    return (
      <TableRow>
        <TableCell component="th" scope="row">
          {index + 1}
        </TableCell>
        <TableCell align="center">{product.id}</TableCell>
        <TableCell align="center">{product.name}</TableCell>
        <TableCell align="center">{product.price}</TableCell>
        <TableCell align="center">{product.quantity}</TableCell>
        <TableCell align="center">
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button
              component={Link}
              to={"/product/" + product.id + "/edit"}
              onClick={this.onClick}
            >
              Chỉnh sửa
            </Button>
            <Button
              color="secondary"
              onClick={() => this.props.deleteProduct(product.id)}
            >
              Xóa
            </Button>
          </ButtonGroup>
        </TableCell>
      </TableRow>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    actEditProduct: (product) => {
      dispatch(actEditProduct(product));
    },
  };
};
export default connect(null, mapDispatchToProps)(ProductItem);
