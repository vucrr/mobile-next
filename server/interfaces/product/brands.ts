// Generated by https://quicktype.io

export interface BrandsReturns {
  headTop: Partial<HeadTop>
  products: Product[]
}

export interface HeadTop {
  title: string
  head_image: string
  auth: Auth
  auth_desc: AuthDesc[]
  tag_list: TagList[]
}

export interface Auth {
  logo: string
  desc: string
}

export interface AuthDesc {
  icon: string
  desc: string
}

export interface TagList {
  tag_name: string
  tag_id: number
}

// Generated by https://quicktype.io

export interface Products {
  products: Product[]
}

export interface Product {
  product_id: number
  tag: string
  image: string
  name: string
  sub_title: string
  property_tags: string[]
  price: number
  price_unit: string
  base_fee: string
  compare_buy: string
  compare_installment: string
}
