// components/ReduxProvider.tsx
"use client"
import { Provider } from 'react-redux';
import { store } from '../redux/store';  // Assuming your store is in the root directory

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
