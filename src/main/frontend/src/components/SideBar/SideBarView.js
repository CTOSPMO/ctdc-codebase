import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  withStyles, Divider, Drawer, List, Button,
} from '@material-ui/core';
import cn from '../../utils/classNameConcat';
import FacetFilter from './SideBarComponents/FacetFilters';
import { toggleCheckBox } from '../../pages/dashboard/dashboardState';
import { unselectFilters } from '../../utils/dashboardUtilFunctions';

const drawerWidth = 240;
const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 240,
    backgroundColor: theme.palette.background.paper,
  },
  drawerAppBar: {
    height: '39px',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: '240px',
    height: 'auto',
    zIndex: '90',
    position: 'relative',
    float: 'left',
    overflowY: 'auto',

  },
  floatRight: {
    float: 'right',
    marginTop: '6px',
    marginRight: '12px',
  },
  floatLeft: {
    float: 'left',
  },
  filterTitle: {
    marginTop: '8px',
    marginLeft: '35px',
    color: theme.palette.lochmara.main,
    fontFamily: 'Lato',
    fontSize: 18,
    fontWeight: 'bold',
  },
  funnelLogoImg: {
    width: '20px',
    height: '20px',
  },
  clearAllButtonRoot: {
    margin: 'auto',
  },
  customButton: {
    borderRadius: '100px',
    borderLeft: '0px',
    minHeight: '20px',
    fontSize: 9,
    textTransform: 'none',
    color: theme.palette.lochmara.main,
    marginLeft: '16px',
    fontFamily: theme.custom.fontFamilySans,
    '&:hover': {
      backgroundColor: '#566672',
      color: 'white',
    },
  },
  listRoot: {
    paddingTop: 0,
    paddingBottom: 1,
  },
  dividerRoot: {
    backgroundColor: '#B0CFE1',
  },
});

const SideBarContent = ({ classes }) => {
  const dispatch = useDispatch();
  const activeFilters = useSelector((state) => (
    state.dashboard.datatable
      && state.dashboard.datatable.filters
      ? state.dashboard.datatable.filters : []));
  return (
    <Drawer
      variant="persistent"
      className={classes.drawer}
      anchor="left"
      open={1}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerAppBar}>
        <div className={cn(classes.floatLeft, classes.filterTitle)}> Filter Cases</div>
        <div className={classes.floatRight}>
          <Button
            id="button_sidebar_clear_all_filters"
            variant="outlined"
            disabled={activeFilters.length === 0}
            onCl
            className={classes.customButton}
            classes={{ root: classes.clearAllButtonRoot }}
            onClick={() => dispatch(toggleCheckBox(unselectFilters(activeFilters)))}
            disableRipple
          >
        Clear All
          </Button>
        </div>
      </div>
      <Divider classes={{ root: classes.dividerRoot }} />
      <List component="nav" aria-label="main mailbox folders" classes={{ root: classes.listRoot }}>
        <FacetFilter />
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(SideBarContent);
