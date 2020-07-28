import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
		<BannerMain
			videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
			url={dadosIniciais.categorias[0].videos[0].url}
			videoDescription={"Naruto é uma série de mangá escrita  por Masashi Kishimoto, que conta a história de Naruto Uzumaki, um jovem ninja que deseja reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila."}
		/>
      	<Menu />
	  	<Footer />

    </div>
  );
}

export default App;
