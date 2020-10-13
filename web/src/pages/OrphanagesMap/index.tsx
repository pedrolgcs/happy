import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

// images
import mapMarkerImg from '../../assets/images/map-marker.svg';

// styles
import { Container, Header, Footer } from './styles';
import 'leaflet/dist/leaflet.css';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <aside>
        <Header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita!</p>
        </Header>
        <Footer>
          <strong>Acari</strong>
          <span>Rio Grande do Norte</span>
        </Footer>
      </aside>

      <Map
        center={[-6.4450689, -36.6417769]}
        zoom={15}
        style={{ width: '100%', height: '100%', zIndex: 1 }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="/#">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
};

export default OrphanagesMap;
