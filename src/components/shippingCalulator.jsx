import { useState, useEffect } from "react";
import api from "../axios"; // Your axios instance
// import group from "../assets/Group.png";
export default function ShippingCalculator() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [formData, setFormData] = useState({
    origin: "USA",
    length: "",
    width: "",
    height: "",
    weight: "",
    category: "", // Will be set once categories load
    itemValue: "",
  });

  const [result, setResult] = useState(null);

  // 1. Fetch Categories from Backend on mount
  useEffect(() => {
    api.get("categories/")
      .then((res) => {
        setCategories(res.data);
        if (res.data.length > 0) {
          setFormData(prev => ({ ...prev, category: res.data[0].name }));
        }
      })
      .catch((err) => console.error("Failed to load categories", err));
  }, []);

  const calculatePrice = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    // Map frontend names to backend expected names
    const payload = {
      origin: formData.origin,
      length: formData.length,
      width: formData.width,
      height: formData.height,
      weight: formData.weight,
      category: formData.category,
      item_value: formData.itemValue, // Backend expects item_value
    };

    try {
      // 2. Call the backend calculate action
      const response = await api.post("calculator/calculate/", payload);
      setResult(response.data);
    } catch (err) {
      const msg = err.response?.data?.error || "Calculation failed. Please check your inputs.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="calculator" className="min-h-screen bg-gray-50 py-10 px-4 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-blue-600 p-6 text-white text-center">
          <h1 className="text-2xl font-bold">Instant all-in shipping estimate</h1>
          <p className="text-blue-100 opacity-90">From UK & US to Barbados - including duties, VAT, and local fees.</p>
        </div>

        <div className="p-8 space-y-6">
          {/* Origin and Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">From Country</label>
              <select
                className="w-full border rounded-lg p-2.5 bg-gray-50"
                value={formData.origin}
                onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
              >
                <option value="USA">United States (USD)</option>
                <option value="UK">United Kingdom (GBP)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Item Category</label>
              <select
                className="w-full border rounded-lg p-2.5 bg-gray-50"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                {categories.map((c) => (
                  <option key={c.id || c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Dimensions and Weight */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["length", "width", "height", "weight"].map((dim) => (
              <div key={dim}>
                <label className="block text-sm font-medium mb-1 capitalize">
                  {dim} {dim === "weight" ? "(kg)" : "(cm)"}
                </label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full border rounded-lg p-2.5"
                  value={formData[dim]}
                  onChange={(e) => setFormData({ ...formData, [dim]: e.target.value })}
                />
              </div>
            ))}
          </div>

          {/* Item Value */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Item Value ({formData.origin === "UK" ? "£" : "$"})
            </label>
            <input
              type="number"
              className="w-full border rounded-lg p-2.5"
              placeholder="0.00"
              value={formData.itemValue}
              onChange={(e) => setFormData({ ...formData, itemValue: e.target.value })}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            onClick={calculatePrice}
            disabled={loading}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition duration-200 shadow-lg ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Calculating..." : "Generate Price"}
          </button>

          {/* Results Section */}
          {result && (
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100 animate-in fade-in duration-500">
              <h2 className="text-center text-gray-600 uppercase tracking-widest text-xs font-bold mb-2">
                Total to your door
              </h2>
              <div className="text-center text-4xl font-black text-blue-700 mb-6">
                {result.currency} {result.total}
              </div>

              <div className="space-y-2 border-t border-blue-200 pt-4 text-sm">
                <div className="flex justify-between">
                  <span>Billable Weight:</span>
                  <span className="font-semibold">{result.billable_weight} kg</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Fee:</span>
                  <span className="font-semibold">{result.breakdown.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Est. Duties:</span>
                  <span className="font-semibold">{result.breakdown.duties.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Est. VAT:</span>
                  <span className="font-semibold">{result.breakdown.vat.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Local Handling:</span>
                  <span className="font-semibold">{result.breakdown.local_fees.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-blue-800">
                  <span>Service Fee (Margin):</span>
                  <span className="font-semibold">{result.breakdown.margin.toFixed(2)}</span>
                </div>
              </div>

              <p className="mt-4 text-[10px] text-gray-500 italic text-center uppercase">
                * This is an estimate based on current Barbados customs rules and your defined billable weight.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}