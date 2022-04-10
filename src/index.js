import React from 'react';
import ReactDOM from 'react-dom';
import { Dashboard } from './Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Kartu } from './Assets/Kartu/Kartu';
import { CariMobil1 } from './cari_mobil/CariMobil1';
import { Display_DetailPaket } from './DetailPaket/Display_DetailPaket';
import { Layout } from './Layout/Layout';

ReactDOM.render(
  <React.StrictMode>
  <Layout/>
  </React.StrictMode>,
  document.getElementById('root')
);
