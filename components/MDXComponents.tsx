import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
// import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import PieChart from './PieChart'
import KakaoMapEmbed from './KakaoMapEmbed'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  PieChart,
  KakaoMapEmbed,
  // BlogNewsletterForm, // Newsletter 기능 비활성화 - API 연동 필요
}
