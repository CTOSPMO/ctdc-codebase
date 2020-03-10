import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import MUIDataTable from 'mui-custom-datatables';
import Snackbar from '@material-ui/core/Snackbar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SuccessOutlinedIcon from '../../utils/SuccessOutlined';
import icon from '../../assets/icons/Icon-MyCases.svg';
import CustomFooter from './customFooter';
import { deleteCasesAction } from './selectedCasesState';

const columns = (classes) => [

  {
    name: 'case_id',
    label: 'Case ID',
    sortDirection: 'asc',
    options: {
      filter: false,
      sortDirection: 'asc',
      customBodyRender: (value) => (
        <div>
          {' '}
          <Link to={`/case/${value}`} className={classes.link}>{value}</Link>
          {' '}
        </div>
      ),
    },
  },
  {
    name: 'clinical_trial_code',
    label: 'Trial Code',
    options: {
      filter: false,
      sortDirection: 'asc',
      customBodyRender: (value, tableMeta) => (
        <div>
          {' '}
          <Link to={`/trial/${tableMeta.rowData[8]}`} className={classes.link}>{value}</Link>
          {' '}
        </div>
      ),
    },
  },
  { name: 'arm_id', label: 'Arm' },
  { name: 'arm_drug', label: 'Arm Treatment' },
  { name: 'disease', label: 'Diagnosis' },
  { name: 'gender', label: 'Gender' },
  { name: 'race', label: 'Race' },
  { name: 'ethnicity', label: 'Ethnicity' },
  {
    name: 'clinical_trial_id',
    label: 'Trial ID',
    options: {
      display: false,
    },
  },
  {
    name: 'remove_label',
    options: {
      filter: false,
      sort: false,
      customHeadRender: () => (
        <th className={classes.tableheadRemove}>
          <span
            role="button"
            className={classes.removeLabel}
          >
            REMOVE
          </span>
        </th>
      ),
    },
  },
];


const SelectedCasesView = ({ data, classes }) => {
  const dispatch = useDispatch();

  const [snackbarState, setsnackbarState] = React.useState({
    open: false,
    value: 0,
    rowsDeleted: null,
    cases: null,
  });
  function openSnackBar(value, rowsDeleted, cases) {
    setsnackbarState({
      open: true, value, rowsDeleted, cases,
    });
  }
  function closeSnackBar() {
    setsnackbarState({ open: false });
    if (snackbarState.rowsDeleted
        && snackbarState.rowsDeleted !== null
        && snackbarState.rowsDeleted.data
          && snackbarState.cases
            && snackbarState.cases !== null) {
      dispatch(deleteCasesAction(
        snackbarState.rowsDeleted.data.map((row) => snackbarState.cases[row.dataIndex].case_id),
      ));
    }
  }
  const options = (cases) => ({
    selectableRows: true,
    search: false,
    filter: false,
    searchable: false,
    print: false,
    download: false,
    viewColumns: false,
    pagination: true,
    selectedRows: {
      text: 'row(s) selected',
      delete: 'Delete',
      deleteAria: 'Delete Selected Rows',
    },

    onRowsDelete: (rowsDeleted) => {
      if (rowsDeleted.data.length > 0) {
        openSnackBar(rowsDeleted.data.length, rowsDeleted, cases);
      }
      return true;
    },
    customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage) => (
      <CustomFooter
        text="GO TO FILES"
        count={count}
        page={page}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={(event) => changeRowsPerPage(event.target.value)}
          // eslint-disable-next-line no-shadow
        onChangePage={(_, page) => changePage(page)}
      />
    ),
  });
  return (
    <>
      <Grid>
        <div className={classes.myCasesWrapper}>
          <Grid item xs={12}>
            <div className={classes.header}>
              <div className={classes.logo}>
                <img
                  src={icon}
                  alt="ICDC case detail header logo"
                />

              </div>
              <div className={classes.headerTitle}>
                <div className={classes.headerMainTitle}>
                  <span>
                    <span>My Cases: Cases</span>
                  </span>
                </div>
              </div>
            </div>
            <div />
            <div id="table_selected_cases" className={classes.tableWrapper}>
              <MUIDataTable
                data={data}
                columns={columns(classes)}
                options={options(data)}
                className={classes.tableStyle}
              />
            </div>
          </Grid>
        </div>
      </Grid>
      <Snackbar
        className={classes.snackBar}
        open={snackbarState.open}
        onClose={closeSnackBar}
        autoHideDuration={1500000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        message={(
          <div>
            <span className={classes.snackBarIcon}>
              <SuccessOutlinedIcon />
              {' '}
            </span>
            <span className={classes.snackBarMessage}>
              {snackbarState.value}
              {' '}
              Case(s) successfully removed from the My Cases list
            </span>
          </div>
)}
      />
    </>
  );
};

const styles = (theme) => ({
  link: {
    color: '#DC762F',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  logo: {
    position: 'absolute',
    float: 'left',
    marginTop: '-15px',
    width: '100px',
  },
  tableWrapper: {
    margin: 'auto 3% auto 3%',
    maxWidth: '100%',
  },
  tableStyle: {
    maxWidth: '100%',
  },
  customFooterStyle: {
    background: '#f3f3f4',
  },
  headerMainTitle: {
    fontFamily: theme.custom.fontFamilySans,
    fontWeight: 'bold',
    letterSpacing: '0.017em',
    color: '#DE5227',
    fontSize: '28px',
    lineHeight: '84px',
    paddingLeft: '5px',
  },
  headerTitle: {
    maxWidth: theme.custom.maxContentWidth,
    margin: 'auto',
    float: 'left',
    marginLeft: '110px',
    paddingLeft: '3px',
    marginBottom: '-30px',
  },
  header: {
    paddingRight: '32px',
    borderBottom: '#4B619A 10px solid',
    height: '89px',
    maxWidth: '100%',
    marginLeft: '3%',
    marginRight: '3%',
  },
  myCasesWrapper: {
    border: '#DE5227 4px solid',
    borderRadius: '35px',
    margin: '80px',
    marginLeft: '3%',
    marginRight: '3%',
    paddingBottom: '20px',
  },
  removeLabel: {
    cursor: 'text',
  },
  tableheadRemove: {
    cursor: 'text',
    top: '0px',
    left: '0px',
    zIndex: 100,
    position: 'sticky',
    fontSize: '9pt',
    borderTop: '#4B619A 3px solid',
    fontStyle: 'normal',
    fontFamily: theme.custom.fontFamily,
    color: '#0296C9',
    borderBottom: '#4B619A 3px solid',
    letterSpacing: '0.014em',
    backgroundColor: '#ffffff',
  },
  snackBar: {
    '& > div': {
      backgroundColor: '#4CAF50',
      padding: '6px 80px 0px',
    },
    '& > div > div > div': {
      display: 'flex',
    },
  },
  snackBarIcon: {
  },
  snackBarMessage: {
    paddingLeft: '10px',
  },
});

export default withStyles(styles, { withTheme: true })(SelectedCasesView);
