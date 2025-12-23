import { useState, useEffect } from "react";
import api from "../axios";
import { useNavigate } from "react-router";

const AdminShippingConfig = () => {
//   const [config, setConfig] = useState({ vat_rate: 0, local_handling_fee: 0, margin_rate: 0 });
//   const [rates, setRates] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [newRate, setNewRate] = useState({ origin_country: "USA", min_weight: "", max_weight: "", price: "" });
//   const [newCategory, setNewCategory] = useState({ name: "", duty_rate: "" });

//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/immutability
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     Promise.all([
//       api.get("shipping-config/1/"),
//       api.get("shipping-rates/"),
//       api.get("categories/")
//     ]).then(([confRes, rateRes, catRes]) => {
//       setConfig(confRes.data);
//       setRates(rateRes.data);
//       setCategories(catRes.data);
//       setLoading(false);
//     }).catch(err => {
//       console.error(err);
//       setLoading(false);
//     });
//   };

//   const handleConfigSubmit = (e) => {
//     e.preventDefault();
//     api.put("shipping-config/1/", config)
//       .then(() => alert("Global Settings Updated!"))
//       .catch(err => {
//         const msg = err.response?.data ? JSON.stringify(err.response.data) : "Update failed";
//         alert("Error: " + msg);
//       });
//   };

//   const handleAddRate = (e) => {
//     e.preventDefault();
//     api.post("shipping-rates/", newRate)
//       .then(() => {
//         fetchData();
//         setNewRate({ origin_country: "USA", min_weight: "", max_weight: "", price: "" });
//       })
//       .catch(err => {
//         const errorData = err.response?.data;
//         let errorMessage = "Could not add rate band.";
        
//         if (typeof errorData === 'object') {
//             errorMessage = Object.values(errorData).flat().join("\n");
//         }
//         alert(errorMessage);
//       });
//   };

//   const handleDeleteRate = (id) => {
//     if (window.confirm("Delete this rate band?")) {
//       api.delete(`shipping-rates/${id}/`)
//         .then(() => fetchData())
//         // eslint-disable-next-line no-unused-vars
//         .catch(err => alert("Delete failed"));
//     }
//   };

//   const handleAddCategory = (e) => {
//     e.preventDefault();
//     api.post("categories/", newCategory)
//       .then(() => {
//         fetchData();
//         setNewCategory({ name: "", duty_rate: "" });
//       })
//       .catch(err => {
//         const errorData = err.response?.data;
//         let errorMessage = "Could not add category.";
//         if (typeof errorData === 'object') {
//             errorMessage = Object.values(errorData).flat().join("\n");
//         }
//         alert(errorMessage);
//       });
//   };

//   const handleDeleteCategory = (id) => {
//     if (window.confirm("Delete this category?")) {
//       api.delete(`categories/${id}/`)
//         .then(() => fetchData())
//         // eslint-disable-next-line no-unused-vars
//         .catch(err => alert("Delete failed"));
//     }
//   };

//   if (loading) return <div className="p-10 text-center">Loading Admin Panel...</div>;


  const navigate = useNavigate();
  const [config, setConfig] = useState({ vat_rate: 0, local_handling_fee: 0, margin_rate: 0 });
  const [rates, setRates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newRate, setNewRate] = useState({ origin_country: "USA", min_weight: "", max_weight: "", price: "" });
  const [newCategory, setNewCategory] = useState({ name: "", duty_rate: "" });

  useEffect(() => {
    // Check if the access token exists in localStorage
    const token = localStorage.getItem("access_token");
    if (!token) {
      // If no token, redirect to the login page
      navigate("/login");
    } else {
      // Fetch shipping configuration data
      // eslint-disable-next-line react-hooks/immutability
      fetchData();
    }
  }, [navigate]);

  const fetchData = () => {
    Promise.all([
      api.get("shipping-config/1/"),
      api.get("shipping-rates/"),
      api.get("categories/")
    ]).then(([confRes, rateRes, catRes]) => {
      setConfig(confRes.data);
      setRates(rateRes.data);
      setCategories(catRes.data);
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  };

  const handleConfigSubmit = (e) => {
    e.preventDefault();
    api.put("shipping-config/1/", config)
      .then(() => alert("Global Settings Updated!"))
      .catch(err => {
        const msg = err.response?.data ? JSON.stringify(err.response.data) : "Update failed";
        alert("Error: " + msg);
      });
  };

  const handleAddRate = (e) => {
    e.preventDefault();
    api.post("shipping-rates/", newRate)
      .then(() => {
        fetchData();
        setNewRate({ origin_country: "USA", min_weight: "", max_weight: "", price: "" });
      })
      .catch(err => {
        const errorData = err.response?.data;
        let errorMessage = "Could not add rate band.";
        if (typeof errorData === 'object') {
            errorMessage = Object.values(errorData).flat().join("\n");
        }
        alert(errorMessage);
      });
  };

  const handleDeleteRate = (id) => {
    if (window.confirm("Delete this rate band?")) {
      api.delete(`shipping-rates/${id}/`)
        .then(() => fetchData())
        .catch(err => alert("Delete failed"));
    }
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    api.post("categories/", newCategory)
      .then(() => {
        fetchData();
        setNewCategory({ name: "", duty_rate: "" });
      })
      .catch(err => {
        const errorData = err.response?.data;
        let errorMessage = "Could not add category.";
        if (typeof errorData === 'object') {
            errorMessage = Object.values(errorData).flat().join("\n");
        }
        alert(errorMessage);
      });
  };

  const handleDeleteCategory = (id) => {
    if (window.confirm("Delete this category?")) {
      api.delete(`categories/${id}/`)
        .then(() => fetchData())
        // eslint-disable-next-line no-unused-vars
        .catch(err => alert("Delete failed"));
    }
  };

  if (loading) return <div className="p-10 text-center">Loading Admin Panel...</div>;

  return (
    <div className="p-8 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">Admin Shipping Dashboard</h1>
      
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-blue-700">1. Global Costs & Margin</h2>
        <form onSubmit={handleConfigSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-6 shadow-sm rounded-xl border">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">VAT Rate (e.g. 0.175)</label>
            <input type="number" step="0.001" className="w-full border p-2 rounded" value={config.vat_rate} 
              onChange={e => setConfig({...config, vat_rate: parseFloat(e.target.value) || 0})} />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Handling Fee ($)</label>
            <input type="number" className="w-full border p-2 rounded" value={config.local_handling_fee} 
              onChange={e => setConfig({...config, local_handling_fee: parseFloat(e.target.value) || 0})} />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Margin (e.g. 0.15)</label>
            <input type="number" step="0.01" className="w-full border p-2 rounded" value={config.margin_rate} 
              onChange={e => setConfig({...config, margin_rate: parseFloat(e.target.value) || 0})} />
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
              Update Global Settings
            </button>
          </div>
        </form>
      </section>

      <div className="grid grid-cols-1 gap-8">
        
        <section>
          <h2 className="text-xl font-semibold mb-4 text-blue-700">2. Shipping Rate Bands</h2>
          <div className="bg-white shadow-sm rounded-xl border overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="p-3">Origin</th>
                  <th className="p-3">Weight Range (kg)</th>
                  <th className="p-3">Price</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {rates.sort((a,b) => a.min_weight - b.min_weight).map(rate => (
                  <tr key={rate.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{rate.origin_country}</td>
                    <td className="p-3">{rate.min_weight} kg - {rate.max_weight} kg</td>
                    <td className="p-3">${rate.price}</td>
                    <td className="p-3 text-center">
                      <button onClick={() => handleDeleteRate(rate.id)} className="text-red-500 hover:text-red-700 font-bold">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <form onSubmit={handleAddRate} className="p-4 bg-blue-50 grid grid-cols-1 md:grid-cols-5 gap-2 border-t">
              <select className="border p-2 rounded bg-white" value={newRate.origin_country} onChange={e => setNewRate({...newRate, origin_country: e.target.value})}>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              <input type="number" step="0.01" placeholder="Min Kg" className="border p-2 rounded bg-white" value={newRate.min_weight} onChange={e => setNewRate({...newRate, min_weight: e.target.value})} required />
              <input type="number" step="0.01" placeholder="Max Kg" className="border p-2 rounded bg-white" value={newRate.max_weight} onChange={e => setNewRate({...newRate, max_weight: e.target.value})} required />
              <input type="number" step="0.01" placeholder="Price" className="border p-2 rounded bg-white" value={newRate.price} onChange={e => setNewRate({...newRate, price: e.target.value})} required />
              <button className="bg-green-600 text-white rounded font-bold hover:bg-green-700">Add Band</button>
            </form>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-blue-700">3. Categories & Duty Rates</h2>
          <div className="bg-white shadow-sm rounded-xl border overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="p-3">Category Name</th>
                  <th className="p-3">Duty Rate</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map(cat => (
                  <tr key={cat.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{cat.name}</td>
                    <td className="p-3">{(cat.duty_rate * 100).toFixed(1)}% ({cat.duty_rate})</td>
                    <td className="p-3 text-center">
                      <button onClick={() => handleDeleteCategory(cat.id)} className="text-red-500 hover:text-red-700 font-bold">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <form onSubmit={handleAddCategory} className="p-4 bg-blue-50 grid grid-cols-1 md:grid-cols-3 gap-2 border-t">
              <input type="text" placeholder="Category Name" className="border p-2 rounded bg-white" value={newCategory.name} onChange={e => setNewCategory({...newCategory, name: e.target.value})} required />
              <input type="number" step="0.001" placeholder="Duty (e.g. 0.2)" className="border p-2 rounded bg-white" value={newCategory.duty_rate} onChange={e => setNewCategory({...newCategory, duty_rate: e.target.value})} required />
              <button className="bg-green-600 text-white rounded font-bold hover:bg-green-700">Add Category</button>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AdminShippingConfig;