<template>
  <div class="catalog">
    <div class="title">
      BIENVENIDOS
      AL FUTURO.
    </div>

    <div class="filter-container">
      <div class="filter-box">
        Mira más específico.

        <custom-selector
          v-model="selected"
          :default-option="'Todo'"
          :options="options"></custom-selector>

      </div>
      <div class="filter-box">
        Tu pones los límites.
        <b>FILTRAR.</b>
      </div>
      <div class="filter-box">
        ¡Déjanos ayudarte!
        <b>BUSCAR.</b>
      </div>
    </div>

    <pagination
      style="padding: 30px 50px"
      :pages="6">
      
      <div slot="1">
        <div class="catalog-box">
          
          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/QUITA MANCHAS.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                QUITA MANCHAS
                GRANULADO.
                400 gr.
              </div>
              <div class="item__price">
                $6000
              </div>
            </div>
            Blanquea la ropa blanca. No contiene cloro. Desincrusta manchas en ropa de color. Desodoriza las fibras textiles.
          </div>
          </div>

          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/fwdneuvosavancesyfotos/QUITAMANCHASLIQ.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                QUITA MANCHAS
                LÍQUIDO.
                250 ml.
              </div>
              <div class="item__price">
                $6700
              </div>
            </div>
            Remueve manchas de productos industriales y alimenticios en las telas blancas y de color. Elimina la mancha del desodorante en todo tipo de camisas y camisetas,sin dañar los colores.
          </div>
          </div>

          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/QUITA TINTA.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                QUITA TINTA
                10 ml.
              </div>
              <div class="item__price">
                $5700
              </div>
            </div>
            Borra cualquier tipo de tinta que haya caído en ropa y superficies. No decolora.
          </div>
          </div>

        </div>

        <div class="catalog-box2">

          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/QUITAOXIDO.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/QUITA OXIDO.jpg" alt="">
            </div>
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                QUITA ÓXIDO INSTANTÁNEO.
                10 ml.
              </div>
              <div class="item__price">
                $5700
              </div>
            </div>
            Borra cualquier tipo de tinta que haya caído en ropa y superficies. No decolora.
          </div>
          </div>

        </div>

        <div class="catalog-box">

          <div class="item">
            <div class="item__image">
            <img src="" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                BICARBONATO
                DE SODIO.
                400 gr.
              </div>
              <div class="item__price">
                $6000
              </div>
            </div>
            Es de uso medicinal, doméstico y cosmético.
          </div>
          </div>

          <div class="item">
            <div class="anounce">
              TU FORMA
              DE LAVAR
              CAMBIARÁ
              PARA 
              SIEMPRE.
            </div>
          </div>

          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/QUITA TINTA.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
            
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                QUITA TINTA
                10 ml.
              </div>
              <div class="item__price">
                $5700
              </div>
            </div>
            Borra cualquier tipo de tinta que haya caído en ropa y superficies. No decolora.
          </div>
          </div>

        </div>

        <div class="catalog-box2">
          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/removedor.jpg">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                REMOVEDOR Y DESMANCHADOR DE SUPERFICIES.
                900 ml.
              </div>
              <div class="item__price">
                $7600
              </div>
            </div>
            Penetra y afloja ceras, selladores, grasas carbonizadas y aceites presentes en superficies de madera, cemento, granito, vinilos, metálicas, equipos, estructuras, etc. Útil para desengrasar y desmanchar, sin restregar, estufas, paredes, pisos y baños.
          </div>
          </div>

        <div class="item">
          <div class="item__image">
            <img src="../assets/productos/SELLADOR.jpg">
            <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
          </div>

        <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                SELLADOR PARA PISOS.
                900 ml.
              </div>
              <div class="item__price">
                $15000
              </div>
            </div>
            Deja una capa auto-brillante y otra anti-deslizante que protege los pisos contra el tráfico pesado en superficies interiores y exteriores. Contiene agentes resistentes para la acción de los rayos solares y las lluvias.
          </div>

        </div>
      </div>
        <div class="catalog-box">
          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/SILICONA.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                SILICONA
                INDUSTRIAL.
                250 ml.
              </div>
              <div class="item__price">
                $9300
              </div>
            </div>
            Protege, limpia, brilla, lubrica y embellece todos los artículos del hogar y la oficina: computadores, máquinas de escribir, teléfonos, escritorios, muebles, objetos de madera, fórmica, sillas en cuero, cerámicas, acero inoxidable, vehículos, etc.
          </div>
          </div>

        <div class="item">
            <div class="item__image">
            <img src="" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                CHAMPÚ PARA
                ALFOMBRAS Y
                MUEBLES.
                250 ml.
              </div>
              <div class="item__price">
                $8700
              </div>
            </div>
            Limpia todo tipo de alfombras y muebles dejando un agradable aroma.
          </div>
        </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/DIFUSOR.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                LUSTRA
                MUEBLES.
                250 ml.
              </div>
              <div class="item__price">
                $9800
              </div>
            </div>
            Lubrica y limpia superficies de madera, fórmica, acero, enchapados, mármol, vinilo, porcelana, cromados, esmaltados, azulejos, etc. No es grasoso ni aceitoso.
          </div>
        </div>

      </div>
      </div>

      <div slot= "2">
       <div class="catalog-box">
          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/JABON SUPER BLUE 900 ML.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                JABÓN LIQUIDO
                SÚPER BLUE.
                900 ml.
              </div>
              <div class="item__price">
                $7600
              </div>
            </div>
            Detergente biodegradable con espuma controlada que conserva la lavadora y no afecta ni las prendas blancas ni las de color.
          </div>
          </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/fwdneuvosavancesyfotos/PERFUMEDAMA.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                SUAVIZANTE DE
                TELAS GALANTE
                900 ml.
              </div>
              <div class="item__price">
                $7600
              </div>
            </div>
            Quita la estática de las prendas e inhibe el proceso de todo tipo de detergentes. Suaviza y aromatiza las fibras textiles.
          </div>
        </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/DIFUSOR.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                BIOVARSOL
                900 ml.
              </div>
              <div class="item__price">
                $11000
              </div>
            </div>
            Limpieza en general.
          </div>
        </div>
 
      </div>  

<div class="catalog-box2">

          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/ELIMINADORDEOLORES.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/ELIMINADORDEOLORES.jpg" alt="">
            </div>
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                ELIMINADOR DE OLORES.
                55 ml.
              </div>
              <div class="item__price">
                $5700
              </div>
            </div>
            Reodorante natural con moléculas aromáticas que reducen cualquier olor desagradable.
          </div>
          </div>

        </div>

<div class="catalog-box">

          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/fwdneuvosavancesyfotos/LIMPIADOR.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                LAVA LOZA.
                900 ml.
              </div>
              <div class="item__price">
                $7600
              </div>
            </div>
            Limpia, brilla y desengrasa vajillas y utensilios del hogar.
          </div>
          </div>

          <div class="item">
            <div class="anounce">
              TRANSFORMAMOS
              EL OFICIO DE 
              LA LIMPIEZA
              EN ALGO
              MÁS
              INTELIGENTE
            </div>
          </div>

          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/SELLADOR.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
            
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                LIMPIA VIDRIOS
                CON FRAGANCIA
                900 ml.
              </div>
              <div class="item__price">
                $7000
              </div>
            </div>
            Es un producto que corta la grasa y limpia vidrios, porcelanas, fórmica y otras superficies, además no necesita enjuague. Deja claridad y brillo en el acabado.
          </div>
          </div>

        </div>

 <div class="catalog-box2">
          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/DESENGRASANTE IND 900 ML.jpg">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                DESENGRASANTE INDUSTRIAL.
                900 ml.
              </div>
              <div class="item__price">
                $7600
              </div>
            </div>
            Desmancha y desengrasa fibras textiles con mucha suciedad. Recomendado para limpiar tapicerías, alfombras, overoles, ropa, cortinas, etc.
          </div>
          </div>

        <div class="item">
          <div class="item__image">
            <img src="../assets/productos/CERA 900 ML.jpg">
            <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
          </div>

        <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                CERA EMULSIONADA
                CON FRAGANCIA.
                900 ml.
              </div>
              <div class="item__price">
                $7000
              </div>
            </div>
            Deja una capa protectora de brillo que embellece todo tipo de pisos: vinilos, cemento, tableta gres, granito, madera, cerámica, etc.
          </div>

        </div>
      </div>

<div class="catalog-box">
          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/fwdneuvosavancesyfotos/VASO.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                VASO
                MEDIDOR.
              </div>
              <div class="item__price">
                $5000
              </div>
            </div>
            Mide exactamente la cantidad de detergente para lavadora.
          </div>
          </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/fwdneuvosavancesyfotos/PERFUMEDAMA.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                GATILLO
                900 ml.
              </div>
              <div class="item__price">
                $2000
              </div>
            </div>
            Útil para aplicar removedor y desmanchador de superficies, cera emulsionada, limpia vidrios, sellador para pisos, limpiadores desinfectantes, entre otros.
          </div>
        </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/DIFUSOR.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                GUANTES DE
                NITRILO.
              </div>
              <div class="item__price">
                $1700
              </div>
            </div>
            Recomendados para utilizar durante la aplicación de todos los productos.
          </div>
        </div>
 
      </div>

      </div>

      <div slot="3">

<div class="catalog-box">
          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/fwdneuvosavancesyfotos/CLORO.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                CLORO
                BLANQUEADOR.
                900 ml.
              </div>
              <div class="item__price">
                $4000
              </div>
            </div>
            Solución de hipoclorito de sodio de alta calidad con blanqueadores ópticos para limpiar y desinfectar baños, pisos, paredes, mesones, cocinas, orinales, etc.
          </div>
          </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/fwdneuvosavancesyfotos/PERFUMEDAMA.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                CLORO EN
                PASTILLA.
                196 gr.
              </div>
              <div class="item__price">
                $4600
              </div>
            </div>
            Al 90 % para desinfectar orinales y tanques de agua.
          </div>
        </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/fwdneuvosavancesyfotos/LIMPIADOR.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                LIMPIADOR
                DESINFECTANTE
                CON AROMA.
                900 ml.
              </div>
              <div class="item__price">
                $7000
              </div>
            </div>
            Mezcla de detergentes, limpiadores y emulsionantes con un poderoso bactericida para limpiar y sanitizar superficies.
          </div>
        </div>
 
      </div>




<div class="catalog-box2">

          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/fwdneuvosavancesyfotos/CREOLINA.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/fwdneuvosavancesyfotos/CREOLINA.jpg" alt="">
            </div>
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                CREOLINA TRIPLE.
                900 ml.
              </div>
              <div class="item__price">
                $17700
              </div>
            </div>
            Potente desinfectante para pisos, paredes en galpones, gallineros, porquerizas, baños y en general cualquier superficie que desee desinfectar.
          </div>
          </div>

        </div>

<div class="catalog-box">

          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/fwdneuvosavancesyfotos/GELANTI.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                GEL 
                ANTIBACTERIAL.
                35 ml.
              </div>
              <div class="item__price">
                $2700
              </div>
            </div>
            Desinfecta, humecta, protege y suaviza la piel. No reseca. No necesita enjuagar ni secar.
          </div>
          </div>

          <div class="item">
            <div class="anounce">
              TU FORMA
              DE LIMPIAR 
              CAMBIARÁ
              PARA
              SIEMPRE.
            </div>
          </div>

          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/JABON PARA MANOS 900 ML.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
            
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                JABÓN LIQUIDO
                ANTIBACTERIAL
                PARA MANOS
                900 ml.
              </div>
              <div class="item__price">
                $7600
              </div>
            </div>
            Lava, limpia y desinfecta las manos, evitando que se resequen.
          </div>
          </div>

        </div>

<div class="catalog-box2">
          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/FRAGANCIA TAHITIAN 60 ML.jpg">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA DE LARGA
                DURACIÓN TAHITIAN
                30 ml.
              </div>
              <div class="item__price">
                $7900
              </div>
            </div>
            Fina fragancia con notas dulces y frescas que perfuman baños y habitaciones.
          </div>
          </div>

        <div class="item">
          <div class="item__image">
            <img src="../assets/productos/FRAGANCIALD.jpg">
            <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
          </div>

        <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA DE LARGA
                DURACIÓN WINTTY.
                30 ml.
              </div>
              <div class="item__price">
                $7700
              </div>
            </div>
            Fina fragancia con notas frescas que perfuman armarios y vehículos.
          </div>

        </div>
      </div>

<div class="catalog-box">
          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/FRAGANCIA MARACUYA 60 ML.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA DE 
                LARGA
                DURACIÓN
                MARACUYÁ.
                30 ml.
              </div>
              <div class="item__price">
                $7900
              </div>
            </div>
            Fina fragancia con notas cítricas que perfuman cocinas, estudios y locales comerciales.
          </div>
          </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/FRAGANCIACANELA.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA DE
                LARGA DURACIÓN
                CANELA.
                30 ml.
              </div>
              <div class="item__price">
                $5300
              </div>
            </div>
            Fina fragancia con notas cálidas que perfuman salas, habitaciones y oficinas.
          </div>
        </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/FRAGANCIA COCO 60 ML.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA DE 
                LARGA
                DURACIÓN
                COCO.
                30 ml.
              </div>
              <div class="item__price">
                $6200
              </div>
            </div>
            Fina fragancia con notas dulces que perfuman cualquier espacio del hogar.
          </div>
        </div>
 
      </div>



      </div>

    <div slot="4">
<div class="catalog-box">
          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/FRAGANCIA FRUTOS ROJOS 60 ML.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA DE 
                LARGA
                DURACIÓN
                FRUTOS ROJOS.
                30 ml.
              </div>
              <div class="item__price">
                $6300
              </div>
            </div>
            Fina fragancia con notas frutales que perfuman baños, salas y oficinas.
          </div>
          </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/FRAGANCIA BAMBU 60 ML.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA DE
                LARGA DURACIÓN
                BAMBÚ.
                30 ml.
              </div>
              <div class="item__price">
                $7200
              </div>
            </div>
            Fina fragancia con notas maderadas que perfuman baños, cocinas y cuartos de basuras.
          </div>
        </div>

        <div class="item">
            <div class="item__image">
            <img src="" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA 
                DIFUSOR
                ELÉCTRICO TUTTY
                FRUTY.
                30 ml.
              </div>
              <div class="item__price">
                $7000
              </div>
            </div>
            Fina fragancia con notas dulces y cítricas que perfuman aquellos espacios donde se conecte el difusor eléctrico.
          </div>
        </div>
 
      </div>


<div class="catalog-box2">

          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/FRAGANCIA MARACUYA 60 ML.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/FRAGANCIA MARACUYA 60 ML.jpg" alt="">
            </div>
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA DE LARGA DURACIÓN
                MARACUYÁ CON SPRAY.
                60 ml.
              </div>
              <div class="item__price">
                $15800
              </div>
            </div>
            Fina fragancia con notas cítricas que perfuman cocinas, estudios y locales comerciales.
          </div>
          </div>

        </div>


<div class="catalog-box">

          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/FRAGANCIA COCO 60 ML.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA
                DE LARGA
                DURACIÓN
                COCO CON
                SPRAY.
                60 ml.
              </div>
              <div class="item__price">
                $12400
              </div>
            </div>
            Fina fragancia con notas dulces que perfuman cualquier espacio del hogar.
          </div>
          </div>

          <div class="item">
            <div class="anounce">
              ES PERFECTA
              PARA TI.
            </div>
          </div>

          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/FRAGANCIA CANELA 60 ML.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
            
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA DE
                LARGA
                DURACIÓN
                CANELA CON
                SPRAY.
                60 ml.
              </div>
              <div class="item__price">
                $10600
              </div>
            </div>
            Fina fragancia con notas cálidas que perfuman salas, habitaciones y oficinas.
          </div>
          </div>

        </div>

<div class="catalog-box2">
          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/FRAGANCIA TAHITIAN 60 ML.jpg">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA DE LARGA
                DURACIÓN TAHITIAN CON SPRAY.
                60 ml.
              </div>
              <div class="item__price">
                $15800
              </div>
            </div>
            Fina fragancia con notas dulces y frescas que perfuman baños y habitaciones.
          </div>
          </div>

        <div class="item">
          <div class="item__image">
            <img src="../assets/productos/FRAGANCIA BAMBU 60 ML.jpg">
            <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
          </div>

        <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA DE LARGA
                DURACIÓN BAMBÚ CON
                SPRAY.
                60 ml.
              </div>
              <div class="item__price">
                $14400
              </div>
            </div>
            Fina fragancia con notas maderadas que perfuman baños, cocinas y cuartos de basuras.
          </div>

        </div>
      </div>
<div class="catalog-box">
          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/FRAGANCIA FRUTOS ROJOS 60 ML.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA DE 
                LARGA
                DURACIÓN
                FRUTOS ROJOS
                CON SPRAY.
                60 ml.
              </div>
              <div class="item__price">
                $12600
              </div>
            </div>
            Fina fragancia con notas frutales que perfuman baños, salas y oficinas.
          </div>
          </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/FRAGANCIASPRAY.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA DE
                LARGA DURACIÓN
                WINTTY CON
                SPRAY.
                60 ml.
              </div>
              <div class="item__price">
                $15400
              </div>
            </div>
            Fina fragancia con notas frescas que perfuman armarios y vehículos.
          </div>
        </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/DIFUSOR.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA 
                DIFUSORA
                MANZANA Y
                CANELA CON
                PALOS DE
                RATTAN.
                30 ml.
              </div>
              <div class="item__price">
                $5300
              </div>
            </div>
            Exclusiva fragancia difusora con notas cálidas y frutales que perfuman salas, habitaciones y oficinas.
          </div>
        </div>
 
      </div>



    </div>

    <div slot="5">

<div class="catalog-box">
          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/DIFUSOR DE AROMA CHOCOLATE 30 ML.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA 
                DIFUSORA
                CHOCOLATE CON
                PALOS DE
                RATTAN.
                30 ml.
              </div>
              <div class="item__price">
                $7900
              </div>
            </div>
            Exclusiva fragancia difusora con notas dulces que perfuman habitaciones, cocinas y estudios.
          </div>
          </div>

        <div class="item">
            <div class="item__image">
            <img src="" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA
                DIFUSORA
                VAINILLA CON
                PALOS DE
                RATTAN.
                30 ml.
              </div>
              <div class="item__price">
                $7200
              </div>
            </div>
            Exclusiva fragancia difusora con notas orientales y cálidas que perfuman salas, baños y armarios.
          </div>
        </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/DIFUSOR.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA 
                DIFUSORA
                CHICLE IRAZÚ
                CON PALOS DE 
                RATTAN.
                30 ml.
              </div>
              <div class="item__price">
                $6200
              </div>
            </div>
            Exclusiva fragancia difusora con notas dulces y ácidas que perfuman vehículos.
          </div>
        </div>
 
      </div>



<div class="catalog-box2">

          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/FRAGANCIASPRAY.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/DIFUSOR DE AROMA EXOTICO 30 ML.jpg" alt="">
            </div>
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA DIFUSORA
                EXÓTICO CON PALOS DE
                RATTAN.
                30 ml.
              </div>
              <div class="item__price">
                $7700
              </div>
            </div>
            Exclusiva fragancia difusora con notas cítricas y maderadas que perfuman todos los espacios del hogar o la oficina.
          </div>
          </div>

        </div>




<div class="catalog-box">

          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/FRAGANCIASPRAY.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA DIFUSORA
                FRUTOS ROJOS CON
                PALOS DE RATTAN
                30 ml.
              </div>
              <div class="item__price">
                $6300
              </div>
            </div>
            Exclusiva fragancia difusora con notas dulces, cítricas y frutales que perfuman salas, baños y oficinas.
          </div>
          </div>

          <div class="item">
            <div class="anounce">
              UN SISTEMA
              REVOLUCIONARIO
              QUE EXPANDE EL 
              AROMA POR
              TODO EL AIRE SIN
              NECESIDAD DE
              FUEGO O UNA
              CONEXIÓN 
              ELÉCTRICA.
            </div>
          </div>

          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/DIFUSOR DE AROMA MORA 30 ML.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
            
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA DIFUSORA
                MORA CON PALOS DE
                RATTAN.
                30 ml.
              </div>
              <div class="item__price">
                $7200
              </div>
            </div>
            Exclusiva fragancia difusora con notas frutales que perfuman salas, habitaciones y estudios.
          </div>
          </div>

        </div>


<div class="catalog-box2">
          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/FRAGANCIASPRAY.jpg">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA DIFUSORA
                CÍTRICO CON PALOS DE
                RATTAN.
                30 ml.
              </div>
              <div class="item__price">
                $7900
              </div>
            </div>
            Exclusiva fragancia difusora con notas cítricas que perfuman cocinas, estudios y locales comerciales.
          </div>
          </div>

        <div class="item">
          <div class="item__image">
            <img src="../assets/productos/FRAGANCIALD.jpg">
            <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
          </div>

        <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                FRAGANCIA DIFUSORA BEBÉ
                CON PALOS DE RATTAN.
                30 ml.
              </div>
              <div class="item__price">
                $7700
              </div>
            </div>
            Exclusiva fragancia difusora con notas suaves y delicadas que perfuman habitaciones y salas de juegos infantiles.
          </div>

        </div>
      </div>


<div class="catalog-box">
          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/PERFUME MEUF 30 ML.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                PERFUME
                MEUF PARA
                DAMA.
                30 ml.
              </div>
              <div class="item__price">
                $17900
              </div>
            </div>
            Acordes florales intensos que realzan sus notas cítricas.
          </div>
          </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/PERFUME FEMME 30 ML.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                PERFUME FEMME 
                PARA DAMA.
                30 ml.
              </div>
              <div class="item__price">
                $15700
              </div>
            </div>
            Acordes cítricos intensos que realzan sus notas frescas.
          </div>
        </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/PERFUME FILLE 30 ML.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                PERFUME FILLE
                PARA DAMA.
                30 ml.
              </div>
              <div class="item__price">
                $18300
              </div>
            </div>
            Acordes dulces intensos que realzan sus notas cálidas.
          </div>
        </div>
 
      </div>


    </div>

    <div slot="6">

<div class="catalog-box">
          <div class="item">
            <div class="item__image">
            <img src="" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                PERFUME
                MADAME PARA
                DAMA.
                30 ml.
              </div>
              <div class="item__price">
                $19900
              </div>
            </div>
            Acordes maderados intensos que realzan sus notas orientales.
          </div>
          </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/PERFUME MEC 30 ML.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                PERFUME MEC
                PARA CABALLERO.
                30 ml.
              </div>
              <div class="item__price">
                $15700
              </div>
            </div>
            Acordes cítricos intensos que realzan sus notas frescas.
          </div>
        </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/PERFUME AMANT 30 ML.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                PERFUME AMANT
                PARA CABALLERO.
                30 ml.
              </div>
              <div class="item__price">
                $17900
              </div>
            </div>
            Acordes atalcados intensos que realzan sus notas chipre.
          </div>
        </div>
 
      </div>
<div class="catalog-box2">

          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/fwdneuvosavancesyfotos/PERFUMEHOMBRE.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/FRAGANCIASPRAY.jpg" alt="">
            </div>
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                PERFUME HOMME PARA
                CABALLERO.
                30 ml.
              </div>
              <div class="item__price">
                $19900
              </div>
            </div>
            Acordes dulces intensos que realzan sus notas cálidas.
          </div>
          </div>

        </div>



<div class="catalog-box">

          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/PERFUME MONSIEUR 30 ML.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                PERFUME MONSIEUR
                PARA CABALLERO.
              </div>
              <div class="item__price">
                $18300
              </div>
            </div>
            Acordes untuosos intensos que realzan sus notas cítricas y maderadas.
          </div>
          </div>

          <div class="item">
            <div class="anounce">
              TE
              RECONOCERÁN
              INCLUSO EN LA
              OSCURIDAD.
            </div>
          </div>

          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/SELLADOR.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
            
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                AMBIENTADOR
                FRUTOS ROJOS CON
                SPRAY.
                60 ml.
              </div>
              <div class="item__price">
                $7900
              </div>
            </div>
            Acordes untuosos intensos que realzan sus notas cítricas y maderadas.
          </div>
          </div>

        </div>



<div class="catalog-box2">
          <div class="item">
            <div class="item__image">
              <img src="../assets/productos/FRAGANCIASPRAY.jpg">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>
            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                AMBIENTADOR EXTREME
                CON SPRAY.
                60 ml.
              </div>
              <div class="item__price">
                $7900
              </div>
            </div>
            Alta concentración de esencias frescas que aromatizan vehículos, estudios y armarios.
          </div>
          </div>

        <div class="item">
          <div class="item__image">
            <img src="../assets/productos/FRAGANCIALD.jpg">
            <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
          </div>

        <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                AMBIENTADOR CITRONELA
                CON SPRAY.
                60 ml.
              </div>
              <div class="item__price">
                $7700
              </div>
            </div>
            Alta concentración de esencias cítricas que aromatizan salas, baños y cuartos de basura
          </div>

        </div>
      </div>

<div class="catalog-box">
          <div class="item">
            <div class="item__image">
            <img src="../assets/productos/FRAGANCIA.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                AMBIENTADOR
                DURAZNO CON
                SPRAY.
                60 ml.
              </div>
              <div class="item__price">
                $7300
              </div>
            </div>
            Alta concentración de esencias dulces que aromatizan habitaciones y locales comerciales.
          </div>
          </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/FRAGANCIASPRAY.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                AMBIENTADOR
                CANELA CON
                SPRAY.
                60 ml.
              </div>
              <div class="item__price">
                $7000
              </div>
            </div>
            Alta concentración de esencias maderadas que aromatizan todos los espacios del hogar y la oficina.
          </div>
        </div>

        <div class="item">
            <div class="item__image">
            <img src="../assets/productos/DIFUSOR.jpg" alt="">
              <div class="buy__item">
                <div class="buy__item--inner">
                  Comprar
                </div>
              </div>
            </div>

            <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                AMBIENTADOR
                FIESTA DE
                FLORES CON
                SPRAY.
                60 ml.
              </div>
              <div class="item__price">
                $7900
              </div>
            </div>
            Alta concentración de esencias florales que aromatizan baños, cocinas y salas.
          </div>
        </div>
 
      </div>




    </div>


            
    </pagination>

  </div>
</template>

<script>
import Pagination from '../components/ui/Pagination.vue'
import CustomSelector from '../components/ui/CustomSelector.vue'

export default {
  data() {
    return {
      selected: '',
      options: [
        'Todo',
        'Todo 1',
        'Todo 2',
        'Todo 3'
      ]
    }
  },
  components: {
    CustomSelector,
    Pagination
  }
}
</script>

<style lang="sass" scoped>
@import '../stylesheets/global.sass'

.title
  +flex(1, 1)
  text-align: center
  @extend %title
  font-size: 44px

.filter-container
  font-size: 18px
  margin: 80px 0
  +flex(1, 0)
  flex-wrap: wrap
  justify-content: space-around 
  padding: 0 30px

.filter-box
  +flex(0, 1)
  flex-direction: column
  width: 200px
  text-align: center
  
.catalog-box
  +flex(0, 0)
  justify-content: space-around
  flex-wrap: wrap 

.item
  +flex(0, 0)
  width: 300px
  margin: 15px 5px
  flex-direction: column

  img
    @extend %image-cover

  .item__image
    height: 400px
    position: relative
    overflow: hidden

    &:hover > .buy__item
      transform: translate(-50%, 0%)

  .buy__item
    background: black
    position: absolute
    bottom: 0
    left: 50%
    box-sizing: border-box
    transform: translate(-50%, 100%)
    left: 50%
    color: white
    font-weight: bold
    font-size: 18px
    cursor: pointer
    transition: .3s
    border: 1px solid white

  .buy__item--inner
    padding: 13px 18px
    position: relative
    overflow: hidden

    &:after
      content: ''
      z-index: -1
      width: 0
      height: 100%
      position: absolute
      background: white
      top: 0
      left: 0
      transition: .3s

    &:hover
      &:after
        width: 100% 
      
      color: black

.item__description
  margin-top: 20px

  .item__heading
    display: flex
    white-space: pre-line
    font-size: 18px
    font-weight: bold
    margin-bottom: 15px

  .item__title
    width: 70%

  .item__price
    width: 30%

.catalog-box2
  +flex(1, 0)
  width: 100%
  margin: 15px 0

  .item
    margin: 0
    width: 50%
    min-width: 300px

  .item__image
    height: auto

.anounce
  @extend %title
  font-size: 45px
  text-align: center

@media (max-width: 630px)
  .catalog-box2
    flex-wrap: wrap

</style>
