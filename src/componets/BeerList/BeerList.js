import React, { useState } from 'react';

import { getBeers } from '../../controllers/beers';
import BeerCards from '../BeerCards';
import BeerTable from '../BeerTable';

const BeerList = ({
  beers,
  page,
  loading,
  onNextPage,
  onPrevPage,
  isPrevDisabled,
  isNextDisabled
}) => {
  const [mode, setMode] = useState('cards');

  const renderBeers = (beers, mode) => {
    return mode === 'cards' 
      ? <BeerCards beers={beers}/>
      : <BeerTable beers={beers} />
  }

  if (loading) {
    return <div>loading</div>
  }
  return (
    <div>
      <div>
      <button disabled={mode === 'cards'} onClick={() => setMode('cards')}>Cards</button>
        <button disabled={mode === 'table'} onClick={() => setMode('table')}>Table</button>
      </div>
      <div>
        {loading 
          ? <div>loading</div>
          : renderBeers(beers, mode)
        }
      </div>
      <div>
        <button disabled={isPrevDisabled} onClick={onPrevPage}>Prev</button>
        <span>{page}</span>
        <button disabled={isNextDisabled} onClick={onNextPage}>Next</button>
      </div>
    </div>
  )
}
/*
class BeerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'cards', // table | cards
    }
  }

  renderBeers(beers, mode) {
    return mode === 'cards' 
      ? <BeerCards beers={beers}/>
      : <BeerTable beers={beers} />
  }

  setMode(mode) {
    this.setState({ mode })
  }  

  render() {
    const { mode } = this.state;
    const { 
      beers,
      page,
      loading,
      onNextPage,
      onPrevPage,
      isPrevDisabled,
      isNextDisabled
    } = this.props;
    console.log('IMTCHLG ~ file: BeerList.js ~ line 29 ~ BeerList ~ render ~ beers', beers);

    if (loading) {
      return <div>loading</div>
    }
    return (
      <div>
        <div>
        <button disabled={mode === 'cards'} onClick={() => this.setMode('cards')}>Cards</button>
          <button disabled={mode === 'table'} onClick={() => this.setMode('table')}>Table</button>
        </div>
        <div>
          {loading 
            ? <div>loading</div>
            : this.renderBeers(beers, mode)
          }
        </div>
        <div>
          <button disabled={isPrevDisabled} onClick={onPrevPage}>Prev</button>
          <button disabled={isNextDisabled} onClick={onNextPage}>Next</button>
        </div>
      </div>
    )
  }
}
*/
export default BeerList;
