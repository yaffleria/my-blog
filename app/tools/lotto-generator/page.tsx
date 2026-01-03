import { genPageMetadata } from 'app/seo'
import LottoGenerator from './LottoGenerator'

export const metadata = genPageMetadata({
  title: '로또 번호 생성기',
  description: '재미로 보는 로또 번호 생성기입니다. 행운의 6개 번호를 생성해보세요!',
  keywords: ['로또', '로또 번호', '로또 생성기', '번호 추첨', 'Lotto', 'Number Generator'],
})

export default function LottoPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          로또 번호 생성기
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          오늘의 행운을 시험해보세요! 🎰
        </p>
      </div>
      <div className="container py-12">
        <LottoGenerator />

        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>* 이 도구는 무작위 난수를 생성하며, 실제 당첨 확률과는 관계가 없습니다.</p>
          <p>재미로만 즐겨주세요!</p>
        </div>
      </div>
    </div>
  )
}
