import React, { Component } from 'react'
import './CategorySearch.scss'

class CategorySearch extends Component {
    render() {
        let labels = [
            {
                svg: <svg t="1623070930728" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2664"><path d="M512 512c142.222222 0 256-113.777778 256-256S654.222222 0 512 0 256 113.777778 256 256s113.777778 256 256 256z m176.253968 62.47619h-34.031746c-45.714286 22.857143-96.507937 34.031746-147.809524 34.031747s-102.603175-11.174603-147.809523-34.031747h-28.444445C181.84127 574.47619 62.47619 694.349206 62.47619 842.15873v85.333333c0 51.301587 45.714286 96.507937 96.507937 96.507937h706.031746c51.301587 0 96.507937-45.714286 96.507937-96.507937v-85.333333c0-147.809524-124.952381-267.68254-273.269842-267.68254z" p-id="2665"></path></svg>,
                value: '用户',
            },
            {
                svg: <svg t="1623069931810" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1488"><path d="M940.783 83.217c-11.604-11.632-27.626-18.857-45.254-18.857a63.38 63.38 0 0 0-3.632 0.111H533.379c-17.572 0-33.548 7.178-45.143 18.746l-0.001-0.001-0.035 0.035-0.041 0.041L101.451 470c-49.78 49.78-49.78 131.239 0 181.019L372.98 922.548c49.78 49.78 131.239 49.78 181.019 0L940.708 535.84l0.041-0.041 0.035-0.035-0.001-0.001c11.568-11.596 18.746-27.571 18.746-45.143V132.103c0.068-1.203 0.111-2.412 0.111-3.632-0.001-17.628-7.225-33.65-18.857-45.254zM752 384c-61.856 0-112-50.144-112-112s50.144-112 112-112 112 50.144 112 112-50.144 112-112 112z" p-id="1489"></path></svg>,
                value: '标签',
            },
            {
                svg: <svg t="1623069963194" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1791"><path d="M734.634667 72.448C717.824 55.978667 685.226667 42.666667 661.674667 42.666667H204.8C162.389333 42.666667 128 79.189333 128 124.330667v775.338666C128 944.768 162.474667 981.333333 204.8 981.333333h614.4c42.410667 0 76.8-36.693333 76.8-81.578666V273.493333c0-23.68-13.781333-56.405333-30.378667-72.661333l-130.986666-128.426667zM341.333333 298.666667h341.333334a42.666667 42.666667 0 0 1 0 85.333333H341.333333a42.666667 42.666667 0 1 1 0-85.333333z m0 170.666666h170.666667a42.666667 42.666667 0 0 1 0 85.333334H341.333333a42.666667 42.666667 0 0 1 0-85.333334z" p-id="1792"></path></svg>,
                value: '文章'
            }
        ]
        return (
            <div className='CategorySearch'>
                {
                    labels.map((item, i) => (
                        <div
                            className={this.props.i === i ? 'item isActive' : 'item'}
                            onClick={this.goChange.bind(this, i)}
                            key={i}
                        >
                            {item.svg}
                            <p>{item.value}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
    goChange(i) {
        this.props.change(i)
    }
}

export default CategorySearch