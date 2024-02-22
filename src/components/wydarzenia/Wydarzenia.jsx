import React from "react";
import './wydarzenia.css';
import Daniellions from "./images/Daniellions.jpg";
import babylon from "./images/babylon.jpg";
import youngman from "./images/youngman.jpg"; 


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

const Wydarzenia = () => {
	return (
		<>
			<div className="events">
				<div
					className="events-column"
					style={{ background: "#FAEBD7" }}
					onClick={() => openTab("a1")}>
					<h2>Daniel w jaskini lwów</h2>
					<img src={Daniellions} alt="Daniellions" />
				</div>

				<div
					className="events-column"
					style={{ background: "#D2B48C" }}
					onClick={() => openTab("a2")}>
					<h2>Zdobycie Babilonu</h2>
					<img src={babylon} alt="babylon" />
				</div>

				<div
					className="events-column"
					style={{ background: "#BC8F8F" }}
					onClick={() => openTab("a3")}>
					<h2>Trzej młodzieńcy w piecu</h2>
					<img src={youngman} alt="youngman" />
				</div>
			</div>

			<div
				id="a1"
				className="containerTab"
				style={{ display: "none", background: "#FAEBD7" }}>
				<span className="closebtn" onClick={() => closeTab("a1")}>
					x
				</span>
				<p>
					Powołanie Daniela na ministra przez króla Dariusza wzbudziło zawiść
					najwyższych dostojników królestwa, tak więc usilnie poszukiwali oni
					jakiegoś pretekstu do skargi przeciwko niemu. Jednak ich wysiłki były
					daremne, “gdyż był godny zaufania i nie stwierdzono u niego żadnego
					zaniedbania ani winy”. (Daniela 6,5){" "}
					<p>
						Tak więc ministrowie i satrapowie wspólnie uknuli plan, dzięki
						któremu mieli nadzieję doprowadzić do śmierci proroka. Postanowili
						wymóc na władcy podpisanie zarządzenia, które sami przygotowali,
						zakazującego wszystkim mieszkańcom królestwa przez trzydzieści dni
						modlić się do kogokolwiek — Boga czy człowieka — poza królem
						Dariuszem. Nieposłuszeństwo temu nakazowi miało być ukarane
						wrzuceniem winowajcy do lwiej jamy.
					</p>
					<p>
						Daniel natychmiast rozpoznał ich złośliwe zamiary przyświecające
						wydaniu zarządzenia, ale mimo to w najmniejszym stopniu nie zmienił
						swojego postępowania. Dlaczego miałby przestać modlić się teraz, gdy
						najbardziej tego potrzebował? Wolałby raczej stracić życie niż
						porzucić nadzieję Bożej pomocy. Spokojnie wykonywał swoje obowiązki
						jako przełożony satrapów, a w godzinie modlitwy udawał się do
						swojego mieszkania i otwierając okna w kierunku Jerozolimy, zgodnie
						ze swoim zwyczajem zanosił modlitwy do Pana niebios. Nie próbował
						się ukrywać. Choć wiedział, że przyjdzie mu zapłacić za wierność
						wobec Boga, to jednak nie wahał się.{" "}
					</p>
					<p>
						Ministrowie donieśli królowi o modlitwach Daniela. “Wtedy król
						rozkazał, aby przyprowadzono Daniela i wrzucono go do lwiej jamy; a
						król odezwał się i rzekł do Daniela:— Twój Bóg, któremu nieustannie
						służysz, niech cię wyratuje!”(Daniela 6,17). Otwór jamy zakryto
						kamienną płytą.
					</p>
					<p>
						Wczesnym rankiem król Dariusz pospieszył do otworu jamy i zawołał
						smutnym głosem:
						<b>
							— “Danielu, sługo Boga żywego! Czy twój Bóg, któremu nieustannie
							służysz, mógł cię wybawić od lwów?”{" "}
						</b>
						(Daniela 6,21). Z głębi jamy dobiegł głos proroka:
						<b>
							— “Królu, żyj na wieki! Mój Bóg posłał swojego anioła, by zamknął
							paszcze lwów, tak że mi nie zaszkodziły, gdyż przed nim jestem
							niewinny, nadto względem ciebie, królu, nic złego nie popełniłem”.
						</b>
						(Daniela 6,22-23).
					</p>
					<p>
						“Wtedy król bardzo się z tego ucieszył i rozkazał wyciągnąć Daniela
						z jamy; a gdy wyciągnięto Daniela z jamy, nie znaleziono na nim
						żadnego uszkodzenia, gdyż wierzył w swojego Boga. Rozkazał też król,
						aby przyprowadzono owych mężów, którzy oczernili Daniela, i wrzucono
						ich do lwiej jamy, ich samych, ich dzieci i żony, a zanim dosięgnęli
						dna jamy, lwy rzuciły się na nich i pogruchotały wszystkie ich
						kości”. (Daniela 6,24-25)
					</p>
					<p>
						Nikczemna opozycja wobec sługi Pańskiego została zupełnie rozbita.
						“A Danielowi dobrze się powodziło za panowania Dariusza i za
						panowania Cyrusa, Persa”. (Daniela 6,29). Dzięki jego obecności
						pogańscy władcy byli skłonni przyznać, że jego Pan jest “Bogiem
						żywym i trwa na wieki, a jego królestwo jest niezniszczalne i władza
						jego jest nieskończona” (Daniela 6,27).
					</p>
				</p>
			</div>

			<div
				id="a2"
				className="containerTab"
				style={{ display: "none", background: "#D2B48C" }}>
				<span className="closebtn" onClick={() => closeTab("a2")}>
					x
				</span>
				<p>
					Belsazar, dzielący od wieku młodzieńczego królewską władzę z ojcem,
					Nebukadnezarem, chełpił się swoją potęgą i zwracał swoje serce
					przeciwko Bogu nieba. Nie trzeba było długo czekać na skutki takiej
					postawy. Babilon został otoczony przez wojska Cyrusa, siostrzeńca
					Dariusza Medyjczyka i wodza połączonych armii Medów i Persów. Jednak w
					pozornie niemożliwej do zdobycia warowni, z jej ogromnymi murami
					obronnymi i bramami z brązu, chronionej przez Eufrat i obficie
					zaopatrzonej, zepsuty monarcha czuł się bezpiecznie, spędzając czas na
					ucztach i hulankach.
				</p>
				<p>
					W swojej pysze, arogancji i fałszywym poczuciu bezpieczeństwa Belsazar
					“urządził wielką ucztę dla tysiąca swoich dostojników i przed tym
					tysiącem pił wino”. (Daniela 5,1) W pewnym momencie uczty “kazał
					przynieść złote i srebrne naczynia, które Nebukadnesar zabrał ze
					świątyni w Jeruzalemie, aby król i jego dostojnicy, jego żony i jego
					nałożnice mogły z nich pić”. (Daniela 5,2). Monarcha chciał w ten
					sposób pokazać, że nic nie jest tak święte, by nie mógł po to
					wyciągnąć ręki. “I przyniesiono złote i srebrne naczynia,a król i jego
					dostojnicy, jego żony i jego nałożnice pili z nich. Pili wino i
					wysławiali bogów ze złota, srebra, miedzi, żelaza, drzewa i kamienia”.
					(Daniela 5,3-4) Belsazar miał niewielkie pojęcie o tym, że niebiański
					Strażnik obserwuje jego bałwochwalczą ucztę. Boski Obserwator,
					niezauważony, przyglądał się scenie profanacji, słyszał świętokradcze
					szyderstwa i widział przejawy bałwochwalstwa.
				</p>
				<p>
					Gdy uczta osiągnęła kulminacyjny punkt, nagle ukazała się tajemnicza
					dłoń pisząca ognistymi literami na ścianie królewskiej komnaty. Były
					to słowa niezrozumiałe dla tłumu, ale niosące zapowiedź nieszczęścia
					królowi, którego sumienie nagle się przebudziło, oraz jego gościom.
					Ucichły dzikie okrzyki, a przerażeni uczestnicy uczty patrzyli na dłoń
					wolno kreślącą tajemnicze znaki. Na próżno król usiłował odczytać
					ogniste litery. Była to dla niego tajemnica nie do przejrzenia — jej
					zrozumienie nie leżało w jego mocy. Zrozpaczony zwrócił się o pomoc do
					swoich doradców.
				</p>
				<p>
					— “Ktokolwiek przeczyta to pismo i poda mi jego wykład, ten będzie
					ubrany w purpurę, otrzyma złoty łańcuch na szyję i będzie rządził jako
					trzeci w moim królestwie”. (Daniela 5,7) Wtedy królowa matka
					przypomniała Belsazarowi o Danielu, który ponad pół wieku wcześniej
					przedstawił i wyłożył królowi Nebukadnesarowi sen o wielkim posągu.
					Zatem przyprowadzono Daniela przed króla.
				</p>
				<p>
					Prorok oświadczył: — “Belsazarze, nie uniżyłeś swojego serca, chociaż
					to wszystko wiedziałeś. Lecz przeciwko Panu nieba się podniosłeś i
					przyniesiono przed ciebie naczynia z jego świątyni; a ty i twoi
					dostojnicy, twoje żony i twoje nałożnice piliście z nich wino i
					wysławiałeś bogów ze srebra i złota, miedzi i żelaza, drzewa i
					kamienia, które nie widzą ani nie słyszą i nic nie wiedzą, a Boga, w
					którego ręku jest twoje tchnienie i od którego zależą wszystkie twoje
					drogi, nie uczciłeś. Dlatego przez niego została zesłana ta ręka i
					został wypisany ten napis”. (Daniela 5,22-24)
				</p>
				<p>
					Następnie, odwracając się ku niebiańskiemu przesłaniu wypisanemu na
					ścianie, prorok przeczytał:<b> — “Mene, mene, tekel, uparsin”. (Daniela
					5,25) — “A taki jest wykład tego słowa: Mene: Bóg policzył dni twojego
					panowania i doprowadził je do końca. Tekel — jesteś zważony na wadze i
					znaleziony lekkim. Peres — twoje królestwo będzie podzielone i oddane
					Medom i Persom”. </b>(Daniela 5,26-28) Gdy prorok skończył mówić, król
					nakazał dać mu obiecaną nagrodę, a zatem “obleczono Daniela w purpurę
					i włożono złoty łańcuch na jego szyję i głoszono o nim publicznie, że
					ma rządzić jako trzeci w królestwie”. (Daniela 5,29)
				</p>
				<p>
					Będąc jeszcze w sali, w której odbywała się uczta, otoczony przez
					tych, których zagłada została przypieczętowana, król został
					powiadomiony przez posłańca, że jego miasto zostało zdobyte przez
					wroga, którego nie obawiał się (patrz Jeremiasza 51,31), “że brody są
					obsadzone, a wojownicy zdjęci strachem”. (Jeremiasza 51,32). Właśnie
					wtedy, gdy monarcha i jego dostojnicy pili ze świętych naczyń Jahwe i
					wysławiali swoich bogów ze srebra i złota, Medowie i Persowie
					skierowali Eufrat w wykopany w tym celu kanał i pustym korytem rzeki
					pod murem obronnym dostali się do niestrzeżonego miasta. Wojsko Cyrusa
					podeszło pod mury pałacu i w całym mieście pełno było żołnierzy
					nieprzyjaciela “jak szarańczy” (Jeremiasza 51,14), a ich triumfalne
					okrzyki wznosiły się pośród krzyku rozpaczy zdumionych uczestników
					hulanki. “Tej samej nocy został zabity Belsazar, król chaldejski”
					(Daniela 5,30), a na tronie babilońskim zasiadł obcy monarcha.
				</p>
			</div>

			<div
				id="a3"
				className="containerTab"
				style={{ display: "none", background: "#BC8F8F" }}>
				<span className="closebtn" onClick={() => closeTab("a3")}>
					x
				</span>
				<p>
					Nebukadnesar nie szczędził najcenniejszego kruszcu ze swojego
					zasobnego skarbca, aby sporządzić olbrzymi posąg cały ze złota, w
					ogólnym zarysie podobny do tego, który widział we śnie, z wyjątkiem
					materiału, z jakiego był wykonany. Przyzwyczajeni do ogromnych figur
					swoich pogańskich bóstw Chaldejczycy nigdy wcześniej nie wykonali
					czegoś tak imponującego i majestatycznego jak ten wspaniały posąg,
					mierzący trzydzieści metrów wysokości i trzy metry szerokości.
				</p>
				<p>
					Nadszedł wyznaczony dzień i na równinie Dura zgromadził się ogromny
					tłum ze wszystkich narodów, plemion i języków. (Daniela 3,4). Zgodnie
					z królewskim rozkazem, po usłyszeniu dźwięków instrumentów muzycznych
					całe zgromadzenie miało paść i oddać “pokłon złotemu posągowi”.
					(Daniela 3,5)
				</p>
				<p>
					Jednak nie wszyscy ugięli kolana przed pogańskim symbolem ludzkiej
					władzy. Pośród zgromadzonego tłumu znajdowało się trzech ludzi, którzy
					zdecydowali, że nie znieważą Władcy niebios. Ich Bóg był Królem królów
					i Panem panów, a oni nie kłaniali się żadnemu innemu. Nebukadnesarowi
					radującemu się swym dokonaniem doniesiono, że wśród jego poddanych
					znaleźli się ludzie, którzy ośmielili się sprzeciwić jego nakazowi.
				</p>
				<p>
					Władca kazał przyprowadzić oskarżonych, a gdy stanęli przed nim,
					zapytał ich: — “Czy to prawda, Szadrachu, Meszachu i Abed-Nego, że nie
					czcicie mojego boga i nie oddajecie pokłonu złotemu posągowi, który
					wzniosłem?” (Daniela 3,14). — “Jeżeli nie oddacie pokłonu, będziecie
					natychmiast wrzuceni do wnętrza rozpalonego pieca ognistego”. (Daniela
					3,15) I podnosząc rękę w górę, rzucił wyzwanie:— “A który bóg wyrwie
					was z mojej ręki?” (Daniela 3,15). Groźba króla okazała się daremna.
					Nie był on w stanie odwieść trzech Hebrajczyków od wierności wobec
					Władcy wszechświata.
				</p>
				<p>
					<b>
						Spokojnie patrząc na ognisty piec, odpowiedzieli:— “My nie mamy
						potrzeby odpowiadać ci na to. Jeżeli nasz Bóg, któremu służymy, może
						nas wyratować, wyratuje nas z rozpalonego pieca ognistego i z twojej
						ręki, o królu”. (Daniela 3,16-17) — “A jeżeli nie, niech ci będzie
						wiadome, o królu, że twojego boga nie czcimy i złotemu posągowi,
						który wzniosłeś, pokłonu nie oddamy”. (Daniela 3,18){" "}
					</b>
				</p>
				<p>
					Gniew króla nie miał granic. “Nebukadnesar bardzo się rozgniewał na
					Szadracha, Meszacha i Abed-Nega” (Daniela 3,19), przedstawicieli
					pogardzanego ludu jeńców. Rozkazał rozpalić piec siedmiokrotnie
					bardziej niż zazwyczaj, a następnie gwardziści królewscy związali
					czcicieli Boga Izraela i przygotowali ich do egzekucji.
				</p>
				<p>
					Jednak Pan nie zapomniał o tych, którzy do Niego należeli. Gdy Jego
					świadkowie zostali wrzuceni do wnętrza rozpalonego pieca, objawił się
					im sam Zbawiciel, a oni przechadzali się wraz z Nim pośród płomieni. W
					obecności Pana żywiołów płomienie utraciły swoją niszczącą moc.
					Zaniepokojony Nebukadnesar zwrócił się do dworzan z pytaniem: —
					“Izaliśmy nie trzech mężów związanych wrzucili w pośród ognia? (...)
					Oto Ja widzę czterech mężów rozwiązanych przechodzących się w pośrodku
					ognia, a niemasz żadnego naruszenia przy nich,{" "}
					<b> a osoba czwartego podobna jest Synowi Bożemu”. </b>(Daniela
					3,24-25)
				</p>
				<p>
					Skąd pogański król wiedział, jak wygląda Syn Boży? Otóż hebrajscy
					jeńcy, pełniący w Babilonii odpowiedzialne funkcje, swoim życiem i
					charakterem zwrócili uwagę władcy na prawdę Bożą. Poproszeni o
					uzasadnienie swej wiary, podali je bez wahania. Wyraźnie i w prosty
					sposób przedstawili zasady sprawiedliwości, ucząc tych, wśród których
					się znaleźli, o Panu, którego czcili. Opowiadali o Mesjaszu, mającym
					przyjść Odkupicielu. Dlatego właśnie w czwartej postaci,
					przechadzającej się wśród płomieni, król rozpoznał Syna Bożego.
				</p>
				<p>
					Zapominając o swojej wielkości i godności, Nebukadnesar opuścił tron,
					podbiegł do otworu pieca i zawołał: — “Słudzy Boga Najwyższego:
					Wyjdźcie i przyjdźcie tutaj!”. (Daniela 3,26) Szadrach, Meszach i
					Abed-Nego wyszli z pieca, a ogromny tłum zobaczył, że nie odnieśli
					żadnej szkody. Obecność Zbawiciela ustrzegła ich od śmierci, tak iż
					tylko ich więzy uległy spaleniu. “I zgromadzili się satrapowie,
					namiestnicy, zwierzchnicy i doradcy króla, i widzieli, że ogień nie
					ogarnął ciał tych mężów i włos ich głowy nie był spalony, a ich
					odzienia nie były zniszczone ani też swąd ognia ich nie przeniknął”.
					(Daniela 3,27)
				</p>
			</div>
		</>
	);
};

export default Wydarzenia;
