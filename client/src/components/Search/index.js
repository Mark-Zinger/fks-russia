import React,{useCallback, useContext} from 'react'
import SearchInput from '../SearchInput'
import GameIconSlider from '../GameIconSlider'
import debounce from'lodash.debounce';


export default (params) => {

  const {searchQuery, setSearchQuery} = params;

  const onChangeInput = useCallback((e) => {
    const newSearchQuery = {...searchQuery}
    newSearchQuery.search = e.target.value
    setSearchQuery(newSearchQuery)
  },[searchQuery])

  return (
    <div className="tournament-search">
      <SearchInput 
        placeholder="Поиск турниров..." 
        onChange={debounce(onChangeInput, 500)}
      />
      <GameIconSlider/>
    </div>
  )
}
