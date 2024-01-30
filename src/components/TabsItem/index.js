import './index.css'

const TabsItem = props => {
  const {eachItemTab, updateTabItem} = props
  const {tabId, displayText} = eachItemTab

  const onClickingTabItem = () => {
    updateTabItem(tabId)
  }

  return (
    <li>
      <button onClick={onClickingTabItem}>{displayText}</button>
    </li>
  )
}

export default TabsItem
