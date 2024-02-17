import Skeleton from 'react-loading-skeleton';
import { Row } from '../../styles/GlobalStyles';

const SkeletonForm = () => {
  return (
    <>
      <Row spacing={2}>
        <Skeleton circle width={150} height={150} />
      </Row>

      <Row spacing={2}>
        <Skeleton height={40} width={260} borderRadius={5} />
        <Skeleton height={40} width={260} borderRadius={5} />
      </Row>
      <Row spacing={2}>
        <Skeleton height={40} width={530} borderRadius={5} />
      </Row>
      <Row spacing={2}>
        <Skeleton height={40} width={170} borderRadius={5} />
        <Skeleton height={40} width={170} borderRadius={5} />
        <Skeleton height={40} width={170} borderRadius={5} />
      </Row>

      <Row spacing={2}>
        <Skeleton height={40} width={530} borderRadius={5} />
      </Row>
    </>
  );
};
export default SkeletonForm;
