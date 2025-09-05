// // 'use client';
// // import React from 'react';
// // import {
// //   Box,
// //   Grid,
// //   TextField,
// //   FormControl,
// //   InputLabel,
// //   Select,
// //   MenuItem,
// //   Typography,
// //   Switch,
// //   FormControlLabel,
// //   Chip,
// //   Autocomplete,
// //   Paper,
// //   Button,
// // } from '@mui/material';
// // import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { useForm, Controller } from 'react-hook-form';
// // import dayjs from 'dayjs';

// // const SalesProposalInputField = ({ sales }) => {
// //   // console.log(sales);
// //   const { control, handleSubmit, watch, setValue } = useForm({
// //     defaultValues: {
// //       subject: '',
// //       related: '',
// //         date: dayjs(),
// //         open_till: dayjs(),
 
// //       currency: '',
// //       discount_type: '',
// //       tags: [],
// //       allowComments: true,
// //       status: 'Draft',
// //       assigned: '',
// //       to: '',
// //       amount:0,
// //       payment_mode:""
// //     },
// //   });

// //   const currencyOptions = ['EUR €', 'USD $', 'GBP £', 'JPY ¥'];

// //   const discountOptions = ['No discount', 'Before Tax', 'After Tax'];
// //   const paymentModeOptions = ['installment', 'complited', 'pending'];
// //   const statusOptions = ['Draft', 'Sent', 'Accepted', 'Declined'];

// //   const assignedOptions = ['John Doe', 'Jane Smith', 'Admin User'];

// //   const relatedOptions = ['Lead', 'Customer'];
// //   // const relatedOptions=["lead","thske"]

// //   const tagOptions = ['Laptop', 'PC', 'Pencil'];
// //   // user default info
// //   const userTo = sales.vendor;
// //   const userToArray = Object.entries(userTo).map(([key, value]) => `${key}=${value}`);

// //   const onSubmit = (data) => {
// //     const payload = {
// //       ...data,
// //       date: data.date.format('YYYY-MM-DD'),
// //       open_till: data.open_till.format('YYYY-MM-DD'),
// //       tags: data.tags.join(', '),
// //       to: sales.vendor,
// //     };
// // // onStore(payload)
// //     console.log('Final Payload:', payload);
// //   };

// //   return (
// //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// //       <Paper elevation={0} sx={{ p: 3, backgroundColor: '#f8f9fa' }}>
// //         <form onSubmit={handleSubmit(onSubmit)}>
// //           <Grid container spacing={3}>
// //             {/* Left Column */}
// //             <Grid item xs={12} md={6}>
// //               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
// //                 {/* Subject */}
// //                 <Box>
// //                   <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                     * Subject
// //                   </Typography>
// //                   <Controller
// //                     name="subject"
// //                     control={control}
// //                     render={({ field }) => (
// //                       <TextField
// //                         {...field}
// //                         fullWidth
// //                         variant="outlined"
// //                         size="medium"
// //                         sx={{
// //                           '& .MuiOutlinedInput-root': {
// //                             backgroundColor: 'white',
// //                             borderRadius: 1,
// //                           },
// //                         }}
// //                       />
// //                     )}
// //                   />
// //                 </Box>

// //                 {/* Related */}
// //                 <Box>
// //                   <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                     * Related
// //                   </Typography>
// //                   <Controller
// //                     name="related"
// //                     control={control}
// //                     render={({ field }) => (
// //                       <FormControl fullWidth>
// //                         <Select
// //                           {...field}
// //                           displayEmpty
// //                           variant="outlined"
// //                           sx={{
// //                             backgroundColor: 'white',
// //                             borderRadius: 1,
// //                           }}
// //                         >
// //                           {relatedOptions.map((option) => (
// //                             <MenuItem key={option} value={option}>
// //                               {option}
// //                             </MenuItem>
// //                           ))}
// //                         </Select>
// //                       </FormControl>
// //                     )}
// //                   />
// //                 </Box>

// //                 {/* Date and Open Till */}
// //                 <Grid container spacing={2}>
// //                   <Grid item xs={6}>
// //                     <Box>
// //                       <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                         * Date
// //                       </Typography>
// //                       <Controller
// //                         name="date"
// //                         control={control}
// //                         render={({ field }) => (
// //                           <DatePicker
// //                             {...field}
// //                             format="DD-MM-YYYY"
// //                             slotProps={{
// //                               textField: {
// //                                 fullWidth: true,
// //                                 variant: 'outlined',
// //                                 sx: {
// //                                   '& .MuiOutlinedInput-root': {
// //                                     backgroundColor: 'white',
// //                                     borderRadius: 1,
// //                                   },
// //                                 },
// //                               },
// //                             }}
// //                           />
// //                         )}
// //                       />
// //                     </Box>
// //                   </Grid>
// //                   <Grid item xs={6}>
// //                     <Box>
// //                       <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                         Open Till
// //                       </Typography>
// //                       <Controller
// //                         name="open_till"
// //                         control={control}
// //                         render={({ field }) => (
// //                           <DatePicker
// //                             {...field}
// //                             format="DD-MM-YYYY"
// //                             slotProps={{
// //                               textField: {
// //                                 fullWidth: true,
// //                                 variant: 'outlined',
// //                                 sx: {
// //                                   '& .MuiOutlinedInput-root': {
// //                                     backgroundColor: 'white',
// //                                     borderRadius: 1,
// //                                   },
// //                                 },
// //                               },
// //                             }}
// //                           />
// //                         )}
// //                       />
// //                     </Box>
// //                   </Grid>
// //                 </Grid>
// //                 {/* amount  and payment mode */}
// //                 <Grid container spacing={2}>
// //                   <Grid item xs={6}>
// //                     <Box>
// //                       <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                         Amount
// //                       </Typography>
// //                       <Controller
// //                         name="amount"
// //                         control={control}
// //                         render={({ field }) => (
// //                           <TextField
// //                             {...field}
// //                             fullWidth
// //                             type="number"
// //                             variant="outlined"
// //                             size="medium"
// //                             sx={{
// //                               '& .MuiOutlinedInput-root': {
// //                                 backgroundColor: 'white',
// //                                 borderRadius: 1,
// //                               },
// //                             }}
// //                           />
// //                         )}
// //                       />
// //                     </Box>
// //                   </Grid>
// //                   <Grid item xs={6}>
// //                     <Box>
// //                       <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                         Payment Mode
// //                       </Typography>
// //                       <Controller
// //                         name="payment_mode"
// //                         control={control}
// //                         render={({ field }) => (
// //                           <FormControl fullWidth>
// //                             <Select
// //                               {...field}
// //                               displayEmpty
// //                               variant="outlined"
// //                               sx={{
// //                                 backgroundColor: 'white',
// //                                 borderRadius: 1,
// //                               }}
// //                             >
// //                               {paymentModeOptions.map((option) => (
// //                                 <MenuItem key={option} value={option}>
// //                                   {option}
// //                                 </MenuItem>
// //                               ))}
// //                             </Select>
// //                           </FormControl>
// //                         )}
// //                       />
// //                     </Box>
// //                   </Grid>
// //                 </Grid>
// //                 {/* Currency and Discount Type */}
// //                 <Grid container spacing={2}>
// //                   <Grid item xs={6}>
// //                     <Box>
// //                       <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                         * Currency
// //                       </Typography>
// //                       <Controller
// //                         name="currency"
// //                         control={control}
// //                         render={({ field }) => (
// //                           <FormControl fullWidth>
// //                             <Select
// //                               {...field}
// //                               variant="outlined"
// //                               sx={{
// //                                 backgroundColor: 'white',
// //                                 borderRadius: 1,
// //                               }}
// //                             >
// //                               {currencyOptions.map((option) => (
// //                                 <MenuItem key={option} value={option}>
// //                                   {option}
// //                                 </MenuItem>
// //                               ))}
// //                             </Select>
// //                           </FormControl>
// //                         )}
// //                       />
// //                     </Box>
// //                   </Grid>
// //                   <Grid item xs={6}>
// //                     <Box>
// //                       <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                         Discount type
// //                       </Typography>
// //                       <Controller
// //                         name="discount_type"
// //                         control={control}
// //                         render={({ field }) => (
// //                           <FormControl fullWidth>
// //                             <Select
// //                               {...field}
// //                               variant="outlined"
// //                               sx={{
// //                                 backgroundColor: 'white',
// //                                 borderRadius: 1,
// //                               }}
// //                             >
// //                               {discountOptions.map((option) => (
// //                                 <MenuItem key={option} value={option}>
// //                                   {option}
// //                                 </MenuItem>
// //                               ))}
// //                             </Select>
// //                           </FormControl>
// //                         )}
// //                       />
// //                     </Box>
// //                   </Grid>
// //                 </Grid>

// //                 {/* Tags */}
// //                 <Box>
// //                   <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                     🏷️ Tags
// //                   </Typography>
// //                   <Controller
// //                     name="tags"
// //                     control={control}
// //                     render={({ field }) => (
// //                       <Autocomplete
// //                         {...field}
// //                         multiple
// //                         options={tagOptions}
// //                         freeSolo
// //                         renderTags={(value, getTagProps) =>
// //                           value.map((option, index) => (
// //                             <Chip
// //                               variant="outlined"
// //                               label={option}
// //                               {...getTagProps({ index })}
// //                               key={index}
// //                             />
// //                           ))
// //                         }
// //                         renderInput={(params) => (
// //                           <TextField
// //                             {...params}
// //                             placeholder="Tag"
// //                             // variant="outlined"
// //                             sx={{
// //                               '& .MuiOutlinedInput-root': {
// //                                 // backgroundColor: 'white',
// //                                 // borderRadius: 1
// //                                 border: 'none',
// //                               },
// //                             }}
// //                           />
// //                         )}
// //                         onChange={(event, newValue) => field.onChange(newValue)}
// //                         sx={{
// //                           '& .MuiOutlinedInput-root': {
// //                             // backgroundColor: 'white',
// //                             // borderRadius: 1
// //                           },
// //                         }}
// //                       />
// //                     )}
// //                   />
// //                 </Box>

// //                 {/* Allow Comments  it si not updated field */}
// //                 <Box>
// //                   <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                     Allow Comments
// //                   </Typography>
// //                   <Controller
// //                     name="allowComments"
// //                     control={control}
// //                     render={({ field }) => (
// //                       <FormControlLabel
// //                         control={<Switch {...field} checked={field.value} color="primary" />}
// //                         label=""
// //                       />
// //                     )}
// //                   />
// //                 </Box>
// //               </Box>
// //             </Grid>

// //             {/* Right Column */}
// //             <Grid item xs={12} md={6}>
// //               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
// //                 {/* Status and Assigned */}
// //                 <Grid container spacing={2}>
// //                   <Grid item xs={6}>
// //                     <Box>
// //                       <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                         Status
// //                       </Typography>
// //                       <Controller
// //                         name="status"
// //                         control={control}
// //                         render={({ field }) => (
// //                           <FormControl fullWidth>
// //                             <Select
// //                               {...field}
// //                               variant="outlined"
// //                               sx={{
// //                                 backgroundColor: 'white',
// //                                 borderRadius: 1,
// //                               }}
// //                             >
// //                               {statusOptions.map((option) => (
// //                                 <MenuItem key={option} value={option}>
// //                                   {option}
// //                                 </MenuItem>
// //                               ))}
// //                             </Select>
// //                           </FormControl>
// //                         )}
// //                       />
// //                     </Box>
// //                   </Grid>
// //                   <Grid item xs={6}>
// //                     <Box>
// //                       <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                         Assigned
// //                       </Typography>
// //                       <Controller
// //                         name="assigned"
// //                         control={control}
// //                         render={({ field }) => (
// //                           <FormControl fullWidth>
// //                             <Select
// //                               {...field}
// //                               variant="outlined"
// //                               sx={{
// //                                 backgroundColor: 'white',
// //                                 borderRadius: 1,
// //                               }}
// //                             >
// //                               {assignedOptions.map((option) => (
// //                                 <MenuItem key={option} value={option}>
// //                                   {option}
// //                                 </MenuItem>
// //                               ))}
// //                             </Select>
// //                           </FormControl>
// //                         )}
// //                       />
// //                     </Box>
// //                   </Grid>
// //                 </Grid>

// //                 {/* to  */}

// //                 <Box>
// //                   <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                     To
// //                   </Typography>
// //                   <FormControl fullWidth>
// //                     <Select variant="outlined" sx={{ backgroundColor: 'white', borderRadius: 1 }}>
// //                       {userToArray.map((option) => (
// //                         <MenuItem key={option} value={option}>
// //                           {option}
// //                         </MenuItem>
// //                       ))}
// //                     </Select>
// //                   </FormControl>
// //                 </Box>

// //                 {/* Address */}
// //                 <Box>
// //                   <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                     Address
// //                   </Typography>
// //                   <TextField
// //                     value={sales.vendor.address || ''}
// //                     fullWidth
// //                     multiline
// //                     rows={3}
// //                     variant="outlined"
// //                     disabled
// //                     sx={{
// //                       '& .MuiOutlinedInput-root': {
// //                         backgroundColor: 'white',
// //                         borderRadius: 1,
// //                       },
// //                     }}
// //                   />
// //                 </Box>

// //                 {/* City and State */}
// //                 <Grid container spacing={2}>
// //                   <Grid item xs={6}>
// //                     <Box>
// //                       <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                         City
// //                       </Typography>
// //                       <TextField
// //                         value={sales.vendor.city || ''}
// //                         fullWidth
// //                         rows={3}
// //                         variant="outlined"
// //                         disabled
// //                         sx={{
// //                           '& .MuiOutlinedInput-root': {
// //                             backgroundColor: 'white',
// //                             borderRadius: 1,
// //                           },
// //                         }}
// //                       />
// //                     </Box>
// //                   </Grid>
// //                   <Grid item xs={6}>
// //                     <Box>
// //                       <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                         State
// //                       </Typography>
// //                       <TextField
// //                         value={sales.vendor.state || ''}
// //                         fullWidth
// //                         rows={3}
// //                         variant="outlined"
// //                         disabled
// //                         sx={{
// //                           '& .MuiOutlinedInput-root': {
// //                             backgroundColor: 'white',
// //                             borderRadius: 1,
// //                           },
// //                         }}
// //                       />
// //                     </Box>
// //                   </Grid>
// //                 </Grid>

// //                 {/* Country and Zip Code */}
// //                 <Grid container spacing={2}>
// //                   <Grid item xs={6}>
// //                     <Box>
// //                       <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                         Country
// //                       </Typography>
// //                       <TextField
// //                         value={sales.vendor.country || ''}
// //                         fullWidth
// //                         rows={3}
// //                         variant="outlined"
// //                         disabled
// //                         sx={{
// //                           '& .MuiOutlinedInput-root': {
// //                             backgroundColor: 'white',
// //                             borderRadius: 1,
// //                           },
// //                         }}
// //                       />
// //                     </Box>
// //                   </Grid>
// //                   <Grid item xs={6}>
// //                     <Box>
// //                       <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                         Zip Code
// //                       </Typography>
// //                       <TextField
// //                         value={sales.vendor.zip || ''}
// //                         fullWidth
// //                         rows={3}
// //                         variant="outlined"
// //                         disabled
// //                         sx={{
// //                           '& .MuiOutlinedInput-root': {
// //                             backgroundColor: 'white',
// //                             borderRadius: 1,
// //                           },
// //                         }}
// //                       />
// //                     </Box>
// //                   </Grid>
// //                 </Grid>

// //                 {/* Email and Phone */}
// //                 <Grid container spacing={2}>
// //                   <Grid item xs={6}>
// //                     <Box>
// //                       <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                         Email
// //                       </Typography>
// //                       <TextField
// //                         value={sales.vendor.email || ''}
// //                         fullWidth
// //                         rows={3}
// //                         variant="outlined"
// //                         disabled
// //                         sx={{
// //                           '& .MuiOutlinedInput-root': {
// //                             backgroundColor: 'white',
// //                             borderRadius: 1,
// //                           },
// //                         }}
// //                       />
// //                     </Box>
// //                   </Grid>
// //                   <Grid item xs={6}>
// //                     <Box>
// //                       <Typography variant="body2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
// //                         Phone
// //                       </Typography>
// //                       <TextField
// //                         value={sales.vendor.phone || ''}
// //                         fullWidth
// //                         rows={3}
// //                         variant="outlined"
// //                         disabled
// //                         sx={{
// //                           '& .MuiOutlinedInput-root': {
// //                             backgroundColor: 'white',
// //                             borderRadius: 1,
// //                           },
// //                         }}
// //                       />
// //                     </Box>
// //                   </Grid>
// //                 </Grid>
// //               </Box>
// //             </Grid>
// //           </Grid>
// //           <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
// //             Submit
// //           </Button>
// //         </form>
// //       </Paper>
// //     </LocalizationProvider>
// //   );
// // };

// // export default SalesProposalInputField;

// //**************************************** */



// 'use client';
// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   Paper,
//   Grid,
//   IconButton,
// } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { useForm, Controller } from 'react-hook-form';
// import { Icon } from '@iconify/react';

// const ItemsTable = ({ items }) => {
//   const [selectedItem, setSelectedItem] = useState('');
//   const [selectedOptions, setSelectedOptions] = useState(null);
//   const [newRows, setNewRows] = useState([]);

//   const { control, handleSubmit, setValue } = useForm({
//     defaultValues: {
//       item: '',
//       description: '',
//       expirationDate: null,
//       brand: '',
//       sku1: '',
//       width: '',
//       hsnCode: '',
//       sn: '',
//       imei: '',
//       expiryDate: null,
//       qty: '',
//       rate: '',
//       tax: '',
//       amount: '',
//     },
//   });

//   // select
//   const handleChange = (event) => {
//     const selectedId = event.target.value;
//     setSelectedItem(selectedId);
//     const option = items.find((item) => item.id === selectedId);
//     setSelectedOptions(option || null);
//   };

//   // select ways default value
//   useEffect(() => {
//     if (selectedOptions) {
//       setValue('item', selectedOptions.name || '');
//       setValue(
//         'description',
//         selectedOptions.description || selectedOptions.long_description || ''
//       );
//       setValue('expirationDate', selectedOptions.expiration_date || null);
//       setValue('brand', selectedOptions.item_group || '');
//       setValue('sku1', selectedOptions.sku || '');
//       setValue('width', selectedOptions.width || '');
//       setValue('hsnCode', selectedOptions.hsn_code || '');
//       setValue('sn', selectedOptions.serial_number || '');
//       setValue('imei', selectedOptions.imei || '');
//       setValue('expiryDate', selectedOptions.expiry_date || null);
//       setValue('qty', selectedOptions.quantity || '');
//       setValue('rate', selectedOptions.price || '');
//       setValue('tax', selectedOptions.tax_1 || '');
//       setValue(
//         'amount',
//         selectedOptions.quantity && selectedOptions.price
//           ? selectedOptions.quantity * parseFloat(selectedOptions.price)
//           : ''
//       );
//     }
//   }, [selectedOptions]);

//   // form submit (initial row)
//   const onSubmit = (data) => {
//     const id = `item-${Math.floor(Math.random() * 1000000)}`;
//     setNewRows([...newRows, { ...data, id }]);
//   };

//   // row remove
//   const handleRowRemove = (id) => {
//     setNewRows(newRows.filter((row) => row.id !== id));
//   };
//   // const handleDataStore = () => {
//   //   onStore(newRows);
//   // };
//   console.log(newRows);
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Paper elevation={0} sx={{ p: 3, backgroundColor: '#f8f9fa' }}>
//         <Grid container spacing={2}>
//           <Grid item xs={4}>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//               <FormControl fullWidth>
//                 <Select value={selectedItem} onChange={handleChange} displayEmpty>
//                   <MenuItem value="">
//                     <em>Select item</em>
//                   </MenuItem>
//                   {items.map((option) => (
//                     <MenuItem key={option.id} value={option.id}>
//                       #{option.id} {option.name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//               <IconButton color="primary">
//                 <Icon icon="mdi:plus" width="28" />
//               </IconButton>
//             </Box>
//           </Grid>
//         </Grid>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <TableContainer component={Paper} elevation={0} sx={{ mt: 2 }}>
//             <Table size="small">
//               <TableHead>
//                 <TableRow sx={{ backgroundColor: '#e3f2fd' }}>
//                   {[
//                     'Item',
//                     'Description',
//                     'ExpirationDate',
//                     'Brand',
//                     'SKU1',
//                     'Width',
//                     'HSN Code',
//                     'SN',
//                     'IMEI',
//                     'ExpiryDate',
//                     'Qty',
//                     'Rate',
//                     'Tax',
//                     'Amount',
//                     'Actions',
//                   ].map((h) => (
//                     <TableCell key={h} sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
//                       {h}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>

//               <TableBody>
//                 {/* initial row form */}
//                 <TableRow>
//                   <TableCell>
//                     <Controller
//                       name="item"
//                       control={control}
//                       render={({ field }) => <TextField {...field} size="small" fullWidth />}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Controller
//                       name="description"
//                       control={control}
//                       render={({ field }) => (
//                         <TextField {...field} size="small" fullWidth multiline rows={2} />
//                       )}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Controller
//                       name="expirationDate"
//                       control={control}
//                       render={({ field }) => (
//                         <DatePicker
//                           {...field}
//                           format="DD-MM-YYYY"
//                           slotProps={{ textField: { size: 'small', fullWidth: true } }}
//                         />
//                       )}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Controller
//                       name="brand"
//                       control={control}
//                       render={({ field }) => <TextField {...field} size="small" fullWidth />}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Controller
//                       name="sku1"
//                       control={control}
//                       render={({ field }) => <TextField {...field} size="small" fullWidth />}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Controller
//                       name="width"
//                       control={control}
//                       render={({ field }) => <TextField {...field} size="small" fullWidth />}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Controller
//                       name="hsnCode"
//                       control={control}
//                       render={({ field }) => <TextField {...field} size="small" fullWidth />}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Controller
//                       name="sn"
//                       control={control}
//                       render={({ field }) => <TextField {...field} size="small" fullWidth />}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Controller
//                       name="imei"
//                       control={control}
//                       render={({ field }) => <TextField {...field} size="small" fullWidth />}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Controller
//                       name="expiryDate"
//                       control={control}
//                       render={({ field }) => (
//                         <DatePicker
//                           {...field}
//                           format="DD-MM-YYYY"
//                           slotProps={{ textField: { size: 'small', fullWidth: true } }}
//                         />
//                       )}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Controller
//                       name="qty"
//                       control={control}
//                       render={({ field }) => (
//                         <TextField {...field} type="number" size="small" fullWidth />
//                       )}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Controller
//                       name="rate"
//                       control={control}
//                       render={({ field }) => (
//                         <TextField {...field} type="number" size="small" fullWidth />
//                       )}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Controller
//                       name="tax"
//                       control={control}
//                       render={({ field }) => <TextField {...field} size="small" fullWidth />}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Controller
//                       name="amount"
//                       control={control}
//                       render={({ field }) => (
//                         <TextField {...field} type="number" size="small" fullWidth />
//                       )}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <IconButton type="submit" color="primary">
//                       <Icon icon="mdi:plus" width="28" />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>

//                 {/* new rows */}
//                 {newRows.map((row) => (
//                   <TableRow key={row.id}>
//                     <TableCell>{row.item}</TableCell>
//                     <TableCell>{row.description}</TableCell>
//                     <TableCell>{row.expirationDate}</TableCell>
//                     <TableCell>{row.brand}</TableCell>
//                     <TableCell>{row.sku1}</TableCell>
//                     <TableCell>{row.width}</TableCell>
//                     <TableCell>{row.hsnCode}</TableCell>
//                     <TableCell>{row.sn}</TableCell>
//                     <TableCell>{row.imei}</TableCell>
//                     <TableCell>{row.expiryDate}</TableCell>
//                     <TableCell>{row.qty}</TableCell>
//                     <TableCell>{row.rate}</TableCell>
//                     <TableCell>{row.tax}</TableCell>
//                     <TableCell>{row.amount}</TableCell>
//                     <TableCell>
//                       <IconButton onClick={() => handleRowRemove(row.id)} color="error">
//                         <Icon icon="mdi:delete" width="28" />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </form>
//       </Paper>
//     </LocalizationProvider>
//   );
// };

// export default ItemsTable;