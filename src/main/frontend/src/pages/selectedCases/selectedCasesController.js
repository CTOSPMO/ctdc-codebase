import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Query } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';
import SelectedCasesView from './selectedCasesView';
import { initCart } from './selectedCasesState';
import { Typography } from '../../components/Wrappers/Wrappers';
import { GET_MY_CASES_DATA_QUERY } from '../../utils/graphqlQueries';

const selectedCasesController = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCart());
  }, []);

  const cart = useSelector((state) => state.cart);


  return (
    <Query query={GET_MY_CASES_DATA_QUERY} variables={{ caseIds: cart.cases }}>
      {({ data, loading, error }) => (
        loading ? <CircularProgress />
          : (
            error || !data
              ? <Typography variant="headline" color="warning" size="sm">{cart.error && `An error has occurred in loading CART : ${cart.error}`}</Typography>
              : <SelectedCasesView data={data.cases === null || data.cases === '' ? [] : data.cases} />
          )
      )}
    </Query>
  );
};


export default selectedCasesController;
