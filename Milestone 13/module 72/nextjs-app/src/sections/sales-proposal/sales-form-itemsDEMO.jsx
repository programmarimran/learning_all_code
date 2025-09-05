// import React, { useState, useEffect } from 'react';
// import { Calendar, Plus, Trash2, Check } from 'lucide-react';

// const SalesProposalForm = ({ items = [], checks = {} }) => {
//   const [selectedItem, setSelectedItem] = useState('');
//   const [selectedOptions, setSelectedOptions] = useState(null);
//   const [newRows, setNewRows] = useState([]);
//   const [showQuantityIn, setShowQuantityIn] = useState(true);

//   const [formData, setFormData] = useState({
//     subject: '',
//     related: 'None selected',
//     date: '05-09-2025',
//     openTill: '05-10-2025',
//     currency: 'EUR €',
//     discountType: 'No discount',
//     tags: [],
//     allowComments: true,
//     status: 'Draft',
//     assigned: 'to to',
//     to: '',
//     address: '',
//     city: '',
//     state: '',
//     country: 'None selected',
//     zipCode: '',
//     email: '',
//     phone: ''
//   });

//   const [currentItem, setCurrentItem] = useState({
//     description: '',
//     longDescription: '',
//     expirationDate: '',
//     brand: 'None selected',
//     sku1: '',
//     width: '',
//     hsnCode: '',
//     sn: '',
//     imei: '',
//     expiryDate: '',
//     qty: '1',
//     rate: 'Rate',
//     unit: '',
//     tax: '10.00',
//     amount: '10.00'
//   });

//   const [totals, setTotals] = useState({
//     subTotal: '0.00 €',
//     discount: '-0.00 €',
//     adjustment: '0.00 €'
//   });

//   // Handle item selection from dropdown
//   const handleItemChange = (value) => {
//     setSelectedItem(value);
//     const option = items.find((item) => item.id === parseInt(value)) || items.find((item) => item.name === value);
//     setSelectedOptions(option || null);
//   };

//   useEffect(() => {
//     if (selectedOptions) {
//       setCurrentItem({
//         description: selectedOptions.description || '',
//         longDescription: selectedOptions.long_description || '',
//         expirationDate: selectedOptions.expiration_date || '',
//         brand: selectedOptions.brand?.name || selectedOptions.item_group || 'None selected',
//         sku1: selectedOptions.sku || '',
//         width: selectedOptions.width || '',
//         hsnCode: selectedOptions.hsn_code || '',
//         sn: selectedOptions.serial_number || '',
//         imei: selectedOptions.imei || '',
//         expiryDate: selectedOptions.expiry_date || '',
//         qty: selectedOptions.quantity || '1',
//         rate: selectedOptions.price || 'Rate',
//         unit: selectedOptions.unit || '',
//         tax: selectedOptions.tax_1 || '10.00',
//         amount: selectedOptions.quantity && selectedOptions.price 
//           ? (selectedOptions.quantity * parseFloat(selectedOptions.price)).toFixed(2) 
//           : '10.00'
//       });
//     }
//   }, [selectedOptions]);

//   const addItemRow = () => {
//     if (!selectedOptions) return;
    
//     const itemData = {
//       ...currentItem,
//       item: selectedOptions.name,
//       id: `item-${Date.now()}-${Math.floor(Math.random() * 1000)}`
//     };
//     setNewRows([...newRows, itemData]);
    
//     // Reset selection
//     setSelectedItem('');
//     setSelectedOptions(null);
//     setCurrentItem({
//       description: '',
//       longDescription: '',
//       expirationDate: '',
//       brand: 'None selected',
//       sku1: '',
//       width: '',
//       hsnCode: '',
//       sn: '',
//       imei: '',
//       expiryDate: '',
//       qty: '1',
//       rate: 'Rate',
//       unit: '',
//       tax: '10.00',
//       amount: '10.00'
//     });
//   };

//   const removeRow = (id) => {
//     setNewRows(newRows.filter((r) => r.id !== id));
//   };

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleItemFieldChange = (field, value) => {
//     setCurrentItem(prev => {
//       const updated = { ...prev, [field]: value };
      
//       // Auto-calculate amount when qty or rate changes
//       if (field === 'qty' || field === 'rate') {
//         const qty = parseFloat(field === 'qty' ? value : updated.qty) || 0;
//         const rate = parseFloat(field === 'rate' ? value : updated.rate) || 0;
//         updated.amount = (qty * rate).toFixed(2);
//       }
      
//       return updated;
//     });
//   };

//   const onSubmit = () => {
//     const payload = {
//       ...formData,
//       items: newRows,
//       totals
//     };
//     console.log('FINAL PAYLOAD:', payload);
//     // Send payload to backend here
//   };

//   const currencyOptions = ['EUR €', 'USD $', 'GBP £', 'JPY ¥'];
//   const discountOptions = ['No discount', 'Before Tax', 'After Tax'];
//   const statusOptions = ['Draft', 'Sent', 'Accepted', 'Declined'];
//   const assignedOptions = ['to to', 'John Doe', 'Jane Smith', 'Admin User'];
//   const relatedOptions = ['None selected', 'Lead', 'Customer'];
//   const countryOptions = ['None selected', 'Bangladesh', 'USA', 'UK', 'Germany'];
//   const brandOptions = ['None selected', 'Brand A', 'Brand B', 'Brand C'];

//   return (
//     <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
//       <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="space-y-6">
        
//         {/* Header Fields */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-lg shadow-sm">
          
//           {/* Left Column */}
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">* Subject</label>
//               <input
//                 type="text"
//                 value={formData.subject}
//                 onChange={(e) => handleInputChange('subject', e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder=""
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">* Related</label>
//               <select
//                 value={formData.related}
//                 onChange={(e) => handleInputChange('related', e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 {relatedOptions.map((option) => (
//                   <option key={option} value={option}>{option}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">* Date</label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     value={formData.date}
//                     onChange={(e) => handleInputChange('date', e.target.value)}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
//                   />
//                   <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Open Till</label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     value={formData.openTill}
//                     onChange={(e) => handleInputChange('openTill', e.target.value)}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
//                   />
//                   <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">* Currency</label>
//                 <select
//                   value={formData.currency}
//                   onChange={(e) => handleInputChange('currency', e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   {currencyOptions.map((option) => (
//                     <option key={option} value={option}>{option}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Discount type</label>
//                 <select
//                   value={formData.discountType}
//                   onChange={(e) => handleInputChange('discountType', e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   {discountOptions.map((option) => (
//                     <option key={option} value={option}>{option}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">🏷 Tags</label>
//               <input
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder=""
//               />
//             </div>

//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="allowComments"
//                 checked={formData.allowComments}
//                 onChange={(e) => handleInputChange('allowComments', e.target.checked)}
//                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//               />
//               <label htmlFor="allowComments" className="ml-2 block text-sm text-gray-900">
//                 Allow Comments
//               </label>
//             </div>
//           </div>

//           {/* Middle Column */}
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//               <select
//                 value={formData.status}
//                 onChange={(e) => handleInputChange('status', e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 {statusOptions.map((option) => (
//                   <option key={option} value={option}>{option}</option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Assigned</label>
//               <select
//                 value={formData.assigned}
//                 onChange={(e) => handleInputChange('assigned', e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 {assignedOptions.map((option) => (
//                   <option key={option} value={option}>{option}</option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">* To</label>
//               <textarea
//                 value={formData.to}
//                 onChange={(e) => handleInputChange('to', e.target.value)}
//                 rows={3}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//               <textarea
//                 value={formData.address}
//                 onChange={(e) => handleInputChange('address', e.target.value)}
//                 rows={4}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
//                 <input
//                   type="text"
//                   value={formData.city}
//                   onChange={(e) => handleInputChange('city', e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
//                 <input
//                   type="text"
//                   value={formData.state}
//                   onChange={(e) => handleInputChange('state', e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
//                 <select
//                   value={formData.country}
//                   onChange={(e) => handleInputChange('country', e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   {countryOptions.map((option) => (
//                     <option key={option} value={option}>{option}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
//                 <input
//                   type="text"
//                   value={formData.zipCode}
//                   onChange={(e) => handleInputChange('zipCode', e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">* Email</label>
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => handleInputChange('email', e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
//               <input
//                 type="tel"
//                 value={formData.phone}
//                 onChange={(e) => handleInputChange('phone', e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Item Selection */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <div className="flex items-center gap-4 mb-6">
//             <div className="flex-1">
//               <select
//                 value={selectedItem}
//                 onChange={(e) => handleItemChange(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Add item</option>
//                 {items.map((item) => (
//                   <option key={item.id} value={item.id}>
//                     {item.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <button
//               type="button"
//               onClick={addItemRow}
//               disabled={!selectedOptions}
//               className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
//             >
//               <Plus className="h-4 w-4" />
//             </button>
            
//             <div className="flex items-center gap-2">
//               <span className="text-sm text-gray-700">Show quantity in</span>
//               <button
//                 type="button"
//                 onClick={() => setShowQuantityIn(!showQuantityIn)}
//                 className={`px-3 py-1 rounded-full text-xs font-medium ${
//                   showQuantityIn 
//                     ? 'bg-blue-100 text-blue-800' 
//                     : 'bg-gray-100 text-gray-800'
//                 }`}
//               >
//                 {showQuantityIn ? 'Qty' : 'Hours'}
//               </button>
//               <span className="text-sm text-gray-700">Hours</span>
//               <span className="text-sm text-gray-700">Qty/Hours</span>
//             </div>
//           </div>

//           {/* Items Table */}
//           <div className="overflow-x-auto">
//             <table className="min-w-full border border-gray-200 rounded-lg">
//               <thead className="bg-blue-50">
//                 <tr>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
//                     ⚫ Item
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
//                     Description
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
//                     Expiration Date
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
//                     Brand
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
//                     SKU1
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
//                     WIDTH
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
//                     HSN Code
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
//                     SN
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
//                     IMEI
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
//                     Expiry Date
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
//                     Qty
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
//                     Rate
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
//                     Tax
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
//                     Amount
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
//                     🗑
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {/* Current item being edited */}
//                 {selectedOptions && (
//                   <tr className="bg-blue-50">
//                     <td className="px-4 py-3 text-sm">
//                       <div className="flex items-center gap-2">
//                         <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                         <input
//                           type="text"
//                           value={selectedOptions.name}
//                           disabled
//                           className="w-full px-2 py-1 text-sm bg-transparent border-none focus:outline-none"
//                         />
//                       </div>
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <div className="space-y-1">
//                         <textarea
//                           value={currentItem.description}
//                           onChange={(e) => handleItemFieldChange('description', e.target.value)}
//                           rows={2}
//                           className="w-full px-2 py-1 text-sm border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
//                           placeholder="Description"
//                         />
//                         <textarea
//                           value={currentItem.longDescription}
//                           onChange={(e) => handleItemFieldChange('longDescription', e.target.value)}
//                           rows={2}
//                           className="w-full px-2 py-1 text-sm border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
//                           placeholder="Long description"
//                         />
//                       </div>
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <div className="relative">
//                         <input
//                           type="text"
//                           value={currentItem.expirationDate}
//                           onChange={(e) => handleItemFieldChange('expirationDate', e.target.value)}
//                           className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 pr-8"
//                         />
//                         <Calendar className="absolute right-2 top-1.5 h-3 w-3 text-gray-400" />
//                       </div>
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <select
//                         value={currentItem.brand}
//                         onChange={(e) => handleItemFieldChange('brand', e.target.value)}
//                         className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                       >
//                         {brandOptions.map((option) => (
//                           <option key={option} value={option}>{option}</option>
//                         ))}
//                       </select>
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <input
//                         type="text"
//                         value={currentItem.sku1}
//                         onChange={(e) => handleItemFieldChange('sku1', e.target.value)}
//                         className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                       />
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <textarea
//                         value={currentItem.width}
//                         onChange={(e) => handleItemFieldChange('width', e.target.value)}
//                         rows={3}
//                         className="w-full px-2 py-1 text-sm border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
//                       />
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <input
//                         type="text"
//                         value={currentItem.hsnCode}
//                         onChange={(e) => handleItemFieldChange('hsnCode', e.target.value)}
//                         className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                       />
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <input
//                         type="text"
//                         value={currentItem.sn}
//                         onChange={(e) => handleItemFieldChange('sn', e.target.value)}
//                         className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                       />
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <input
//                         type="text"
//                         value={currentItem.imei}
//                         onChange={(e) => handleItemFieldChange('imei', e.target.value)}
//                         className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                       />
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <div className="relative">
//                         <input
//                           type="text"
//                           value={currentItem.expiryDate}
//                           onChange={(e) => handleItemFieldChange('expiryDate', e.target.value)}
//                           className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 pr-8"
//                         />
//                         <Calendar className="absolute right-2 top-1.5 h-3 w-3 text-gray-400" />
//                       </div>
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <div className="space-y-1">
//                         <input
//                           type="text"
//                           value={currentItem.qty}
//                           onChange={(e) => handleItemFieldChange('qty', e.target.value)}
//                           className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                         />
//                         <div className="text-xs text-gray-500">Unit</div>
//                       </div>
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <div className="space-y-1">
//                         <input
//                           type="text"
//                           value={currentItem.rate}
//                           onChange={(e) => handleItemFieldChange('rate', e.target.value)}
//                           className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                           placeholder="Rate"
//                         />
//                         <div className="text-xs text-gray-500">Unit</div>
//                       </div>
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <select
//                         value={currentItem.tax}
//                         onChange={(e) => handleItemFieldChange('tax', e.target.value)}
//                         className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                       >
//                         <option value="10.00">10.00 %</option>
//                         <option value="5.00">5.00 %</option>
//                         <option value="15.00">15.00 %</option>
//                         <option value="0.00">0.00 %</option>
//                       </select>
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <input
//                         type="text"
//                         value={currentItem.amount}
//                         disabled
//                         className="w-full px-2 py-1 text-sm bg-gray-50 border rounded focus:outline-none"
//                       />
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <button
//                         type="button"
//                         onClick={addItemRow}
//                         className="p-1 text-blue-600 hover:text-blue-800 focus:outline-none"
//                       >
//                         <Check className="h-4 w-4" />
//                       </button>
//                     </td>
//                   </tr>
//                 )}

//                 {/* Added items */}
//                 {newRows.map((row) => (
//                   <tr key={row.id} className="hover:bg-gray-50">
//                     <td className="px-4 py-3 text-sm">
//                       <div className="flex items-center gap-2">
//                         <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
//                         {row.item}
//                       </div>
//                     </td>
//                     <td className="px-4 py-3 text-sm">{row.description}</td>
//                     <td className="px-4 py-3 text-sm">{row.expirationDate}</td>
//                     <td className="px-4 py-3 text-sm">{row.brand}</td>
//                     <td className="px-4 py-3 text-sm">{row.sku1}</td>
//                     <td className="px-4 py-3 text-sm">{row.width}</td>
//                     <td className="px-4 py-3 text-sm">{row.hsnCode}</td>
//                     <td className="px-4 py-3 text-sm">{row.sn}</td>
//                     <td className="px-4 py-3 text-sm">{row.imei}</td>
//                     <td className="px-4 py-3 text-sm">{row.expiryDate}</td>
//                     <td className="px-4 py-3 text-sm">{row.qty}</td>
//                     <td className="px-4 py-3 text-sm">{row.rate}</td>
//                     <td className="px-4 py-3 text-sm">{row.tax} %</td>
//                     <td className="px-4 py-3 text-sm">{row.amount}</td>
//                     <td className="px-4 py-3 text-sm">
//                         <button 
//                             type="button"
//                             onClick={() => removeRow(row.id)}
//                             className="p-1 text-red-600 hover:text-red-800 focus:outline-none"
//                         >
//                             <Trash2 className="h-4 w-4" />
//                         </button>
//                     </td>
//                   </tr>
//                 ))}
//                 </tbody>
//             </table>
//           </div>
//         </div>
//         {/* Totals Section */}
//         <div className="bg-white p-6 rounded-lg shadow-sm max-w-md ml-auto">
//           <div className="space-y-4">
//             <div className="flex justify-between items-center">
//                 <span className="text-sm text-gray-700">Sub Total</span>
//                 <span className="text-sm font-medium text-gray-900">{totals.subTotal}</span>
//             </div>
//             <div className="flex justify-between items-center">
//                 <span className="text-sm text-gray-700">Discount</span>
//                 <span className="text-sm font-medium text-gray-900">{totals.discount}</span>
//             </div>
//             <div className="flex justify-between items-center">
//                 <span className="text-sm text-gray-700">Adjustment</span>
//                 <span className="text-sm font-medium text-gray-900">{totals.adjustment}</span>
//             </div>
//             <div className="border-t border-gray-200"></div>
//             <div className="flex justify-between items-center">
//                 <span className="text-lg font-semibold text-gray-900">Total</span>
//                 <span className="text-lg font-semibold text-gray-900">{totals.subTotal}</span>
//             </div>
//           </div>
//         </div>
//         <div className="text-right">
//           <button
//             type="submit"
//             className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
//           >
//             Save Proposal
//             </button>
//         </div>
//       </form>
//     </div>
//   );
// }
// export default SalesProposalForm;



