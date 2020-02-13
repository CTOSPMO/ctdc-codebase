import React from 'react';
import {
  Grid,
  withStyles,
} from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { Link } from 'react-router-dom';

import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import { useDispatch } from 'react-redux';
import Stats from '../../components/Stats/AllStatsController';
import { Typography } from '../../components/Wrappers/Wrappers';
import icon from '../../assets/trial/Trials_Title_Bar.Icon.svg';
import { singleCheckBox, fetchDataForDashboardDataTable } from '../dashboard/dashboardState';


const Trials = ({ classes, data }) => {
  const initDashboardStatus = () => (dispatch) => Promise.resolve(
    dispatch(fetchDataForDashboardDataTable()),
  );

  const dispatch = useDispatch();
  const redirectTo = (trial) => {
    dispatch(initDashboardStatus()).then(() => {
      dispatch(singleCheckBox([{
        groupName: 'Trial Code',
        name: trial,
        datafield: 'clinical_trial_code',
        isChecked: true,
      }]));
    });
  };

  const columns = [
    {
      name: 'clinical_trial_designation',
      label: 'Trial Code',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta) => (
          <div className={classes.tb}>
            <Link className={classes.link} to={`/trial/${tableMeta.rowData[1]}`}>{value}</Link>
          </div>
        ),
      },
    },
    {
      name: 'clinical_trial_id',
      label: 'Trial ID',
    },
    { name: 'clinical_trial_short_name', label: 'Trial Name' },
    { name: 'number_of_arms', label: 'Arms' },
    {
      name: 'number_of_cases',
      label: 'Cases',
      options: {
        customBodyRender: (value, tableMeta) => (
          <div>
            {' '}
            <Link className={classes.link} to={(location) => ({ ...location, pathname: '/cases' })} onClick={() => redirectTo(tableMeta.rowData[0])}>{value}</Link>
            {' '}
          </div>
        ),
      },
    },
  ];

  const options = () => ({
    selectableRows: false,
    search: false,
    filter: false,
    searchable: false,
    print: false,
    download: false,
    viewColumns: false,
    pagination: true,
    rowsPerPageOptions: [10, 25, 50, 100],
    customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage) => (
      <TableFooter>
        <TableRow>
          <TablePagination
            className={classes.root}
            count={count}
            page={page}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={(event) => changeRowsPerPage(event.target.value)}
              // eslint-disable-next-line no-shadow
            onChangePage={(_, page) => changePage(page)}
          />
        </TableRow>
      </TableFooter>
    ),
  });


  return (
    <>
      <Stats />
      <div className={classes.tableContainer}>
        <div className={classes.container}>
          <div className={classes.header}>
            <div className={classes.logo}>
              <img
                src={icon}
                alt="CTDC header logo"
              />

            </div>
            <div className={classes.headerTitle}>
              <div className={classes.headerMainTitle}>
                <span>
                  <Typography>
                    <span className={classes.headerMainTitle}>Trials</span>
                  </Typography>
                </span>
              </div>
            </div>
          </div>


          <div id="table_trials" className={classes.tableDiv}>
            <Grid container>
              <Grid item xs={12}>
                <MUIDataTable
                  data={data.clinicalTrials}
                  columns={columns}
                  options={options(classes)}
                />
              </Grid>
            </Grid>
          </div>
        </div>


      </div>
    </>
  );
};

const styles = (theme) => ({
  tb: {
    paddingLeft: '25px',
  },
  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#DD401C',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  card: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    margin: 'auto',
    maxWidth: '1440px',
    paddingLeft: '36px',
    paddingRight: '36px',
  },
  paper: {
    textAlign: 'center',
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
  },
  root: {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '9pt',
    letterSpacing: '0.025em',
    color: '#000',
    background: '#eee',
  },
  header: {
    background: '#eee',
    paddingLeft: '20px',
    paddingRight: '50px',
    borderBottom: '#4B619A 10px solid',
    height: '120px',
    paddingTop: '35px',
  },
  headerMainTitle: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    letterSpacing: '0.025em',
    color: '#4B619A',
    fontSize: '28px',
    position: 'absolute',
    marginTop: '14px',
    lineHeight: '25px',
    marginLeft: '-5px',
  },

  headerTitle: {
    maxWidth: '1440px',
    margin: 'auto',
    float: 'left',
    marginLeft: '90px',
  },
  logo: {
    position: 'absolute',
    float: 'left',
    marginLeft: '-13px',
    width: '83px',
    zIndex: '999',
  },
  tableContainer: {
    background: '#eee',
    paddingBottom: '50px',
  },
  tableDiv: {
    margin: 'auto',
  },
});

export default withStyles(styles, { withTheme: true })(Trials);
