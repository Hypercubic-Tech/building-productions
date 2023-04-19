import Main from '@/components/main/Main';
import { useSelector } from 'react-redux';
import { selectAuthState, selectAuthAccessToken } from '../store/slices/authSlice';

export default function Home() {
  const authState = useSelector(selectAuthState);
  const access_token = useSelector(selectAuthAccessToken);
  console.log(access_token);
  
  return <Main />;
}
