# Kraken Robotics 2025 Q3 Earnings Components

이 폴더는 **Kraken Robotics 2025년 3분기 실적** 블로그 포스트 전용 컴포넌트를 포함합니다.

## 포함된 컴포넌트

### Q3MetricsToggle

테이블과 차트를 토글할 수 있는 컴포넌트입니다.

**특징:**

- Kraken Robotics Q3 2025 실적 데이터가 하드코딩되어 있음
- 테이블 뷰와 차트 뷰 전환 가능
- 기본값: 테이블 뷰

**사용 예시:**

```mdx
<Q3MetricsToggle />
```

**재사용 불가능:**
이 컴포넌트는 특정 데이터가 하드코딩되어 있어 다른 블로그 포스트에서 재사용할 수 없습니다.

---

## 재사용 가능한 차트 컴포넌트

재사용 가능한 차트 컴포넌트는 `components/charts/` 폴더에 있습니다:

- QuarterlyRevenueChart
- GrossMarginChart
- EBITDAChart
- RevenueComparisonChart
- AssetCompositionChart
- MarketSegmentationChart
- AnnualGuidanceChart

이들은 모두 props로 데이터를 받을 수 있어 다른 블로그 포스트에서도 사용 가능합니다.
