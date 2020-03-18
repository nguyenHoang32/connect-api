import React from 'react';
import { NavLink } from 'react-router-dom';
class Menu extends React.Component{
    render(){
        return(
            <div>
                <ul>
                <li>
                    <NavLink to="/" exact activeClassName="active">Trang chủ</NavLink>
                </li>
                <li>
                    <NavLink to="/products" activeClassName="active">Quản lí sản phẩm</NavLink>
                </li>
                </ul>
                
          </div>           
        )
    }
}
export default Menu;