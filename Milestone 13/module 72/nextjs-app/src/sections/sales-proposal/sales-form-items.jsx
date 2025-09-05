"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useForm, Controller, useWatch } from "react-hook-form";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";

const CombinedForm = ({ sales, items }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [newRows, setNewRows] = useState([]);
// console.log("setselectedOptions",selectedOptions);
  const { control, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      subject: "",
      related: "",
      lead_or_customer: "",
      date: dayjs(),
      open_till: dayjs(),
      currency: "BDT",
      discount_type: "no_discount",
      tags: [],
      allowComments: true,
      status: "draft",
      assigned: "",
      to: "",
      payment_mode: "installment",
      advance_payment: 0,
      rest_amount: 0,
      items: []
    },
  });

  // Watch items array for updates
  const watchedItems = useWatch({ control, name: "items" }) || [];

  // Handle item selection
  const handleItemChange = (event) => {
    const selectedId = event.target.value;
    setSelectedItem(selectedId);
    const option = items.find((item) => item.id === selectedId);
    setSelectedOptions(option || null);
  };

  // Update form fields when item is selected
  useEffect(() => {
    if (selectedOptions) {
      setValue("item", selectedOptions.name || "");
      setValue("qty", 1);
      setValue("rate", selectedOptions.price || "");
    }
  }, [selectedOptions, setValue]);

  // Add item to the table
  const addItemRow = () => {
    if (!selectedItem || !selectedOptions) return;
    
    const itemData = {
      item_id: selectedOptions.id,
      quantity: selectedOptions.quantity || 1,
    };
    
    const updatedRows = [...newRows, itemData];
    setNewRows(updatedRows);
    setValue("items", updatedRows);
    
    // Reset selection
    setSelectedItem("");
    setSelectedOptions(null);
  };

  // Remove item from table
  const removeRow = (itemId, index) => {
    const updatedRows = newRows.filter((row) => row.item_id !== itemId);
    setNewRows(updatedRows);
    setValue("items", updatedRows);
  };

  // Update quantity in both local state and form
  const updateQuantity = (index, newQuantity) => {
    const updatedRows = [...newRows];
    updatedRows[index].quantity = Number(newQuantity);
    setNewRows(updatedRows);
    setValue("items", updatedRows);
  };

  // Form submission
  const onSubmit = (data) => {
    const payload = {
      subject: data.subject,
      related: data.related,
      lead_or_customer: 1,
      date: data.date.format("YYYY-MM-DD"),
      open_till: data.open_till.format("YYYY-MM-DD"),
      currency: data.currency,
      discount_type: data.discount_type,
      payment_mode: data.payment_mode,
      tags: Array.isArray(data.tags) && data.tags.length ? data.tags.join(",") : "",
      status: data.status,
      assigned: data.assigned,
      to: sales?.vendor?.id || 2,
      items: newRows,
      payment_schedule: {
        advance_payment: Number(data.advance_payment) || 200000.0,
        rest_amount: Number(data.rest_amount) || 800000,
        installments: [
          {
            payment_time: "2025-11-01",
            payment_amount: 400000,
            status: "unpaid",
          },
          {
            payment_time: "2025-12-01",
            payment_amount: 400000,
            status: "unpaid",
          },
        ],
      },
    };

    console.log("FINAL PAYLOAD:", payload);
  };

  // Options for dropdowns
  const relatedOptions = ["lead", "customer"];
  const statusOptions = ["draft", "sent", "accepted", "declined"];
  const assignedOptions = ["John Doe", "Jane Smith", "Admin User"];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper elevation={0} sx={{ p: 3, backgroundColor: "#f8f9fa" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            {/* Left Column */}
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Controller
                  name="subject"
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} label="Subject" fullWidth />
                  )}
                />
                
                <Controller
                  name="related"
                  control={control}
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <Select {...field} displayEmpty>
                        <MenuItem value="">
                          <em>Select Related</em>
                        </MenuItem>
                        {relatedOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
                
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Controller
                      name="date"
                      control={control}
                      render={({ field }) => (
                        <DatePicker 
                          {...field} 
                          label="Date"
                          format="DD-MM-YYYY"
                          slotProps={{ textField: { fullWidth: true } }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Controller
                      name="open_till"
                      control={control}
                      render={({ field }) => (
                        <DatePicker 
                          {...field} 
                          label="Open Till"
                          format="DD-MM-YYYY"
                          slotProps={{ textField: { fullWidth: true } }}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <Select {...field} displayEmpty>
                        <MenuItem value="">
                          <em>Select Status</em>
                        </MenuItem>
                        {statusOptions.map((status) => (
                          <MenuItem key={status} value={status}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
                
                <Controller
                  name="assigned"
                  control={control}
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <Select {...field} displayEmpty>
                        <MenuItem value="">
                          <em>Select Assigned</em>
                        </MenuItem>
                        {assignedOptions.map((assignee) => (
                          <MenuItem key={assignee} value={assignee}>
                            {assignee}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
              </Box>
            </Grid>
          </Grid>

          {/* Item Selection */}
          <Box sx={{ mt: 4, mb: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={10}>
                <FormControl fullWidth>
                  <Select 
                    value={selectedItem} 
                    onChange={handleItemChange}
                    displayEmpty
                  >
                    <MenuItem value="">
                      <em>Select an item to add</em>
                    </MenuItem>
                    {items?.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name} - ${item.price || 0}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
             
            </Grid>
          </Box>

          {/* Items Table */}
         
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#e3f2fd" }}>
                    <TableCell>Item ID</TableCell>
                    <TableCell>Item Name</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell width={100}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                   <TableRow>
                        <TableCell>{selectedOptions?.item_id}</TableCell>
                        <TableCell>{selectedOptions?.name || 'Unknown Item'}</TableCell>
                        <TableCell>
                          <TextField
                            type="number"
                            value={selectedOptions?.quantity}
                            onChange={(e) => updateQuantity(index, e.target.value)}
                            inputProps={{ min: 1 }}
                            size="small"
                            sx={{ width: 80 }}
                          />
                        </TableCell>
                        <TableCell>
                          <IconButton
                            onClick={addItemRow}
                            color="success"
                            size="small"
                          >
                            <Icon icon="mdi:check" width="20" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                  {newRows.map((row, index) => {
                    const itemDetails = items?.find(item => item.id === row.item_id);
                    return (
                      <TableRow key={`${row.item_id}-${index}`}>
                        <TableCell>{row.item_id}</TableCell>
                        <TableCell>{itemDetails?.name || 'Unknown Item'}</TableCell>
                        <TableCell>
                          <TextField
                            type="number"
                            value={row.quantity}
                            onChange={(e) => updateQuantity(index, e.target.value)}
                            inputProps={{ min: 1 }}
                            size="small"
                            sx={{ width: 80 }}
                          />
                        </TableCell>
                        <TableCell>
                          <IconButton
                            onClick={() => removeRow(row.item_id, index)}
                            color="error"
                            size="small"
                          >
                            <Icon icon="mdi:delete" width="20" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
       

          {/* Payment Schedule */}
          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item xs={12} md={6}>
              <Controller
                name="advance_payment"
                control={control}
                render={({ field }) => (
                  <TextField 
                    {...field} 
                    label="Advance Payment" 
                    type="number"
                    fullWidth 
                    inputProps={{ min: 0 }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="rest_amount"
                control={control}
                render={({ field }) => (
                  <TextField 
                    {...field} 
                    label="Rest Amount" 
                    type="number"
                    fullWidth 
                    inputProps={{ min: 0 }}
                  />
                )}
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Box sx={{ mt: 3, textAlign: 'right' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={newRows.length === 0}
            >
              Save All
            </Button>
          </Box>
        </form>
      </Paper>
    </LocalizationProvider>
  );
};

export default CombinedForm;