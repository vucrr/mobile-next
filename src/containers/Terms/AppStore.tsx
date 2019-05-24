import { Container, Header, TabBar } from 'components'
import React from 'react'
import styles from './common.less'

const headerProps = {
  rightContentType: 'tabBar',
}

const containerProps = {
  renderHeader: <Header {...headerProps}>享换机隐私政策</Header>,
  renderTabBar: <TabBar hidden={true} />,
}

const AppStore = () => (
  <Container {...containerProps}>
    <div className={styles.container}>
      <h1 style={{ marginTop: 0 }}>隐私政策-享换机</h1>
      晋松（上海）网络信息技术有限公司（以下简称“我们”或“享换机”）深知个人信息对您的重要性，并会尽全力保护您的个人信息安全可靠。我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。同时，我们承诺，我们将按业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。<br />
      请在使用我们的产品（或服务）前，仔细阅读并了解本《隐私政策》。
      <h1>一、我们如何收集和使用您的个人信息</h1>
      <p>
        个人信息是指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。
      </p>
      <p>我们仅会出于本政策所述的以下目的，收集和使用您的个人信息：</p>
      <h2>（一）为您提供网上租机服务</h2>
      1、业务功能一：注册成为用户<br />
      为完成创建账号，您需提供以下信息：您的手机号、手机验证码，或授权支付宝第三方登录。
      在注册过程中，如果您提供以下额外信息，将有助于我们给您提供更好的服务和体验：姓名、身份证号、住宅地址等。但如果您不提供这些信息，将不会影响使用本服务的基本功能。<br />
      您提供的上述信息，将在您使用本服务期间持续授权我们使用。在您注销账号后，我们会停止基于该账号提供产品和服务，并在无特殊法律要求的情况下，删除您相应的个人数据信息。<br />
      上述信息将存储于中华人民共和国境内。如需跨境传输，我们将会单独征得您的授权同意。<br />
      2、业务功能二：商品展示、个性化推荐、发送促销营销信息。<br />
      为您展示商品和推送商品或活动。我们可能使用您的信息，您的浏览及搜索记录、设备信息、位置信息、订单信息，提取您的浏览、搜索偏好、行为习惯、位置信息等特征，并基于特征标签通过短信或其他方式向您发送营销信息，提供或推广我们的商品和服务。<br />
      向您发出通知。我们可能在必要时（例如当我们由于系统维护而暂停某一单项服务、变更、终止提供某一单项服务时）向您发出与服务相关的通知。<br />
      如您不希望继续接收我们推送的消息，您可以要求我们停止推送，例如：根据短信退订指引要求我们停止发送推广短信，或在移动端设备中进行设置，不再接收我们推送的消息；但我们依法律规定或单项服务的服务协议约定发送消息的情形除外。<br />
      3、业务功能三：向您提供商品或服务。<br />
      我们所收集和使用的信息是为您提供享换机服务的必要条件，如缺少相关信息，我们将无法为您提供享换机服务的核心内容，例如：<br />
      为便于向您交付商品或服务，您需提供个人身份信息、姓名、收货地址、邮政编码、收货人、联系电话、支付状态等信息。如果您拒绝提供此类信息，我们将无法完成相关交付服务；<br />
      为展示您的账户订单信息，我们会收集您在使用享换机服务过程中产生的订单信息用于向您展示及便于您对订单进行管理；<br />
      当您与我们联系时，我们可能会保存您的通信/通话记录和内容或您留下的联系方式等信息，以便与您联系或帮助您解决问题，或记录相关问题的处理方案及结果；<br />
      为确认交易状态及为您提供售后与争议解决服务，我们会通过您基于交易所选择的交易对象、支付机构、物流公司等手机与交易进度有关的您的交易、支付、物流信息，或将您的交易信息共享给上述服务提供者。<br />
      <h2>（二）开展内部数据分析和研究，第三方SDK统计服务，改善我们的产品或服务</h2>
      我们收集数据是根据您与我们的互动和您所做出的选择，包括您的隐私设置以及您使用的产品和功能。我们收集的数据可能包括SDK/API/JS代码版本、浏览器、互联网服务提供商、IP地址、平台、时间戳、应用标识符、应用程序版本、应用分发渠道、独立设备标识符、iOS广告标识符（IDFA)、安卓广告主标识符、网卡（MAC）地址、国际移动设备识别码（IMEI）、设备型号、终端制造厂商、终端设备操作系统版本、会话启动/停止时间、语言所在地、时区和网络状态（WiFi等）、硬盘、CPU和电池使用情况等。
      <h2>（三）当我们要将信息用于本策略未载明的其它用途时，会事先征求您的同意。</h2>
      当我们要将基于特定目的收集而来的信息用于其他目的时，会事先征求您的同意。
      <h1>二、我们如何使用 Cookie 和同类技术</h1>
      <h2>（一）Cookie</h2>
      <p>
        为确保网站正常运转，我们会在您的计算机或移动设备上存储名为 Cookie 的小数据文件。Cookie
        通常包含标识符、站点名称以及一些号码和字符。借助于 Cookie，网站能够存储您的偏好或购物篮内的商品等数据。
      </p>
      <p>
        我们不会将 Cookie 用于本政策所述目的之外的任何用途。您可根据自己的偏好管理或删除
        Cookie。您可以清除计算机上保存的所有 Cookie，大部分网络浏览器都设有阻止 Cookie
        的功能。但如果您这么做，则需要在每一次访问我们的网站时亲自更改用户设置。
      </p>
      <h2>（二）网站信标和像素标签</h2>
      <p>
        除 Cookie
        外，我们还会在网站上使用网站信标和像素标签等其他同类技术。例如，我们向您发送的电子邮件可能含有链接至我们网站内容的点击
        URL。如果您点击该链接，我们则会跟踪此次点击，帮助我们了解您的产品或服务偏好并改善客户服务。网站信标通常是一种嵌入到网站或电子邮件中的透明图像。借助于电子邮件中的像素标签，我们能够获知电子邮件是否被打开。如果您不希望自己的活动以这种方式被追踪，则可以随时从我们的寄信名单中退订。
      </p>
      <h2>（三）Do Not Track（请勿追踪）</h2>
      <p>
        很多网络浏览器均设有 Do Not Track 功能，该功能可向网站发布 Do Not Track
        请求。目前，主要互联网标准组织尚未设立相关政策来规定网站应如何应对此类请求。但如果您的浏览器启用了 Do Not
        Track，那么我们的所有网站都会尊重您的选择。
      </p>
      <h1>三、我们如何共享、转让、公开披露您的个人信息</h1>
      <h2>（一）共享</h2>
      我们不会向其他任何公司、组织和个人分享您的个人信息，但以下情况除外：<br />
      1、在获取明确同意的情况下共享：获得您的明确同意后，我们会与其他方共享您的个人信息。<br />
      2、我们可能会根据法律法规规定，或按政府主管部门的强制性要求，对外共享您的个人信息。<br />
      3、与我们的子公司、关联公司共享：您的个人信息可能会与我们的子公司、关联公司共享。我们只会共享必要的个人信息，且受本隐私政策中所声明目的的约束。子公司、关联公司如要改变个人信息的处理目的，将再次征求您的授权同意。<br />
      4、与授权合作伙伴共享：仅为实现本隐私政策中声明的目的，我们的某些服务将由授权合作伙伴提供。我们可能会与合作伙伴共享您的某些个人信息，以提供更好的客户服务和用户体验。例如，我们聘请来提供第三方数据统计和分析服务的公司可能需要采集和访问个人数据以进行数据统计和分析。在这种情况下，这些公司
      必须遵守我们的数据隐私和安全要求。我们仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并且只会共享提供服务所必要的个人信息。<br />
      对我们与之共享个人信息的公司、组织和个人，我们会与其签署严格的保密协定，要求他们按照我们的说明、本隐私政策以及其他任何相关的保密和安全措施来处理个人信息。<br />
      <h2>（二）转让</h2>
      我们不会将您的个人信息转让给任何公司、组织和个人，但以下情况除外：<br />
      1、在获取明确同意的情况下转让：获得您的明确同意后，我们会向其他方转让您的个人信息；<br />
      2、在涉及重组、合并或破产清算时，如涉及到个人信息转让，我们会在要求新的持有您个人信息的公司、组织继续受此隐私政策的约束，否则我们将要求该公司、组织重新向您征求授权同意。<br />
      <h2>（三）公开披露</h2>
      我们仅会在以下情况下，公开披露您的个人信息：<br />
      1、获得您明确同意后；<br />
      2、基于法律的披露：在法律、法律程序、诉讼或政府主管部门强制性要求的情况下，我们可能会公开披露您的个人信息。<br />
      <h1>四、我们如何保护您的个人信息</h1>
      （一）我们已使用符合业界标准的安全防护措施保护您提供的个人信息，防止数据遭到未经授权访问、公开披露、使用、修改、损坏或丢失。我们会采取一切合理可行的措施，保护您的个人信息。例如，在您的浏览器与“服务”之间交换数据（如信用卡信息）时受
      SSL 加密保护；我们同时对我们网站提供 https
      安全浏览方式；我们会使用加密技术确保数据的保密性；我们会使用受信赖的保护机制防止数据遭到恶意攻击；我们会部署访问控制机制，确保只有授权人员才可访问个人信息；以及我们会举办安全和隐私保护培训课程，加强员工对于保护个人信息重要性的认识。<br />
      （二）我们会采取一切合理可行的措施，确保未收集无关的个人信息。我们只会在达成本政策所述目的所需的期限内保留您的个人信息，除非需要延长保留期或受到法律的允许。<br />
      （三）互联网并非绝对安全的环境，而且电子邮件、即时通讯、及与其他我们用户的交流方式并未加密，我们强烈建议您不要通过此类方式发送个人信息。请使用复杂密码，协助我们保证您的账号安全。<br />
      （四）互联网环境并非百分之百安全，我们将尽力确保或担保您发送给我们的任何信息的安全性。<br />
      （五）在不幸发生个人信息安全事件后，我们将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。我们将及时将事件相关情况以邮件、信函、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。<br />
      同时，我们还将按照监管部门要求，主动上报个人信息安全事件的处置情况。<br />
      <h1>五、您的权利</h1>
      按照中国相关的法律、法规、标准，以及其他国家、地区的通行做法，我们保障您对自己的个人信息行使以下权利：<br />
      <h2>（一）访问您的个人信息</h2>
      您有权访问您的个人信息，法律法规规定的例外情况除外。如果您想行使数据访问权，可以通过以下方式自行访问：<br />
      账户信息——如果您希望访问或编辑您的账户中的个人资料信息或关闭您的账户等，您可以通过登录享换机的账户设置执行此类操作。<br />
      订单信息——您可以在享换机“我的订单”中访问您的订单信息，包含订单编号、订单状态、订单详情等信息。<br />
      如果您无法通过上述链接访问这些个人信息，您可以随时使用我们的 Web
      表单联系，或发送电子邮件至110@xianghuanji.com。我们将在30天内回复您的访问请求。<br />
      对于您在使用我们的产品或服务过程中产生的其他个人信息，只要我们不需要过多投入，我们会向您提供。如果您想行使数据访问权，请发送电子邮件至110@xianghuanji.com。<br />
      <h2>（二）更正您的个人信息</h2>
      当您发现我们处理的关于您的个人信息有错误时，您有权要求我们做出更正。您可以通过“（一）访问您的个人信息”中罗列的方式提出更正申请。<br />
      如果您无法通过上述链接更正这些个人信息，您可以随时使用我们的 Web
      表单联系，或发送电子邮件至110@xianghuanji.com。我们将在30天内回复您的更正请求。<br />
      <h2>（三）删除您的个人信息</h2>
      在以下情形中，您可以向我们提出删除个人信息的请求：<br />
      1、如果我们处理个人信息的行为违反法律法规；<br />
      2、如果我们收集、使用您的个人信息，却未征得您的同意；<br />
      3、如果我们处理个人信息的行为违反了与您的约定；<br />
      4、如果您不再使用我们的产品或服务，或您注销了账号；<br />
      5、如果我们不再为您提供产品或服务。<br />
      若我们决定响应您的删除请求，我们还将同时通知从我们获得您的个人信息的实体，要求其及时删除，除非法律法规另有规定，或这些实体获得您的独立授权。<br />
      当您从我们的服务中删除信息后，我们可能不会立即备份系统中删除相应的信息，但会在备份更新时删除这些信息。<br />
      <h2>（四）改变您授权同意的范围</h2>
      每个业务功能需要一些基本的个人信息才能得以完成（见本隐私政策“第一部分”）。对于额外收集的个人信息的收集和使用，您可以随时给予或收回您的授权同意。<br />
      您可以通过以下方式自行操作：删除信息、关闭设备功能等。<br />
      当您收回同意后，我们将不再处理相应的个人信息。但您收回同意的决定，不会影响此前基于您的授权而开展的个人信息处理。<br />
      如果您不想接受我们给您发送的商业广告，您随时可通过以下方式取消：<br />
      根据短信退订指引要求我们停止发送推广短信，或在移动端设备中进行设置，不再接收我们推送的消息等。<br />
      <h2>（五）个人信息主体注销账户 </h2>
      您随时可注销此前注册的账户，您可以通过以下方式自行操作：<br />
      退出登录。<br />
      在注销账户之后，我们将停止为您提供产品或服务，并依据您的要求，删除您的个人信息，法律法规另有规定的除外。<br />
      <h2>（六）个人信息主体获取个人信息副本</h2>
      您有权获取您的个人信息副本，您可以通过以下方式自行操作：<br />
      登录享换机个人账号设置。<br />
      在技术可行的前提下，例如数据接口匹配，我们还可按您的要求，直接将您的个人信息副本传输给您指定的第三方。<br />
      <h2>（七）约束信息系统自动决策</h2>
      在某些业务功能中，我们可能仅依据信息系统、算法等在内的非人工自动决策机制做出决定。如果这些决定显著影响您的合法权益，您有权要求我们做出解释，我们也将提供适当的救济方式。<br />
      <h2>（八）响应您的上述请求</h2>
      为保障安全，您可能需要提供书面请求，或以其他方式证明您的身份。我们可能会先要求您验证自己的身份，然后再处理您的请求。<br />
      我们将在三十天内做出答复。如您不满意，还可以通过以下途径投诉：<br />
      发送电子邮件至：110@xianghuanji.com<br />
      拨打我们的客服电话：400-670-0188（转4）<br />
      对于您合理的请求，我们原则上不收取费用，但对多次重复、超出合理限度的请求，我们将视情收取一定成本费用。对于那些无端重复、需要过多技术手段（例如，需要开发新系统或从根本上改变现行惯例）、给他人合法权益带来风险或者非常不切实际（例如，涉及备份磁带上存放的信息）的请求，我们可能会予以拒绝。<br />
      在以下情形中，按照法律法规要求，我们将无法响应您的请求：<br />
      1、与国家安全、国防安全有关的；<br />
      2、与公共安全、公共卫生、重大公共利益有关的；<br />
      3、与犯罪侦查、起诉和审判等有关的；<br />
      4、有充分证据表明您存在主观恶意或滥用权利的；<br />
      5、响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的。<br />
      <h1>六、我们如何处理儿童的个人信息</h1>
      我们的产品、网站和服务主要面向成人。如果没有父母或监护人的同意，儿童不得创建自己的用户账户。<br />
      对于经父母或监护人同意而收集儿童个人信息的情况，我们只会在受到法律允许、父母或监护人明确同意或者保护儿童所必要的情况下使用或公开披露此信息。<br />
      尽管当地法律和习俗对儿童的定义不同，但我们将不满 14 周岁的任何人均视为儿童。<br />
      如果我们发现自己在未事先获得可证实的父母或监护人同意的情况下收集了儿童的个人信息，则会设法尽快删除相关数据。<br />
      <h1>七、您的个人信息如何在全球范围转移</h1>
      原则上，我们在中华人民共和国境内收集和产生的个人信息，将存储在中华人民共和国境内。<br />
      由于我们通过遍布全球的资源和服务器提供产品或服务，这意味着，在获得您的授权同意后，您的个人信息可能会被转移到您使用产品或服务所在国家/地区的境外管辖区，或者受到来自这些管辖区的访问。<br />
      此类管辖区可能设有不同的数据保护法，甚至未设立相关法律。在此类情况下，我们会确保您的个人信息得到在中华人民共和国境内足够同等的保护。例如，我们会请求您对跨境转移个人信息的同意，或者在跨境数据转移之前实施数据去标识化等安全举措。<br />
      <h1>八、本隐私政策如何更新</h1>
      我们可能适时会对本隐私政策进行调整或变更，本隐私政策的任何更新将以标注更新时间的方式公布在我们网站上，除法律法规或监管规定另有强制性规定外，经调整或变更的内容一经通知或公布即生效。如您在隐私政策调整或变更后继续使用我们提供的任一服务或访问我们相关网站的，我们相信这代表您已充分阅读、理解并接受修改后的隐私政策并受其约束。<br />
      <h1>九、如何联系我们</h1>
      如果您对本隐私政策有任何疑问、意见或建议，通过以下方式与我们联系：<br />
      邮箱：110@xianghuanji.com；电话：400-670-0188（转4）<br />
      一般情况下，我们将在三十天内回复。<br />
    </div>
  </Container>
)

export default AppStore
