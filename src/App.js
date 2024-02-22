
import './App.css';
import Navigation from './components/navigation';

function App() {

return (
	<div>
		<header>
			<h1>The Bible Project</h1>
		</header>
		<nav>
			<ul>
				<li>
					<a href="/Home">Home</a>
				</li>
				<li>
					<a href="/postacie">Postacie</a>
					
				</li>
				<li>
					<a href="/Wydarzenia">Wydarzenia</a>
				</li>
				<li>
					<a href="/Symbolika">Symbolika</a>
				</li>
			</ul>
		</nav>
		 <div className="column middle"><Navigation/> </div>
	</div>
);
}

export default App;

