import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'


export default function CategoryScreen(props) {
    const category = props.match.params.name
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProductByCategory = async() => {
            await axios.get(`/api/products/categoryProducts/${category}`).then((res) => {
                setProduct(res.data)
            })
        }
        getProductByCategory()
    }, [category])

    return (
        <div>
            <Row>
            {product.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </div>
    )
}
