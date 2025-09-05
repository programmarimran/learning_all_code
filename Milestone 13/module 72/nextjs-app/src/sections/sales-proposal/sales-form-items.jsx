'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Switch,
  FormControlLabel,
  Chip,
  Autocomplete,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useForm, Controller } from 'react-hook-form';
import { Icon } from '@iconify/react';
import dayjs from 'dayjs';

const CombinedForm = ({ sales, items }) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [newRows, setNewRows] = useState([]);

  const { control, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      // Sales fields
      subject: '',
      related: '',
      date: dayjs(),
      open_till: dayjs(),
      currency: '',
      discount_type: '',
      tags: [],
      allowComments: true,
      status: 'Draft',
      assigned: '',
      to: '',
      amount: 0,
      payment_mode: '',
      // Item fields
      item: '',
      description: '',
      expirationDate: null,
      brand: '',
      sku1: '',
      width: '',
      hsnCode: '',
      sn: '',
      imei: '',
      expiryDate: null,
      qty: '',
      rate: '',
      tax: '',
      item_amount: '',
    },
  });

  // --- ITEM SELECT LOGIC ---
  const handleItemChange = (event) => {
    const selectedId = event.target.value;
    setSelectedItem(selectedId);
    const option = items.find((item) => item.id === selectedId);
    setSelectedOptions(option || null);
  };

  useEffect(() => {
    if (selectedOptions) {
      setValue('item', selectedOptions.name || '');
      setValue(
        'description',
        selectedOptions.description || selectedOptions.long_description || ''
      );
      setValue('expirationDate', selectedOptions.expiration_date || null);
      setValue('brand', selectedOptions.item_group || '');
      setValue('sku1', selectedOptions.sku || '');
      setValue('width', selectedOptions.width || '');
      setValue('hsnCode', selectedOptions.hsn_code || '');
      setValue('sn', selectedOptions.serial_number || '');
      setValue('imei', selectedOptions.imei || '');
      setValue('expiryDate', selectedOptions.expiry_date || null);
      setValue('qty', selectedOptions.quantity || '');
      setValue('rate', selectedOptions.price || '');
      setValue('tax', selectedOptions.tax_1 || '');
      setValue(
        'item_amount',
        selectedOptions.quantity && selectedOptions.price
          ? selectedOptions.quantity * parseFloat(selectedOptions.price)
          : ''
      );
    }
  }, [selectedOptions]);

  // --- ADD ITEM ROW ---
  const addItemRow = () => {
    const itemData = {
      item: watch('item'),
      description: watch('description'),
      expirationDate: watch('expirationDate'),
      brand: watch('brand'),
      sku1: watch('sku1'),
      width: watch('width'),
      hsnCode: watch('hsnCode'),
      sn: watch('sn'),
      imei: watch('imei'),
      expiryDate: watch('expiryDate'),
      qty: watch('qty'),
      rate: watch('rate'),
      tax: watch('tax'),
      amount: watch('item_amount'),
      id: `item-${Math.floor(Math.random() * 1000000)}`,
    };
    setNewRows([...newRows, itemData]);
  };

  const removeRow = (id) => {
    setNewRows(newRows.filter((r) => r.id !== id));
  };

  const onSubmit = (data) => {
    const payload = {
      ...data,
      date: data.date.format('YYYY-MM-DD'),
      open_till: data.open_till.format('YYYY-MM-DD'),
      tags: data.tags.join(','),
      to: sales.vendor,
      items: newRows,
    };
    console.log('FINAL PAYLOAD:', payload);
    // send payload to backend here
  };

  const currencyOptions = ['EUR €', 'USD $', 'GBP £', 'JPY ¥'];
  const discountOptions = ['No discount', 'Before Tax', 'After Tax'];
  const paymentModeOptions = ['installment', 'completed', 'pending'];
  const statusOptions = ['Draft', 'Sent', 'Accepted', 'Declined'];
  const assignedOptions = ['John Doe', 'Jane Smith', 'Admin User'];
  const relatedOptions = ['Lead', 'Customer'];
  const tagOptions = ['Laptop', 'PC', 'Pencil'];
  const userToArray = Object.entries(sales.vendor).map(([k, v]) => `${k}=${v}`);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper elevation={0} sx={{ p: 3, backgroundColor: '#f8f9fa' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* --- SALES PROPOSAL FIELDS --- */}
          <Grid container spacing={3}>
            {/* Left Column */}
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* Subject */}
                <Controller
                  name="subject"
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} label="Subject" fullWidth variant="outlined" />
                  )}
                />
                {/* Related */}
                <Controller
                  name="related"
                  control={control}
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <Select {...field}>
                        {relatedOptions.map((r) => (
                          <MenuItem key={r} value={r}>
                            {r}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
                {/* Date & Open Till */}
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Controller
                      name="date"
                      control={control}
                      render={({ field }) => <DatePicker {...field} format="DD-MM-YYYY" />}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Controller
                      name="open_till"
                      control={control}
                      render={({ field }) => <DatePicker {...field} format="DD-MM-YYYY" />}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            {/* Right Column */}
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* Status */}
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <Select {...field}>
                        {statusOptions.map((s) => (
                          <MenuItem key={s} value={s}>
                            {s}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
                {/* Assigned */}
                <Controller
                  name="assigned"
                  control={control}
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <Select {...field}>
                        {assignedOptions.map((a) => (
                          <MenuItem key={a} value={a}>
                            {a}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
              </Box>
            </Grid>
          </Grid>

          {/* --- ITEM SELECT & FORM --- */}
          <Box sx={{ mt: 4, mb: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={8}>
                <FormControl fullWidth>
                  <Select value={selectedItem} onChange={handleItemChange}>
                    <MenuItem value="">
                      <em>Select item</em>
                    </MenuItem>
                    {items.map((i) => (
                      <MenuItem key={i.id} value={i.id}>
                        {i.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Button onClick={addItemRow} variant="contained">
                  Add Item
                </Button>
              </Grid>
            </Grid>
          </Box>

          {/* --- ITEMS TABLE --- */}
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ backgroundColor: '#e3f2fd' }}>
                  {[
                    'Item',
                    'Description',
                    'ExpirationDate',
                    'Brand',
                    'SKU1',
                    'Qty',
                    'Rate',
                    'Tax',
                    'Amount',
                    'Actions',
                  ].map((h) => (
                    <TableCell key={h}>{h}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {newRows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.item}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.expirationDate}</TableCell>
                    <TableCell>{row.brand}</TableCell>
                    <TableCell>{row.sku1}</TableCell>
                    <TableCell>{row.qty}</TableCell>
                    <TableCell>{row.rate}</TableCell>
                    <TableCell>{row.tax}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => removeRow(row.id)} color="error">
                        <Icon icon="mdi:delete" width="24" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* --- FINAL SUBMIT BUTTON --- */}
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
            Save All
          </Button>
        </form>
      </Paper>
    </LocalizationProvider>
  );
};

export default CombinedForm;
