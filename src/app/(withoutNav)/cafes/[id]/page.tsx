import { getCafes } from '@/apis/cafe';
import { getCafeDetail } from '@/apis/cafeDetail';
import ChevronLeft from '@/assets/Icon/Chevron_Left.svg';
import BackButton from '@/components/cafes/[id]/BackButton';
import BookMarkButton from '@/components/cafes/[id]/BookMarkButton';
import FlavorList from '@/components/cafes/[id]/FlavorItem';
import Footer from '@/components/cafes/[id]/Footer';
import IconWithHashTag from '@/components/cafes/[id]/IconWithHashTag';
import MainImageCarousel from '@/components/cafes/[id]/MainImageCarousel';
import MapButton from '@/components/cafes/[id]/MapButton';
import MenuList from '@/components/cafes/[id]/MenuList';
import OriginList from '@/components/cafes/[id]/OriginList';
import { RoastingBar } from '@/components/cafes/[id]/RoastingBar';
import { CAFE_DETAIL_REVALIDATE_TIME } from '@/constants/revalidateTime';
import {
  beanCardTitle,
  cafesDetailMain,
  cafesIdLayout,
  coffeeBeanSection,
  divider,
  header,
  pickReason,
  pickReasonBox,
  pickReasonSection,
  recoCoffeeBeanBox,
  subTitle,
  title,
  toggleBox,
  toggleContent,
  toggleInput,
  toggleLabel,
} from './page.css';

interface PageId {
  id: string;
}
//SSG 적용 후
export async function generateStaticParams(): Promise<PageId[]> {
  const cafesResponse = await getCafes();
  const { cafes } = cafesResponse;
  return cafes.map((cafe) => ({
    id: cafe.cafeId,
  }));
}

export default async function Page({ params }: { params: Promise<PageId> }) {
  const detailPageId = (await params).id;

  const { cafe, coffeeBean, menus, updatedAt, tags } = await getCafeDetail(
    detailPageId,
    CAFE_DETAIL_REVALIDATE_TIME
  );

  return (
    <div className={cafesIdLayout}>
      <header className={header}>
        <BackButton />
        <BookMarkButton cafe={cafe} />
      </header>
      <div className={title}>
        <div>
          <h1>{cafe.name}</h1>
          <div>{cafe.location}</div>
        </div>
        <MapButton naverMapUrl={cafe.naverMapUrl} />
      </div>
      <MainImageCarousel mainImageUrl={cafe.mainImageUrl} />

      <main className={cafesDetailMain}>
        <section className={pickReasonSection}>
          <h2 className={subTitle}>선정 이유</h2>
          <article className={pickReasonBox}>
            <div className={pickReason}>{cafe.reasonForSelection}</div>
            <div className={divider}></div>
            <IconWithHashTag tags={tags} />
          </article>
        </section>
        <section className={coffeeBeanSection}>
          <h2 className={subTitle}>대표 원두</h2>
          <article className={recoCoffeeBeanBox}>
            <div>
              <div className={beanCardTitle}>{coffeeBean.engName.toUpperCase()}</div>
              <input
                type="checkbox"
                id="toggle"
                className={toggleInput}
                aria-expanded="false"
                aria-controls="toggle-content"
              />
              <div className={toggleBox}>
                <h3>{coffeeBean.name}</h3>
                <label htmlFor="toggle" className={toggleLabel}>
                  <ChevronLeft width={24} height={24} />
                </label>
              </div>
              <div className={divider}></div>
              <div id="toggle-content" className={toggleContent}>
                <p>{coffeeBean.description}</p>
              </div>
            </div>
            <div>
              <h3>향미</h3>
              <FlavorList flavors={coffeeBean.flavors} />
            </div>
            <div>
              <h3>산지</h3>
              <OriginList countryOfOrigin={coffeeBean.countryOfOrigin} />
            </div>
            <div>
              <h3>로스팅 포인트</h3>
              <RoastingBar activeLevel={coffeeBean.roastingPoint as 'medium' | 'light' | 'dark'} />
            </div>
          </article>
        </section>
        <MenuList menus={menus} />
      </main>
      <Footer updatedDate={updatedAt} />
    </div>
  );
}
