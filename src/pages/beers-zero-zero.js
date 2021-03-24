import React from 'react';

import { isPrevDisabled, isNextDisabled } from '../controllers/beers';
import BeerList from '../componets/BeerList';
import useListBeers from '../hooks/useListBeers';

const Beers = () => {
  const { beers, loading, setPage, page } = useListBeers({ iniAbv: 1 });

  return (
    <BeerList
      beers={beers}
      loading={loading}
      page={page}
      onNextPage={() => setPage(page + 1)}
      onPrevPage={() => setPage(page - 1)}
      isPrevDisabled={isPrevDisabled(page)}
      isNextDisabled={isNextDisabled(page)}
    />
  )
}

/*
class Beers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      loading: true,
      page: 1
    }
  }

  componentDidMount() {
    const { page } = this.state;
    this.fetchBeers(page)
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (page !== prevState.page) {
      this.fetchBeers(page);
    }
  }

  async fetchBeers(page) {
    this.setState({ loading: true });
    const apiBeers = await getBeers(page);
    this.setState({ beers: apiBeers, loading: false });
  } 

  handlePrevPage = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        page: prevState.page - 1
      }
    });
  }
  handleNextPage = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        page: prevState.page + 1
      }
    });
  }

  render() {
    const { beers, loading, page } = this.state;

    return (
      <BeerList
        beers={beers}
        loading={loading}
        page={page}
        onNextPage={this.handleNextPage}
        onPrevPage={this.handlePrevPage}
        isPrevDisabled={isPrevDisabled(page)}
        isNextDisabled={isNextDisabled(page)}
      />
    )
  }
}
*/
export default Beers;
