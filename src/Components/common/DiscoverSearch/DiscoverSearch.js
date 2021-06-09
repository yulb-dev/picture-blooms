import React, { Component } from 'react'
import CategorySearch from '../../common/CategorySearch/CategorySearch'

class DiscoverSearch extends Component {
    constructor(props) {
        super(props)
        this.Myinput = React.createRef()
    }
    componentDidMount() {
        this.Myinput.current.focus()
    }
    render() {
        const { i, searchValue, inputChange, goSearchUsers, goChange } = this.props
        return (
            <>
                <div className='search-bar'>
                    <input
                        ref={this.Myinput}
                        type='search'
                        placeholder='你在找什么?'
                        value={searchValue}
                        onChange={inputChange}
                    />
                    <button onClick={goSearchUsers}>搜索🔍</button>
                </div>
                <CategorySearch i={i} change={goChange} />
            </>
        )
    }
   
}

export default DiscoverSearch