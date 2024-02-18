import Skeleton from 'react-loading-skeleton';
import { Row } from '../../styles/GlobalStyles';

const SkeletonPhoto = () => {
  return (
    <>
      <Row spacing={2}>
        <Skeleton circle width={180} height={180} />
      </Row>

      <Row spacing={3}>
        <Skeleton height={20} width={400} borderRadius={5} />
      </Row>
    </>
  );
};
export default SkeletonPhoto;
