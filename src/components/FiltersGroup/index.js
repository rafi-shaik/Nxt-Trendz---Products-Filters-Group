import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const renderRatingsFiltersList = () => {
    const {ratingsList} = props

    return ratingsList.map(eachRating => {
      const {changeRating, rating} = props

      const onClickRatingItem = () => changeRating(eachRating.ratingId)

      const ratingClassName =
        rating === eachRating.ratingId ? `and-up active-rating` : `and-up`

      return (
        <li
          className="rating-item"
          key={eachRating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={eachRating.imageUrl}
            alt={`rating ${eachRating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingsFilters = () => (
    <>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
    </>
  )

  const {clearChanges} = props

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(eachCategory => {
      const {changeCategory, category} = props

      const onClickCategoryItem = () => changeCategory(eachCategory.categoryId)

      const isActive = eachCategory.categoryId === category
      const categoryClassName = isActive
        ? `category-name active-category-name`
        : `category-name`

      return (
        <li
          className="category-item"
          key={eachCategory.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{eachCategory.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoriesList()}</ul>
    </>
  )

  const inputChanged = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeInput} = props
    changeInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          className="input-search"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={inputChanged}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingsFilters()}

      <button
        className="clear-filters-btn"
        type="button"
        onClick={clearChanges}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
