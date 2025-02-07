import HashTag from '@/components/common/HashTag';
import { Country } from '@/types';
import Image from 'next/image';
import { countryImage, orginItem, originList } from './OriginList.css';

interface CountryOfOriginProps {
  countryOfOrigin: Country[];
}
export default async function OriginList({ countryOfOrigin }: CountryOfOriginProps) {
  return (
    <ul className={originList}>
      {countryOfOrigin.map((country, idx) => {
        return (
          <HashTag key={idx}>
            <li className={orginItem}>
              <Image
                className={countryImage}
                src={country.flagImageUrl}
                alt={`${country} 국기`}
                width={23}
                height={16}
              />
              <div>{country.name}</div>
            </li>
          </HashTag>
        );
      })}
    </ul>
  );
}
