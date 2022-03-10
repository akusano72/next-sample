import { useRouter } from 'next/router';
import Button from '@/components/button';

const Member = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>Member Id: {id}</p>
      <Button></Button>
    </div>);
};

export default Member;