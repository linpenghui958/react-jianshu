import React, { Component } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class List extends Component{
  render() {
    const { list } = this.props
    return (
      <div>
        {
					list.map((item, index) => {
						return (
							<Link key={index} to={'/detail/' + item.get('id')}>
								<ListItem >
									<img alt='' className='pic' src={item.get('imgUrl')} />
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc'>{item.get('desc')}</p>
									</ListInfo>
								</ListItem>
							</Link>
						);
					})
				}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    list: state.getIn(['home', 'articleList'])
  }
}

export default connect(
  mapStateToProps,
  null
)(List)