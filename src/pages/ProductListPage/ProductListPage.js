import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { Button, Typography, InputAdornment, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddCircle from "@material-ui/icons/AddCircle";
import ProductList from "../../components/ProductList/ProductList";
import {actSearchProduct} from '../../action/index';
const style = {
  Link: {
    textDecoration: "none",
    marginBottom: "10px",
    display: "block",
  },
};
class ProductListPage extends React.Component {
  state = {
    search: '',
  }
  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
    this.props.actSearchProduct(value);
  }
  render() {
    const { search } = this.state;
    return (
      <div>
        <Link to="/product/add" style={style.Link}>
          <Button variant="contained" color="primary" startIcon={<AddCircle />}>
            <Typography>Thêm</Typography>
          </Button>
        </Link>

        <Input
          type="search"
          name="search"
          value={search}
          onChange={this.onChange}
          startAdornment={
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          }
        />

        <ProductList />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    actSearchProduct : (searchValue) => {
      dispatch(actSearchProduct(searchValue))
    }
  }
} 
export default connect(null, mapDispatchToProps)(ProductListPage);
