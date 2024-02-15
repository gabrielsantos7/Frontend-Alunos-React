import Skeleton from 'react-loading-skeleton';
import { Row } from '../../styles/GlobalStyles';

const SkeletonForm = () => {
  return (
    <>
      <Row
        style={{
          marginBottom: 10,
        }}
      >
        <Skeleton height={40} width={260} borderRadius={5} />
        <Skeleton height={40} width={260} borderRadius={5} />
      </Row>
      <Row
        style={{
          marginBottom: 10,
        }}
      >
        <Skeleton height={40} width={530} borderRadius={5} />
      </Row>
      <Row
        style={{
          marginBottom: 10,
        }}
      >
        <Skeleton height={40} width={170} borderRadius={5} />
        <Skeleton height={40} width={170} borderRadius={5} />
        <Skeleton height={40} width={170} borderRadius={5} />
      </Row>

      <Row
        style={{
          marginBottom: 10,
        }}
      >
        <Skeleton height={40} width={530} borderRadius={5} />
      </Row>
    </>
  );
};
export default SkeletonForm;
