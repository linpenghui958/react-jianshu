import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
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

  constructor(props){
    super(props)
    this.state = {
      onFocus: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }

  render() {
    return (
      <div>
        <HeaderWrapper>
          <Logo/>
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载APP</NavItem>
            <SearchWrapper>
              <CSSTransition
                in={this.state.onFocus}
                timeout={200}
                classNames='slide'
              >
                <NavSearch
                  className = {this.state.onFocus ? 'focused' : ''}
                  onFocus = {this.handleInputFocus}
                  onBlur = {this.handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className = {this.state.onFocus ? 'iconfont zoom focused': 'iconfont zoom'}>&#xe614;</i>
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

  handleInputFocus() {
    this.setState({
      onFocus: true
    })
  }

  handleInputBlur() {
    this.setState({
      onFocus: false
    })
  }
}

export default Header;