import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import NewTask from './Pages/NewTask/NewTask';
import AllTask from './Pages/AllTask/AllTask';
import EditTask from './Components/EditTask/EditTask';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='NewTask' element={<NewTask />} />
          <Route path='AllTask' element={<AllTask />} />
          <Route path='/EditTask/:id' element={<EditTask />} /> {/* New edit task route */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
