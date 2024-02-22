import React from "react";
import './postacie.css';
import Abraham from './images/Abraham.jpg';
import Daniel from './images/Daniel.jpg';
import Peter from './images/Peter.jpg';


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

const Postacie = () => {
	return (
		<>
			<div className="people">
				<div
				    
					className="people-column"
					style={{ background: "#FAEBD7" }}
					onClick={() => openTab("b1")}>
					<h2>Abraham</h2>
					<img src={Abraham} alt="Abraham"/>
				</div>

				<div
				    
					className="people-column"
					style={{ background: "#D2B48C" }}
					onClick={() => openTab("b2")}>
					<h2>Daniel</h2>
					<img src={Daniel} alt="Daniel"/>
				</div>

				<div
				    
					className="people-column"
					style={{ background: "#BC8F8F" }}
					onClick={() => openTab("b3")}>
					<h2>Piotr</h2>
					<img src={Peter} alt="Piotr"/>
				</div>
			</div>

			<div
				id="b1"
				className="containerTab"
				style={{ display: "none", background: "#FAEBD7" }}>
				<span className="closebtn" onClick={() => closeTab("b1")}>
					x
				</span>
				<p>
					Bóg objawiał się Abrahamowi już w czasie jego młodości, udzielał mu objaśnień i strzegł przed bałwochwalstwem. Chciał uczynić Abrahama wzorem dla przyszłych pokoleń — wzorem wiary i prawdziwego poświęcenia. Jako potężny książę, pełen prawości, uprzejmości i gościnności, wzbudzał Abraham u swego ludu szacunek. Cześć i miłość do Boga oraz bezwzględne posłuszeństwo Jego woli zdobywały mu szacunek sług i sąsiadów.<p> Pobożne i przykładne życie oraz mądre rady, jakich udzielał wszystkim domownikom, sprawiły, że otoczenie bało się Boga Abrahama, miłowało Go i czciło. Swojej religii nie traktował jak drogocenny skarb, który należy zazdrośnie strzec i przeznaczyć do swego wyłącznego użytku. Prawdziwa religia nie może być w ten sposób zatrzymywana, gdyż taki duch jest przeciwny zasadom ewangelii. Gdy Chrystus mieszka w sercu, nie można stłumić ani zasłonić światła Jego obecności. Przeciwnie, będzie ono świecić z dnia na dzień coraz jaśniej, aż mgły egoizmu i grzechu, które spowijają duszę, rozpłyną się w jasnych promieniach Słońca Sprawiedliwości.</p>
				</p>
			</div>

			<div
				id="b2"
				className="containerTab"
				style={{ display: "none", background: "#D2B48C" }}>
				<span className="closebtn" onClick={() => closeTab("b2")}>
					x
				</span>
				<p>
					Imię Daniel pochodzi z języka hebrajskiego i znaczy „Bóg jest moim
					sędzią”. W 605 roku przed Chrystusem, tj. trzecim roku panowania króla
					Jojakima, został w młodym wieku wywieziony do Babilonii. Tam za rządów
					Nabuchodonozara i Baltazara Daniel piastował wybitne urzędy dworskie.
					Bóg nagrodził go darem mądrości i rozeznania, co też uzdalniało go do
					objęcia wysokich stanowisk państwowych. Do tych stanowisk doszedł
					dzięki wyróżnianiu się zdolnością interpretowania snów. Pozostał
					wierny religii żydowskiej, co sprawiało, że miał wielu nieprzyjaciół i
					narażał się nawet na śmierć.
				</p>
			</div>

			<div
				id="b3"
				className="containerTab"
				style={{ display: "none", background: "#BC8F8F" }}>
				<span className="closebtn" onClick={() => closeTab("b3")}>
					x
				</span>
				<p>
					Przed powołaniem na apostoła, Piotr pracował jako rybak. Był szybki i gorliwy w działaniu, nieustraszony i nieustępliwy. Chrystus widział w nim przymioty, które miały wielką wartość dla Kościoła. Z tego więc powodu powołał Piotra, żeby wszystko, co w nim dobre i wartościowe, było zachowane. Chrystus chciał swoimi naukami i swoim przykładem zmiękczyć wszystko, co w charakterze Piotra było twarde, złagodzić to, co było ostre. Jeżeli łaska Boża rzeczywiście przeobraziła serce, to musi to być potwierdzone prawdziwą łagodnością, uprzejmością i współczuciem. Piotr zaparł się swego Pana, ale potem żałował tego i głęboko się ukorzył, wyznając ze skruchą swój ciężki grzech. I Chrystus przebaczył swemu zbłąkanemu uczniowi, kiedy po
					zmartwychwstaniu wymienił go z imienia.
				</p>
			</div>
		</>
	);
		
	
};

export default Postacie;


