//import React from 'react'
import { Table, Container, Form, InputGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//import { PDFDownloadLink } from '@react-pdf/renderer';
import { data } from './data.js'
import './App.css'
import { useState } from 'react'
//import MyDocument from './MyDocument.jsx';

export default function Download() {
  const [search,setSearch] = useState('')
  console.log(search)



  return (
    <>
      <div className="app">
        <Container>
          <h1 className='mx-4'>Contact Keeper</h1>

          <Form>
            <InputGroup className="px-5 mb-3">
              <Form.Control placeholder='Search contacts' onChange={(e)=>setSearch(e.target.value)}/>
            </InputGroup>
          </Form>

          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>

            <tbody>
              {data.filter((item)=>{return search.toLowerCase() === '' ? item : item.first_name.toLowerCase().includes(search)}).map((item) => (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>))}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  )
}
