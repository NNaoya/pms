import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import New from './components/templates/New';
import Detail from './components/templates/Detail';
import Edit from './components/templates/Edit';
import Project from './pages/Project';
import Resource from './pages/Resources';
import Header from './components/organisms/Header';
import Menu from './components/organisms/Menu';
import Sales from './pages/Sales';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Menu>
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/new" element={<New />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/:id/edit" element={<Edit />} />
          <Route path="/resources" element={<Resource />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </Menu>
    </BrowserRouter>
  );
};

export default App;
