import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';


function TableData() {
    const [product, setProducts]=useState([]);
    const getProducts=async()=>{
        let res = await axios.get('http://localhost:5000/products')
        // console.log(res);
        setProducts(res.data)
    }
    useEffect(()=>{
        getProducts();
    },[]);

  return (
    <table className="table is-striped is-fullwidth">
        {/* <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <tbody>
            {users.map((user, index) => (
                <tr>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
            ))}
            </tbody>
        </thead> */}
        <thead>
            <tr>
                <th>No</th>
                <th>Nama Barang</th>
                <th>Harga Jual</th>
                <th>Harga Jual</th>
                <th>Stock</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {product?.map((product, index) => (
                <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.nama_barang}</td>
                    <td>{product.harga_beli}</td>
                    <td>{product.harga_jual}</td>
                    <td>{product.stock}</td>
                    <td>
                        <button className="button is-success is-fullwidth">
                            <a href={"/Editbarang/"+ product.id}>Edit</a>
                        </button>
                        <button className="button is-danger is-fullwidth p-2">Hapus</button>
                    </td>
                </tr>
            ))}
            </tbody>
        
    </table>
  )
}

export default TableData