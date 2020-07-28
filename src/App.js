import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
		<BannerMain/>
      	<Menu />
	  	<Footer />

    </div>
  );
}

export default App;
