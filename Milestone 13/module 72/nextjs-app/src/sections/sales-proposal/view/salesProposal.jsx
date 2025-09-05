import { Box, Button, Stack, Typography } from "@mui/material";
import CombinedForm from "../sales-form-items";
// import SalesProposalForm from "../sales-form-itemsDEMO";

export async function SalesProposalView() {
  const salesData = await fetch(`http://localhost:3000/api/checks.json`);
  const sales = await salesData.json();

  const itemData = await fetch(`http://localhost:3000/api/items.json`);
  const items = await itemData.json();
  // console.log("sales data",sales);
  // console.log("items data",items);
  return (
    <>
      <Stack>
        <Typography variant="h4" fontWeight={700} mb={2}>
          New Proposal
        </Typography>
      </Stack>

      {/* <Box>
        {sales.map((sal) => (
          <SalesProposalForm
            key={sal.id}
            sales={sal} 
            items={items}
          ></SalesProposalForm>
        ))}
      </Box> */}
      <Box>
        {sales.map((sal) => (
          <CombinedForm
            key={sal.id}
            sales={sal} 
            items={items}
          ></CombinedForm>
        ))}
      </Box>

      <Button variant="contained" color="primary" sx={{ mt: 3 }}>
        Save
      </Button>
    </>
  );
}
