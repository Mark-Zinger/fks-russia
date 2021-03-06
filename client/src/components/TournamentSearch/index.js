import React,{useCallback, useContext} from 'react'
import SearchInput from '../SearchInput'
import GameIconSlider from '../GameIconSlider'
import PageContext from '../../pages/PageContext';
import debounce from'lodash.debounce';


export default (params) => {

  const {searchQuery, setSearchQuery} = useContext(PageContext);
  const {
    placeholder="Поиск турниров..."
  } = params;

  const onChangeInput = useCallback((e) => {
    const newSearchQuery = {...searchQuery}
    newSearchQuery.search = e.target.value
    setSearchQuery(newSearchQuery)
  },[searchQuery])

  return (
    <div className="tournament-search">
      <SearchInput 
        placeholder={placeholder} 
        onChange={debounce(onChangeInput, 500)}
      />
      <GameIconSlider/>
    </div>
  )
}
