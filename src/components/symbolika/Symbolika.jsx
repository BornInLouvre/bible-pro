import React from "react";
import './symbolika.css';
import chleb from "./images/chleb.jpg";
import zbroja from "./images/zbroja.jpg";
import tecza from "./images/tecza.jpg";

function openTab(tabName) {
	let i, cards;
	cards = document.getElementsByClassName("containerTab");
	for (i = 0; i < cards.length; i++) {
		cards[i].style.display = "none";
		
	}
	document.getElementById(tabName).style.display = "block";
	} 

function closeTab(tabName) {
	document.getElementById(tabName).style.display = "none";
}

const Symbolika = () => {
	return (
		<>
			<div className="symbolika">
				<div
					className="symbolika-column"
					style={{ background: "#FAEBD7" }}
					onClick={() => openTab("c1")}>
					<h2>Zbroja</h2>
					<img src={zbroja} alt="zbroja" />
				</div>

				<div
					className="symbolika-column"
					style={{ background: "#D2B48C" }}
					onClick={() => openTab("c2")}>
					<h2>Chleb</h2>
					<img src={chleb} alt="chleb" />
				</div>

				<div
					className="symbolika-column"
					style={{ background: "#BC8F8F" }}
					onClick={() => openTab("c3")}>
					<h2>Tęcza</h2>
					<img src={tecza} alt="tecza" />
				</div>
			</div>

			<div
				id="c1"
				className="containerTab"
				style={{ display: "none", background: "#FAEBD7" }}>
				<span className="closebtn" onClick={() => closeTab("b1")}>
					x
				</span>
				<p>
					Abyśmy „mogli się ostać wobec podstępnych zakusów diabła”. Ef 6,11 , Biblia radzi: „...weźcie na siebie pełną zbroję Bożą”. Ef 6,13 i módlcie się, aby Bóg wyposażył was „...we wszystko dobre, abyście spełnili wolę jego, sprawując w nas to, co miłe jest w oczach jego, przez Jezusa Chrystusa...”. Hbr 13,21
				</p>
				<p>
					Z jakich elementów składa się Boża zbroja? Biblia mówi: „Stańcie więc do walki przepasawszy biodra wasze prawdą i oblókłszy pancerz, którym jest sprawiedliwość, a obuwszy nogi w gotowość głoszenia dobrej nowiny o pokoju. W każdym położeniu bierzcie wiarę jako tarczę, dzięki której zdołacie zgasić wszystkie rozżarzone pociski Złego. Weźcie też hełm zbawienia i miecz Ducha, to jest słowo Boże”. Ef 6,14-17
				</p>
				<p>
					Walka, do której musimy przywdziać kompletną zbroję, jest bojem duchowym. Biblia mówi: „Nie toczymy bowiem walki przeciw krwi i ciału, lecz przeciw Zwierzchnościom, przeciw Władzom, przeciw rządcom świata tych ciemności, przeciw pierwiastkom duchowym zła na wyżynach niebieskich”. Ef 6,12. Ponieważ konflikt ten stanowi o naszym „być albo nie być” w wieczności, nie można go lekceważyć i nie można umniejszać przebiegłości szatana.
				</p>
				<p>
					Jednak bez względu na strategie, jakie stosuje szatan, Biblia mówi, żeby przepasać „...biodra wasze prawdą...”. Ef 6,14. A ponieważ „Prawda jest w Jezusie”. Ef 4,21, to „Jak prawda Chrystusowa jest we mnie, tak tej chluby nikt mi nie odbierze...”. 2 Kor 11,10. „...żadne kłamstwo nie wywodzi się z prawdy”. 1 J 2,21, dlatego trwając w prawdzie, jesteśmy bezpieczni w Chrystusie i skutecznie odpieramy ataki szatana, który „...jest kłamcą i ojcem kłamstwa”. J 8,44
				</p>
			</div>

			<div
				id="c2"
				className="containerTab"
				style={{ display: "none", background: "#D2B48C" }}>
				<span className="closebtn" onClick={() => closeTab("b2")}>
					x
				</span>
				<p>Imię...</p>
			</div>

			<div
				id="c3"
				className="containerTab"
				style={{ display: "none", background: "#BC8F8F" }}>
				<span className="closebtn" onClick={() => closeTab("b3")}>
					x
				</span>
				<p>Prze...</p>
			</div>
		</>
	);
};

export default Symbolika;
