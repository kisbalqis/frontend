import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";

function EditBarang() {
    
    const Edit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/products', {
                nama_barang:nama_barang,
                harga_beli:harga_beli,
                harga_jual:harga_jual,
                stock:stock
            });
            history.push("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={Edit}>
          <div className="field">
            <label className="label">Nama Barang</label>
            <div className="control">
              <input type="text" value={nama_barang} className="input" placeholder="Nama Barang" onChange={(e) => setNamaBarang(e.target.value)}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Harga Beli</label>
            <div className="control">
              <input type="number" value={harga_beli} className="input" placeholder="Harga Beli" onChange={(e) => setHargaBeli(e.target.value)}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Harga Jual</label>
            <div className="control">
              <input type="number" value={harga_jual} className="input" placeholder="Harga Jual" onChange={(e) => setHargaJual(e.target.value)}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Stock</label>
            <div className="control">
              <input type="number" value={stock} className="input" placeholder="Stock" onChange={(e) => setStock(e.target.value)}/>
            </div>
          </div>
          <div className="field">
          <button type="submit" className="button is-danger">
              Cancel
            </button>
            <button type="submit" className="button is-success mx-4">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditBarang