import { Container, Header, TabBar } from 'components'
import React from 'react'
import { connect } from 'react-redux'
import styles from './common.less'

const headerProps = {
  rightContentType: 'tabBar',
}

const containerProps = {
  renderHeader: <Header {...headerProps}>网上支付委托扣款服务三方协议</Header>,
  renderTabBar: <TabBar hidden={true} />,
}

interface UnionCardProps {
  url: {
    query: any
  }
}

const UnionCard = ({ url }: UnionCardProps) => (
  <Container {...containerProps}>
    <div className={styles.container}>
      <h1>网上支付委托扣款服务三方协议</h1>
      <p>甲方：广州银联网络支付有限公司</p>
      {url.query.bank && <p>乙方：{url.query.bank}</p>}
      {url.query.name && <p>丙方：{url.query.name}</p>}
      <p>
        尊敬的客户，欢迎您使用网上支付委托扣款服务。在申请使用该委托扣款支付方式前，请您仔细阅读本协议，了解委托扣款服务方式的具体内容，关注您在使用该支付方式中的各项权利。您将授权__________(15位商户号)_________(商户关键字)
        (代收付系统商户)发起扣款交易，并委托广州银联网络支付有限公司进行划扣。《网上支付委托扣款服务三方协议》已经由广州银联网络支付有限公司（即为甲方）和
        XXXX银行 （即为乙方）共同签署，您（即为丙方）点击确认即接受协议各条款，本协议生效。
      </p>
      <h2>第一条委托扣款支付方式说明</h2>
      <p>1、丙方为甲方代收付系统商户的实名客户。</p>
      <p>
        2、丙方为乙方网上银行的证书客户或已开通短信通知的银行卡客户，并且丙方需在其网上银行注册账户中或已开通短信通知的银行卡账户中指定账户作为扣款账户。
      </p>
      <p>3、丙方按照甲方和乙方提供的操作流程将其在代收付系统商户的合作信息和在乙方的扣款账户进行绑定。</p>
      <p>
        4、丙方进行网上支付时，如果选择使用委托扣款支付方式的，扣款时甲方、乙方将根据代收付系统商户发起的扣款支付指令从丙方指定账户上进行扣款。
      </p>
      <h2>第二条甲方的权利和义务</h2>
      <p>1、甲方应当在乙方开立结算账户。</p>
      <p>2、甲方应当为丙方使用委托扣款支付方式提供使用指引。</p>
      <p>
        3、甲方应当及时、准确地将代收付系统商户发起的扣款指令转发送至乙方，甲方不得篡改上述扣款指令，不得假冒发起扣款指令；也不得增加扣款金额。
      </p>
      <p>4、甲方负责向丙方提供业务咨询、投诉处理等第三方支付服务。</p>
      <h2>第三条乙方的权利和义务</h2>
      <p>1、乙方按照甲方转发的扣款指令实施扣款行为，为丙方和甲方提供支付结算服务。</p>
      <p>2、乙方对以下情况不承担责任：</p>
      <p>（1）获取的扣款指令信息不完整、不明确、存在乱码等无法执行扣款指令的；</p>
      <p>（2）丙方与代收付系统商户因交易关系产生纠纷的；</p>
      <p>（3）丙方账户余额不足的；</p>
      <p>（4）丙方或者甲方账户被依法冻结无法实施扣款行为的；</p>
      <p>（5）其他不可抗力或者不可归责于乙方的情况。</p>

      <h2>第四条丙方的权利和义务</h2>
      <p>
        、丙方应当按照甲方和乙方提供的指引，正确指定扣款账户，并将代收付系统商户的合作信息和在乙方的扣款账户进行绑定。
      </p>
      <p>、乙方执行扣款指令后，丙方不能要求变更或者撤销扣款指令。</p>
      <p>
        、丙方同意，其选择委托扣款支付方式的，乙方即可实施扣款行为。丙方应当妥善保管本人的身份信息资料及验证信息，不得向他人透露，因丙方泄露身份信息资料及验证信息造成的资金损失，甲乙双方不承担责任。
      </p>
      <p>
        、丙方应妥善保管本人在乙方的银行卡关键信息（密码、有效期、CVN2码等）、网上银行证书及其密码、本人身份证件，不得泄露上述信息。因丙方保管不善造成的损失，甲乙双方不承担责任。
      </p>
      <p>
        、丙方知悉并同意，对于代收付系统商户的交易网站和乙方网上支付系统而言，使用丙方拥有的相关账户、证书、验证码和密码即视为丙方行为，行为后果由丙方承担。
      </p>
      <p>
        、丙方知悉并同意，甲方、乙方只是被授权指令的执行方，除非支甲方、乙方没有根据丙方授权代收付系统商户的指令进行操作，或者操作指令错误，否则甲方、乙方不对因委托扣款服务产生的损失和责任负责。该等损失和责任应由丙方与代收付系统商户协商解决。
      </p>
      <p>丙方知悉并同意，甲方、乙方仅向您提供资金划转服务，不参与丙方与代收付系统商户之间的任何纠纷。</p>
      <p>
        丙方知悉并同意，您需保证指定账户余额足额且账户状态正常。若因您指定账户的余额不足、账户状态不正常或网络故障、系统故障等不可抗力的原因导致甲方、乙方无法扣款成功的情况下，丙方知悉并同意该笔委托划扣交易可能被顺延或终止，甲方、乙方不承担任何责任。
      </p>
      <p>
        丙方知悉并同意，甲方、乙方有权视情形（包括但不限于停止代收付系统商户合作关系等）单方中止/终止向您提供本协议约定的委托扣款服务。
      </p>
      <p>
        丙方知悉并同意，丙方选择委托扣款服务即视为甲方、乙方根据此协议进行划扣的授权指令。丙方应当对甲方、乙方执行上述指令产生的任何结果承担责任。丙方可以解除该授权指令，但有关方已完成的扣款结果因由丙方自行承担。
      </p>
      <h2>第五条差错处理</h2>
      <p>1、丙方发现扣款金额与其交易金额不符的，应当及时向甲方进行查询或者投诉，由甲方和乙方核对扣款信息。</p>
      <p>2、确因甲方或者乙方原因造成丙方账户扣款差错的，甲方或者乙方应当及时处理。</p>
      <h2>第六条争议解决</h2>
      <p>
        本协议履行过程中，如果发生争议，可由三方协商解决，协商不成，任何一方有权向法院提起诉讼，由甲方所在地人民法院管辖。
      </p>
      <p>在诉讼期间，本协议不涉及争议的条款仍需履行。</p>
      <h2>第七条协议终止</h2>
      <p>1、丙方有权在线解除本协议。丙方解除本协议的，本协议终止，甲乙双方不再为丙方提供委托扣款服务。</p>
      <p>
        2、甲方和乙方拟终止业务合作关系的，应当由甲方提前十五个工作日在其网站上公告。公告期满，本协议自动终止，甲方和乙方将不再为丙方办理委托扣款服务。
      </p>
    </div>
  </Container>
)

export default connect()(UnionCard)
