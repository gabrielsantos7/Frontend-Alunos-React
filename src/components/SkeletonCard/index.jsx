import Skeleton from 'react-loading-skeleton';
import { Card } from './styled';

const SkeletonCard = () => {
  return (
    <Card>
      <Skeleton circle width={36} height={36} />
      <Skeleton width={125} />
      <Skeleton width={125} />
      <Skeleton width={50} />
    </Card>
  );
};
export default SkeletonCard;
