import { Container, Header, TabBar } from 'components'
import React from 'react'
import styles from './common.less'

const headerProps = {
  rightContentType: 'tabBar',
}

const containerProps = {
  renderHeader: <Header {...headerProps}>入网服务协议</Header>,
  renderTabBar: <TabBar hidden={true} />,
}

const CMCC1 = () => (
  <Container {...containerProps}>
    <div className={styles.container} dangerouslySetInnerHTML={{ __html: require('../../../static/md/cmcc1.md') }} />
  </Container>
)

export default CMCC1
