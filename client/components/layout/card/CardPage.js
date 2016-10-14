import React from 'react';
import CardPage from './Card';
import BarCart from './BarCart';
import { getPeople } from '../../../xhr';
import { Row } from 'react-bootstrap';


let CardExampleWithAvatar = React.createClass({

  getInitialState: function() {
    return {
      products: []
    }
  },

  componentDidMount: function() {
    getPeople().then(results => {
      this.setState({
        products: results.data.data
      })
    })
  },

  render: function() {
    return (
      <div>
      <BarCart />
      <Row className="show-grid">
        {this.state.products.map(product => {
          return <CardPage
                  id={product.id_product}
                  name={product.name_product}
                  category={product.category_product}
                  desc={product.description_product}
                  price={product.price_product}
                  key={product.name_product} />
        })}
      </Row>
      </div>
    )
  }
})

export default CardExampleWithAvatar;