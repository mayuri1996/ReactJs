// Menubar.js

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProductForm from '../ProductForm/ProductForm';
import ProductList from '../ProductList/ProductList';
import BillingReport from '../BillingReport/BillingReport';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function Menubar() {
  return (
    <>
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>HardWare</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/productList">Manage-Product</Nav.Link>
            <Nav.Link as={Link} to="/newProduct">Add-Product</Nav.Link>
            <Nav.Link as={Link} to="/billing">Billing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/newProduct" element={<ProductForm />} />
        <Route path="/billing" element={<BillingReport />} />
      </Routes>
      </Router>
    </>
  );
}

export default Menubar;
