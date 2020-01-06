import React from 'react';
import { Query } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';
import View from './view';
import { Typography } from '../../components/Wrappers/Wrappers';
import { GET_STUDYTABLE_DATA_QUERY } from '../../utils/graphqlQueries';

const container = () => (
  <Query query={GET_STUDYTABLE_DATA_QUERY}>
    {({ data, loading, error }) => (loading ? <CircularProgress /> : (error ? <Typography variant="headline" color="warning" size="sm">{error && `An error has occurred in loading stats component: ${error}`}</Typography>
      : <View data={data} />
    ))}
  </Query>
);

export default container;
