import React from 'react';
import { Viewer } from "resium";
import { viewerDragDropMixin } from "cesium";

import './App.css';
import Logo from './Logo/Logo';
import TestFs from './model/TestFs';

const App: React.FC = () => <Viewer full extend={viewerDragDropMixin}/>;

export default App;
