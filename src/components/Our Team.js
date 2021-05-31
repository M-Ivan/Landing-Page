import { Avatar, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { CustomTypography } from "../App";
import { crew } from "../data/Crew";
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#011b58",
    padding: "2rem",
    minHeight: "100vh",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: "120px",
    height: "120px",
    marginBottom: "2rem",
  },
  name: {
    color: "#ff0c5c",
    fontWeight: 600,
  },
  role: {
    color: "#ff0c5c",
  },
}));

export default function OurTeam(props) {
  const { teamSection } = props;
  const classes = useStyles();
  return (
    <Grid container className={classes.root} ref={teamSection}>
      {crew.map((member) => (
        <Grid item xs={12} lg={2} key={member.name}>
          <Grid container direction="column" alignItems="center">
            <Avatar
              src={member.profile}
              alt="Colleage name"
              className={classes.avatar}
            />
            <CustomTypography
              variant="h5"
              className={classes.name}
              gutterBottom
            >
              {member.name}
            </CustomTypography>
            <CustomTypography
              variant="h6"
              className={classes.role}
              gutterBottom
            >
              {member.job}
            </CustomTypography>
            <CustomTypography variant="body1">
              {member.description}
            </CustomTypography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
