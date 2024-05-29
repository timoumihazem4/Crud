import React from 'react';
import UserTable from './Table/User.Table';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className="container">
      <UserTable />
      <Toaster />
    </div>
  );
};

export default App;