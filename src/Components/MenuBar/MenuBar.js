import React from 'react'
import cssClasses from './MenuBar.module.css'
import SearchIMenutems from './SearchIMenutems'
import SortItems from './SortItems'

export default function MenuBar(props) {
    return(
        <div className={cssClasses.MenuBar}>
                <SortItems setMenu={props.setMenu} />
                <SearchIMenutems setMenu={props.setMenu} setRefreshMenu={props.setRefreshMenu} />
        </div>
    )
}
