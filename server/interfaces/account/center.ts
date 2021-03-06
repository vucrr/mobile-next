// Generated by https://quicktype.io

export interface MyCenterReturns {
  user: User
  tips: Tips
  service: Service
  balance_ticket: BalanceTicket
  list: MyCenterReturnsList[]
  recommend: Recommend
}

export interface BalanceTicket {
  balance: string
  balance_title: string
  coupon: string
  coupon_title: string
}

export interface MyCenterReturnsList {
  title: string
  url: string
}

export interface Recommend {
  title: string
  list: Array<RecommendItem[]>
}

export interface RecommendItem {
  id: number
  image: string
  title: string
  price: number
  rent?: string
  noBadge?: boolean
}

export interface Service {
  is_available: boolean
  is_available_history: boolean
  title: string
  url_title: string
  url: string
  contracts: Contract[]
}

export interface Contract {
  contract_no: string
  returnflow_trade_no?: string
  returnflow_sub_trade_no?: string
  returnflow_type?: string
  trade_no: string
  show_text: string
  color_type: number
  contract_status: number
  repayment_amount: string
  next_pay_date: string
  logistics_tip: string
  sku_info: SkuInfo
  button_group: ButtonGroup[]
  equity: Equity
  is_ali_small: boolean
  pis_code?: string
  pay_no?: string
}

export interface ButtonGroup {
  button_name: string
  button_type: string
  button_link: string
  button_tip: string
  sort: number
  child_button_list: ChildButtonList[]
}

export interface ChildButtonList {
  button_name?: string
  button_type?: number
  bottom_name?: string
  bottom_type?: number
}

export interface Equity {
  title: string
  title_all: string
  list: EquityItem[]
}

export interface EquityItem {
  title: string
  icon: string
  image: string
  url: string
}

export interface SkuInfo {
  sku_name: string
  sku_img_url: string
}

export interface Tips {
  title: string
  url_title: string
  url: string
}

export interface User {
  is_login: boolean
  bind_mobile: boolean
  mobile: string
  head_portrait: string
}
