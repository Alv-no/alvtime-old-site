import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    alignItems: "center",
    color: "#000",
    backgroundColor: "grey",
    padding: "0 1rem"
  },
  textfield: {
    width: "3.5rem"
  },
  input: {
    appearance: "none",
    margin: 0
  },
  text: {
    lineHeight: "0.3rem"
  },
  customerText: {
    fontSize: "0.85rem"
  },
  activityNameText: {}
});

export interface IActivity {
  activity: number;
  customer: string;
  activityName: string;
  activityDesc: string;
  registeredHours: number;
}

const Activity = (params: IActivity) => {
  const { activityName, registeredHours, customer } = params;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <p className={classes.customerText}>{customer}</p>
        <p className={classes.activityNameText}>{activityName}</p>
      </div>

      <TextField
        className={classes.textfield}
        variant="outlined"
        id="outlined-size-small"
        size="small"
        type="number"
        value={registeredHours}
        inputProps={{
          className: classes.input
        }}
      />
    </div>
  );
};

export default Activity;
