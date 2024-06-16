const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);

// const element = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'Hola  👋';
//     }

//     // return element(
//     //   'button',
//     //   { onClick: () => this.setState({ liked: true }) },
//     //   'Click me ',
//     // );

//     return (
//       <button onClick={() => this.setState({ liked: true })}>
//         Click me
//       </button>
//     );
//   }
// }

const { useState } = React;
const LikeButton = () => {
	const [liked, setLiked] = useState(false);

	return liked ? (
		"Hola 👋"
	) : (
		<button onClick={() => setLiked(true)}>Click me </button>
	);
};

root.render(<LikeButton />);
