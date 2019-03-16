import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionsCreators } from './store'
import {
  HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button
} from './style'



class Header extends Component{

  getListArea() {
    const { onFocus, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
    }
    if (onFocus || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch 
              onClick={ () => handleChangePage(page, totalPage, this.spinIcon)}
              >
							<i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
            {pageList}
					</SearchInfoList>
				</SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { onFocus, handleInputFocus, handleInputBlur, list} = this.props
    return (
      <div>
        <HeaderWrapper>
          <Logo/>
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载APP</NavItem>
            <SearchWrapper>
              <CSSTransition
                in={onFocus}
                timeout={200}
                classNames='slide'
              >
                <NavSearch
                  className = {onFocus ? 'focused' : ''}
                  onFocus = { () => handleInputFocus(list)}
                  onBlur = {handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className = {onFocus ? 'iconfont zoom focused': 'iconfont zoom'}>&#xe614;</i>
              {this.getListArea()}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className='writting'>
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
            <Button className='reg'>注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    onFocus: state.getIn(['header', 'onFocus']),
    list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionsCreators.getList())
      dispatch(actionsCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionsCreators.searchBlur())
    },
    handleMouseEnter() {
			dispatch(actionsCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionsCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      console.log(originAngle)
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`
			if (page < totalPage) {
				dispatch(actionsCreators.changePage(page + 1));
			}else {
				dispatch(actionsCreators.changePage(1));
			}
		},
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);