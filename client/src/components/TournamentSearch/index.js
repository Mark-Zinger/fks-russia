import React from 'react'
import SearchInput from '../SearchInput'
import GameIconSlider from '../GameIconSlider'

export default (params) => {
  return (
    <div className="tournament-search">
      <SearchInput placeholder="Поиск турниров..."/>
      <GameIconSlider/>
    </div>
  )
}
