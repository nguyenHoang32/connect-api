import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actEditProduct, actDeleteProductRequest } from "../../action/index";
import { TableRow, TableCell, ButtonGroup, Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";



class ProductItem extends React.Component {
  state = {
    open: false
  }
  handleClickOpen  = () => {
    this.setState({
      open: true
    })
    
  };
  handleClose = () => {
    this.setState({
      open: false
    })
  }
  render() {
    const { open } = this.state;
    const { product, index } = this.props;
    return (
      <React.Fragment>
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
          >
            <Button
              component={Link}
              to={"/product/" + product.id + "/edit"}
              onClick={() => actEditProduct(this.props.product)}
            >
              Chỉnh sửa
            </Button>
            <Button
              color="secondary"
              onClick={this.handleClickOpen}
            >
              Xóa
            </Button>
          </ButtonGroup>
        </TableCell>
      </TableRow>
        <Dialog
        open={open}
        onClose={this.handleClose}
      >
        <DialogTitle>Xóa sản phẩm?</DialogTitle>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Hủy
          </Button>
          <Button onClick={() => {
            this.handleClose();
            this.props.actDeleteProductRequest(product.id)
          }} color="primary" autoFocus>
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>
      </React.Fragment>
      
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    actEditProduct: (product) => {
      dispatch(actEditProduct(product));
    },
    actDeleteProductRequest: (id) => {
      dispatch(actDeleteProductRequest(id));
    },
  };
};
export default connect(null, mapDispatchToProps)(ProductItem);
