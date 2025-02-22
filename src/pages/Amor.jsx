import React from 'react'
import { assets } from '../assets/assets'

const Amor = () => {
  return (
        <div> 
					<section className="intro">
						 <header>
							<h1>Dolce Bijou</h1>
							<p>Una empresa hecha con amor y decidación por la mujer que más amo en la vida, una chica preciosa y bella que se llama Siani, mi esposa 😍</p>
							<ul className="actions">
								<li><a href="#first" className="arrow scrolly"><span className="label">Next</span></a></li>
							</ul>
						</header>
						<div className="content">
							<span className="image fill" data-position="center"><img id="miImagen" src="images/pic03.jpg" alt="" /></span>
							{/* <iframe src="https://imageslidergenerator.shahmirfaisal.com/slider?image=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4245826%2Fpexels-photo-4245826.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D600&image=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F844297%2Fpexels-photo-844297.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D600&image=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1114690%2Fpexels-photo-1114690.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D600&animationType=fade&autoPlay=true&radioButtonType=none&radioButtonSize=20&radioButtonGap=10&arrowsType=none&arrowsBackground=hidden&arrowsBackgroundVisibility=212&arrowsSize=50&arrowsOffset=1&arrowsColor=%23fff" style="border: none;"></iframe> */}
						</div>
					</section>

					<section id="first">
						<header>
							<h2>Presentación</h2>
						</header>
						<div className="content">
							<p>Bienvenidos a <strong>Dolce Bijou</strong>, un emprendimiento maravilloso hecho con amor por dos personas muy especiales, la fundadora Siani y su espectacular esposo 😍❤️❤️❤️. XD</p>
							<span className="image main"><img src={assets.team} alt="" /></span>
						</div>
					</section>

					<section>
						<header>
							<h2>Por qué te elegí mi amor</h2>
						</header>
						<div className="content">
							<p>Mi querida Siani<strong>, mi chamita bella</strong>, no solo eres una chica linda con acento hermoso que conocí en mi corta estadía en Argentina, sino también tienes cualidades que no he visto en ninguna mujer que he visto en mi vida:</p>
							<ul className="feature-icons">
								<li className="icon solid fa-laptop">Emprendedora</li>
								<li className="icon solid fa-bolt">Resilente</li>
								<li className="icon solid fa-signal">Quiere seguir adelante</li>
								<li className="icon solid fa-cog">Muy amorosa</li>
								<li className="icon solid fa-map-marker-alt">Autentica</li>
								<li className="icon solid fa-code">Ultimo pero no menos importante, muy loquita. 😍😍</li>
							</ul>
							
						</div>
					</section>

			
					<section>
						<header>
							 <h2>Un vistazo a lo que nos espera</h2>
						</header>
						<div className="content">
							<p>Muchas veces hemos hablado sobre las cosas que queremos hacer cuando porfin nos tengamos frente a frente y cuando convivamos, asi que te voy a dar una lista de mis objetivos que me gustaría que hagamos algún día como pareja ❤️</p>
                            
								<section>
									<header>
										<h3>Nuestros planes</h3>
										<ul>
												<li>Trabajar en PSA</li>
												<li>Ayudarte con tus ventas de biyuteria</li>
												<li>Tomarnos muchas fotos juntitos en Argentina</li>
												<li>Escuchar música, ver películas, hacer cosas que siempre hemos querido hacer con nuestra pareja perfecta pero nunca pudimos.</li>
												<li>Entrenar juntos y mejorar nuestra dieta para que seamos sanos, fuertes y deliciosos 💪🏻</li>
												<li>Viajar a Chile para estar con tu abuelo ❤️</li>
												<li>Enseñar a las personas lo bueno que sabemos y hacemos como pareja y empresararios</li>
												<li>Poder comprarnos nuestro propia casita o nuestros vehículos para transportarnos juntos a muchos lugares</li>
												<li>Viajar a otros países, Brasil, Venezuela, USA, etc</li>
												<li>Casarnos 😳😳❤️❤️</li>
										</ul>
									</header>
									<div className="content">
										<div className="gallery">
											<a href={assets.playa} className="landscape"><img src={assets.playa} alt="" /></a>
											<a href={assets.viaje}><img src={assets.viaje} alt="" /></a>
											<a href={assets.car}><img src={assets.car} alt="" /></a>
											<a href={assets.casar} className="landscape"><img src={assets.casar} alt="" /></a>
										</div>
									</div>
                            </section>
                            </div>
					</section>
					<section>
						<div className="content">
							<p>Bueno mi vida, espero que te haya gustado este detallito pequeño, aplicando lo poco que sé de diseño y poder darte una sonrisa bella como tu mi amor, te amo y quiero que
								esto que tenemos, sea para siempre mi corazón, créeme que sí, yo ya no quiero seguir buscando más, yo sé que contigo lo voy a tener todo y por eso que me muero de ganas de
								estar a tu lado, como mi compañera de vida, mi amiga, amante, novia, esposa y madre mis muchos hijos 😍😍😍😍❤️❤️❤️❤️ YO TE AMO SIANI,
							</p>
							Atte. el hombre que te ha amado por primera y ultima vez en tu vida, todo tuyo😘🥰
						</div>
					</section>
				<div className="copyright">&copy; Untitled. All rights reserved. Design: <a href="https://www.macrossoluciones.com/">MacrosSoluciones</a>.</div>

		</div>
  )
}

export default Amor