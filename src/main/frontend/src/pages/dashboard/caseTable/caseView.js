import React, { Component } from 'react';
import {
  Grid,
  withStyles,
  Chip,
} from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { Link } from 'react-router-dom';
import CustomFooter from './customFooter';
import { toggleCheckBox } from '../dashboardState';
import { fetchCasesAndFiles } from '../../selectedCases/selectedCasesState';


const tableStyle = (ratio = 1) => ({
  width: (((document.documentElement.clientWidth * 0.6) / 10) * ratio),
  overflow: 'hidden',
  wordBreak: 'break-word',
  maxWidth: (((document.documentElement.clientWidth * 0.6) / 10) * ratio),
  minWidth: '160px',
}
);

let selectedCaseIds = [];

function exportCases(dispatch) {
  dispatch(fetchCasesAndFiles(selectedCaseIds));
  selectedCaseIds = [];
}

// eslint-disable-next-line react/prefer-stateless-function
class Cases extends Component {
  constructor(props) {
    super(props);
    this.myCasesButton = React.createRef();
  }

  componentDidMount() {
    // Init download button status and style
    // It may a problem that the code below always
    // set downloadButton as grey out .
    this.myCasesButton.current.disabled = true;
    this.myCasesButton.current.style.color = 'rgb(0, 0, 0,0.26)';
  }

  render() {
    const columns = (classes) => [
      {
        name: 'case_id',
        label: 'Case ID',
        options: {
          filter: false,
          sortDirection: 'asc',
          customBodyRender: (value) => (
            <div className="mui_td" style={tableStyle(0.8)}>
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
          customBodyRender: (value, tableMeta) => (
            <div className="mui_td" style={tableStyle(0.6)}>

              <Link to={`/trial/${tableMeta.rowData[8]}`} className={classes.link}>{value}</Link>

            </div>
          ),
        },
      },
      {
        name: 'arm_id',
        label: 'Arm',
        options: {
          filter: false,
          customBodyRender: (value) => (
            <div className="mui_td" style={tableStyle(2.3)}>
              {' '}
              {value}
              {' '}
            </div>
          ),
        },
      },
      {
        name: 'arm_drug',
        label: 'Arm Treatment',
        options: {
          filter: false,
          customBodyRender: (value) => (
            <div className="mui_td" style={tableStyle(1)}>
              {' '}
              {value}
              {' '}
            </div>
          ),
        },
      },
      {
        name: 'disease',
        label: 'Diagnosis',
        options: {
          filter: false,
          customBodyRender: (value) => (
            <div className="mui_td" style={tableStyle(2)}>
              {' '}
              {value}
              {' '}
            </div>
          ),
        },
      },
      {
        name: 'gender',
        label: 'Gender',
        options: {
          filter: false,
          customBodyRender: (value) => (
            <div className="mui_td" style={tableStyle(0.5)}>
              {' '}
              {value}
              {' '}
            </div>
          ),
        },
      },
      {
        name: 'race',
        label: 'Race',
        options: {
          filter: false,
          customBodyRender: (value) => (
            <div className="mui_td" style={tableStyle(0.5)}>
              {' '}
              {value}
              {' '}
            </div>
          ),
        },
      },
      {
        name: 'ethnicity',
        label: 'Ethnicity',
        options: {
          filter: false,
          customBodyRender: (value) => (
            <div className="mui_td" style={tableStyle(0.5)}>
              {' '}
              {value}
              {' '}
            </div>
          ),
        },
      },
      {
        name: 'clinical_trial_id',
        label: 'Trial ID',
        options: {
          display: false,
        },
      },
    ];

    const options = (classes, dispatch) => ({
      selectableRows: true,
      search: false,
      filter: false,
      searchable: false,
      print: false,
      download: false,
      viewColumns: false,
      pagination: true,
      onRowsSelect: (curr, allRowsSelected) => {
        if (allRowsSelected.length === 0) {
          this.myCasesButton.current.disabled = true;
          this.myCasesButton.current.style.color = '#FFFFFF';
          this.myCasesButton.current.style.backgroundColor = 'rgba(0, 0, 0, 0.12)';
        } else {
          this.myCasesButton.current.disabled = false;
          this.myCasesButton.current.style.color = '#FFFFFF';
          this.myCasesButton.current.style.backgroundColor = '#0B3556';
        }
      },
      customToolbarSelect: (selectedRows, displayData) => {
        const selectedKeys = Object.keys(selectedRows.data).map((keyVlaue) => (
          selectedRows.data[keyVlaue].index
        ));
        const selectedCaseId = selectedKeys.map((keyVlaue) => (
          displayData[keyVlaue].data[0].props.children[1].props.children
        ));
        selectedCaseIds = selectedCaseId;
        return '';
      },
      customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage) => (
        <CustomFooter
          text="SAVE TO MY CASES"
          onClick={() => exportCases(dispatch)}
          classes={classes}
          count={count}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={(event) => changeRowsPerPage(event.target.value)}
          // eslint-disable-next-line no-shadow
          onChangePage={(_, page) => changePage(page)}
        />
      ),

    });
    const { classes, data, dispatch } = this.props;
    // const dispatch = useDispatch();
    // data from store
    const chipData = mapStateToProps((state) => (
      state.dashboard.datatable
      && state.dashboard.datatable.filters
        ? state.dashboard.datatable.filters : []));

    // The bubble below will shows in the dashboard and work as
    // When user select and filters
    // they will float above the case table on the dashboard .
    // Due to the design issue, disable bubble function for now

    let bubbles = (chipData.map((ckdata) => (
      <Chip
        key={ckdata.datafield + ckdata.name}
        label={ckdata.name}
        onDelete={() => {
          dispatch(toggleCheckBox([{
            groupName: ckdata.groupName,
            name: ckdata.name,
            datafield: ckdata.datafield,
            isChecked: false,
          }]));
        }}
        classes={{
          root: classes.chipRoot,
          deleteIcon: classes.chipDeleteIcon,
        }}
      />
    )));

    bubbles = '';

    const btnStyle = {
      color: 'rgba(0, 0, 0,0.26)',
      boxShadow: 'none',
      backgroundColor: 'rgba(0, 0, 0, 0.12)',
      padding: '6px 16px',
      fontSize: '0.875rem',
      minWidth: '64px',
      boxSizing: 'border-box',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      lineHeight: '1.75',
      fontWeight: '500',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      borderRadius: '4px',
      textTransform: 'uppercase',
    };

    const divStyle = {
      position: 'absolute',
      marginTop: '-47px',
      marginLeft: '30px',
    };

    return (
      <>
        <div className={classes.chips}>
          {bubbles}
        </div>

        <Grid container>
          <Grid item xs={12} className={classes.caseTitle}>
           Cases
          </Grid>
          <Grid item xs={12}>
            <MUIDataTable
              data={data}
              columns={columns(classes)}
              options={options(classes, dispatch)}
            />
            <div style={divStyle}>
              <button
                type="button"
                style={btnStyle}
                ref={this.myCasesButton}
              >
              SAVE TO MY CASES
              </button>
            </div>
          </Grid>
        </Grid>

      </>
    );
  }
}

const styles = () => ({

  link: {
    color: '#DC762F',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  caseTitle: {
    color: '#194563',
    fontSize: '25.2pt',
    fontStyle: 'normal',
    fontFamily: 'Raleway',
    letterSpacing: '0.025em',
    backgroundColor: '#f5f5f5',
    padding: '10px 32px 8px 28px',
  },
  chips: {
    position: 'absolute',
    marginLeft: '250px',
    marginTop: '36px',
    zIndex: '999',
  },
  chipRoot: {
    color: '#ffffff',
    fontFamily: '"Open Sans", sans-serif',
    letterSpacing: '0.075em',
    marginLeft: '10px',
    backgroundColor: '#9b9b9b',
    fontSize: '9pt',
  },
  chipDeleteIcon: {
    color: '#ffffff',
    '&:hover': {
      color: '#ffffff',
    },
  },
  root: {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '9pt',
    letterSpacing: '0.025em',
    color: '#000',
  },
  button: {
    borderRadius: '10px',
    width: '178px',
    height: '27px',
    lineHeight: '18px',
    fontSize: '10pt',
    color: '#fff',
    backgroundColor: '#ff7f15',
  },

});

export default withStyles(styles, { withTheme: true })(Cases);
