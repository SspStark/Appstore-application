import './index.css'

const TabItem = props => {
  const {tabDetails, clickTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => clickTab(tabId)

  const activeTabClassName = isActive ? `button active-tab` : `button`

  return (
    <li className="tab-item">
      <button type="button" className={activeTabClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
