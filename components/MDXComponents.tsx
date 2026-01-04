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
import MastercardRevenueBreakdown from './mastercard-2025-q3-earnings/MastercardRevenueBreakdown'
import MarketShareChart from './mastercard-2025-q3-earnings/MarketShareChart'
import GrowthMetricsChart from './mastercard-2025-q3-earnings/GrowthMetricsChart'
import RichGrowthChart from './kb-wealth-report-2025/RichGrowthChart'
import AssetPortfolioChart from './kb-wealth-report-2025/AssetPortfolioChart'
import WealthSourceChart from './kb-wealth-report-2025/WealthSourceChart'
import RichGeographyChart from './kb-wealth-report-2025/RichGeographyChart'
import CopperDemandChart from './copper-analysis/CopperDemandChart'
import CopperPriceForecastChart from './copper-analysis/CopperPriceForecastChart'
import CopperSupplyDeficitChart from './copper-analysis/CopperSupplyDeficitChart'
import CashFlowCompositionChart from './musicow-analysis/CashFlowCompositionChart'
import MonthlyDividendPatternChart from './musicow-analysis/MonthlyDividendPatternChart'
import TaxOptimizationChart from './musicow-analysis/TaxOptimizationChart'
import KakaoMap from './KakaoMap'
import KakaoMapLinkCard from './KakaoMapLinkCard'

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
  MastercardRevenueBreakdown,
  MarketShareChart,
  GrowthMetricsChart,
  RichGrowthChart,
  AssetPortfolioChart,
  WealthSourceChart,
  RichGeographyChart,
  CopperDemandChart,
  CopperPriceForecastChart,
  CopperSupplyDeficitChart,
  CashFlowCompositionChart,
  MonthlyDividendPatternChart,
  TaxOptimizationChart,
  KakaoMap,
  KakaoMapLinkCard,
  // BlogNewsletterForm, // Newsletter 기능 비활성화 - API 연동 필요
}
