import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
// import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import PieChart from './PieChart'
import Tweet from './Tweet'
import YouTube from './YouTube'
import QuarterlyRevenueChart from './charts/QuarterlyRevenueChart'
import GrossMarginChart from './charts/GrossMarginChart'
import EBITDAChart from './charts/EBITDAChart'
import RevenueComparisonChart from './charts/RevenueComparisonChart'
import AssetCompositionChart from './charts/AssetCompositionChart'
import MarketSegmentationChart from './charts/MarketSegmentationChart'
import AnnualGuidanceChart from './charts/AnnualGuidanceChart'
import Q3MetricsToggle from './kraken-robotics-2025-q3-earnings/Q3MetricsToggle'
import RelatedArticles from './RelatedArticles'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  PieChart,
  Tweet,
  YouTube,
  QuarterlyRevenueChart,
  GrossMarginChart,
  EBITDAChart,
  RevenueComparisonChart,
  AssetCompositionChart,
  MarketSegmentationChart,
  AnnualGuidanceChart,
  Q3MetricsToggle,
  RelatedArticles,
  // BlogNewsletterForm, // Newsletter 기능 비활성화 - API 연동 필요
}
