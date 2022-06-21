
export const SortOptions = {         
   SORT_BY_BUDGET_ASC: 'sort by budget asc', 
   SORT_BY_BUDGET_DESC: 'sort by budget desc', 
   SORT_BY_RELEASE_DATE_ASC: 'sort by release date asc', 
   SORT_BY_RELEASE_DATE_DESC: 'sort by release date desc',
}


const movieFilters = [
   {"key":SortOptions.SORT_BY_BUDGET_ASC,"value":"Budget:lowest to highest"},
   {"key":SortOptions.SORT_BY_BUDGET_DESC,"value":"Budget: highest to lowest"},
   {"key":SortOptions.SORT_BY_RELEASE_DATE_ASC,"value":"Release Date: most recent to oldest"},
   {"key":SortOptions.SORT_BY_RELEASE_DATE_DESC,"value":"Release Date: oldest to most recent"}
]

export default movieFilters