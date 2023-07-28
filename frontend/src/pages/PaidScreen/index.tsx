import React from "react";
import SideNavComponent from "../../components/molecules/NavigationBar";
import Header from "../../components/molecules/Header";
import MainTemplate from "../../components/templates/MainTemplate";
import TransactionSuccess from "../../components/organisms/TransactionSucess";
import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";

const PaidScreen = () => {
  const { type, price } = useParams();
  return (
    <MainTemplate
      navComponent={<SideNavComponent showCheckIcon={true} />}
      headerComponent={<Header pageName={"Checkout"} displayButtons={true} />}
      middeleComponent={
        <Stack
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"100%"}
        >
          <TransactionSuccess
            successType={type === "buy" ? "buy" : "sell"}
            price={price!}
          />
        </Stack>
      }
    />
  );
};

export default PaidScreen;
