// app/admin/page.jsx - Admin dashboard

'use client';

import { useState, useEffect } from 'react';
import { products } from '../lib/products';
import { Edit2, Trash2, Plus } from 'lucide-react';

export default function AdminPage() {
  const [tab, setTab] = useState('products');
  const [showAddForm, setShowAddForm] = useState(false);

  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);

  useEffect(() => {
    setLoadingOrders(true);
    fetch('/api/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data.orders || []))
      .catch(() => setOrders([]))
      .finally(() => setLoadingOrders(false));
  }, []);

  const [newProduct, setNewProduct] = useState({
    sku: '',
    name: '',
    manufacturer: 'Genmega',
    category: 'Cassettes',
    cost: 0,
    price: 0,
    description: '',
    inStock: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseFloat(value) : value
    }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    // In production, send to backend API
    console.log('New product:', newProduct);
    alert('Product added successfully! (This is a demo - data is not persisted)');
    setShowAddForm(false);
    setNewProduct({
      sku: '',
      name: '',
      manufacturer: 'Genmega',
      category: 'Cassettes',
      cost: 0,
      price: 0,
      description: '',
      inStock: true
    });
  };

  return (
    <>
      <div className="bg-navy text-white py-8">
        <div className="container">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-300 mt-2">Manage products, orders, and repairs</p>
        </div>
      </div>

      <div className="container py-12">
        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8 border-b">
          {['products', 'orders', 'repairs', 'settings'].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`py-2 px-4 font-bold transition-colors ${
                tab === t
                  ? 'text-navy border-b-2 border-navy'
                  : 'text-gray-600 hover:text-navy'
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Tab */}
        {tab === 'products' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Products ({products.length})</h2>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="btn-primary flex items-center space-x-2"
              >
                <Plus size={20} />
                <span>Add Product</span>
              </button>
            </div>

            {/* Add Product Form */}
            {showAddForm && (
              <div className="card mb-8">
                <h3 className="text-xl font-bold mb-6">Add New Product</h3>
                <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label>SKU *</label>
                    <input
                      type="text"
                      name="sku"
                      value={newProduct.sku}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Product Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={newProduct.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Manufacturer</label>
                    <select
                      name="manufacturer"
                      value={newProduct.manufacturer}
                      onChange={handleInputChange}
                    >
                      <option>Genmega</option>
                      <option>Hyosung</option>
                      <option>Universal</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select
                      name="category"
                      value={newProduct.category}
                      onChange={handleInputChange}
                    >
                      <option>Cassettes</option>
                      <option>Dispensers</option>
                      <option>Printers</option>
                      <option>Keypads</option>
                      <option>Card Readers</option>
                      <option>Power Supplies</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Cost Price *</label>
                    <input
                      type="number"
                      name="cost"
                      value={newProduct.cost}
                      onChange={handleInputChange}
                      step="0.01"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Selling Price *</label>
                    <input
                      type="number"
                      name="price"
                      value={newProduct.price}
                      onChange={handleInputChange}
                      step="0.01"
                      required
                    />
                  </div>
                  <div className="form-group md:col-span-2">
                    <label>Description</label>
                    <textarea
                      name="description"
                      value={newProduct.description}
                      onChange={handleInputChange}
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="flex items-center md:col-span-2">
                    <input
                      type="checkbox"
                      name="inStock"
                      checked={newProduct.inStock}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <label className="m-0">In Stock</label>
                  </div>
                  <div className="md:col-span-2 flex space-x-4">
                    <button type="submit" className="btn-primary flex-1">
                      Add Product
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="btn-outline text-navy border-navy flex-1"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Products Table */}
            <div className="card overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left px-4 py-2 font-bold">SKU</th>
                    <th className="text-left px-4 py-2 font-bold">Product Name</th>
                    <th className="text-left px-4 py-2 font-bold">Manufacturer</th>
                    <th className="text-left px-4 py-2 font-bold">Category</th>
                    <th className="text-right px-4 py-2 font-bold">Price</th>
                    <th className="text-center px-4 py-2 font-bold">Stock</th>
                    <th className="text-center px-4 py-2 font-bold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.slice(0, 10).map(product => (
                    <tr key={product.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-bold text-sm">{product.sku}</td>
                      <td className="px-4 py-3">
                        <div className="font-bold text-sm">{product.name.substring(0, 30)}</div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{product.manufacturer}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{product.category}</td>
                      <td className="px-4 py-3 text-right font-bold text-orange-600">{product.pricing === 'quote' ? <span className="text-navy">Quote</span> : `$${product.price.toFixed(2)}`}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-xs font-bold ${product.inStock ? 'text-accent-green' : 'text-red-600'}`}>
                          {product.inStock ? '✓' : '✗'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center space-x-2">
                        <button className="text-gray-600 hover:text-gray-700" title="Edit">
                          <Edit2 size={18} />
                        </button>
                        <button className="text-red-600 hover:text-red-800" title="Delete">
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-center py-4 text-gray-600 border-t">
                <p>Showing 10 of {products.length} products</p>
                <button className="text-navy font-bold mt-2">Load More</button>
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {tab === 'orders' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Orders ({orders.length})</h2>
              <button
                onClick={() => {
                  setLoadingOrders(true);
                  fetch('/api/orders')
                    .then((res) => res.json())
                    .then((data) => setOrders(data.orders || []))
                    .catch(() => setOrders([]))
                    .finally(() => setLoadingOrders(false));
                }}
                className="btn-outline text-navy border-navy text-sm py-2 px-4"
              >
                Refresh
              </button>
            </div>

            {loadingOrders ? (
              <div className="card text-center py-12 text-gray-500">Loading orders…</div>
            ) : orders.length === 0 ? (
              <div className="card text-center py-12">
                <p className="text-gray-600 mb-2">No orders yet.</p>
                <p className="text-sm text-gray-500">
                  Paid orders appear here automatically once the Stripe webhook is connected.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="card">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4 pb-4 border-b">
                      <div>
                        <div className="font-bold">{order.customer?.name || 'Customer'}</div>
                        <div className="text-sm text-gray-600">{order.customer?.email}</div>
                        {order.customer?.phone && (
                          <div className="text-sm text-gray-600">{order.customer.phone}</div>
                        )}
                        <div className="text-xs text-gray-400 mt-1">
                          {new Date(order.date).toLocaleString()} · {order.id.slice(-12)}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
                          {order.status || 'Paid'}
                        </span>
                        <div className="text-2xl font-bold text-orange-600">
                          ${Number(order.total).toFixed(2)}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase mb-2">Items</div>
                        <ul className="space-y-1 text-sm">
                          {order.items?.map((it, i) => (
                            <li key={i} className="flex justify-between">
                              <span>{it.quantity} × {it.name}</span>
                              <span className="text-gray-600">${Number(it.amount).toFixed(2)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase mb-2">Ship to</div>
                        {order.shippingAddress ? (
                          <div className="text-sm text-gray-600">
                            {order.shippingAddress.line1}<br />
                            {order.shippingAddress.line2 && <>{order.shippingAddress.line2}<br /></>}
                            {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postal_code}
                          </div>
                        ) : (
                          <div className="text-sm text-gray-400">No address on file</div>
                        )}
                        <div className="text-xs text-gray-500 mt-3">
                          Subtotal ${Number(order.subtotal).toFixed(2)} · Shipping ${Number(order.shipping).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Repairs Tab */}
        {tab === 'repairs' && (
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Repair Requests</h2>
            <p className="text-gray-600">No repair requests yet. Customer repair requests will appear here.</p>
          </div>
        )}

        {/* Settings Tab */}
        {tab === 'settings' && (
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Settings</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-4">Store Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label>Store Name</label>
                    <input type="text" defaultValue="OSO ATM Parts" />
                  </div>
                  <div className="form-group">
                    <label>Store Email</label>
                    <input type="email" defaultValue="info@osoatm.com" />
                  </div>
                  <div className="form-group">
                    <label>Store Phone</label>
                    <input type="tel" defaultValue="1-800-OSO-ATMS" />
                  </div>
                  <div className="form-group">
                    <label>Tax Rate (%)</label>
                    <input type="number" defaultValue="7.5" step="0.1" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">Payment Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <div className="font-bold">Stripe</div>
                      <div className="text-sm text-gray-600">Payment processing</div>
                    </div>
                    <button className="btn-secondary text-sm py-1">Configure</button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <div className="font-bold">PayPal</div>
                      <div className="text-sm text-gray-600">Alternative payments</div>
                    </div>
                    <button className="btn-secondary text-sm py-1">Configure</button>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <button className="btn-primary">Save Settings</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="bg-gray-50 py-8 border-t mt-12">
        <div className="container">
          <h3 className="font-bold text-lg mb-6">Quick Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="card text-center">
              <div className="text-3xl font-bold text-orange-600">{products.length}</div>
              <div className="text-sm text-gray-600">Total Products</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-accent-green">{products.filter(p => p.inStock).length}</div>
              <div className="text-sm text-gray-600">In Stock</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-navy">${orders.reduce((sum, o) => sum + Number(o.total || 0), 0).toFixed(2)}</div>
              <div className="text-sm text-gray-600">Total Revenue</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-gray-600">{orders.length}</div>
              <div className="text-sm text-gray-600">Orders</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
