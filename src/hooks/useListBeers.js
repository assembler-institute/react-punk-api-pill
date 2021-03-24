import { useState, useEffect, useCallback } from 'react';

import { getBeers } from '../controllers/beers';

const useListBeers = ({ beersIni = [], iniPage = 1, iniAbv }) => {
  const [beers, setBeers] = useState(beersIni);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(iniPage);

  useEffect(() => {
    fetchBeers(page);
  }, [page]);

  const fetchBeers = useCallback(async (page) => {
    setLoading(true);
    const apiBeers = await getBeers(page, iniAbv);
    setBeers(apiBeers);
    setLoading(false);
  },[]);

  return {
    beers,
    loading,
    setPage,
    page
  }
}

export default useListBeers;