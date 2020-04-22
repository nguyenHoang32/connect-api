import React from "react";
import { Link } from "react-router-dom";
import ProductForm from "../../components/ProductForm/ProductForm";
import { Button } from "@material-ui/core";
class ProductActionPage extends React.Component {
  render() {
    return (
      <div>
        <ProductForm history={this.props.history} match={this.props.match} />

        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/products"
        >
          Trở lại
        </Button>
      </div>
    );
  }
}
export default ProductActionPage;
