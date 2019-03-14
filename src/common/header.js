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
    onFocus: state.header.onFocus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
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