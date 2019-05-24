import { Flex, List } from 'antd-mobile'
import { BrandText, Link } from 'components'
import Router from 'next/router'
import React from 'react'
import styles from './ListItem.less'

const Item = List.Item

const ListItem = ({ utm }: any) => {
  const handleLinkClick = async (linkTo: string) => {
    await Router.push(`/help/${linkTo}`)
  }
  const isCmblife = utm.get('isCmblife')
  return (
    <div className={styles.contentBox}>
      <div className={styles.ListConteny}>
        <List renderHeader="#点击以下关键词，快速查找问题#" className={styles.list_box}>
          <Item extra="更多" arrow="horizontal" onClick={() => handleLinkClick('coststatement')}>
            <span className={styles.totleTitle}>费用说明</span>
          </Item>
          <Item>
            <Flex className={styles.item} justify="start" wrap="wrap">
              <Link className={styles.link} to="/help/coststatement?question=1">
                租金支付
              </Link>
              {!isCmblife && (
                <Link className={styles.link} to="/help/coststatement?question=4">
                  意外维修服务
                </Link>
              )}
              <Link className={styles.link} to="/help/coststatement?question=5">
                什么是预授权
              </Link>
              <Link className={styles.link} to="/help/coststatement?question=7">
                扣款周期
              </Link>
              {!isCmblife && (
                <Link className={styles.link} to="/help/coststatement?question=10">
                  续租费用
                </Link>
              )}
              {isCmblife ? (
                <Link className={styles.link} to="/help/coststatement?question=12">
                  到期买断
                </Link>
              ) : (
                <Link className={styles.link} to="/help/coststatement?question=12">
                  买断费用
                </Link>
              )}
            </Flex>
          </Item>
        </List>
        <List className={styles.list_box}>
          <Item extra="更多" arrow="horizontal" onClick={() => handleLinkClick('beforerent')}>
            <span className={styles.totleTitle}>租前了解</span>
          </Item>
          <Item>
            <Flex className={styles.item} justify="start" wrap="wrap">
              <Link className={styles.link} to="/help/beforerent?question=1">
                关于<BrandText />
              </Link>
              <Link className={styles.link} to="/help/beforerent?question=2">
                怎么租手机
              </Link>
              <Link className={styles.link} to="/help/beforerent?question=3">
                租机到期
              </Link>
              <Link className={styles.link} to="/help/beforerent?question=4">
                租机优势
              </Link>
              {!isCmblife && (
                <Link className={styles.link} to="/help/beforerent?question=9">
                  冻结额度不够
                </Link>
              )}
            </Flex>
          </Item>
        </List>
        <List className={styles.list_box}>
          <Item extra="更多" arrow="horizontal" onClick={() => handleLinkClick('customerservice')}>
            <span className={styles.totleTitle}>售后维修</span>
          </Item>
          <Item>
            <Flex className={styles.item} justify="start" wrap="wrap">
              <Link className={styles.link} to="/help/customerservice?question=1">
                意外维修服务
              </Link>
              <Link className={styles.link} to="/help/customerservice?question=3">
                多久维修完成
              </Link>
              <Link className={styles.link} to="/help/customerservice?question=5">
                申请备用机
              </Link>
              <Link className={styles.link} to="/help/customerservice?question=7">
                申请退货
              </Link>
              <Link className={styles.link} to="/help/customerservice?question=8">
                申请换货
              </Link>
              <Link className={styles.link} to="/help/customerservice?question=9">
                退货机器何时退款
              </Link>
            </Flex>
          </Item>
        </List>
        <List className={styles.list_box}>
          <Item extra="更多" arrow="horizontal" onClick={() => handleLinkClick('afterrent')}>
            <span className={styles.totleTitle}>到期了解</span>
          </Item>
          <Item>
            <Flex className={styles.item} justify="start" wrap="wrap">
              <Link className={styles.link} to="/help/afterrent?question=1">
                怎么还机
              </Link>
              {!isCmblife && (
                <Link className={styles.link} to="/help/afterrent?question=8">
                  怎么续租
                </Link>
              )}
              <Link className={styles.link} to="/help/afterrent?question=10">
                怎么买断
              </Link>
              <Link className={styles.link} to="/help/afterrent?question=2">
                忘记归还
              </Link>
              {!isCmblife && (
                <Link className={styles.link} to="/help/afterrent?question=9">
                  总共可以续租多久
                </Link>
              )}
              <Link className={styles.link} to="/help/afterrent?question=11">
                什么情况需买断
              </Link>
            </Flex>
          </Item>
        </List>
      </div>
      <p className={styles.footer}>·已经到底了哦·</p>
    </div>
  )
}

export default ListItem
