import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeBtnClassName = isActive ? 'active-tab-btn' : ''

  const onTabList = () => {
    onChangeTab(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeBtnClassName}`}
        onClick={onTabList}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
