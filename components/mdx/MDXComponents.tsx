import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
// import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from '../ui/Image'
import CustomLink from '../ui/Link'
import TableWrapper from './TableWrapper'
import PieChart from '../ui/PieChart'
import QuarterlyRevenueChart from '@/features/charts/kraken-robotics-earnings/QuarterlyRevenueChart'
import GrossMarginChart from '@/features/charts/kraken-robotics-earnings/GrossMarginChart'
import EBITDAChart from '@/features/charts/kraken-robotics-earnings/EBITDAChart'
import RevenueComparisonChart from '@/features/charts/kraken-robotics-earnings/RevenueComparisonChart'
import AssetCompositionChart from '@/features/charts/kraken-robotics-earnings/AssetCompositionChart'
import MarketSegmentationChart from '@/features/charts/kraken-robotics-earnings/MarketSegmentationChart'
import AnnualGuidanceChart from '@/features/charts/kraken-robotics-earnings/AnnualGuidanceChart'
import Q3MetricsToggle from '@/features/charts/kraken-robotics-earnings/Q3MetricsToggle'
import RelatedArticles from './RelatedArticles'
import MastercardRevenueBreakdown from '@/features/charts/mastercard-earnings/MastercardRevenueBreakdown'
import MarketShareChart from '@/features/charts/mastercard-earnings/MarketShareChart'
import GrowthMetricsChart from '@/features/charts/mastercard-earnings/GrowthMetricsChart'
import YieldSpreadChart from '@/features/charts/kodex-japan-reits/YieldSpreadChart'
import GlobalDefenseSpendingChart from '@/features/charts/kraken-geopolitical/GlobalDefenseSpendingChart'
import GeopoliticalConnectionDiagram from '@/features/charts/kraken-geopolitical/GeopoliticalConnectionDiagram'
import UUVMarketProjectionChart from '@/features/charts/kraken-geopolitical/UUVMarketProjectionChart'
import ThreeScenarioAnalysis from '@/features/charts/kraken-geopolitical/ThreeScenarioAnalysis'
import PartnershipEcosystem from '@/features/charts/kraken-geopolitical/PartnershipEcosystem'
import ConnectionFlowDiagram from '@/features/charts/kraken-geopolitical/ConnectionFlowDiagram'

import BerkshireStakeChart from '@/features/charts/marubeni-analysis/BerkshireStakeChart'
import CopperDemandChart from '@/features/charts/copper-analysis/CopperDemandChart'
import CopperPriceForecastChart from '@/features/charts/copper-analysis/CopperPriceForecastChart'
import CopperSupplyDeficitChart from '@/features/charts/copper-analysis/CopperSupplyDeficitChart'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  PieChart,
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
  YieldSpreadChart,
  GlobalDefenseSpendingChart,
  GeopoliticalConnectionDiagram,
  UUVMarketProjectionChart,
  ThreeScenarioAnalysis,
  PartnershipEcosystem,
  ConnectionFlowDiagram,

  BerkshireStakeChart,
  CopperDemandChart,
  CopperPriceForecastChart,
  CopperSupplyDeficitChart,
  // BlogNewsletterForm, // Newsletter disabled - requires API integration
}
