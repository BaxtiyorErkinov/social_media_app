import { useContext } from 'react';
import {AuthContext} from '../components/providers/AuthProvider';

export const useAuth = () => {
    const value = useContext(AuthContext)
    return value
}