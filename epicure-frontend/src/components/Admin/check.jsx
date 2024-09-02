import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Box } from "@mui/material";
import { Colors } from "../../styles/theme";
import ordersState from "../../store/ordersState";
import OrderDialog from "../OrderDialog";
import clsx from "clsx";

import { useRecoilValue } from "recoil";
import { Suspense } from "react";
import DashBoardDetails from "../DashBoardDetails";

export default function DataTable() {
  const orderList = useRecoilValue(ordersState);

  if (!orderList) {
    return <div>Loading...</div>;
  }

  const [pendingOrders, setPendingOrders] = useState(0);
  const [orders, setOrders] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [todayOrders, setTodayOrders] = useState(0);
  const rows = orderList.map(createData);
  let Totalcheck = 0;
  let todayOrdersCheck = 0;
  let pendingOrdersCheck = 0;
  const today = JSON.stringify(new Date());

  function dashboardDetails() {
    setOrders(rows.length);
    rows.map((item) => {
      console.log(item);
      if (item.status !== "בתהליך") {
        Totalcheck = Totalcheck + parseInt(item.totalPrice.replace("₪", ""));
      }
      if (item.date == today.substring(1, today.indexOf("T"))) {
        todayOrdersCheck++;
      }
      if (item.status !== "הושלמה") {
        pendingOrdersCheck++;
      }
    });
    setTotalRevenue(Totalcheck);
    setTodayOrders(todayOrdersCheck);
    setPendingOrders(pendingOrdersCheck);
  }

  useEffect(() => {
    dashboardDetails();
  }, []);

  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState("");
  const [currentId, setCurrentId] = useState();
  const [currentStatus, setCurrentStatus] = useState();

  const handleEvent = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    setProducts(params.row.products);
    setCurrentId(params.row.id);
    setCurrentStatus(params.row.status);
  };

  const renderDetailsButton = () => {
    return (
      <strong>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          style={{ color: "black", background: Colors.forth }}
        >
          order details
        </Button>
      </strong>
    );
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      align: "center",
      headerAlign: "center",
      cellClassName: (params) => {
        return clsx("super-app", {
          completed: params.row.status === "הושלמה",
        });
      },
    },
    { field: "date", headerName: "תאריך", width: 130 },
    { field: "firstName", headerName: "שם פרטי", width: 130 },
    { field: "lastName", headerName: "שם משפחה", width: 130 },
    { field: "phone", headerName: "מס טלפון", width: 130 },
    { field: "email", headerName: "מייל", width: 250 },
    { field: "adress", headerName: "כתובת", width: "250" },
    { field: "zCode", headerName: "מיקוד", width: 130 },
    { field: "totalPrice", headerName: "סכום כולל", width: 90 },
    {
      field: "products",
      headerName: "הזמנה",
      width: 150,
      renderCell: renderDetailsButton,
    },
    {
      field: "status",
      headerName: "סטטוס",
      width: 100,
    },
    {
      field: "activeCouponCode",
      headerName: "קוד קופון",
      width: 100,
    },
    {
      field: "shipping",
      headerName: "משלוח",
      width: 100,
    },
  ];

  return (
    <>
        <Box
          sx={{
            height: 600,
            width: "100%",
            "& .super-app.completed": {
              backgroundColor: "#b7f296",
              color: "#1a3e72",
            },
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[20]}
            onRowClick={handleEvent}
            getCellClassName={(params) => {
              return params.row.status === "הושלמה" ? "hot" : "cold";
            }}
            initialState={{
              sorting: { sortModel: [{ field: "id", sort: "desc" }] },
            }}
          />
        </Box>
      <OrderDialog
        open={open}
        setOpen={setOpen}
        products={products}
        currentId={currentId}
        currentStatus={currentStatus}
      ></OrderDialog>
    </>
  );
}
