import { ROUTE_PATH } from '@/constants/routePath';
import { Cafe, CoffeeBean, Menu, Tag } from '@/types';

interface CafeDetail extends Cafe {
  id:string
  location: string;
  mainImages: string;
  reasonForSelection:string,
}
interface CafeDetailResponse {
  cafe: CafeDetail;
  coffeeBean: CoffeeBean;
  menus: Menu[];
  tag: Tag[];
  updatedAt: string;
  description: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getCafeDetail = async (id: string): Promise<CafeDetailResponse> => {
  const url = `${BASE_URL}${ROUTE_PATH.cafesDetail}/${id}`;
  const response = await fetch(url);
  // if (!response.ok) throw new Error('카페 상세페이지를 불러오는 도중 에러가 발생하였습니다!');
  const data = await response.json();
  return data.data;
};