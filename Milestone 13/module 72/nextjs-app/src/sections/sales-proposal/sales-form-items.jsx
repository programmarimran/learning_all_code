"use client";

import React, { useState, useEffect } from "react";
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
import { useForm, Controller } from "react-hook-form";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";

const CombinedForm = ({ sales, items }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [newRows, setNewRows] = useState([]);

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
      // extra for schedule
      advance_payment: 0,
      rest_amount: 0,
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
      setValue("item", selectedOptions.name || "");
      setValue("qty", 1);
      setValue("rate", selectedOptions.price || "");
    }
  }, [selectedOptions]);

  // --- ADD ITEM ROW ---
  const addItemRow = () => {
    if (!selectedItem) return;
    const option = items.find((i) => i.id === selectedItem);
    const itemData = {
      item_id: option.id,
      quantity: option.quantity,
    };
    setNewRows([...newRows, itemData]);
    setSelectedItem("");
  };

  const removeRow = (id) => {
    setNewRows(newRows.filter((r) => r.item_id !== id));
  };

  const onSubmit = (data) => {
    const payload = {
      subject: data.subject,
      related: data.related,
      lead_or_customer: 1, // example: lead/customer id
      date: data.date.format("YYYY-MM-DD"),
      open_till: data.open_till.format("YYYY-MM-DD"),
      currency: data.currency,
      discount_type: data.discount_type,
      payment_mode: data.payment_mode,
      tags: data.tags.length ? data.tags.join(",") : "",
      status: data.status,
      assigned: data.assigned,
      to: sales.vendor?.id || 2, // example vendor id
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
    alert("Form submitted! Check console for payload.");
  };

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
                {/* Subject */}
                <Controller
                  name="subject"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Subject"
                      fullWidth
                      variant="outlined"
                    />
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
                      render={({ field }) => (
                        <DatePicker {...field} format="DD-MM-YYYY" />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Controller
                      name="open_till"
                      control={control}
                      render={({ field }) => (
                        <DatePicker {...field} format="DD-MM-YYYY" />
                      )}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            {/* Right Column */}
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
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

          {/* --- ITEM SELECT & ADD --- */}
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
                <TableRow sx={{ backgroundColor: "#e3f2fd" }}>
                  {["Item ID", "Quantity", "Actions"].map((h) => (
                    <TableCell key={h}>{h}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {newRows.map((row) => (
                  <TableRow key={row.item_id}>
                    <TableCell>{row.item_id}</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => removeRow(row.item_id)}
                        color="error"
                      >
                        <Icon icon="mdi:delete" width="24" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* --- PAYMENT SCHEDULE (Optional inputs) --- */}
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Controller
                name="advance_payment"
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Advance Payment" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="rest_amount"
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Rest Amount" fullWidth />
                )}
              />
            </Grid>
          </Grid>

          {/* --- FINAL SUBMIT BUTTON --- */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Save All
          </Button>
        </form>
      </Paper>
    </LocalizationProvider>
  );
};

export default CombinedForm;
