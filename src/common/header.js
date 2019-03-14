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
    const { onFocus, list } = this.props
    if (onFocus) {
      return (
        <SearchInfo 
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch >
							<i className="iconfont spin">&#xe851;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
            {list.map((item, index) => {
              return <SearchInfoItem key={index}>{item}</SearchInfoItem>
            })}
					</SearchInfoList>
				</SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { onFocus, handleInputFocus, handleInputBlur} = this.props
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
                  onFocus = {handleInputFocus}
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
    list: state.getIn(['header', 'list'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionsCreators.getList())
      dispatch(actionsCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionsCreators.searchBlur())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);