import React from 'react';
import { Query } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';
import LandingView from './landingView';
import { Typography } from '../../components/Wrappers/Wrappers';
import { LANDING_QUERY } from '../../utils/graphqlQueries';

const landingController = () => (
  <Query query={LANDING_QUERY}>
    {({ data, loading, error }) => (loading ? <CircularProgress /> : (error ? <Typography variant="headline" color="warning" size="sm">{error && `An error has occurred in loading stats component: ${error}`}</Typography>
      : <LandingView statsData={data} />
    ))}
  </Query>
);

export default landingController;
