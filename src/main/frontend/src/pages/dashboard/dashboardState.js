import client from '../../utils/graphqlClient';
import { DASHBOARD_QUERY } from '../../utils/graphqlQueries';
import {
  getStatDataFromDashboardData,
  getSunburstDataFromDashboardData,
  getDonutDataFromDashboardData,
  filterData,
  getFilters,
  getCheckBoxData,
  customCheckBox,
} from '../../utils/dashboardUtilFunctions';


export const initialState = {
  dashboard: {
    isFetched: false,
    isLoading: false,
    error: '',
    hasError: false,
    stats: {},
    checkboxForAll: {
      data: [],
    },
    caseOverview: {
      data: [],
    },
    checkbox: {
      data: [],
      defaultPanel: false,
    },
    datatable: {
      filters: [],
      data: [],
    },
    widgets: {},
  },
};

export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
export const RECEIVE_DASHBOARD = 'RECEIVE_DASHBOARD';
export const DASHBOARD_QUERY_ERR = 'DASHBOARD_QUERY_ERR';
export const READY_DASHBOARD = 'READY_DASHBOARD';
export const REQUEST_DASHBOARD = 'REQUEST_DASHBOARD';
export const SINGLE_CHECKBOX = 'SINGLE_CHECKBOX';
// Actions

export const toggleCheckBox = (payload) => ({
  type: TOGGLE_CHECKBOX,
  payload,
});


export const singleCheckBox = (payload) => ({
  type: SINGLE_CHECKBOX,
  payload,
});


function shouldFetchDataForDashboardDataTable(state) {
  return !(state.dashboard.isFetched);
}

function postRequestFetchDataDashboard() {
  return {
    type: REQUEST_DASHBOARD,
  };
}

function receiveDashboard(json) {
  return {
    type: RECEIVE_DASHBOARD,
    payload:
    {
      data: json.data,
    },
  };
}


function errorhandler(error, type) {
  return {
    type,
    error,
  };
}


function readyDashboard() {
  return {
    type: READY_DASHBOARD,
  };
}


// This need to go to dashboard controller

function fetchDashboard() {
  return (dispatch) => {
    dispatch(postRequestFetchDataDashboard());
    return client
      .query({
        query: DASHBOARD_QUERY,
      })
      .then((result) => dispatch(receiveDashboard(result)))
      .catch((error) => dispatch(errorhandler(error, DASHBOARD_QUERY_ERR)));
  };
}


export function fetchDataForDashboardDataTable() {
  return (dispatch, getState) => {
    if (shouldFetchDataForDashboardDataTable(getState())) {
      return dispatch(fetchDashboard());
    }
    return dispatch(readyDashboard());
  };
}

// End of actions

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case SINGLE_CHECKBOX: {
      const dataTableFilters = action.payload;
      const tableData = state.caseOverview.data.filter((d) => (filterData(d, dataTableFilters)));
      const updatedCheckboxData = dataTableFilters && dataTableFilters.length !== 0
        ? getCheckBoxData(
          state.caseOverview.data,
          state.checkboxForAll.data,
          state.checkbox.data.filter((d) => action.payload[0].groupName === d.groupName)[0],
          dataTableFilters,
        )
        : state.checkboxForAll.data;
      return {
        ...state,
        stats: {
          numberOfCases: getStatDataFromDashboardData(tableData, 'case', dataTableFilters),
          numberOfFiles: getStatDataFromDashboardData(tableData, 'file', dataTableFilters),
          numberOfTrials: getStatDataFromDashboardData(tableData, 'clinical_trial_code', dataTableFilters),
        },
        checkbox: {
          data: updatedCheckboxData,
          defaultPanel: action.payload[0].groupName,
        },
        datatable: {
          ...state.datatable,
          data: tableData,
          filters: dataTableFilters,
        },
        widgets: {
          armsByTrial: getSunburstDataFromDashboardData(tableData),
          caseCountByDisease: getDonutDataFromDashboardData(tableData, 'disease'),
          caseCountByGender: getDonutDataFromDashboardData(tableData, 'gender'),
          caseCountByRace: getDonutDataFromDashboardData(tableData, 'race'),
          caseCountByEthnicity: getDonutDataFromDashboardData(tableData, 'ethnicity'),
          caseCountByFileFormat: getDonutDataFromDashboardData(tableData, 'file_format'),
        },
      };
    }
    // if checkbox status has been changed, dashboard data table need to be update as well.
    case TOGGLE_CHECKBOX: {
      const dataTableFilters = getFilters(state.datatable.filters, action.payload);
      const tableData = state.caseOverview.data.filter((d) => (filterData(d, dataTableFilters)));
      const updatedCheckboxData = dataTableFilters && dataTableFilters.length !== 0
        ? getCheckBoxData(
          state.caseOverview.data,
          state.checkboxForAll.data,
          state.checkbox.data.filter((d) => action.payload[0].groupName === d.groupName)[0],
          dataTableFilters,
        )
        : state.checkboxForAll.data;
      return {
        ...state,
        stats: {
          numberOfCases: getStatDataFromDashboardData(tableData, 'case', dataTableFilters),
          numberOfFiles: getStatDataFromDashboardData(tableData, 'file', dataTableFilters),
          numberOfTrials: getStatDataFromDashboardData(tableData, 'clinical_trial_code', dataTableFilters),
        },
        checkbox: {
          data: updatedCheckboxData,
        },
        datatable: {
          ...state.datatable,
          data: tableData,
          filters: dataTableFilters,
        },
        widgets: {
          armsByTrial: getSunburstDataFromDashboardData(tableData),
          caseCountByDisease: getDonutDataFromDashboardData(tableData, 'disease'),
          caseCountByGender: getDonutDataFromDashboardData(tableData, 'gender'),
          caseCountByRace: getDonutDataFromDashboardData(tableData, 'race'),
          caseCountByEthnicity: getDonutDataFromDashboardData(tableData, 'ethnicity'),
          caseCountByFileFormat: getDonutDataFromDashboardData(tableData, 'file_format'),
        },
      };
    }
    case RECEIVE_DASHBOARD: {
      // get action data
      const checkboxData = customCheckBox(action.payload.data);
      return action.payload.data
        ? {
          ...state.dashboard,
          isFetched: true,
          isLoading: false,
          hasError: false,
          error: '',
          stats: {
            numberOfCases: action.payload.data.numberOfCases,
            numberOfFiles: action.payload.data.numberOfFiles,
            numberOfTrials: action.payload.data.numberOfTrials,
          },
          caseOverview: {
            data: action.payload.data.caseOverview,
          },
          checkboxForAll: {
            data: checkboxData,
          },
          checkbox: {
            data: checkboxData,
          },
          datatable: {
            data: action.payload.data.caseOverview,
            filters: [],
          },
          widgets: {
            armsByTrial: getSunburstDataFromDashboardData(action.payload.data.caseOverview),
            caseCountByDisease: getDonutDataFromDashboardData(action.payload.data.caseOverview, 'disease'),
            caseCountByGender: getDonutDataFromDashboardData(action.payload.data.caseOverview, 'gender'),
            caseCountByRace: getDonutDataFromDashboardData(action.payload.data.caseOverview, 'race'),
            caseCountByEthnicity: getDonutDataFromDashboardData(action.payload.data.caseOverview, 'ethnicity'),
            caseCountByFileFormat: getDonutDataFromDashboardData(action.payload.data.caseOverview, 'file_format'),
          },

        } : { ...state };
    }
    case DASHBOARD_QUERY_ERR:
      // get action data
      return {
        ...state,
        hasError: true,
        error: action.error,
        isLoading: false,
        isFetched: false,
      };
    case READY_DASHBOARD:
      return {
        ...state,
        isLoading: false,
        isFetched: true,
      };
    case REQUEST_DASHBOARD:
      return { ...state, isLoading: true };
    default:
      return state;
  }
}
